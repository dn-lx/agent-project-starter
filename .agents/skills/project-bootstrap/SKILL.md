---
name: project-bootstrap
description: Adapt Agent Project Starter into a real project without losing the shared agent-independent workflow.
---

# Project Bootstrap

Use this skill immediately after generating a new repository from the starter.

1. Read root `AGENTS.md` and `docs/PROJECT-BOOTSTRAP-CHECKLIST.md`.
2. Fill `docs/PROJECT-MEMORY.md` with real architecture, commands, important paths, environments and invariants.
3. Create `.agents/skills/<project-name>/SKILL.md` for project-specific implementation knowledge.
4. Complete the MCP capability profile in `docs/MCP-SETUP.md`; mark unused capabilities explicitly.
5. Configure `dev` and production `prod` workflow.
6. Enable native automatic head-branch deletion only after `dev` and `prod` are protected; configure task continuity/draft PR recovery.
7. Add actual project CI/test/build commands; use `test-engineering` when the project needs a harness and do not leave a fake green CI that performs no meaningful checks.
8. For frontend projects, define the browser/runtime verification matrix, theme variants and semantic color/spacing token source; add Playwright/browser tooling where useful and ensure focused contrast/alignment/overflow/clipping defects have a visual-sanity path.
9. Define measurable performance budgets when performance is user-critical, and define a privacy-safe analytics event contract when product analytics is enabled.
10. Confirm generic security workflows fit the stack.
11. Verify startup context stays within the canonical budget and use the task-context packet helper when broad tasks repeatedly load excessive files.
12. Run the template validation workflow/script.
13. Ask a fresh agent to explain project architecture, test commands, browser/visual-sanity verification, performance/analytics contracts where applicable, branch flow, MCP capabilities and release path. Fix any ambiguity it exposes.

Never copy credentials or machine-specific MCP tokens into the repository.
