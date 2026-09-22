# Current Handoff

**Last updated:** 2026-09-22

## Current task

Add agentwise + modelwise responsibility routing on `feature/agent-model-execution-routing`, targeting `develop`.

## Previous work verified

The Superpowers/progressive-context upgrade is merged into `develop`. Static startup context is guarded by CI. Production `main` remains unchanged.

## Changes

- Added `execution-routing` skill separating agent/host assignment from model-class assignment.
- Added `docs/EXECUTION-ROUTING-POLICY.md` covering single-agent and multi-agent operation.
- Added a provider-neutral routing profile template for concrete model mappings.
- Updated Task Routing, Agent Orchestration, Model Routing and the responsibility map.
- Default remains one lead agent; parallel workers require separable work, isolated ownership and a concrete benefit.
- Reviewers receive compact evidence packets rather than implementation transcripts.

## Verification / limits

Run agent-stack validation, context-budget guard, version/lifecycle tests and security CI. Concrete model IDs remain runtime/project configuration and are intentionally not hard-coded into repository rules.

## Next safe step

Open a PR into `develop`, inspect all CI/review evidence, repair confirmed findings if any, and merge only after green checks. Production promotion remains a separate approved `develop → main` release.
