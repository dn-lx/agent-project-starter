# GEMINI bootstrap

@./AGENTS.md
@./docs/PROJECT-MEMORY.md
@./docs/CURRENT-HANDOFF.md
@./docs/AGENT-PLATFORM-WORKFLOWS.md

The imports supply shared rules and current context. Do not redefine them here.

Discover on-demand skills directly from `.agents/skills/`. Do not maintain a second copy in `.gemini/skills/`. Inspect `/memory show` and `/skills list` before relying on context or skills.

For setup or missing context/skills, read `docs/CLAUDE-GEMINI-SETUP.md`. Inspect `/mcp` and verify connections before external work. Host settings and permissions still apply.

After a context reset or agent switch, re-read Current Handoff and inspect current Git state. Keep durable decisions in repository docs, not private session memory.
