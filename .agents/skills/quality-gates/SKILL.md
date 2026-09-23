---
name: quality-gates
description: Choose efficient verification based on change risk without weakening evidence.
---

# Quality Gates

The real project must define exact commands in Project Memory and CI.

## Tier 1 — ordinary feature/fix PR into develop

Use fast deterministic checks relevant to changed behavior:
- syntax/type/lint where applicable,
- unit/integration tests,
- build/compile,
- targeted browser smoke test for UI changes,
- accessibility and targeted visual-regression checks for material UI changes when configured,
- secret scanning,
- dependency/security checks relevant to the stack.

Use CI concurrency/cancel-in-progress so obsolete runs do not waste resources.

## Tier 2 — sensitive change

For auth, permissions, secrets, payments, schema/data, tenant isolation, privileged functions, external writes or worker command execution:
- Tier 1,
- Security Boundary Review,
- allowed + denied/negative-path verification where practical,
- independent capable reviewer.

## Tier 3 — develop→prod release

Follow Release Workflow and Release Readiness:
- complete release diff,
- required checks green,
- migrations/env/external-service changes reviewed,
- critical user flows verified,
- accessibility/visual evidence reviewed for material frontend releases,
- rollback/compatibility documented.

## Efficiency

- deterministic tools answer deterministic questions,
- add tests that protect real behavior/regressions/security boundaries,
- do not run expensive release matrices on every tiny commit unless risk requires it,
- never weaken a test because a change made it inconvenient.
