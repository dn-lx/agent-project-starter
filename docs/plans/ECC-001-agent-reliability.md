# ECC-001 — Evidence-based coding partners

Status: implementation planned; not release approval.

## Accepted outcome

Improve Agent Project Starter for future Claude Code and Gemini CLI coding partners using the verification, evaluation, specialist-review and learning ideas identified in Everything Claude Code. Keep AGENTS.md and .agents/project-policy.json authoritative, existing progressive skill loading, current dev/prod workflow, and all existing starter capabilities.

## Current evidence

The current dev baseline is 4d7b2171d78600fd8df3bdfb2b9fc39a059d6e9f. It already has risk-based quality gates, context budgets, task continuity, a local router, canonical skills, generated Claude discovery adapters and Gemini direct skill discovery. There is no reason to replace these with a vendor-specific framework. The existing prod release PR is outside this task.

## Acceptance criteria

- [ ] A real dependency-free verification runner produces machine-readable evidence, preserves command failures/timeouts, and never executes commands merely to preview the plan.
- [ ] Missing application checks and missing human/runtime evidence cannot become a false release pass; reports bind to the tested revision and identify dirty worktrees.
- [ ] A versioned agent-evaluation suite and scorer distinguish unrun, failed, incomplete and completed trials; no fabricated agent benchmark results.
- [ ] Focused specialist reviews cover code paths, silent failures, test adequacy and database boundaries without automatic multi-agent fan-out.
- [ ] Claude discovery adapters and Gemini project commands resolve to shared procedures, not duplicated policies or vendor-model defaults.
- [ ] Learning remains proposal/review based; no automatic transcript retention or promotion into trusted instructions.
- [ ] Upstream provenance and attribution are recorded; no remote installer, global config overwrite, production write or blanket permission grant.
- [ ] New negative-path tests and existing repository CI run; actual host activation is reported separately from static adapter validation.

## Delivery

1. Pin/reference the supplied WorldFlowAI snapshot and official licensed ECC source; check official Claude/Gemini format documentation.
2. Implement verification/evaluation tools and focused tests using the existing Node test runner.
3. Add small canonical skills, review cards and reviewable learning template; generate matching Claude adapters and safe Gemini prompt-only commands.
4. Wire real checks into CI, update indexes/setup docs and Unreleased changelog; leave VERSION and production release to the separate approved flow.
5. Run local tool tests and repository CI, inspect the final diff, document evidence and limitations in the PR and handoff.

## Boundaries and rollback

Only this starter repository and this task branch may be written. No FrankiFlow application, Supabase, hosting configuration or external messages are changed. Verification commands are trusted project code, not a sandbox; execution requires an explicit opt-in. Eval scoring validates submitted evidence structure, not the truth of a model's self-report. Rollback is reverting the task PR; no data migrations or global installations are involved.
