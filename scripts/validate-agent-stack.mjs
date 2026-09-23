import { readFile, access } from 'node:fs/promises'

const required = [
  'docs/CLAUDE-GEMINI-SETUP.md',
  'docs/CLI-AGENT-STACK.md',
  '.claude/settings.json',
  'REVIEW.md',
  'scripts/agent-cli-doctor.mjs',
  'tests/cli-stack.test.mjs',
  'scripts/sync-claude-skills.mjs',
  'scripts/context-budget.mjs',
  'VERSION',
  'CHANGELOG.md',
  'docs/VERSIONING.md',
  'docs/BRANCH-LIFECYCLE.md',
  '.github/workflows/branch-cleanup.yml',
  '.github/workflows/version-validation.yml',
  'AGENTS.md',
  'CLAUDE.md',
  'GEMINI.md',
  '.github/copilot-instructions.md',
  'docs/PROJECT-MEMORY.md',
  'docs/CURRENT-HANDOFF.md',
  'docs/MCP-SETUP.md',
  'docs/AGENT-PLATFORM-WORKFLOWS.md',
  'docs/AGENT-ORCHESTRATION.md',
  'docs/EXECUTION-ROUTING-POLICY.md',
  'docs/MODEL-ROUTING-POLICY.md',
  'docs/MEMORY-CONTEXT-POLICY.md',
  'docs/DOCUMENTATION_POLICY.md',
  'docs/FRONTEND-QUALITY-STANDARD.md',
  'docs/CODE-HEALTH-AND-CONTEXT.md',
  'docs/STACK-RESPONSIBILITY-MAP.md',
  'docs/templates/REVIEW-PACKET-TEMPLATE.md',
  'docs/templates/RELEASE-SUMMARY-TEMPLATE.md',
  'docs/templates/ROUTING-PROFILE-EXAMPLE.md',
  '.github/dependabot.yml',
  '.agents/skills/task-routing/SKILL.md',
  '.agents/skills/execution-routing/SKILL.md',
  '.agents/superpowers/README.md',
  '.agents/superpowers/resume-project/SUPERPOWER.md',
  '.agents/superpowers/finish-feature/SUPERPOWER.md',
  '.agents/superpowers/fix-until-green/SUPERPOWER.md',
  '.agents/superpowers/full-qa/SUPERPOWER.md',
  '.agents/superpowers/ship-release/SUPERPOWER.md',
  '.agents/superpowers/project-doctor/SUPERPOWER.md',
  '.agents/skills/mcp-usage/SKILL.md',
  '.agents/skills/context7/SKILL.md',
  '.agents/skills/graphify/SKILL.md',
  '.agents/skills/memory-context/SKILL.md',
  '.agents/skills/code-hygiene/SKILL.md',
  '.agents/skills/dependency-maintenance/SKILL.md',
  '.agents/skills/headroom-pilot/SKILL.md',
  '.agents/skills/frontend-design/SKILL.md',
  '.agents/skills/design-taste/SKILL.md',
  '.agents/skills/motion-design/SKILL.md',
  '.agents/skills/accessibility-visual-regression/SKILL.md',
  '.agents/skills/quality-gates/SKILL.md',
  '.agents/skills/security-boundary-review/SKILL.md',
  '.agents/skills/release-workflow/SKILL.md',
]

const missing = []
for (const path of required) {
  try { await access(path) } catch { missing.push(path) }
}

if (missing.length) {
  console.error('Missing required agent-stack files:')
  for (const path of missing) console.error(`- ${path}`)
  process.exit(1)
}

for (const adapter of ['CLAUDE.md', 'GEMINI.md', '.github/copilot-instructions.md']) {
  const content = await readFile(adapter, 'utf8')
  if (!content.includes('AGENTS.md')) {
    console.error(`${adapter} must point back to canonical AGENTS.md`)
    process.exit(1)
  }
}

const agents = await readFile('AGENTS.md', 'utf8')
for (const phrase of ['docs/VERSIONING.md', 'docs/BRANCH-LIFECYCLE.md', 'develop', 'main', 'docs/MCP-SETUP.md', 'docs/PROJECT-MEMORY.md', 'docs/CURRENT-HANDOFF.md', 'design-taste', 'motion-design', 'accessibility-visual-regression', 'code-hygiene', 'dependency-maintenance', 'headroom-pilot', 'task-routing', 'execution-routing', 'docs/EXECUTION-ROUTING-POLICY.md', 'docs/CLI-AGENT-STACK.md', 'REVIEW.md', '.agents/superpowers/']) {
  if (!agents.includes(phrase)) {
    console.error(`AGENTS.md is missing required reference: ${phrase}`)
    process.exit(1)
  }
}

console.log(`Agent stack valid: ${required.length} required files present and adapters point to AGENTS.md.`)

for (const file of ['CLAUDE.md', 'GEMINI.md']) {
  const content = await readFile(file, 'utf8')
  const imports = content.split(/\r?\n/).filter(line => line.startsWith('@')).map(line => line.slice(1).replace(/^\.\//, ''))
  for (const path of ['AGENTS.md', 'docs/PROJECT-MEMORY.md', 'docs/CURRENT-HANDOFF.md']) {
    if (!imports.includes(path)) throw new Error(`${file} must explicitly import ${path}`)
    await access(path)
  }
  if (imports.includes('docs/AGENT-PLATFORM-WORKFLOWS.md')) {
    throw new Error(`${file} must load platform workflows on demand, not in static startup context`)
  }
}

const { sync } = await import('./sync-claude-skills.mjs')
console.log(`Claude adapters verified: ${await sync(process.cwd())}`)

const { checkStartupContext } = await import('./context-budget.mjs')
const context = await checkStartupContext()
if (!context.ok) process.exit(1)
