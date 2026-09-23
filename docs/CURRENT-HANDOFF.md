# Current Handoff

**Last updated:** 2026-09-23

## Current task

Add the curated multi-CLI development stack and Claude efficiency profile on `feature/curated-cli-agent-stack`, targeting `develop`.

## Changes

- Limited the default coding-agent host set to Claude Code, Codex CLI, Gemini CLI and OpenCode.
- Documented the router/coordinator pattern and isolated branch/worktree ownership.
- Added project-scoped Claude defaults for Ponytail, external Superpowers and Anthropic Code Review in `.claude/settings.json`.
- Kept claude-mem and Obsidian skills opt-in because they create memory/knowledge boundaries that are not appropriate for every project.
- Added `REVIEW.md` as the shared correctness/security/regression review contract.
- Added `scripts/agent-cli-doctor.mjs` for local host availability checks.
- Made Claude adapter drift validation CRLF-safe on Windows.
- Kept repository source/tests/ADRs/Project Memory/Current Handoff authoritative over plugin memory or notes.
- Explicitly rejected adding Aider, Goose, Qwen Code, Kiro or other coding-agent hosts by default unless a project-specific gap is documented.

## Verification / limits

Clean-checkout local verification is green:
- `node scripts/validate-agent-stack.mjs`
- `node scripts/context-budget.mjs --check`
- `node scripts/validate-version.mjs`
- `node --test tests/*.test.mjs` (16/16)
- Claude project plugins verified enabled: Ponytail, Superpowers, Code Review.
- Development workstation CLI baseline verified: Claude Code, Codex CLI, Gemini CLI and OpenCode.

GitHub-hosted Actions were failing before any workflow step started: affected jobs exposed no steps and no log URL. Per owner direction on 2026-09-23, all six GitHub workflows are temporarily set to manual-only (`workflow_dispatch`) so development can continue using local deterministic verification.

While this temporary mode is active:
- run the full local verification commands before merging into `develop`,
- manually remove merged temporary branches because branch-cleanup is not automatic,
- do not promote `develop` to `main` until the automatic production guard and required CI workflows are re-enabled, unless the owner explicitly changes that temporary rule.

Live claude-mem/Obsidian activation remains a per-project decision after privacy/data-boundary review.

## Next safe step

Merge PR #9 into `develop` after the local deterministic checks pass. Later, restore the original automatic triggers for all six workflows, verify GitHub Actions can start jobs normally, and only then resume the normal automated `develop -> main` release path.
