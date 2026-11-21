#!/usr/bin/env bash
# Read-only verification: installed tools, versions, and basic runtime readiness.
set -u
export PATH="$HOME/.local/bin:$PATH"
echo "Codespaces agent CLI diagnostics (does not check or reveal authentication)"
for cmd in git node npm python3 tmux dbus-run-session claude codex agy; do
  printf '%-18s' "$cmd"
  if command -v "$cmd" >/dev/null 2>&1; then
    case "$cmd" in
      python3) "$cmd" --version 2>&1 | head -n 1 ;;
      tmux) "$cmd" -V 2>&1 | head -n 1 ;;
      dbus-run-session) echo "$(command -v "$cmd")" ;;
      *) "$cmd" --version 2>&1 | head -n 1 ;;
    esac
  else
    echo "NOT INSTALLED"
  fi
done
echo
echo "Next: sign in separately with 'claude', 'codex login --device-auth', and 'agy'."
echo "Authentication and subscription limits are not verified by this script."
