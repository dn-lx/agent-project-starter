---
name: release-workflow
description: Enforce direct development commits to dev and human-approved dev → prod releases.
---

# Release Workflow

## Non-negotiable production rule

`prod` is production/release.

The only branch allowed to merge into `prod` is this repository's `dev` branch.

```text
verified direct commits
             ↓
           dev
             ↓
       checks + review
             ↓
      dev → prod PR
             ↓
     production-approved
             ↓
            prod
```

## Development changes

1. Refresh current `dev` and confirm one writer owns the task/files.
2. Make the smallest complete change directly on `dev` (or in a temporary isolated worktree if needed).
3. Run relevant tests/checks and inspect the final diff before committing.
4. Commit directly to `dev` without a development PR.
5. Verify the committed SHA and available CI; report any check not run or any failure.
6. Use PRs for `dev → prod` releases or only when the owner explicitly requests a development PR.

## Production release

Require:
- base = `prod`,
- head = same-repo `dev`,
- `production-approved` label as the repository's supplemental release gate,
- required checks passed,
- release diff reviewed,
- migrations/secrets/external-service/deployment changes explicitly reviewed,
- runtime/deployed-revision verification and rollback/containment plan defined when the project has a production runtime; see `docs/OPERATIONS-RECOVERY.md`.

The label check alone cannot prove that a human made the approval decision. Configure branch/ruleset protection or an equivalent protected deployment approval so production remains genuinely human-controlled; do not let an automation agent self-satisfy the intended human gate.

Prefer a normal merge commit for dev→prod when preserving branch ancestry is useful.

## Forbidden

Never:
- merge feature/fix/chore directly to prod,
- push implementation directly to prod,
- force-push prod,
- cherry-pick around release policy,
- deploy a feature branch as production to bypass Git,
- weaken release guards to force a release.

## Emergency fixes

Emergency does not bypass the dev-only rule. Stabilize dev, verify the fix, then release dev→prod.
