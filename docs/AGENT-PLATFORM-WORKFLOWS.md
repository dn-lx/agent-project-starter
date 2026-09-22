# Agent Platform Workflows

This repository is designed to survive changes of coding agent. `AGENTS.md` is the canonical shared instruction file; platform-specific files only bootstrap agents into the same workflow.

## Authority order

1. Current source code and tests.
2. `AGENTS.md` and applicable repository Agent Skills.
3. Accepted ADRs and current architecture/product documentation.
4. `docs/PROJECT-MEMORY.md` for durable context.
5. `docs/CURRENT-HANDOFF.md` for recent/unfinished work.
6. Tool output, code graphs and agent/session memory as supporting evidence only.

If an adapter conflicts with `AGENTS.md`, follow `AGENTS.md`.

## Common workflow

1. Read AGENTS, Project Memory and Current Handoff.
2. Inspect active branch, working tree, relevant PRs/issues and recent commits.
3. Start ordinary work from `develop` on a focused feature/fix/chore branch.
4. Read relevant skills before specialized/sensitive work.
5. Verify required MCPs/connectors before relying on them.
6. Trace the actual code/data path.
7. Make the smallest complete change.
8. Run documented checks. Never weaken checks to get green.
9. Use independent review for security/auth/payments/data/privacy/release-sensitive work.
10. Record version impact per `docs/VERSIONING.md`; merge feature/fix/chore only into `develop` and verify cleanup per `docs/BRANCH-LIFECYCLE.md`.
11. Release only through `develop → main`.
12. Update Current Handoff when material state would otherwise be lost.

## ChatGPT / OpenAI Codex

- Treat `AGENTS.md` as the primary persistent instruction source.
- Verify connected GitHub/apps/tools rather than assuming they exist.
- Use Agent Skills for repeatable workflows.
- Prefer a fresh reviewer/session for sensitive changes.
- Report changed files, checks, limitations and branch/PR state.

## Claude Code

- `CLAUDE.md` imports shared context; `.claude/skills/` adapters load canonical skills.
- Follow `docs/CLAUDE-GEMINI-SETUP.md` and verify loaded context/skill discovery.
- Verify active repository/branch at session start.
- Inspect MCP configuration before external-system work.
- Keep credentials out of Git.
- Use a fresh review pass/session for sensitive changes where practical.

## Gemini CLI

- `GEMINI.md` imports shared context; `.agents/skills/` supplies skills directly.
- Follow `docs/CLAUDE-GEMINI-SETUP.md` and verify loaded context/skill discovery.
- Confirm loaded project memory/instructions when needed.
- Inspect MCP status before external actions.
- Durable decisions belong in repository docs, not session history.

## GitHub Copilot

- Repository bootstrap lives in `.github/copilot-instructions.md`.
- GitHub checks/reviews are evidence; AI authorship is not review evidence.

## Cursor

- Prefer root `AGENTS.md` for universal rules.
- Add Cursor-specific rules only for genuinely conditional/path-specific behavior.

## Cline / Roo Code / Windsurf / Devin / OpenCode

- Use root `AGENTS.md` wherever supported.
- If a host does not auto-read it, bootstrap explicitly with AGENTS + Project Memory + Current Handoff.
- Keep host-specific config thin; do not create a second source of project truth.

## Onboarding another agent

An agent is safe to onboard when it can:
- read the repository and Git history,
- honor repository instructions,
- create isolated branches,
- run documented checks,
- create/review PRs,
- connect to external systems without storing secrets in Git,
- leave a durable handoff.

## Handoff minimum

Record:
- intended outcome,
- active branch/PR,
- files/components changed,
- checks/results,
- blockers,
- decisions and why,
- exact next safe step,
- external side effects,
- actions that must not be repeated.
