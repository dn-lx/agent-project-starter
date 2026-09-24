# Requirements, Issues & Execution Plan

**Status:** Active  
**Last updated:** YYYY-MM-DD  
**Primary branch:** `dev`

Use this document as the project-level, checkable source of truth for requested features, known issues, planned improvements and completion evidence.

Do not use it as a chat transcript or duplicate implementation details that belong in source, tests or ADRs.

## How agents use this document

- Read this file when the task is product planning, backlog execution, bug/feature delivery, or when the user refers to "the requirements", "the plan", "the issues" or "what is left".
- Work from the highest-priority unchecked item unless a dependency requires a different order.
- Use stable requirement IDs in branches, PRs and handoffs when useful.
- Change `[ ]` to `[x]` only after the acceptance criteria are verified.
- Add concise completion evidence when marking an item done.
- Do not mark an item complete merely because code was written.
- Current source, tests and accepted ADRs override stale wording in this plan.
- Keep completed items for history unless the project has an explicit archival policy.

## Priority model

- **P0 — Correctness / security / blocking reliability**
- **P1 — Core product value / important UX**
- **P2 — Valuable enhancement**
- **P3 — Polish / optimization / future work**

Order work so lower-priority features do not depend on unreliable or incorrect foundations.

---

# Active requirements

## [ ] REQ-001 — Short requirement title

**Priority:** P0 / P1 / P2 / P3  
**Scope:** App / Web / Backend / Data / Infrastructure / Cross-platform  
**Type:** Feature / Bug / Reliability / UX / Security / Maintenance

**Problem / need**  
Describe the observable problem or requested outcome in plain language.

**Goal**  
Describe the desired end state, not the implementation.

**Requirements**
- Concrete behavior 1.
- Concrete behavior 2.
- Important constraints.
- Privacy/security/accessibility expectations where relevant.
- Performance budget and analytics behavior where they are part of the user/product requirement.

**Acceptance criteria**
- [ ] Observable criterion 1.
- [ ] Observable criterion 2.
- [ ] Negative/error path verified.
- [ ] Relevant tests/checks pass.
- [ ] Browser/runtime, performance or analytics-contract evidence captured when relevant.

**Dependencies**
- None / REQ-XYZ / external dependency.

**Completion evidence**  
_Add PR/commit, test/build result, screenshots/device verification or other proof here before marking complete._

---

# Known issues

## [ ] ISSUE-001 — Short issue title

**Priority:** P0 / P1 / P2 / P3

**Observed behavior**  
What currently happens?

**Expected behavior**  
What should happen?

**Reproduction / evidence**
1. Step or condition.
2. Step or condition.
3. Result.

**Acceptance criteria**
- [ ] Root cause identified.
- [ ] Fix verified against reproduction.
- [ ] Regression test added when practical.
- [ ] No relevant adjacent behavior regressed.

**Completion evidence**  
_Add verification here._

---

# Planned work / roadmap

Use this section for ordered work that is not yet detailed enough to become a full requirement.

## Phase 1 — Foundation
- [ ] PLAN-001 — Example foundational work.

## Phase 2 — Core experience
- [ ] PLAN-002 — Example product work.

## Phase 3 — Quality and release
- [ ] PLAN-003 — Example QA/release work.

Convert a plan item into a detailed requirement before implementation when scope/risk is non-trivial. If delivery sequencing, migration, rollback or handoff is also non-trivial, use the implementation-planning skill for the task-specific “how”; do not turn this requirements file into an implementation transcript.

---

# Decisions and constraints

Record decisions that materially shape execution but do not justify an ADR yet.

- Example: app and web must use one analytics contract.
- Example: background scheduling is best-effort rather than exact.
- Example: production data must never be copied into test logs.

Promote architectural/security decisions to an ADR when they become durable or cross-cutting.

# Completion summary

Use this section for a quick status view.

- [ ] P0 complete.
- [ ] P1 complete.
- [ ] P2 complete.
- [ ] P3 complete.

# Maintenance rules

- Keep requirement IDs stable after work begins.
- Do not silently change acceptance criteria after implementation; record the change.
- If a requirement is cancelled, mark it clearly as cancelled with reason/date instead of deleting it.
- If a requirement moves to another repository, leave a pointer.
- Keep this document concise enough to scan; implementation notes belong in code/PRs/handoffs.
