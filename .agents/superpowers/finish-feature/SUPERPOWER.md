---
name: finish-feature
description: Take a feature or fix from requirement through verified direct commits to dev.
---

# Finish Feature

1. Classify scope/risk and retrieve only the relevant project context.
2. For non-trivial/cross-cutting/high-risk work, load `implementation-planning` and create/update a compact task plan before editing.
3. Work from current `dev` with one assigned modifying agent. Use an isolated worktree only when warranted; no development PR is required. For non-trivial work, record a concise GitHub Issue or Current Handoff and current SHA.
4. Trace the active code/data path before editing.
5. Implement the smallest complete change.
6. Load only the specialist skills triggered by the work.
7. Run targeted deterministic checks while implementing.
8. For material frontend work, run `frontend-verification`; for performance- or analytics-relevant changes, load the corresponding specialist skill.
9. Inspect the diff against the selected requirement and plan where one exists; update tests/docs where behavior or durable contracts changed.
10. Run the required final tests/checks on the candidate change, and inspect the diff. Record evidence in the Issue/commit/handoff. Any changed content after a check requires appropriate re-verification.
11. Commit the verified change directly to `dev` without a PR. Confirm its SHA and CI status, and disclose failures or checks not run.
12. Reset completed task state to idle and retain unresolved blockers. Never route ordinary work directly to `prod`.

Always use `quality-gates` for material changes. Use `test-engineering` when the harness/fixtures/regression architecture needs work. Add `security-boundary-review` only for sensitive boundaries, and load frontend/performance/analytics specialist skills only when their surfaces are affected.
