# Project Memory

> Complete this file when creating a project from the starter. Keep it compact and durable. Do not paste chat transcripts here.

## Identity

- **Project name:** TODO
- **Purpose:** TODO
- **Primary users:** TODO
- **Repository:** TODO
- **Owner/team:** TODO

## Architecture

- **Frontend/runtime:** TODO
- **Backend/runtime:** TODO
- **Database/storage:** TODO
- **Hosting/deployment:** TODO
- **Authentication:** TODO
- **Key architectural boundaries:** TODO

## Important paths

| Area | Path | Notes |
| --- | --- | --- |
| Main app | TODO | TODO |
| Tests | TODO | TODO |
| Database/migrations | TODO | TODO |
| Public/static assets | TODO | TODO |
| Infrastructure | TODO | TODO |

## Commands

| Purpose | Command |
| --- | --- |
| Install | TODO |
| Development | TODO |
| Test | TODO |
| Build | TODO |
| Lint/typecheck | TODO |
| Browser/E2E | TODO |

## Environments

| Environment | Branch | Purpose |
| --- | --- | --- |
| Development | `develop` | Integration/testing |
| Production | `main` | Released code |

Add preview/staging details if the project uses them.

## Product / domain invariants

Record rules that agents must not accidentally change without an explicit product decision.

- TODO
- TODO

## Security boundaries

- Where authorization is actually enforced: TODO
- Where secrets live: TODO
- Tenant/user isolation model: TODO
- Sensitive data/logging restrictions: TODO

## External systems

List only capabilities and non-secret identifiers. Do not store credentials.

| Capability | Provider/system | Environment/account | Notes |
| --- | --- | --- | --- |
| Source control | GitHub | TODO | TODO |
| Current docs | Context7 / official docs | Agent-host dependent | Optional/required? |
| Database | TODO | TODO | TODO |
| Hosting | TODO | TODO | TODO |

See `docs/MCP-SETUP.md`.

## Durable decisions

Link accepted ADRs rather than duplicating them.

- `docs/adr/0001-agent-independent-engineering.md`

## Known gotchas

- TODO

## Context freshness

Update this file when architecture, commands, core product invariants, security boundaries or external-system topology materially changes. Source/tests/accepted ADRs override stale memory.

## Starter lifecycle tooling

- Planned initial starter version: VERSION; policy: `docs/VERSIONING.md`.
- Starter checks: `node scripts/validate-agent-stack.mjs`, `node scripts/validate-version.mjs`, `node --test tests/*.test.mjs`.
- Branch lifecycle: `docs/BRANCH-LIFECYCLE.md`.
- These checks do not replace the consuming application commands above.
