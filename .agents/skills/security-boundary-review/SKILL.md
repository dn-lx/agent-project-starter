---
name: security-boundary-review
description: Review authentication, authorization, secrets, sensitive data, external writes and command-execution trust boundaries.
---

# Security Boundary Review

Trace each protected action from user/agent input to the actual enforcing server/database/OS/external-system boundary.

Check:
- actor and allowed resource/action,
- where authorization is truly enforced,
- tenant/user ownership checks,
- public vs secret configuration,
- command construction and shell/process boundaries,
- repository URL/branch/write permissions,
- provider prompts/context for secret leakage,
- logs/events/error output for credentials or sensitive data,
- storage/file permissions,
- least privilege on external connectors,
- destructive/reversible nature of writes.

Browser UI restrictions are not server authorization.

For auth/authorization/worker privilege/secrets/payments/data changes:
- run independent security review,
- include denied/negative-path tests where practical,
- report unresolved risk rather than assuming safety.
