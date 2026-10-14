---
title: "Agent PRs outpace review: LinearB 5.3× pickup, four queues that catch them"
description: "Sep 11 Prokop Simek: agent PRs finish fast then wait — LinearB 5.3× pickup lag, Faros +91% review time; three attribution buckets and four saved views keep the queue moving."
date: 2026-09-11
kind: field-note
source:
  title: "AI agents open pull requests faster than we review them. A setup that keeps the queue moving"
  url: https://dev.to/prokopsimek/ai-agents-open-pull-requests-faster-than-we-review-them-a-setup-that-keeps-the-queue-moving-3427
project: steward
---

Prokop Simek’s Sep 11 DEV post names the review capacity ceiling under agent volume: a coding agent can finish in minutes, then its PR waits longer than human-authored ones. LinearB’s 2026 benchmarks (8.1M+ PRs, 4,800+ orgs): AI PRs wait **4.6× longer before review** but are reviewed **2× faster once picked up** — pickup is the slow part. Agentic AI PRs specifically show **5.3× longer PR Pickup Time** than unassisted. Faros AI’s 2025 telemetry (10,000+ developers, 1,255 teams): high-AI teams complete 21% more tasks and merge 98% more PRs, but **PR review time increases 91%**. GitHub (Oct 2025): coding agents contribute ~1.2M PRs/month. A better agent does not fix this; every agent PR still has to reach a person who knows it is theirs.

Attribution is why they vanish. Agents disagree on who opens the PR. Three buckets: (1) opened under your account (`author:@me` — Claude Code CLI/routines, often Codex “Create PR”, GitLab Duo); (2) bot draft with you as reviewer (Copilot cloud — stays draft until a human marks ready, and the requester often cannot approve); (3) not tied to you at all (custom `claude[bot]` Actions, Cursor app drafts, Devin unless linked). No single filter catches all three.

Four saved views cover the blind spots. On GitHub’s pulls dashboard (GA since Jul 2026): (1) `is:pr is:open review-requested:@me` — leave drafts in if you use cloud agents; (2) `is:pr is:open author:@me` — treat agent-authored-as-you as yours (CI, conflicts, approvals); (3) agent label from branch prefixes (`copilot/`, `claude/`, `codex/`, `cursor/`, `devin/`, plus `agent/` for local sessions) via `actions/labeler`; (4) lead view for stuck work — failing CI, changes requested, stale updates, minus Dependabot. Five habits make pickup real: review before handing the agent its next task; two fixed review windows a day; a written first-response SLA (pickup, not merge); notify only on review requested / changes requested / CI failed; keep agent tasks small (Faros tied AI adoption to a **154%** jump in average PR size). Simek’s own Gitwall menu-bar app is optional packaging of the same presets — the queues work without it.

## Why it matters for code review

Generation stopped being scarce; pickup and verification tax became the binding constraint. Overnight and always-on harnesses that mint PRs without legible queues and a first-response SLA just relocate the bottleneck onto whoever opens the dashboard. Pair volume with author-class labels, fixed review windows, and small diffs — or agent throughput becomes a backlog generator with healthier-looking write metrics.
