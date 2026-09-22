---
name: full-qa
description: Run risk-based end-to-end verification and produce a compact evidence report.
---

# Full QA

1. Determine the changed/user-critical surfaces before selecting checks.
2. Read Project Memory commands and `quality-gates`.
3. Run deterministic checks appropriate to risk: lint/type/build/unit/integration/E2E/browser as available.
4. For meaningful UI changes, load accessibility/visual regression guidance; do not load design skills merely to verify.
5. For auth, permissions, secrets, payments, tenant/data boundaries or privileged external writes, add Security Boundary Review and negative-path checks.
6. Inspect failures by evidence; do not paper over them or weaken tests.
7. Report what passed, what failed, what was not runnable and remaining risk.

Do not rerun unchanged expensive suites without a reason. Reuse trustworthy check results from the current commit when available.
