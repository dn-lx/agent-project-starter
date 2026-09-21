# Agentic Stack Status

Update this file after bootstrapping a real project.

| Layer | Status | Verification / remaining action |
| --- | --- | --- |
| GitHub source of truth | ⏳ Configure | Confirm repository/branch model |
| AGENTS canonical instructions | ✅ Starter | Adapt project-specific details |
| Project Memory | ⏳ Configure | Fill project facts |
| Current Handoff | ✅ Starter | Use during work |
| Agent Skills | ✅ Starter | Add project-specific skill |
| MCP capability policy | ✅ Starter | Select/connect project capabilities |
| Graphify | ✅ Repo-ready | Install local tool when useful |
| Code hygiene / dead-code analysis | ✅ Skill-ready | Use stack-specific analyzer; Knip is preferred candidate for compatible JS/TS projects |
| Headroom | 🧪 Optional pilot | Enable only after measuring a real context bottleneck and compare quality before/after |
| Context7 | ⚠️ Host-dependent | Connect/verify in agent host |
| CI checks | ⏳ Project-specific | Add actual build/test commands |
| Security CI | ✅ Generic starter | Verify/adapt scanners |
| Dependency maintenance | ✅ Starter automation | GitHub Actions updates enabled; add the real project package ecosystems during bootstrap |
| Independent review | ✅ Workflow-ready / activation project-specific | Review packet and independence rules are documented; choose the actual reviewer/agent per project |
| Browser/E2E | ⏳ Project-specific | Add when UI critical paths exist |
| Accessibility / visual regression | ✅ Skill-ready | Add project-specific axe/Playwright checks and stable baselines for critical UI flows |
| Observability | Optional | Configure if needed |
| Documentation drift | ✅ Starter | Verify schedule/workflow |
| Release guard | ✅ Starter | Configure label/ruleset as needed |

Legend:
- ✅ active/in place
- ⚠️ repo-ready but external activation required
- ⏳ project configuration required
- 🧪 pilot
- ⏸️ intentionally deferred
- Optional not required unless project needs it

Never mark an external integration active merely because documentation/configuration exists.
