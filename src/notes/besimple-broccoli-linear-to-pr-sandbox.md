---
title: "Broccoli: Linear tickets become PRs overnight — humans still merge"
description: "Apr 22 Besimple Broccoli OSS: assign Linear to a bot; Codex/Claude in your Cloud Run or Blaxel sandbox plan, implement, open a PR; review-feedback loops; human owns merge."
date: 2026-04-22
kind: field-note
source:
  title: "Broccoli OSS — AI teammates for your engineering loop"
  url: https://github.com/besimple-oss/broccoli
project: steward
---

[Besimple](https://github.com/besimple-oss/broccoli)’s Broccoli OSS (Show HN Apr 22; MIT; ~286★ by late Sep) is a self-hosted **ticket → sandbox → PR** factory you run on your own GCP (Cloud Run Jobs by default; optional Blaxel sandboxes). Assign a Linear issue to a dedicated bot user; a FastAPI webhook service dedupes delivery, writes durable Postgres job state, and launches a runner that drives Codex and Claude CLIs against your vendored prompts. The runner checks out the repo, plans and implements in an isolated container, runs tests and review loops, and opens a GitHub PR for a human. Secrets stay in your Secret Manager; no third-party control plane sits between you and the keys.

Three job kinds keep the overnight loop closed without handing over merge authority: `linear_issue_automation` (ticket → PR), `github_pr_code_review` (Claude/Codex comments on the diff), and `github_pr_review_feedback` (scheduled overnight cleanup of open review comments so morning PRs are quieter). Lifecycle comments on Linear/GitHub are best-effort side effects — they never decide runner success. Operators own prompts, IAM, and which repos the GitHub App installs on. The permanent boundary in the HN thread is the same one that makes factories useful: Broccoli prepares the change; someone on the team still reviews and merges.

## Why it matters for code review

Harnessed 24/7 throughput beats bursty session heroics when the night’s output lands as reviewable PRs with durable job state — not as a laptop chat that died at 3am. Continuous factories still lose if review volume outruns humans; Broccoli’s bet is isolation plus a human merge gate, not auto-land. FOMO that nothing moved overnight is the wrong fear — the right one is a morning queue of bot PRs nobody scheduled time to verify.
