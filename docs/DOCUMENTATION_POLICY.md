# Documentation Policy

## Source of truth

GitHub repository source, tests, accepted ADRs and maintained docs are the canonical development record.

## Update documentation when a change affects

- architecture,
- routes/APIs/contracts,
- environment variables,
- external integrations/MCP capabilities,
- auth/authorization,
- database/schema,
- deployment/release,
- important user-visible workflows,
- durable product/business rules,
- agent tooling/workflow,
- project commands,
- security boundaries.

Tiny copy/style changes that do not alter behavior usually do not require architecture documentation.

## Where information belongs

- **AGENTS.md:** universal working contract.
- **Project Memory:** durable current project facts.
- **Current Handoff:** recent/unfinished state.
- **Implementation plan:** task-specific delivery sequence/rollback/verification for non-trivial work; not product intent.
- **ADR:** important architectural decision and rationale.
- **Agent Skill:** repeatable specialist workflow.
- **Analytics contract/taxonomy:** durable provider-neutral event definitions when analytics is used.
- **Verification evidence:** exact task/release check results and artifacts when a durable evidence packet is useful.
- **README:** human onboarding and project entry point.
- **PR/issue:** task-specific discussion/review history.

Avoid duplicating the same rule across multiple files.

## Documentation quality

Agents updating docs must inspect actual source/diffs/tests first. Never invent system behavior, credentials, endpoints or successful verification.
