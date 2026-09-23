# Starter coverage review — 2026-09-21

The starter has broad reusable process coverage, not proof that a particular application is production-ready. Existing coverage includes agent portability, orchestration/review, MCP boundaries, current API documentation, memory/context, code hygiene, dependency maintenance, frontend design/motion/accessibility, security scanning, documentation drift and release checks. Native branch cleanup, task continuity and versioning close concrete omissions without another plugin.

## Remaining priorities when applying the starter

| Priority | Gap | Evidence needed |
| --- | --- | --- |
| High | Enforced repository governance | prod/develop deletion and force-push protection; required PR/check rules; verified permissions. At review time both branches reported unprotected. |
| High | Real application verification | Replace Project Memory command placeholders with actual unit/integration/E2E/build/typecheck commands and run them in CI. Stack-file validation is not an application test. |
| High when stateful | Recovery and migrations | Tested backup restore, migration rollback/forward strategy and explicit recovery ownership. |
| High when agent actions ship | Agent behavior evaluation | Regression cases, tool authorization denial tests, prompt-injection cases, timeouts, retry/idempotency and cost/run limits. |
| Project-specific | Operational readiness | Error alerts and owners, health checks, performance budgets and incident/rollback drill. |
| Project-specific | Dependency/supply-chain scope | Audit actual manifests including nested tools; current security workflow audits root Node/Python manifests only. Pin tooling for reproducible checks. |

Use existing Quality Gates, Security Boundary Review, Release Readiness and Project Memory to implement these requirements in the consuming app. Add connectors only for a demonstrated missing capability. The presence of a skill or an MCP profile does not prove a service is connected or a control is enforced.

No new external plugin is required for the branch/version changes. Repository administration remains an external setup requirement where the active connector cannot change settings.
