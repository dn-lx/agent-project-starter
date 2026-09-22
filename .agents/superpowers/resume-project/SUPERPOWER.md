---
name: resume-project
description: Recover the trustworthy state of interrupted or stalled work and continue from the next safe step.
---

# Resume Project

1. Read `AGENTS.md`, Project Memory and Current Handoff.
2. Inspect current branch, working tree, recent commits, open PRs and relevant check/build status.
3. Verify whether the handoff is still true; source/Git/checks override stale notes.
4. Build a minimal working set: changed files, failing evidence, relevant tests and one applicable skill.
5. State the recovered outcome, completed work, blocker and exact next safe step.
6. Continue only from verified state. Do not redo completed external writes or repeat an identical failed repair.

Load conditionally:
- `memory-context` when context is broad or stale.
- `quality-gates` when implementation resumes.
- `security-boundary-review` only when the recovered task crosses a sensitive boundary.

Before ending unfinished work, refresh Current Handoff with evidence and the next safe step.
