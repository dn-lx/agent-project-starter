---
name: finish-feature
description: Take a feature or fix from requirement through a verified PR into dev.
---

# Finish Feature

1. Classify scope/risk and retrieve only the relevant project context.
2. Start from current `dev` on a focused feature/fix/chore branch unless already on the correct active branch.
3. Trace the active code/data path before editing.
4. Implement the smallest complete change.
5. Load only the specialist skills triggered by the work.
6. Run targeted deterministic checks first, then the required project gate.
7. Inspect the final diff against the original requirement.
8. Update tests/docs/handoff only where behavior, decisions or unfinished state changed.
9. Before final merge, reset the task-state block in `docs/CURRENT-HANDOFF.md` to idle; keep the task's durable evidence in the PR.
10. Open/update the PR into `dev`; never route ordinary work directly to `prod`.

Always use `quality-gates` for material changes. Add `security-boundary-review` only for sensitive boundaries, and frontend specialist skills only for meaningful UI work.
