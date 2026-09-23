# Current Handoff

**Last updated:** 2026-09-23

## Current task

Add the curated multi-CLI development stack and Claude efficiency profile on `feature/curated-cli-agent-stack`, targeting `develop`.

## Changes

- Limited the default coding-agent host set to Claude Code, Codex CLI, Gemini CLI and OpenCode.
- Documented the router/coordinator pattern and isolated branch/worktree ownership.
- Added the Claude efficiency profile: Ponytail, external Superpowers, Anthropic Code Review, optional claude-mem and optional Obsidian skills.
- Added `REVIEW.md` as the shared correctness/security/regression review contract.
- Added `scripts/agent-cli-doctor.mjs` for local host availability checks.
- Kept repository source/tests/ADRs/Project Memory/Current Handoff authoritative over plugin memory or notes.
- Explicitly rejected adding Aider, Goose, Qwen Code, Kiro or other coding-agent hosts by default unless a project-specific gap is documented.

## Verification / limits

Run `node scripts/validate-agent-stack.mjs`, `node scripts/context-budget.mjs --check`, `node scripts/validate-version.mjs` and `node --test tests/*.test.mjs`. The CLI doctor is informational in CI because hosted runners are not expected to have coding-agent CLIs installed.

Live Claude plugin installation/authentication still has to be verified on the workstation that runs Claude Code. Third-party plugin hooks/memory providers must be reviewed before enabling them.

## Next safe step

Open a PR into `develop`, inspect CI/review evidence, repair confirmed findings, and merge only when green. Production promotion remains a separate approved `develop -> main` release.
