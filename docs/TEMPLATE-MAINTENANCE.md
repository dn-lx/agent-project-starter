# Template Maintenance

This repository is itself maintained using the workflow it teaches.

## Normal changes

```text
feature/* / fix/* / chore/*
        ↓
      develop
        ↓
checks + review
        ↓
develop → main
```

Keep the starter generic. Project-specific product rules belong in generated repositories, not here.

## Before changing the starter

1. Read `AGENTS.md`.
2. Check whether the change belongs in the universal starter or only one real project.
3. Prefer capability-based wording over a permanent vendor/tool dependency.
4. Keep platform adapters thin.
5. Update validation when a new file becomes mandatory.
6. Run/inspect:
   - Agent stack validation,
   - security checks,
   - documentation-drift workflow where relevant.
7. Verify a generated/fresh project can still understand the startup sequence.

## MCP maintenance

When adding an MCP/connector recommendation:
- document the capability first,
- keep credentials outside Git,
- state safe verification,
- describe sensitive writes,
- avoid expanding the default connector list without a concrete use case.

## Versioning

A template change that materially changes branch policy, security boundaries, required skills or bootstrap structure should be documented in an ADR or release note.
