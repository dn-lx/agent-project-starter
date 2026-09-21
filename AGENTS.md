# Working on this project

## Canonical instructions

This file is the canonical cross-agent working agreement. Platform-specific bootstrap files must stay thin and point back here rather than redefining project rules.

Before editing:

1. Read this file.
2. Read `docs/PROJECT-MEMORY.md`.
3. Read `docs/CURRENT-HANDOFF.md`.
4. Read `docs/AGENT-PLATFORM-WORKFLOWS.md`.
5. Read the applicable repository-local skill under `.agents/skills/`.
6. If external systems are needed, read `docs/MCP-SETUP.md` and verify the actual connection with a harmless read.

Current source code, tests and accepted ADRs override stale documentation, generated summaries, cached code graphs, tool output or private session memory.

## Branch and release rules

- `develop` is the development integration branch.
- Ordinary work starts from current `develop` on a focused `feature/*`, `fix/*` or `chore/*` branch.
- Feature/fix/chore branches merge into `develop`, never directly into `main`.
- `main` is production/release.
- Only this repository's `develop` branch may merge into `main`, through the release workflow and explicit production approval.
- Never push directly to `main`, force-push it, or bypass Git history with an ad-hoc production deployment.

Read `.agents/skills/release-workflow/SKILL.md` before creating/merging a production PR or changing production deployment policy.

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

Provider/model mappings may change over time. Route by capability and verified project outcomes. Cost is telemetry/tie-breaker, not a reason to silently downgrade required capability.

See:
- `docs/AGENT-ORCHESTRATION.md`
- `docs/MODEL-ROUTING-POLICY.md`

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

## Repository-local skills

Read the relevant skill before specialized work:

- `.agents/skills/project-bootstrap/SKILL.md` — adapt this starter to a new project.
- `.agents/skills/mcp-usage/SKILL.md` — external MCP/connector use.
- `.agents/skills/context7/SKILL.md` — current third-party API/SDK docs.
- `.agents/skills/graphify/SKILL.md` — local code relationships/change impact.
- `.agents/skills/memory-context/SKILL.md` — context/token efficiency and durable memory.
- `.agents/skills/frontend-design/SKILL.md` — foundation for substantial UI/design work.
- `.agents/skills/design-taste/SKILL.md` — visual quality, hierarchy, typography and anti-generic design.
- `.agents/skills/motion-design/SKILL.md` — purposeful animation, transitions and interaction feedback.
- `.agents/skills/security-boundary-review/SKILL.md` — auth/secrets/data/external trust boundaries.
- `.agents/skills/quality-gates/SKILL.md` — risk-based verification.
- `.agents/skills/release-readiness/SKILL.md` — develop→main review.
- `.agents/skills/release-workflow/SKILL.md` — branch/release contract.

For frontend work, use `docs/FRONTEND-QUALITY-STANDARD.md` to decide when Taste and Motion should be loaded. Do not force those specialist skills onto tiny or unrelated changes.

Add a project-specific skill at `.agents/skills/<project-name>/SKILL.md`.

## Required verification

The project must define its actual test/build/lint/typecheck commands in Project Memory and CI.

For every material change:
- run the smallest relevant deterministic checks,
- add/adjust tests for changed behavior,
- inspect the final diff,
- report anything that could not be verified.

For auth, permissions, secrets, payments, data models, worker command execution, external writes or production changes, perform an independent security/review pass and negative-path checks where practical.

## Universal continuity

At the beginning of a new coding-agent session, read Project Memory and Current Handoff. Before ending unfinished work, or after a material architectural decision/external side effect, update `docs/CURRENT-HANDOFF.md`.

Plans, ADRs, tests, PR descriptions and review findings belong in GitHub so the next agent can continue without relying on one chat's hidden memory.
