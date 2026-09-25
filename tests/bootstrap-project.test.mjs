import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, writeFile, access } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { bootstrapProject } from '../scripts/bootstrap-project.mjs'

const config = {
  projectName: 'Me Plus',
  purpose: 'Personal operating system',
  primaryUsers: 'Authenticated end users',
  repository: 'dn-lx/me-plus',
  ownerTeam: 'dn-lx',
  branches: { integration: 'dev', production: 'prod' },
  architecture: { backend: 'Supabase Edge Functions', database: 'PostgreSQL', authentication: 'Supabase Auth' },
  capabilities: {
    sourceControl: { status: 'Required', provider: 'GitHub' },
    database: { status: 'Required', provider: 'Supabase' },
  },
}

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), 'agent-starter-bootstrap-'))
  await mkdir(join(root, '.agents/skills/project-template'), { recursive: true })
  await mkdir(join(root, '.claude/skills/project-template'), { recursive: true })
  await writeFile(join(root, '.agents/skills/project-template/SKILL.md'), 'template', 'utf8')
  await writeFile(join(root, '.claude/skills/project-template/SKILL.md'), 'template', 'utf8')
  return root
}

test('bootstrap generates deterministic project configuration and removes template skill', async () => {
  const root = await fixture()
  const result = await bootstrapProject(config, { root })
  assert.equal(result.config.slug, 'me-plus')

  const policy = JSON.parse(await readFile(join(root, '.agents/project-policy.json'), 'utf8'))
  assert.equal(policy.branches.integration, 'dev')
  assert.equal(policy.branches.production, 'prod')

  const memory = await readFile(join(root, 'docs/PROJECT-MEMORY.md'), 'utf8')
  assert.match(memory, /Project name:\*\* Me Plus/)
  assert.match(memory, /Supabase Edge Functions/)

  const mcp = await readFile(join(root, 'docs/MCP-SETUP.md'), 'utf8')
  assert.match(mcp, /Database\/auth\/storage \| Required/)
  assert.match(mcp, /Supabase/)

  const skill = await readFile(join(root, '.agents/skills/me-plus/SKILL.md'), 'utf8')
  assert.match(skill, /name: me-plus/)

  await assert.rejects(access(join(root, '.agents/skills/project-template/SKILL.md')))
  await assert.rejects(access(join(root, '.claude/skills/project-template/SKILL.md')))
})

test('dry run reports targets without writing them', async () => {
  const root = await fixture()
  const result = await bootstrapProject(config, { root, dryRun: true })
  assert.ok(result.changed.includes('docs/PROJECT-MEMORY.md'))
  await assert.rejects(access(join(root, 'docs/PROJECT-MEMORY.md')))
})

test('bootstrap rejects invalid capability state and branch collision', async () => {
  const root = await fixture()
  await assert.rejects(
    bootstrapProject({ ...config, branches: { integration: 'dev', production: 'dev' } }, { root }),
    /must differ/,
  )
  await assert.rejects(
    bootstrapProject({ ...config, capabilities: { sourceControl: { status: 'Maybe' } } }, { root }),
    /Invalid capability status/,
  )
})
