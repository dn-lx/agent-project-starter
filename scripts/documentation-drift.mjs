import { execFileSync } from 'node:child_process'
import { writeFile } from 'node:fs/promises'

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim()
}

let files = []
try {
  const output = git(['log', '--since=24 hours ago', '--name-only', '--pretty=format:'])
  files = [...new Set(output.split(/\r?\n/).map((x) => x.trim()).filter(Boolean))]
} catch {
  files = []
}

const docPrefixes = ['docs/', '.agents/', '.github/copilot-instructions.md', 'AGENTS.md', 'CLAUDE.md', 'GEMINI.md', 'README.md']
const infrastructurePrefixes = ['.github/', 'scripts/']
const isDoc = (path) => docPrefixes.some((prefix) => path === prefix || path.startsWith(prefix))
const isInfraOnly = (path) => infrastructurePrefixes.some((prefix) => path.startsWith(prefix))

const changedDocs = files.filter(isDoc)
const changedNonDocs = files.filter((path) => !isDoc(path) && !isInfraOnly(path))

let status = 'No meaningful application/source changes detected in the last 24 hours.'
if (changedNonDocs.length && !changedDocs.length) {
  status = '⚠️ Source/application changes occurred without a documentation/skill update. Review whether maintained docs are now stale.'
} else if (changedNonDocs.length && changedDocs.length) {
  status = '✅ Source/application and documentation/agent context both changed. Review for semantic accuracy.'
}

const report = [
  '# Documentation Drift Report',
  '',
  status,
  '',
  '## Non-documentation changes',
  changedNonDocs.length ? changedNonDocs.map((x) => `- \`${x}\``).join('\n') : '- None',
  '',
  '## Documentation / agent-context changes',
  changedDocs.length ? changedDocs.map((x) => `- \`${x}\``).join('\n') : '- None',
  '',
  '> This is a deterministic drift signal, not proof that documentation is correct or incorrect.',
  '',
].join('\n')

await writeFile('documentation-drift-report.md', report)
console.log(report)
