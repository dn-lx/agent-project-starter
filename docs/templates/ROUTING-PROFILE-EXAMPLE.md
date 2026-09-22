# Routing Profile Example

This file is an example. Copy/adapt it into a project's durable configuration only when the team actually uses multiple hosts or model choices.

## Available agents/hosts

| Agent/host | Capabilities | Constraints |
| --- | --- | --- |
| ChatGPT / Codex | GitHub, connected tools, orchestration | Verify connections each session |
| Claude Code | Local repository, terminal, coding workflow | Host-specific MCP/config |
| Gemini CLI | Local repository, terminal, skills/MCP | Host-specific setup |
| Cursor | IDE-local execution, optional parallel agents | Keep workers isolated |

## Model classes

| Class | Concrete model | Host | Notes |
| --- | --- | --- | --- |
| reasoning-high | TODO | TODO | Hard reasoning/security/architecture |
| coding-high | TODO | TODO | Main implementation |
| fast-utility | TODO | TODO | Cheap/fast mechanical work |
| long-context | TODO | TODO | Use only when retrieval is insufficient |
| multimodal | TODO | TODO | Visual tasks |

## Project preferences

- Lead coordinator: TODO
- Default implementation agent: TODO
- Independent reviewer: TODO
- Maximum automatic parallel workers: 1 unless explicitly justified
- Context budget: use repository context-budget policy
- Fallback when preferred host/model is unavailable: current capable host

Do not store API keys, provider tokens or private host credentials here.
