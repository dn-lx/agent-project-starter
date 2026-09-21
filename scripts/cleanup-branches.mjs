import { pathToFileURL } from 'node:url'
import { execFileSync } from 'node:child_process'

export function eligible(branch, prs, repository, defaultBranch) {
  if (['main', 'develop', defaultBranch].includes(branch.name) || branch.protected) return false
  const sameBranch = prs.filter(p => p.head?.repo?.full_name === repository && p.head.ref === branch.name)
  if (sameBranch.some(p => p.state === 'open')) return false
  return sameBranch.some(p => p.merged_at && ['develop', 'main'].includes(p.base.ref)
    && p.base.repo.full_name === repository && p.head.sha === branch.commit.sha)
}

export async function cleanup(api, repository, apply = false, log = console.log, deleteRef) {
  const meta = await api('')
  const list = async (path) => {
    const all = []
    for (let page = 1; ; page++) {
      const rows = await api(`${path}${path.includes('?') ? '&' : '?'}per_page=100&page=${page}`)
      all.push(...rows)
      if (rows.length < 100) return all
    }
  }
  const branches = await list('/branches')
  for (const branch of branches) {
    if (['main', 'develop', meta.default_branch].includes(branch.name) || branch.protected) continue
    const path = `/pulls?state=all&head=${encodeURIComponent(repository.split('/')[0] + ':' + branch.name)}`
    const prs = await list(path)
    if (!eligible(branch, prs, repository, meta.default_branch)) {
      log(`Keep ${branch.name}: active, unmerged, or changed after merge`)
      continue
    }
    if (!apply) { log(`Would delete ${branch.name}`); continue }
    // Re-read immediately before deletion; never deliberately delete a moved/reused branch.
    const current = await api(`/branches/${encodeURIComponent(branch.name)}`)
    const latestPRs = await list(path)
    if (current.commit.sha !== branch.commit.sha || !eligible(current, latestPRs, repository, meta.default_branch)) {
      log(`Keep ${branch.name}: state changed`)
      continue
    }
    if (!deleteRef) throw new Error('Atomic delete implementation required')
    await deleteRef(branch.name, branch.commit.sha)
    log(`Deleted ${branch.name}`)
  }
}

export function deleteWithLease(repository, branch, sha, token, run = execFileSync) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository) || !/^[a-f0-9]{40}$/.test(sha)) throw new Error('Invalid deletion target')
  run('git', ['check-ref-format', `refs/heads/${branch}`], { stdio: 'pipe' })
  const authorization = Buffer.from(`x-access-token:${token}`).toString('base64')
  try {
    run('git', ['push', `--force-with-lease=refs/heads/${branch}:${sha}`,
      `https://github.com/${repository}.git`, `:refs/heads/${branch}`], {
      stdio: 'pipe',
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_CONFIG_COUNT: '1',
        GIT_CONFIG_KEY_0: 'http.https://github.com/.extraheader',
        GIT_CONFIG_VALUE_0: `AUTHORIZATION: basic ${authorization}` }
    })
  } catch {
    throw new Error(`Could not delete ${branch}: head moved, ruleset blocked deletion, or Git permission/network failure; no forced retry`)
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const repository = process.env.GITHUB_REPOSITORY
  const token = process.env.GITHUB_TOKEN
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository || '') || !token) throw new Error('GITHUB_REPOSITORY and GITHUB_TOKEN required')
  const api = async (path, method = 'GET') => {
    const response = await fetch(`https://api.github.com/repos/${repository}${path}`, {
      method, headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }
    })
    if (!response.ok) throw new Error(`GitHub ${method} failed: ${response.status}; check permissions/rulesets`)
    return response.status === 204 ? null : response.json()
  }
  await cleanup(api, repository, process.argv.includes('--apply'), console.log,
    (branch, sha) => deleteWithLease(repository, branch, sha, token))
}
