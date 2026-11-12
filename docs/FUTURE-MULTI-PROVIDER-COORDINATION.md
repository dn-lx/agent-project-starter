# Future plan: subscription-first multi-provider coordination

> **Status: Proposed / opt-in / not implemented.** The core starter's current development policy is verified direct commits to `dev` without development PRs; the provider orchestration remains future-only. This is a roadmap item, not an active automation or a change to the default coordinator. Revisit current provider limits, billing, and security before adopting it.

## Goal

Enable a project built from Agent Project Starter to coordinate several coding agents through **GitHub as the durable source of truth**, with one primary coordinator and a deliberately selected backup. Prefer included subscription or genuinely free allowance over separately billed API calls. Preserve the starter's provider-neutral engineering and release policies.

The consuming project's *optional* example profile may prefer:

- **Claude** as primary coordinator for user communication, requirements, architecture, task decomposition, review and explicit worker handoff;
- **ChatGPT** as backup coordinator, with equivalent repository/task authority only after a deliberate takeover;
- **Claude Code** and **Codex** as first-party coding workers, selected independently of coordinator choice;
- **Google Antigravity / Gemini**, **OpenCode**, **GitHub Copilot Free**, and other capable hosts as optional specialists.

No provider is hardwired into `AGENTS.md` as universally superior. Different projects may choose different coordinators and model mappings.

## Roles and flow

```text
User → active coordinator (one of: preferred / backup)
     → reconcile GitHub issue + handoff + dev commits + CI
     → classify outcome, risk and available capabilities
     → choose worker host, then supported model class/effort
     → verified direct dev commit; optional isolated worktree
     → deterministic build/tests/browser checks
     → independent review when risk justifies it
     → repair verified findings + reverify final SHA
     → verify direct dev commit and checks (no development PR)
     → human approval before dev → prod
```

The backup reads the same GitHub evidence when taking over; it must not duplicate an unfinished implementation or simultaneously coordinate the same task. Project source, current dev commits, CI results and optional PR history are more authoritative than old transcripts or a speculative handoff note.

### Coordinator handoff fields

`task_id`, `coordinator`, `executor`, `repository`, `base_branch`, `work_branch`, `pr_url`, `last_verified_sha`, `checks`, `unresolved_findings`, `next_step`, `usage_constraints`, `updated_at`. These are **suggested future data fields**; do not add a competing machine-readable handoff if the existing `docs/CURRENT-HANDOFF.md` contract can be extended compatibly.

### Dispatch limitations

GitHub files, issues and labels cannot by themselves authenticate as a user or command a subscription-backed Codex/Claude cloud session. Agent sessions and model/effort choices require a **verified supported native action or manual handoff**. Never mark a task as started because an issue was labeled `agent:codex`; verify an actual agent run. Unattended cross-provider orchestration is a separate capability requiring proof of compatibility and bounded cost.

## Model and host routing

Keep the two dimensions from `docs/EXECUTION-ROUTING-POLICY.md`:

1. **Host/capability selection** — GitHub integration, runtime execution, terminal, browser, mobile access, context/data locality, privacy and current allowance.
2. **Model-class selection** — `fast-utility`, `coding-high`, `reasoning-high`, `long-context` or `multimodal`, with reasoning effort only where that particular host supports it.

Suggested nonbinding project mapping:

| Task class | Preferred starting point | Escalation |
| --- | --- | --- |
| Low-risk mechanical edits | economical Codex/Luna-class model, low/medium | stronger model if checks fail |
| Routine UI and feature changes | Codex Luna/Sol-class model, medium | Sol/Claude Sonnet-class for complexity |
| Complex cross-module code | capable Claude Sonnet / Codex Sol-class, medium/high | stronger included model with documented reason |
| Architecture, security, migrations | strongest appropriate included model | independent review and negative-path tests |
| High-risk reviews | different capable provider or fresh review session | deterministic checks remain required |

Model names, model entitlements, reasoning controls, subscription usage limits and leaderboard results must be **verified at adoption time**. Never claim fixed reasoning-token multipliers or that GitHub policy switches a client's reasoning slider.

## Candidate provider catalog (research, not automatic installs)

| Candidate | Role to evaluate | Required check |
| --- | --- | --- |
| Anthropic Claude Pro + Claude Code | Primary planning/implementation/review | Subscription usage; native GitHub and cloud task support |
| ChatGPT Plus + Codex | Backup coordination, coding, review | Included plan allowance; selected model/effort actually accessible |
| Google Antigravity Individual | Browser/UI verification and Gemini agent work | Free limits; desktop availability (macOS/Windows/Linux) vs iPad/Android workflow |
| Gemini CLI | Optional terminal coding/long-context host | Current free allowance, auth, actual compute location |
| GitHub Copilot Free | Editor completions and optional review aid | Free completion/request quotas and supported host |
| OpenCode | Open-source provider-neutral coding interface | Subscription login where allowed; never assume other providers are free |
| Qwen Code | Optional open-source coding host | Inference provider access, model cost, local/cloud compute |
| Qwen, DeepSeek, Moonshot Kimi, Z.ai GLM, Mistral, xAI Grok | Alternative model suppliers for comparison | Current model availability, privacy, true zero-cost option; otherwise research only |
| Meta Llama-family and other open-weight local models | Future private/local fallback | Device/GPU capability, energy/hosting costs, security/maintenance |

A free CLI/agent framework is not the same as free inference or free hosting. Add further products only after `docs/STACK-RESPONSIBILITY-MAP.md` identifies a concrete gap. Avoid four agent wrappers doing overlapping work by default.

## GitHub and cost guardrails

- No third paid AI subscription, no separately billed provider APIs, no purchased credits or metered overages without a new explicit budget decision.
- Verify GitHub Free’s included private-repo Actions compute, Codespaces core-hours/storage and any other metered allowances. Configure **hard-stop budgets** (not alert-only budgets) where supported, plus usage alerts; otherwise avoid the billable operation.
- On 2026-11-12, official GitHub documentation lists **$12/month included Actions compute**, **120 Codespaces core-hours/month**, and **15 GB-month Codespaces storage** for personal GitHub Free. These numbers are time-sensitive and are not limits guaranteed for every account/context.
- Keep credentials, subscription tokens, personal/private docs and account-specific billing details **outside this public starter repository**.
- Reuse `AGENTS.md`, `.agents/project-policy.json`, `docs/PROJECT-MEMORY.md`, `docs/CURRENT-HANDOFF.md`, issues and PRs rather than creating competing truth stores.
- Observe this starter's branch contract: verified direct commits → `dev` → approved production PR → `prod`. Development PRs are not required; production approval remains mandatory. Consuming projects may adopt equivalent integration/production branch names only after an explicit documented migration.
- Keep an iPad/browser-first path using native cloud agents where supported. Antigravity desktop or local agent CLIs must not be assumed to run from an iPad without an eligible remote execution environment.

## Phased adoption

**Phase 0 — Document only (current).** Retain this roadmap and a future-work issue. Do not change active routing, model defaults, subscriptions, permissions or deployment policy.

**Phase 1 — Manual dual-coordinator pilot.** Verify Claude and ChatGPT can read GitHub and follow the same handoff schema. Manually switch coordinator ownership during a real scoped issue.

**Phase 2 — Native execution pilot.** Test one Claude Code task and one Codex task, using subscription logins and verified GitHub permissions. Require verified direct commits to the integration branch, passing appropriate tests and an accurate final report.

**Phase 3 — Optional free specialists.** Try Antigravity/Gemini, Copilot Free or OpenCode one at a time when there is a real capability gap and no additional charge. Do not enable all candidates together.

**Phase 4 — Restricted automation.** Add suggested routing labels/status sync only if there is a supported, secure, subscription-compatible trigger and the cost can be bounded to zero incremental spend. Otherwise keep manual dispatch.

**Phase 5 — Template integration.** Promote tested opt-in profiles, schema and acceptance checks after 20–30 real tasks show improved correct-completion and reliability. Keep the core template provider-independent.

## Acceptance criteria before implementation can be called complete

- [ ] Primary and backup coordinators can read the same current issue, `dev` commits, checks, handoff and optional PR.
- [ ] Single active coordinator/task owner; no conflicting branch edits.
- [ ] Each requested coding agent can actually run via a supported method, not merely an issue label.
- [ ] Model and reasoning choices are reported only when confirmed in the relevant host.
- [ ] Passing code/build/test evidence and review correspond to the final direct `dev` commit SHA.
- [ ] Handover test succeeds without replaying long chat history.
- [ ] GitHub costs, optional provider fees and private-data boundaries are verified.
- [ ] Integration branch is protected by process/available platform mechanisms; production remains human approved.
- [ ] Browser/mobile user can complete the required manual handoffs.
- [ ] Default starter remains functional when no third-party tools are connected.

## Baseline references

- Claude pricing: https://claude.com/pricing
- Codex pricing: https://chatgpt.com/codex/pricing/
- Antigravity pricing: https://www.antigravity.google/pricing
- Antigravity 2.0 desktop: https://antigravity.google/blog/introducing-google-antigravity-2
- GitHub included usage: https://docs.github.com/en/billing/reference/product-usage-included
- GitHub budgets: https://docs.github.com/en/billing/how-tos/set-up-budgets
- OpenCode provider auth: https://opencode.ai/docs/providers/
- Qwen Code: https://github.com/QwenLM/qwen-code

**Operating principle:** one human goal, one active coordinator, GitHub as durable task state, the smallest reliable capable agent/model, risk-appropriate independent verification, dev-first delivery, and no unapproved incremental spend.
