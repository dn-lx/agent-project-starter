#!/usr/bin/env bash
# Run once after GitHub Codespaces creates this dev container.
# Installs three independent OFFICIAL CLIs; no OAuth/API secrets are requested or stored here.
set -Eeuo pipefail

mkdir -p "$HOME/.local/bin"
export PATH="$HOME/.local/bin:$PATH"
if ! grep -Fqx 'export PATH="$HOME/.local/bin:$PATH"' "$HOME/.bashrc" 2>/dev/null; then
  printf '\nexport PATH="$HOME/.local/bin:$PATH"\n' >> "$HOME/.bashrc"
fi

failed=()
echo "== Installing OpenAI Codex CLI =="
if ! npm install --global --prefix "$HOME/.local" @openai/codex; then
  failed+=("Codex")
fi

echo "== Installing Anthropic Claude Code CLI =="
if ! (curl -fsSL https://claude.ai/install.sh | bash); then
  failed+=("Claude Code")
fi

echo "== Installing Google Antigravity CLI =="
if ! (curl -fsSL https://antigravity.google/cli/install.sh | bash); then
  failed+=("Antigravity")
fi

echo
echo "== Installed command checks =="
for bin in claude codex agy; do
  if command -v "$bin" >/dev/null 2>&1; then
    "$bin" --version || true
  else
    echo "NOT FOUND: $bin"
  fi
done

if (( ${#failed[@]} > 0 )); then
  printf 'Installation needs attention: %s\n' "${failed[*]}" >&2
  echo "See docs/CODESPACES-INDEPENDENT-AGENTS.md to reinstall individual tools." >&2
  exit 1
fi

echo "Installed all three. Sign in to each separately in an interactive Codespaces terminal."
echo "Never add authentication files, browser cookies, or API keys to Git."
