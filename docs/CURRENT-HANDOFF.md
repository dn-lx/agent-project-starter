# Current Handoff

**Last updated:** 2026-09-23

## Current state

The curated multi-CLI development stack and Claude efficiency profile are merged into `develop` via PR #9.

## Verified setup

- Default coding-agent hosts: Claude Code, Codex CLI, Gemini CLI and OpenCode.
- Project-scoped Claude defaults: Ponytail, external Superpowers and Anthropic Code Review.
- claude-mem and Obsidian skills remain opt-in because they create memory/knowledge boundaries that are not appropriate for every project.
- `REVIEW.md` is the shared correctness/security/regression review contract.
- `scripts/agent-cli-doctor.mjs` verifies local host availability.
- Claude adapter drift validation is CRLF-safe on Windows.
- Repository source/tests/ADRs/Project Memory/Current Handoff remain authoritative over plugin memory or notes.

Clean-checkout local verification before merge:
- `node scripts/validate-agent-stack.mjs` ✅
- `node scripts/context-budget.mjs --check` ✅
- `node scripts/validate-version.mjs` ✅
- `node --test tests/*.test.mjs` ✅ (16/16)
- Workstation CLI baseline: Claude Code ✅, Codex CLI ✅, Gemini CLI ✅, OpenCode ✅

## Temporary GitHub Actions mode

GitHub-hosted Actions were failing before any workflow step started and exposed no usable job logs. Per owner direction on 2026-09-23, all six workflows are temporarily manual-only using `workflow_dispatch`:

- agent-stack validation
- security checks
- version validation
- merged branch cleanup
- documentation drift
- production branch guard

While this temporary mode is active:
- run the full local deterministic verification before merging into `develop`,
- manually remove merged temporary branches,
- do not promote `develop` to `main` until the automatic production guard and required CI workflows are re-enabled, unless the owner explicitly changes that temporary rule.

## Next safe step

Continue development from `develop`. When GitHub Actions is ready to be restored, reinstate the original automatic triggers for all six workflows, verify jobs actually start and produce logs, then resume the normal automated release path.
