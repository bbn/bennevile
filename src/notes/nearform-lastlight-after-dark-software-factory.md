---
title: "Last Light: a self-hosted factory that works after dark on your GitHub"
description: "NearForm Last Light: webhook/cron triage + PR review, Architect→Executor→Reviewer builds, permission-scoped App tokens, and evals scored on your own repos — not someone else’s bench."
date: 2026-04-04
kind: field-note
source:
  title: "Last Light — self-hosted AI software factory for GitHub"
  url: https://lastlight.dev/
project: steward
---

[Last Light](https://lastlight.dev/) (NearForm; open [nearform/lastlight](https://github.com/nearform/lastlight), MIT) is a self-hosted **after-dark software factory** for a GitHub org: triage issues, review PRs, run security and health sweeps, and — on maintainer `@mention` — walk a full **Architect → Executor → Reviewer** line that opens a PR. The marketing line is the operating claim: the factory keeps working while you are away, on a production line you own.

The continuous spine is event-driven when you can expose a webhook, cron when you cannot. Issue triage every **15 min** (cron) or on `issue.opened`; PR review every **30 min** or on `pr.opened`; weekly health/security digests on Mondays; optional Slack digest with **computed** numbers, not model prose. Build cycles are opt-in expensive: Context → Guardrails (agent names the full test command into `.git/lastlight-gate.sh`, then a **deterministic bash gate** runs it once — READY only if exit 0) → Architect (read-only plan) → Executor (TDD) → Reviewer in a **fresh context** with up to two fix loops → Create PR. Approval gates can pause for a human from GitHub comment, Slack, or the dashboard. Every workflow phase runs under a **downscoped GitHub App token** (`read` / `issues-write` / `review-write` / `repo-write`) so a triage run literally cannot push code. Per-repo `.lastlight/` overlays are read from the default branch only — a PR cannot reconfigure the agent reviewing it — and can only tighten operator bounds.

The trust move that matters for continuous factories: an **evals harness** that runs the same YAML workflows against a mocked GitHub, scored on cases mined from **your** merged PRs and resolved issues (`add-case --pr` / `--issue`), not SWE-bench cosplay. Model pick, prompt change, and calibration close against a blind held-out gate. Dashboard + OTEL traces make overnight spend and phase outcomes inspectable in the morning.

## Why it matters for code review

Always-on review capacity is the scarce half of agent volume. Last Light treats PR review and stranded-review cron as first-class line jobs, keeps merge authority human via gates, and measures the factory on the operator’s own history. Continuous harnessed throughput looks like triage and review that never sleep — and FOMO when the queue was quiet overnight is often “no webhook, no cron,” not “Claude had a bad night.”
