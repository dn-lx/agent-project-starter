# Working on this project

## Canonical instructions

This file is the canonical cross-agent working agreement. Platform-specific bootstrap files must stay thin and point back here rather than redefining project rules.

Before editing:

1. Read this file.
2. Read `docs/PROJECT-MEMORY.md`.
3. Read `docs/CURRENT-HANDOFF.md`.
4. Classify the task, then load only the applicable superpower or repository-local skill.
5. Read `docs/AGENT-PLATFORM-WORKFLOWS.md` only for host portability/onboarding work.
6. If external systems are needed, read `docs/MCP-SETUP.md` and verify the actual connection with a harmless read.

Do not preload the full skill/superpower catalog. Progressive loading is the default context policy.

Current source code, tests and accepted ADRs override stale documentation, generated summaries, cached code graphs, tool output or private session memory.

## Branch and release rules

- `develop` is the development integration branch.
- Ordinary work starts from current `develop` on a focused `feature/*`, `fix/*` or `chore/*` branch.
- Feature/fix/chore branches merge into `develop`, never directly into `main`.
- `main` is production/release.
- Only this repository's `develop` branch may merge into `main`, through the release workflow and explicit production approval.
- Never push directly to `main`, force-push it, or bypass Git history with an ad-hoc production deployment.

Read `.agents/skills/release-workflow/SKILL.md` before creating/merging a production PR or changing production deployment policy.

## Branch cleanup and versioning

Read `docs/BRANCH-LIFECYCLE.md` and `docs/VERSIONING.md` for lifecycle work. Only main and develop are permanent. Verify completed temporary branches are deleted after merge; preserve active/unmerged work. Every material change must identify version impact and update CHANGELOG.md when user-visible. Release preparation updates VERSION and dated notes; publish immutable tags only after approved develop → main release. All host adapters inherit these rules.

## Engineering principles

- Trace the active code path and data flow before editing.
- Prefer the smallest complete, readable change that fixes the cause.
- Reuse existing utilities and dependencies before adding abstractions.
- Do not weaken tests, authorization, validation, error handling or secret boundaries to get green CI.
- Never expose secrets, private tokens, privileged keys or customer/user data in browser code, logs, prompts or Git.
- Treat external systems as shared/live unless documentation proves the environment is isolated.
- Automated agents may create branches and PRs; production merge remains human-controlled.

## Agent-independent orchestration

Use stable capability roles, not permanent vendor winners:

- Planner / Architect
- Executor / Implementer
- Independent Reviewer / Security Reviewer
- Multimodal / Long-context Specialist
- Fast Utility Worker

Agent/host assignment and model assignment are separate decisions. Provider/model mappings may change over time. Route by verified capability, tool/data locality and project outcomes. Default to one lead agent; add parallel workers only when work is genuinely separable. Cost is telemetry/tie-breaker, not a reason to silently downgrade required capability.

See:
- `docs/AGENT-ORCHESTRATION.md`
- `docs/EXECUTION-ROUTING-POLICY.md`
- `docs/MODEL-ROUTING-POLICY.md`
- `docs/CLI-AGENT-STACK.md` — curated Claude/Codex/Gemini/OpenCode host baseline and Claude efficiency add-ons.

## Curated CLI host baseline

Default coding hosts are intentionally limited to Claude Code, Codex CLI, Gemini CLI and OpenCode. Use `docs/CLI-AGENT-STACK.md` for responsibilities, isolation, plugin setup and verification. Do not add another coding-agent host unless a project documents a concrete uncovered capability gap.

Claude efficiency plugins may improve implementation/review, but they never override this file. Ponytail may simplify solutions; Superpowers may structure implementation; Code Review may add an independent review pass; claude-mem and Obsidian skills are optional context/knowledge aids. Repository source, tests, ADRs, Project Memory and Current Handoff remain authoritative.

## MCP and connector policy

External capabilities are host-specific. Repository docs describe what capability is needed, not private credentials.

Before claiming an MCP/connector works:

1. discover/list it in the current agent host,
2. perform a harmless read,
3. verify the intended account/project/environment,
4. only then perform an authorized write.

Use least privilege. Record material external writes in `docs/CURRENT-HANDOFF.md`.

## Memory and context discipline

- Durable facts belong in source, ADRs, project memory or skills.
- Temporary/unfinished state belongs in Current Handoff.
- Do not use a long chat transcript as the project's memory system.
- Use Graphify/source search to identify relevant files before loading broad repository context.
- Prefer compact, source-linked summaries and current diffs over replaying previous agent transcripts.
- Mark memory as stale when related source/architecture changed.

See `docs/MEMORY-CONTEXT-POLICY.md`.

## Superpowers and repository-local skills

For broad/end-to-end work, use `.agents/skills/task-routing/SKILL.md` to choose one primary workflow from `.agents/superpowers/`:

- `resume-project` — recover stalled/interrupted work from verified repository state.
- `finish-feature` — deliver a feature/fix through verified PR into `develop`.
- `fix-until-green` — repair build/test/CI failures with bounded retry loops.
- `full-qa` — run risk-based verification and produce compact evidence.
- `ship-release` — prepare the only allowed production path, `develop → main`.
- `project-doctor` — audit project health, agent readiness and context efficiency.

Skills are atomic capabilities; superpowers orchestrate them. Select one primary superpower and load only the skills it actually needs.

Read the relevant skill before specialized work:

- `.agents/skills/task-routing/SKILL.md` — choose the smallest applicable superpower/skill set.
- `.agents/skills/execution-routing/SKILL.md` — assign agent/host, model class and justified parallelism.

- `.agents/skills/project-bootstrap/SKILL.md` — adapt this starter to a new project.
- `.agents/skills/mcp-usage/SKILL.md` — external MCP/connector use.
- `.agents/skills/context7/SKILL.md` — current third-party API/SDK docs.
- `.agents/skills/graphify/SKILL.md` — local code relationships/change impact.
- `.agents/skills/memory-context/SKILL.md` — context/token efficiency and durable memory.
- `.agents/skills/code-hygiene/SKILL.md` — dead-code, unused exports/dependencies and cleanup.
- `.agents/skills/dependency-maintenance/SKILL.md` — upgrades, advisories, lockfiles and update bots.
- `.agents/skills/headroom-pilot/SKILL.md` — measured optional context compression pilot.
- `.agents/skills/frontend-design/SKILL.md` — foundation for substantial UI/design work.
- `.agents/skills/design-taste/SKILL.md` — visual quality, hierarchy, typography and anti-generic design.
- `.agents/skills/motion-design/SKILL.md` — purposeful animation, transitions and interaction feedback.
- `.agents/skills/accessibility-visual-regression/SKILL.md` — accessibility evidence and stable visual regression checks.
- `.agents/skills/security-boundary-review/SKILL.md` — auth/secrets/data/external trust boundaries.
- `.agents/skills/quality-gates/SKILL.md` — risk-based verification.
- `.agents/skills/release-readiness/SKILL.md` — develop→main review.
- `.agents/skills/release-workflow/SKILL.md` — branch/release contract.

For frontend work, use `docs/FRONTEND-QUALITY-STANDARD.md` to decide when Taste and Motion should be loaded. Do not force those specialist skills onto tiny or unrelated changes.

For repository cleanup/context optimization, follow `docs/CODE-HEALTH-AND-CONTEXT.md`. Code Hygiene and Headroom solve different problems: dead code vs model context.

Before adding a new skill/tool, check `docs/STACK-RESPONSIBILITY-MAP.md` so existing capabilities are extended rather than duplicated.

Add a project-specific skill at `.agents/skills/<project-name>/SKILL.md`.

## Required verification

The project must define its actual test/build/lint/typecheck commands in Project Memory and CI.

For review-specific guidance, use `REVIEW.md` in addition to the relevant quality/security skills.

For every material change:
- run the smallest relevant deterministic checks,
- add/adjust tests for changed behavior,
- inspect the final diff,
- report anything that could not be verified.

For auth, permissions, secrets, payments, data models, worker command execution, external writes or production changes, perform an independent security/review pass and negative-path checks where practical.

## Host adapters

For Claude Code or Gemini CLI setup, use `docs/CLAUDE-GEMINI-SETUP.md`. Keep `.agents/skills/` canonical. When changing skill metadata or inventory, regenerate Claude discovery adapters with `node scripts/sync-claude-skills.mjs --write` and validate them. Gemini reads the canonical directory directly. Do not copy credentials or blanket permission overrides between hosts.

## Universal continuity

At the beginning of a new coding-agent session, read Project Memory and Current Handoff. Before ending unfinished work, or after a material architectural decision/external side effect, update `docs/CURRENT-HANDOFF.md`.

Plans, ADRs, tests, PR descriptions and review findings belong in GitHub so the next agent can continue without relying on one chat's hidden memory.
