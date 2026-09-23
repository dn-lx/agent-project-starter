---
name: release-readiness
description: Review a dev→prod release candidate for correctness, security, external changes and rollback readiness.
---

# Release Readiness

Before a production release:

1. Confirm PR head is `dev`, base is `prod`, and required production approval is present.
2. Review complete release diff for unrelated/unfinished work.
3. Confirm required syntax/unit/integration/browser/security/dependency checks passed.
4. Review migrations, environment variables, redirects/headers and external-service changes.
5. Confirm observability/release verification is ready when configured.
6. Record rollback path and irreversible operations.
7. Prepare a concise release summary using `docs/templates/RELEASE-SUMMARY-TEMPLATE.md` for material releases.
8. Report exact evidence and unresolved risks.

This skill reviews readiness; it does not authorize production deployment.
