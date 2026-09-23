import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

export const curatedHosts = [
  { name: 'Claude Code', command: 'claude' },
  { name: 'Codex CLI', command: 'codex' },
  { name: 'Gemini CLI', command: 'gemini' },
  { name: 'OpenCode', command: 'opencode' },
]

export function probe(command) {
  const result = spawnSync(command, ['--version'], {
    encoding: 'utf8',
    shell: process.platform === 'win32',
    timeout: 5000,
  })

  const output = [result.stdout, result.stderr]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()

  return {
    installed: result.status === 0,
    version: result.status === 0 ? (output || 'version reported successfully') : null,
    error: result.status === 0 ? null : (result.error?.message || output || 'not found'),
  }
}

export function inspectHosts() {
  return curatedHosts.map(host => ({ ...host, ...probe(host.command) }))
}

export function printReport(results) {
  console.log('Curated CLI agent stack')
  for (const result of results) {
    const mark = result.installed ? 'OK' : 'MISSING'
    console.log(`- [${mark}] ${result.name} (${result.command})${result.version ? `: ${result.version}` : ''}`)
  }

  console.log('')
  console.log('Claude plugin activation is checked inside Claude Code; see docs/CLI-AGENT-STACK.md.')
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]
if (isMain) {
  const results = inspectHosts()
  printReport(results)

  if (process.argv.includes('--strict') && results.some(result => !result.installed)) {
    process.exitCode = 1
  }
}
