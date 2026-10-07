# Current Handoff

**Last updated:** 2026-10-07

This file is the compact recovery record for unfinished work. GitHub/source/tests remain authoritative when they disagree with this handoff.

<!-- AGENT_TASK_STATE_START -->
{
  "task_id": null,
  "repository": null,
  "base": "dev",
  "branch": null,
  "pr": null,
  "status": "idle",
  "last_verified_sha": null,
  "next_step": null,
  "updated_at": "2026-10-07T09:00:00Z"
}
<!-- AGENT_TASK_STATE_END -->

## Current state

No active implementation task is recorded in the starter template. ECC-001 implementation and release preparation are tracked in PR #45; dev-to-prod promotion is tracked in PR #44. The project owner explicitly requested both merges on 2026-10-07. This idle template does not imply that either PR has merged: inspect current PR/check/review state before continuing release work.

Before merging, independent command-boundary review and all required checks must cover the final candidate. Final review outcomes, tested revisions, merge commits and published release identity belong in those PRs and CI artifacts rather than a self-referential source-SHA update.

## Usage and remaining host verification

Version 0.2.0 introduces optional verification/evaluation tooling and shared Claude/Gemini workflows. Read `docs/AGENT-RELIABILITY.md` and `docs/CLAUDE-GEMINI-SETUP.md` on demand. Actual authenticated host activation and coding-model benchmark trials remain unverified; static and synthetic tooling tests do not establish either.

No FrankiFlow application, database, hosting, email or global host configuration changes are part of this release. No data migration is required; rollback uses a reviewed revert without moving published tags.

## Recovery rule

Do not resume an arbitrary open branch. Apply `.agents/skills/task-continuity/SKILL.md`, inspect the referenced PR/branch/checks, compare with current `dev`, and continue only when the evidence matches the requested task. Start new non-trivial work with one task/branch/PR binding and preserve unrelated changes.

## Production path

Production promotion is `dev → prod` with explicit human production approval. The release notes in CHANGELOG.md describe the planned release; remote tags/releases and their target commits establish actual publication.
