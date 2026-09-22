# Model Routing Policy

Model routing is the second stage of execution routing. Choose the agent/host first using `docs/EXECUTION-ROUTING-POLICY.md`, then choose an appropriate model within that host.

## Objective

Optimize for correctness, reliability and task fit first. Cost/usage may break ties between comparably capable options but must not silently downgrade required capability.

## Stable capabilities

Routing should classify work into capabilities such as:
- architecture,
- security,
- debugging,
- backend,
- integration,
- implementation,
- refactor,
- frontend,
- multimodal,
- large-context,
- translation/localization,
- documentation,
- investigation,
- general.

Provider/model names are replaceable runtime mappings, not permanent project truth. Prefer stable model classes such as `reasoning-high`, `coding-high`, `fast-utility`, `long-context` and `multimodal`, then map those classes to concrete models in the active host/project profile.

## Selection

1. Determine the role/capability and risk.
2. Check which models/classes are actually available in the already-selected host.
3. Select the smallest model class that is still capable of the task.
4. Escalate to a stronger class when ambiguity, failure evidence or risk requires it.
5. Do not switch hosts merely to chase a model unless the expected gain justifies context transfer.
6. Preserve explicit manual override when safe.
7. For high-risk work, prefer an independent capable reviewer/model/session when practical.

## Evidence-driven adaptation

Over time, record project-specific outcomes:
- first-pass success,
- test/build success,
- review findings,
- repair rounds,
- PR acceptance,
- latency,
- context/usage estimates.

Use actual project outcomes to tune routing rather than generic benchmark claims alone.

## Usage protection

Do not protect usage by sacrificing correctness. Instead:
- retrieve only relevant files,
- use Graphify/search before broad reads,
- use fresh sessions per task where appropriate,
- compact durable memory,
- cap automatic retries,
- detect repeated identical failures,
- use deterministic tools for checks instead of asking models,
- give reviewers only the evidence they need.

See `docs/MEMORY-CONTEXT-POLICY.md`.
