# Current Handoff

**Last updated:** 2026-09-23

## Current state

The curated multi-CLI development stack is on `develop`. A reusable product requirements/issues/plan workflow is being added on `feature/requirements-plan-template`.

## Requirements-plan addition

- Added `docs/REQUIREMENTS.md` as a generic checkable requirements, issues and roadmap template.
- Agents load it for product/backlog/bug work, but it is intentionally excluded from unrelated default startup context.
- Requirement IDs should remain stable after work begins.
- Checklist items may be marked `[x]` only after acceptance criteria are verified and concise completion evidence is recorded.
- Project bootstrap now requires replacing template examples with the consuming project's actual plan.
- Starter validation now requires the requirements document and AGENTS reference.

## Verified CLI setup already on develop

- Default coding-agent hosts: Claude Code, Codex CLI, Gemini CLI and OpenCode.
- Project-scoped Claude defaults: Ponytail, external Superpowers and Anthropic Code Review.
- claude-mem and Obsidian skills remain opt-in.

## Temporary GitHub Actions mode

All six starter GitHub workflows remain manual-only using `workflow_dispatch` while the GitHub Actions startup issue is deferred.

While this temporary mode is active:
- run local deterministic verification before merging into `develop`,
- manually remove merged temporary branches,
- do not promote `develop` to `main` until the automatic production guard and required CI workflows are re-enabled, unless the owner explicitly changes that rule.

## Next safe step

Validate the requirements-plan template locally, merge its PR into `develop`, and continue using the document pattern in consuming projects.
