# Branch lifecycle

Only main and develop are permanent. Temporary feature/fix/chore branches are removed after their work is merged. Never automatically discard unmerged work merely to reduce the branch count.

## Automated cleanup

`.github/workflows/branch-cleanup.yml` runs after every develop push, including PR merges, and sweeps previously merged branches. It can be dispatched on develop after the workflow is available on the default branch. It does not execute PR-head code with a write token.

`scripts/cleanup-branches.mjs` preserves main, develop, the default branch, protected branches, open-PR branches, unmerged branches, forks and branches with commits added after their merged PR. It supports squash/rebase PRs by matching the recorded PR head SHA rather than requiring Git ancestry. Both branches and PR results are paginated. Immediately before deletion it rechecks the head and PR state. Deletion uses Git push with an explicit SHA `--force-with-lease`, so the remote atomically refuses deletion if new commits arrive after the recheck. A lease rejection fails visibly without a forced retry. Do not reuse completed branch names.

Dry run: `node scripts/cleanup-branches.mjs`

Apply: `node scripts/cleanup-branches.mjs --apply`

Both require GITHUB_REPOSITORY and a securely provided GITHUB_TOKEN with contents write / pull requests read for apply. Never paste tokens into commands, Git or logs. Permission/ruleset failures fail the job visibly rather than pretending cleanup succeeded. Another push to develop retries cleanup.

## Agent completion rule

After merging into develop, inspect cleanup results and verify the remote branch is gone. If it remains, inspect its PR/head SHA and permissions before retrying. Locally use `git fetch --prune`; switch away from the completed branch, check worktrees/dirty files, then delete it safely. Squash-merged local branches may require explicit inspection before deletion; never use blanket forced deletion. Record unresolved leftovers in Current Handoff.

## Repository setup

Protect main and develop against deletion and force pushes. Require PRs and relevant checks, including version validation and the main production guard. GitHub's native automatic head-branch deletion is optional only after develop is protected against deletion; it can otherwise remove develop after a production PR. This cleanup workflow explicitly preserves develop.

An unmerged abandoned branch needs an explicit reviewed decision to archive/preserve or discard its work. No automatic age-based deletion.
