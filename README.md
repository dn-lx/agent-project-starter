# Agent Project Starter

Reusable, agent-independent engineering starter for new repositories.

The goal is simple: a new coding agent should be able to enter a project, understand how work is done, discover the right external capabilities, preserve project memory, make changes safely, verify them, and hand off cleanly without depending on one vendor, one chat, or one person's memory.

## What this starter gives every new project

- `AGENTS.md` as the canonical cross-agent working agreement.
- Thin bootstrap files for Claude Code, Gemini CLI and GitHub Copilot.
- Durable project memory and current-task handoff.
- Capability-based MCP/connector documentation.
- Agent Skills for MCP use, Context7, Graphify, context efficiency, quality gates, security review, frontend work and releases.
- Planner → Executor → Independent Reviewer orchestration.
- Quality-first model routing guidance.
- A strict `feature/fix/chore → develop → main` release path.
- Generic security and documentation-drift automation.
- A bootstrap checklist for adapting the starter to a real project.

## Start a new project

1. Create the repository from this starter.
2. Complete `docs/PROJECT-BOOTSTRAP-CHECKLIST.md`.
3. Replace the placeholder project facts in `docs/PROJECT-MEMORY.md`.
4. Add a project-specific skill under `.agents/skills/<project-name>/SKILL.md`.
5. Select the MCP capabilities the project actually needs in `docs/MCP-SETUP.md`.
6. Configure project-specific build/test commands and CI.
7. Create/use `develop` for integration work and keep `main` as production.
8. Verify external connections with harmless reads before any write.
9. Keep credentials outside Git.
10. Update `docs/CURRENT-HANDOFF.md` whenever another agent would otherwise need to rediscover unfinished state.

## Agent startup order

Every agent should begin with:

1. `AGENTS.md`
2. `docs/PROJECT-MEMORY.md`
3. `docs/CURRENT-HANDOFF.md`
4. `docs/AGENT-PLATFORM-WORKFLOWS.md`
5. the relevant skill under `.agents/skills/`
6. `docs/MCP-SETUP.md` when external systems are required

Current source code, tests and accepted ADRs override stale documentation, session memory, cached code graphs or model assumptions.

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
        develop
          ↓
  checks + review
          ↓
develop → main PR
          ↓
 production approval
          ↓
         main
```

Production merging remains a human-controlled decision.

## Template maintenance

The starter itself should follow the same workflow after this initial bootstrap:

```text
feature/fix/chore → develop → main
```

Keep the starter generic. Project-specific business rules belong in the generated project's Project Memory and project skill, not here.
