# ECC-001 — Evidence-based coding partners

Status: implemented; awaiting final candidate checks and independent review. Not release approval.

## Accepted outcome

Improve Agent Project Starter for future Claude Code and Gemini CLI coding partners using the verification, evaluation, specialist-review and learning ideas identified in Everything Claude Code. Keep AGENTS.md and .agents/project-policy.json authoritative, existing progressive skill loading, current dev/prod workflow, and all existing starter capabilities.

## Current evidence

The task started from dev baseline 4d7b2171d78600fd8df3bdfb2b9fc39a059d6e9f. Existing risk-based quality gates, context budgets, task continuity, local routing, canonical skills and host discovery remain intact. No vendor-specific framework replaced them. The existing prod release PR is outside this task.

## Implementation acceptance

- [x] A real dependency-free verification runner produces machine-readable evidence, preserves command failures/timeouts, and never executes commands merely to preview the plan.
- [x] Missing application checks and missing human/runtime evidence cannot become a false release pass; reports bind to the tested revision and identify dirty worktrees.
- [x] A versioned agent-evaluation suite and scorer distinguish unrun, failed, incomplete and completed trials; no fabricated agent benchmark results.
- [x] Focused specialist reviews cover code paths, silent failures, test adequacy and database boundaries without automatic multi-agent fan-out.
- [x] Claude discovery adapters and Gemini project commands resolve to shared procedures, not duplicated policies or vendor-model defaults.
- [x] Learning remains proposal/review based; no automatic transcript retention or promotion into trusted instructions.
- [x] Upstream provenance and attribution are recorded; no remote installer, global config overwrite, production write or blanket permission grant.
- [x] New negative-path tests and existing repository CI run; actual host activation is reported separately from static adapter validation.

## Verification and remaining review

43 focused local tests pass on Node 22/Linux, and all six Gemini command files parse as TOML. Repository CI at a267f896360dce8f8e40926b6d6a326f7cc325e2 passed Agent stack validation, Version validation, Security checks, and Agent reliability (complete Linux starter checks plus 42 Windows tool tests). Windows CI initially caught path-alias handling; filesystem identity comparison fixed it without relaxing root-only execution. The additional JSON-diagnostic privacy regression brings the focused suite to 43 tests and must pass in CI on this newer candidate.

The latest PR #45 checks remain authoritative for its actual final head/merge candidate. Earlier green results do not cover subsequent edits. Independent command-boundary review and real authenticated Claude/Gemini activation remain unverified; static tests are not evidence of either. Record final CI evidence in the PR without making another source edit solely to embed its own SHA.

## Delivery

Pinned references and licenses are in `docs/UPSTREAM-PROVENANCE.md`. The executable workflow and commands are in `docs/AGENT-RELIABILITY.md`. Four canonical skills, four Claude adapters, six Gemini commands, focused review references, tests and CI are committed. Unreleased records additive/minor impact; VERSION/tags/prod are unchanged.

## Boundaries and rollback

Only this starter repository and this task branch may be written. No FrankiFlow application, Supabase, hosting configuration or external messages are changed. Verification commands are trusted project code, not a sandbox; execution requires an explicit opt-in. Eval scoring validates submitted evidence structure, not the truth of a model's self-report. Rollback is reverting the task PR; no data migrations or global installations are involved.
