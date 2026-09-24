---
name: finish-feature
description: Take a feature or fix from requirement through a verified PR into dev.
---

# Finish Feature

1. Classify scope/risk and retrieve only the relevant project context.
2. For non-trivial/cross-cutting/high-risk work, load `implementation-planning` and create/update a compact task plan before editing.
3. Start from current `dev` on a focused feature/fix/chore branch unless already on the correct active branch.
4. Trace the active code/data path before editing.
5. Implement the smallest complete change.
6. Load only the specialist skills triggered by the work.
7. Run targeted deterministic checks first, then the required project gate.
8. For material frontend work, run `frontend-verification`; for performance- or analytics-relevant changes, load the corresponding specialist skill.
9. Inspect the final diff against the original requirement and plan where one exists.
10. Update tests/docs/handoff only where behavior, decisions or unfinished state changed.
11. Before final merge, reset the task-state block in `docs/CURRENT-HANDOFF.md` to idle; keep the task's durable evidence in the PR.
12. Open/update the PR into `dev`; never route ordinary work directly to `prod`.

Always use `quality-gates` for material changes. Use `test-engineering` when the harness/fixtures/regression architecture needs work. Add `security-boundary-review` only for sensitive boundaries, and load frontend/performance/analytics specialist skills only when their surfaces are affected.
