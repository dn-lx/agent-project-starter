# Gemini CLI bootstrap

`AGENTS.md` is the canonical project instruction source.

At session start:
1. read `AGENTS.md`,
2. read `docs/PROJECT-MEMORY.md`,
3. read `docs/CURRENT-HANDOFF.md`,
4. read `docs/AGENT-PLATFORM-WORKFLOWS.md`,
5. read the relevant `.agents/skills/` instructions,
6. use Gemini's MCP status/list command before relying on external MCPs.

Do not duplicate universal rules here. Keep durable context in the repository rather than relying on Gemini session memory.
