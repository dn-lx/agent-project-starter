# CLAUDE bootstrap

@AGENTS.md
@docs/PROJECT-MEMORY.md
@docs/CURRENT-HANDOFF.md
@docs/AGENT-PLATFORM-WORKFLOWS.md

The imports supply shared rules and current context. Do not redefine them here.

Load applicable skills from `.claude/skills/`; these adapters point to canonical `.agents/skills/` sources. Read the canonical file before acting and resolve bundled resources from its directory. Inspect loaded context with `/memory` or `/context`.

For setup or missing context/skills, read `docs/CLAUDE-GEMINI-SETUP.md`. Inspect `/mcp` and verify connections before external work. Host settings and permissions still apply.

After a context reset or agent switch, re-read Current Handoff and inspect current Git state. Keep durable decisions in repository docs, not private session memory.
