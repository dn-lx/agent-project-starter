---
name: project-doctor
description: Audit project health, agent readiness and context efficiency using evidence before proposing repairs.
---

# Project Doctor

1. Read the compact startup context, then inspect repository structure without dumping the whole tree into model context.
2. Run/inspect agent-stack validation, documented build/test commands and current CI.
3. Check for stale handoff/memory, unclear commands, branch/release drift and missing project-specific skills.
4. Use Code Hygiene for dead/unused code questions; Dependency Maintenance for upgrades; Graphify/search for change-impact navigation.
5. Check security tooling and sensitive boundaries only to the depth justified by the project.
6. Measure startup context with `scripts/context-budget.mjs`.
7. Produce prioritized findings with evidence, impact and a concrete repair path.
8. Apply repairs only within the requested scope; avoid turning an audit into an unbounded rewrite.

The goal is fewer ambiguities, less repeated discovery and smaller working context without reducing verification quality.
