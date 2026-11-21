# Linux environment for three independent, subscription-authenticated coding CLIs.
# No account credentials or API keys are baked into this image.
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
       dbus-user-session dbus-x11 gnome-keyring libsecret-1-0 \
       python3 python3-venv jq tmux \
    && rm -rf /var/lib/apt/lists/*
