---
name: ship-release
description: Prepare a verified develop-to-main release while preserving the repository release contract.
---

# Ship Release

1. Confirm the candidate is the repository's current `develop`; no feature branch may target `main`.
2. Load `release-readiness` and `release-workflow`.
3. Review the complete develop→main diff, version/changelog impact, migrations, environment changes and external-service changes.
4. Require all mandated checks and release evidence to be green/current.
5. Create/update the develop→main PR with a compact release summary and unresolved risk.
6. Preserve explicit human production approval. Do not auto-approve or bypass release guards.
7. After an approved merge, verify production/deployment evidence where available and preserve a concise release handoff.

Never use urgency to bypass the develop-only production rule.
