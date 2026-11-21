# Independent Claude Code, Codex and Antigravity in GitHub Codespaces

This environment installs **three separate official coding CLIs** into the *same* GitHub Codespace. There is **no required lead agent**, no automatic delegation, and no Claude-to-Codex plugin.

- Claude Code: `claude` (Anthropic sign-in)
- OpenAI Codex: `codex` (ChatGPT sign-in)
- Google Antigravity CLI: `agy` (Google account sign-in, if eligible)

Each agent has its own session, account, usage limits and settings. All three can operate on repository files, but they **do not automatically share conversation history**. Share durable instructions in `AGENTS.md`, project memory and committed handoffs.

## Open from an iPad or desktop

1. Open this repository in GitHub and select the **Codespaces** tab under **Code**.
2. For a trial, choose the configuration branch `chore/codespaces-independent-agents-20261121` (or a branch where this configuration has been merged). Create a codespace; select a modest machine to control compute costs.
3. Open the codespace in the browser. GitHub builds the dev container and runs `.devcontainer/install-agents.sh` once after creation.
4. In the integrated terminal, run `bash .devcontainer/check-agents.sh`.
5. Open **three different terminal tabs**. Run one agent in each:

   - Terminal 1: `claude` and complete Anthropic's sign-in.
   - Terminal 2: `codex login --device-auth` if device-code sign-in is enabled, then `codex`. Use ChatGPT sign-in, *not* an API key.
   - Terminal 3: `agy`, then follow its interactive configuration and Google sign-in.

Do not put passwords, tokens, cookies, `~/.codex`, `~/.claude`, or `~/.gemini` into Git, issue comments, CI logs, or a public terminal. The installation script does not create API keys or authenticate on your behalf.

## Independent interfaces and remote access

| Interface | Uses this exact Codespace by default? | Notes |
| --- | --- | --- |
| GitHub Codespaces browser terminal (including Safari on iPad) | **Yes** | Launch `claude`, `codex`, or `agy` in separate terminals |
| Claude mobile/web Remote Control | **Only after explicitly linking a live Claude Code session** | Check current `claude --remote-control` support and provider eligibility |
| Codex app/web | **No automatic link** | A separate cloud Codex session is not the Codespaces CLI process; remote-host attachment needs independent setup |
| Antigravity web Remote Control | **Only after linking a live Antigravity CLI session** | Confirm headless authentication/keyring and remote-control availability |
| Desktop Antigravity IDE | **No automatic link** | Remote Linux connection requires configured SSH access and client on Windows/macOS/Linux |

**Important:** GitHub Codespaces may stop on idle. Stopped Codespaces do not run continuous agents; restart them to resume. CLI sessions may not survive container rebuilds or stops. Git work and committed handoffs do.

## Linux keyring note for Antigravity

Antigravity CLI uses secure OS credential storage. The container includes D-Bus and keyring packages, but a headless Codespace may **still** need an active D-Bus session and an unlocked secret-service keyring.

If `agy` reports a D-Bus/keyring error, consult Google's [Antigravity CLI troubleshooting](https://antigravity.google/docs/cli/troubleshooting). An interactive `dbus-run-session -- bash` can establish a session bus, but it does not guarantee a usable unlocked keyring. Do not disable secure credential storage or copy tokens into the repository to work around failures. Antigravity login in GitHub Codespaces **must be tested live**.

## Working safely

- Work from a **feature/chore/fix** branch; never directly change production branches.
- For concurrent editing, allocate **distinct Git worktrees** to each agent. Otherwise allow only one modifying agent at a time and use the others for review.
- Use the existing `AGENTS.md`, `.agents/project-policy.json`, `docs/PROJECT-MEMORY.md` and `docs/CURRENT-HANDOFF.md`.
- Keep GitHub and each provider's account credentials private. Do not run unreviewed third-party plugins or automatic agents with blanket permissions.
- Check the Codespaces compute/storage allowance and idle timeout in your GitHub settings. This environment is not an always-on, zero-cost VPS.
- Model access/consumer-plan quotas are managed by each provider independently. No shared quota monitor or cross-subscription routing is installed.

## Reinstall an individual CLI

```bash
# Codex (official npm package; installed under user home)
npm install --global --prefix "$HOME/.local" @openai/codex

# Claude Code (official native installer)
curl -fsSL https://claude.ai/install.sh | bash

# Antigravity CLI (official installer)
curl -fsSL https://antigravity.google/cli/install.sh | bash

# Read-only status
bash .devcontainer/check-agents.sh
```

## Verification checklist

- [ ] Codespace built successfully from the configuration branch
- [ ] `claude --version` works
- [ ] `codex --version` works
- [ ] `agy --version` works
- [ ] Separate subscription-based logins succeed
- [ ] Each CLI can open a read-only repository task
- [ ] Remote-control option works where required
- [ ] Codespaces usage/billing limits reviewed

**Documentation:** [GitHub dev containers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers), [Claude Code setup](https://code.claude.com/docs/en/setup), [Codex CLI](https://github.com/openai/codex), [Antigravity CLI](https://antigravity.google/docs/getting-started).
