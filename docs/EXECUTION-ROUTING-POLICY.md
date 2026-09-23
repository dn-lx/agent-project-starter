# Execution Routing Policy

Execution routing has two independent axes:

1. **Agent/host assignment** — where the work runs and which tools/data it can access.
2. **Model assignment** — which reasoning/coding model class that agent uses.

Do not confuse a host with a model. Cursor, ChatGPT/Codex, Claude Code, Gemini CLI, Copilot, Cline/Roo and similar environments are execution hosts/agents. A host may expose one model or several.

## Routing flow

```text
request
  ↓
task/outcome routing
  ↓
agent/host assignment
  ↓
model-class assignment
  ↓
one lead agent by default
  ↓
selected Superpower + minimal skills/context
  ↓
deterministic checks
  ↓
independent reviewer only when risk justifies it
```

## Agent/host assignment

Choose the host based on concrete capabilities available **now**, not brand preference.

Typical capability dimensions:
- local repository/filesystem access,
- terminal/build environment,
- IDE editing,
- GitHub/PR/CI access,
- browser/computer use,
- connected apps/MCPs,
- mobile/device tooling,
- database/hosting access,
- safe isolated worktrees/branches,
- ability to create a genuinely independent review session.

Prefer the current host when it can complete the task safely. Moving work to another agent has a context-transfer cost, so delegation needs a concrete benefit.

## Model-class assignment

Use stable classes rather than hard-coding provider winners:

| Model class | Use for |
| --- | --- |
| reasoning-high | architecture, hard debugging, security, ambiguous cross-system decisions |
| coding-high | substantial implementation and refactoring |
| fast-utility | mechanical edits, straightforward docs, summaries, deterministic follow-up |
| long-context | large repository/document synthesis after targeted retrieval is insufficient |
| multimodal | screenshots, visual evidence, image-heavy UI work |

Projects may map these classes to concrete model IDs in a routing profile. Mappings are runtime configuration and may change without altering project rules.

## Single-agent mode

When only one agent/host is available, such as a single ChatGPT/Codex session:

- keep one lead agent,
- use the best available model/class in that host,
- perform roles sequentially,
- use deterministic tooling instead of spawning artificial reviewers,
- use a fresh review pass/session only when the host supports it and risk justifies it.

The absence of multiple agents is not a defect.

## Multi-agent mode

Multiple agents are useful when work can be partitioned cleanly.

Good parallel candidates:
- independent research vs implementation,
- separate non-overlapping modules,
- implementation vs read-only security/review,
- UI verification vs backend implementation,
- independent test creation for a stable interface.

Poor parallel candidates:
- two agents editing the same files,
- three agents reading the whole repository to answer the same question,
- duplicate implementation attempts without a specific comparison objective,
- multiple reviewers for low-risk changes.

One coordinator owns:
- task decomposition,
- context packets,
- branch/worktree ownership,
- integration,
- final deterministic checks,
- handoff.

## Context packets

A delegated agent should receive only:
- scoped requirement,
- relevant project rules,
- affected files/interfaces,
- deterministic evidence or failing output,
- expected deliverable.

Do not pass full chat histories or another agent's hidden reasoning.

## Default provider profile

Provider names can be used as a **starting operating profile**, not as a permanent quality ranking:

- **ChatGPT/Codex host:** often useful as coordinator when GitHub/connectors/cross-system tools are available.
- **Claude Code host:** often useful as an implementation worker when it owns the local repository/terminal workflow.
- **Gemini CLI host:** can be used as an implementation or independent review worker when its local/tool context is advantageous.
- **Cursor or another multi-agent IDE:** can coordinate multiple isolated workers when the task decomposition genuinely benefits from parallelism.

Actual assignments must follow verified host capabilities and project outcomes. Do not route work to a provider merely because this example mentions it.

## Curated CLI baseline

The default multi-host toolset is intentionally limited to:
- **Claude Code** — primary local implementation/refactoring worker when its repository/terminal context is advantageous.
- **Codex CLI** — independent implementation, difficult debugging or review worker in an isolated worktree.
- **Gemini CLI** — alternative analysis, long-context synthesis or independent review when useful.
- **OpenCode** — provider-neutral fallback/session runner when portability or provider choice is the concrete benefit.

This is an operating baseline, not a permanent ranking. One coordinator owns integration, and one lead worker is the default. Do not invoke all four by default.

Do not add Aider, Goose, Qwen Code, Kiro or another coding-agent host unless the project records a specific capability gap not already covered by this baseline. See `docs/CLI-AGENT-STACK.md`.

## Measurement

Track routing quality with:
- first-pass success,
- deterministic check success,
- repair rounds,
- review findings,
- context/usage estimate,
- latency,
- handoff/integration failures.

Optimize based on project evidence rather than benchmark reputation alone.

See:
- `.agents/skills/execution-routing/SKILL.md`
- `docs/AGENT-ORCHESTRATION.md`
- `docs/MEMORY-CONTEXT-POLICY.md`
