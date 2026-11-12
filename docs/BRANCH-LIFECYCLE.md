# Branch lifecycle

Only `prod` and `dev` are permanent. Temporary feature/fix/chore branches are removed after their work is merged. Never automatically discard unmerged work merely to reduce the branch count.

## Development: direct commits to `dev` by default

The user authorizes ordinary changes (including features, fixes and documentation) to be committed **directly to `dev` without an implementation PR**. Refresh the current branch before editing, serialize writes to the same task/files, run the relevant checks and inspect the diff before pushing. Verify the actual `dev` SHA and CI afterwards. When checks cannot run, disclose that limitation; never claim unverified results.

Temporary isolated worktrees/feature branches are optional for genuinely concurrent or high-risk work. They are not the default and do not require a PR for integration. Do not discard unintegrated work. Cleanup follows verification of `dev` history.

## Production remains protected

Only `dev` can be promoted to `prod` by the existing production PR and explicit human approval workflow. Never push directly to `prod`, force-push it or bypass release gates. Configure **no required pull request for `dev`** (that branch rule blocks direct commits), but keep deletion/force-push protections and available CI checks. GitHub settings must actually be changed by an authorized repository administrator; documentation alone cannot override a server-side branch rule.

## Recovery

Inspect the task Issue/handoff, current `dev` commits and checks, and any existing PR/temporary branch. One modifying agent owns each task. Do not treat any open branch as proof of active work; never delete a branch with unique unmerged commits.

## Adapting branch names

`.agents/project-policy.json` is the machine-readable branch contract. Changing its integration or production branch names is a repository migration, not a one-file edit.

When adapting the names:
1. update/create the actual GitHub branches and protection/rulesets,
2. update workflow triggers and production-source guards,
3. update maintained branch/release documentation and templates,
4. update hosting/deployment branch mappings,
5. run `node scripts/validate-docs.mjs`, `node scripts/validate-agent-stack.mjs` and the project checks before adopting the new flow.

Do not change the policy JSON while leaving CI or deployment rules pointed at the old branches.
