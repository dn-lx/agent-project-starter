# Agent Orchestration

Use capability roles so the workflow remains agent-independent.

## Roles

### Planner / Architect
Use for ambiguous, cross-system or high-risk work. Produces a compact plan, affected boundaries, risks and verification strategy.

### Executor / Implementer
Makes the smallest complete change on an isolated branch/worktree and follows project-specific skills.

### Independent Reviewer
Uses the original requirement, final diff, relevant source and deterministic check results. It does **not** need the implementer's full transcript.

### Security Reviewer
Used when auth, permissions, secrets, payments, personal data, tenant isolation, privileged functions or external write boundaries change.

### Multimodal / Long-context Specialist
Used when screenshots, PDFs, large document sets or repository-scale context materially matter.

### Fast Utility Worker
Used only for low-risk mechanical tasks where the capability is clearly sufficient.

## Default flow

```text
request
  ↓
classify capability + risk
  ↓
retrieve minimal relevant project context
  ↓
plan if complexity/risk justifies it
  ↓
implement
  ↓
deterministic tests/build/lint/browser checks
  ↓
independent review when required
  ↓
repair confirmed findings
  ↓
rerun relevant checks
  ↓
branch + PR
  ↓
human release approval
```

## Review rules

Require independent review when practical for:
- security/auth/authorization,
- payments,
- schema/data migrations,
- privacy-sensitive flows,
- architecture changes,
- release/deployment boundaries,
- critical high-impact code.

Automated deterministic checks are stronger evidence than a model reviewing its own work.

## Context efficiency

Pass reviewers:
- original requirement,
- current diff,
- changed/relevant files,
- project rules,
- test/build evidence.

Do not pass a long implementation transcript unless it contains unique required evidence.

See `docs/MEMORY-CONTEXT-POLICY.md`.
