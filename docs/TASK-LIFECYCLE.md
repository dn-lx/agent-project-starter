# Task and Branch Lifecycle

This document defines how coding work survives chat interruption, model switching and agent handoff.

## Principle

Conversation memory is not task state. GitHub is the engineering record; Current Handoff is the compact recovery record.

The normal identity chain is:

```text
task / requirement
      ↓
repository
      ↓
current `dev` commit / optional isolated worktree
      ↓
GitHub issue or handoff (PR optional)
      ↓
verified next step
```

An open branch by itself is never enough evidence to resume work.

## Task states

Supported states:

- `idle`
- `planning`
- `implementing`
- `testing`
- `reviewing`
- `blocked`
- `interrupted`
- `ready_to_merge`
- `merged`
- `cancelled`

For non-trivial implementation work, assign one writer and use a GitHub Issue when useful. No development PR is required; active tasks may have `branch: "dev"` and `pr: null`.

## Machine-readable Current Handoff block

Keep exactly one block in `docs/CURRENT-HANDOFF.md`:

```text
<!-- AGENT_TASK_STATE_START -->
{
  "task_id": "REQ-123",
  "repository": "owner/repository",
  "base": "dev",
  "branch": "dev",
  "pr": null,
  "status": "implementing",
  "last_verified_sha": "0123456789abcdef0123456789abcdef01234567",
  "next_step": "Run the targeted integration test after the API fix.",
  "updated_at": "2026-09-24T00:00:00Z"
}
<!-- AGENT_TASK_STATE_END -->
```

Use `null` for task-specific fields when status is `idle`.

Run:

```bash
node scripts/task-state.mjs --check
```

to validate the block.

## Recovery algorithm

When a new session receives "continue", "resume", "fix it", or another request that may refer to existing work:

1. read `AGENTS.md`, Project Memory and Current Handoff,
2. inspect the machine-readable task state,
3. inspect the current `dev` commit chain and any relevant Issue, optional PR or isolated branch,
4. prefer GitHub/source/check evidence over stale handoff or chat memory,
5. continue only if task, active writer and current GitHub evidence correspond to the requested outcome,
6. otherwise mark the old state stale/superseded and bind the task explicitly.

If several open branches exist, do not choose one merely because it is open.

## Direct development commit policy

The default is to commit verified code, documentation and fixes directly to `dev`. No feature branch, draft PR or development PR is required. Record task identity, affected files, next step, current SHA, test results and blockers in an Issue/Current Handoff or other durable GitHub evidence. Check for recent `dev` commits before editing and serialize changes made by different agents.

An optional temporary branch/worktree or PR may still be used for a technically justified isolated effort or explicit user request. Never claim a PR was created if none exists.

## Parallel agents

Default: one modifying writer per task and no concurrent edits to the same `dev` files.

Reviewers may work in parallel without write ownership. If two implementers are needed, give them separate temporary worktrees and integrate verified commits into `dev` one at a time; PRs are not required.

A future AI Control Plane may add expiring write leases. A lease coordinates writers; it never overrides repository truth.

## Completion and cleanup

Before finalizing a direct `dev` task, run applicable tests and inspect the exact changes to be committed. Commit with a descriptive message, verify the new `dev` SHA and available CI, and record any unverified checks. Reset the task-state block to idle when the work is complete; an unfinished task retains its next_step and writer assignment in handoff. Do not treat a previous SHA's checks as evidence for later edits.

If an optional temporary branch/PR was used, confirm its work reached `dev` before cleanup. Never delete unique unmerged work. Production promotion remains `dev → prod` with explicit production approval.
