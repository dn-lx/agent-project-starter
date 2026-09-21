import test from 'node:test'
import assert from 'node:assert/strict'
import { eligible, cleanup, deleteWithLease } from '../scripts/cleanup-branches.mjs'
import { validate, compare, parseVersion } from '../scripts/validate-version.mjs'

const repository = 'owner/project'
const branch = { name: 'fix/example', protected: false, commit: { sha: 'abc' } }
const pr = { state: 'closed', merged_at: '2026-09-21', head: { ref: branch.name, sha: 'abc', repo: { full_name: repository } }, base: { ref: 'develop', repo: { full_name: repository } } }
test('merged same-repository exact head is eligible, including squash merges', () => {
  assert.equal(eligible(branch, [pr], repository, 'main'), true)
})
test('permanent, protected, open, unmerged, foreign and reused branches survive', () => {
  for (const name of ['main', 'develop', 'custom-default']) assert.equal(eligible({ ...branch, name }, [pr], repository, 'custom-default'), false)
  assert.equal(eligible({ ...branch, protected: true }, [pr], repository, 'main'), false)
  assert.equal(eligible(branch, [pr, { ...pr, state: 'open' }], repository, 'main'), false)
  assert.equal(eligible(branch, [{ ...pr, merged_at: null }], repository, 'main'), false)
  assert.equal(eligible(branch, [{ ...pr, head: { ...pr.head, repo: { full_name: 'fork/project' } } }], repository, 'main'), false)
  assert.equal(eligible({ ...branch, commit: { sha: 'new' } }, [pr], repository, 'main'), false)
  assert.equal(eligible(branch, [], repository, 'main'), false)
})
test('dry-run never deletes; apply rechecks head and open PRs', async () => {
  for (const mode of ['dry', 'apply', 'moved', 'reopened']) {
    const deletes = []
    let reads = 0
    const api = async (path, method) => {
      if (method === 'DELETE') { deletes.push(path); return null }
      if (!path) return { default_branch: 'main' }
      if (path.startsWith('/branches?')) return [branch]
      if (path.startsWith('/pulls?')) { reads++; return mode === 'reopened' && reads > 1 ? [{ ...pr, state: 'open' }] : [pr] }
      if (path.startsWith('/branches/')) return mode === 'moved' ? { ...branch, commit: { sha: 'new' } } : branch
      throw Error(path)
    }
    await cleanup(api, repository, mode !== 'dry', () => {}, (name, sha) => { deletes.push(name); assert.equal(sha, 'abc') })
    assert.equal(deletes.length, mode === 'apply' ? 1 : 0)
  }
})
test('cleanup paginates branches and pull requests', async () => {
  const calls = []
  const api = async path => {
    calls.push(path)
    if (!path) return { default_branch: 'main' }
    if (path === '/branches?per_page=100&page=1') return Array.from({ length: 100 }, () => ({ ...branch, name: 'main' }))
    if (path.startsWith('/branches?')) return [branch]
    if (path.endsWith('page=1')) return Array.from({ length: 100 }, () => ({ ...pr, merged_at: null }))
    return [pr]
  }
  const logs = []
  await cleanup(api, repository, false, s => logs.push(s))
  assert.ok(calls.some(p => p.startsWith('/pulls?') && p.endsWith('page=2')))
  assert.deepEqual(logs, ['Would delete fix/example'])
})
test('version syntax and ordering', () => {
  for (const v of ['1.0', 'v1.0.0', '01.0.0', '1.0.0-rc.1', '-1.0.0']) assert.throws(() => parseVersion(v))
  assert.equal(compare('1.10.0', '1.9.9'), 1)
  assert.equal(compare('1.0.0', '1.0.0'), 0)
})
test('release requires an increase and matching dated notes; first adoption works', () => {
  const notes = '## [Unreleased]\n\n## [0.1.0] - 2026-09-21\nInitial release'
  validate('0.1.0', notes, undefined, true)
  validate('0.1.0', notes, '0.1.0', false)
  assert.throws(() => validate('0.1.0', notes, '0.1.0', true))
  assert.throws(() => validate('0.1.0', notes, '0.2.0', false))
  assert.throws(() => validate('0.2.0', notes, '0.1.0', true))
  assert.throws(() => validate('0.1.0', '', undefined, false))
})

test('atomic deletion uses an explicit SHA lease and never retries rejection', () => {
  const calls = []
  const sha = 'a'.repeat(40)
  deleteWithLease(repository, branch.name, sha, 'test-token', (...args) => calls.push(args))
  assert.deepEqual(calls[1][1], ['push', `--force-with-lease=refs/heads/${branch.name}:${sha}`, `https://github.com/${repository}.git`, `:refs/heads/${branch.name}`])
  assert.equal(calls[1][1].some(arg => arg.includes('test-token')), false)
  let pushes = 0
  assert.throws(() => deleteWithLease(repository, branch.name, sha, 'test-token', (cmd, args) => {
    if (args[0] === 'push') { pushes++; throw Error('stale info') }
  }), /no forced retry/)
  assert.equal(pushes, 1)
})
