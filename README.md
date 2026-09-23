# Agent Project Starter

Reusable, agent-independent engineering starter for new repositories.

The goal is simple: a new coding agent should be able to enter a project, understand how work is done, discover the right external capabilities, preserve project memory, make changes safely, verify them, and hand off cleanly without depending on one vendor, one chat, or one person's memory.

## What this starter gives every new project

- `AGENTS.md` as the canonical human-readable working agreement plus `.agents/project-policy.json` for machine-readable branch/release/continuity policy.
- Thin bootstrap files for Claude Code, Gemini CLI and GitHub Copilot.
- Durable project memory and machine-readable task/branch/PR continuity across interruptions.
- Capability-based MCP/connector documentation.
- Agent Skills for MCP use, Context7, Graphify, code hygiene, dependency maintenance, context efficiency, a lean external design stack, accessibility/visual regression, security review and releases.
- Outcome-oriented Superpowers for resume, feature delivery, CI repair, QA, release and project-health workflows.
- Two-stage execution routing: agent/host assignment first, model-class assignment second, with minimal justified parallelism.
- Optional local-agent portability guidance for Claude Code, Codex CLI, Gemini CLI and OpenCode; none are required by the core template.
- Planner → Executor → Independent Reviewer orchestration.
- Quality-first model routing guidance.
- A strict `feature/fix/chore → dev → prod` release path.
- Generic security and dependency-update automation, with project-specific CI added during bootstrap.
- A bootstrap checklist for adapting the starter to a real project.
- A stack-responsibility map that prevents overlapping tools/skills from accumulating without a clear gap.

## Start a new project

1. Create the repository from this starter.
2. Complete `docs/PROJECT-BOOTSTRAP-CHECKLIST.md`.
3. Replace the placeholder project facts in `docs/PROJECT-MEMORY.md`.
4. Populate `docs/REQUIREMENTS.md` with the project's ordered requirements, issues and roadmap.
5. Add a project-specific skill under `.agents/skills/<project-name>/SKILL.md`.
6. Select the MCP capabilities the project actually needs in `docs/MCP-SETUP.md`.
7. Configure project-specific build/test commands and CI.
8. Create/use `dev` for integration work and keep `prod` as production.
9. Verify external connections with harmless reads before any write.
10. Keep credentials outside Git.
11. Use a draft PR plus the AGENT_TASK_STATE block in `docs/CURRENT-HANDOFF.md` for non-trivial unfinished work; never treat every open branch as active.

## Agent startup order

Every agent should begin with only:

1. `AGENTS.md` + `.agents/project-policy.json`
2. `docs/PROJECT-MEMORY.md`
3. `docs/CURRENT-HANDOFF.md`

Then classify the task. For product/backlog/bug work, also load `docs/REQUIREMENTS.md`; otherwise keep it out of startup context. Load one applicable Superpower or skill, and use execution routing only when multiple hosts/models or delegation choices actually exist. Load platform/MCP/design/security/release documents only when the task requires them. This progressive-loading rule keeps startup context predictable and reduces token/usage waste.

Use `node scripts/context-budget.mjs --check` to guard against static-context creep. Current source code, tests and accepted ADRs override stale documentation, session memory, cached code graphs or model assumptions.

## MCP philosophy

The repository documents **capabilities**, not private credentials and not permanent vendor choices.

For example, a project may require:

| Capability | Typical implementation |
| --- | --- |
| Source control / PRs / Actions | GitHub |
| Current SDK/API docs | Context7 or official docs |
| Database/auth/storage | Supabase, Firebase, etc. |
| Hosting/deployments | Netlify, Vercel, Cloudflare, etc. |
| Browser verification | Playwright / browser computer use |
| Code relationships | Graphify / local code graph |
| Runtime observability | Sentry or equivalent |
| Product analytics | PostHog or equivalent |
| Payments | Stripe or equivalent |
| Email | Resend or equivalent |
| Business/project files | Google Drive / SharePoint / similar |

An agent must verify that a capability is actually connected in its current host before relying on it. See `docs/MCP-SETUP.md`.

## Branch model

```text
feature/*  fix/*  chore/*
          ↓
        dev
          ↓
  checks + review
          ↓
dev → prod PR
          ↓
 production approval
          ↓
         prod
```

Production merging remains a human-controlled decision.

## Template maintenance

The starter itself should follow the same workflow after this initial bootstrap:

```text
feature/fix/chore → dev → prod
```

Keep the starter generic. Project-specific business rules belong in the generated project's Project Memory and project skill, not here.

## Versioning and branch lifecycle

The starter now carries a planned version in `VERSION` and release notes in `CHANGELOG.md`. Read [Versioning](docs/VERSIONING.md) and [Branch lifecycle](docs/BRANCH-LIFECYCLE.md). Only prod/dev are permanent; merged temporary branches are cleaned automatically by GitHub after merge. Protect permanent branches and require CI checks when configuring a new repository.

## Design stack

Frontend projects can use [Design Stack](docs/DESIGN-STACK.md): Taste Skill for generation/redesign, Impeccable for critique/polish, and Awesome Design Skills only as an on-demand style catalogue. The starter does not bulk-install those external packs.

## Optional local agent stack

[Optional CLI agent setup](docs/CLI-AGENT-STACK.md) defines the intentionally small host set: Claude Code, Codex CLI, Gemini CLI and OpenCode. It also documents the Claude efficiency profile (Ponytail, Superpowers, Code Review, optional claude-mem and optional Obsidian skills), isolation rules and a local CLI doctor. The router/coordinator integrates work; not every host runs on every task.

## Claude and Gemini

[Host setup and acceptance checks](docs/CLAUDE-GEMINI-SETUP.md) cover Claude Code, Gemini CLI and the distinction from routed models inside Cline. Shared context is explicitly imported; Claude discovery adapters are committed and validated for drift.
