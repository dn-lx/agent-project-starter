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

GitHub-hosted Actions for the PR are currently failing before any workflow step starts: affected jobs expose no steps and no log URL. Do not merge while this remains unresolved; the repository rule still requires checks to pass.

Live claude-mem/Obsidian activation remains a per-project decision after privacy/data-boundary review.

## Next safe step

Resolve the GitHub Actions startup/account/runner issue, rerun the PR checks, then merge PR #9 into `develop` only when the required checks are green. Production promotion remains a separate approved `develop -> main` release.
