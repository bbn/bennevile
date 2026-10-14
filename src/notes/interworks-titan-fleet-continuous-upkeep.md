---
title: "InterWorks: six Titans keep the factory honest overnight"
description: "Jun 26: Mnemosyne/Prometheus/Themis/… cron fleet on Curator — review, docs, triage, merge shepherd; deterministic-first Hyperion; shared lessons file; support tickets −50%."
date: 2026-06-26
kind: field-note
source:
  title: "Building a Fleet of Autonomous Agents to Run Your Software's Upkeep"
  url: https://interworks.com/blog/2026/06/26/building-a-fleet-of-autonomous-agents-to-run-your-softwares-upkeep/
project: steward
---

Ben Bausili’s Jun 26 InterWorks note is a production tortoise fleet, not a weekend Claude binge. Curator (their own product) was losing the scheduling fight: docs gaps, flaky tests, PR reviews, and release shepherding all competed with feature work and lost to “later.” Since early 2026, **six named agents** run around the clock on Claude — review code, write documentation, triage production errors, shepherd releases, watch each other, and open PRs while the team sleeps.

Roles are the reusable design. **Mnemosyne** (docs) mines assistant chats, tickets, and CI for drift and opens fix PRs. **Prometheus** (code) takes easy-win issues to PRs and babysits their CI/review. **Iapetus** (self-healing) reads sibling logs, diagnoses failures, opens fix PRs, stays quiet when healthy. **Themis** (review) reviews every PR for bugs/security/standards and inherits lessons from the others. **Epimetheus** (prod triage) ranks Sentry noise by impact and files diagnostic issues. **Hyperion** (release shepherd) works the weekly merge window — merge approved green PRs in priority order, sync branches, retry flakes, nudge reviewers — and **never self-approves**. Schedules range from every two hours to weekly so upkeep is continuous, not calendar-dependent.

Build posture is deliberately boring. Most agents are cron Python + Claude Code headless with a three-stage pipeline: Sonnet plans as JSON → Opus applies + lint retry → Sonnet writes the PR comment (cost-split by job type). Epimetheus uses the TypeScript Agent SDK + in-process MCP for Sentry. Hyperion is the thesis punchline: **reach for deterministic first** — script almost everything, leave Claude *one* judgment (which approved green PR to merge next). Agents share a lessons file so Themis gets sharper from Prometheus’s mistakes; every script has a failure trap that emails script/line/exit — silent overnight failure is worse than no agents. Each agent is its own GitHub App on ordinary Ubuntu/Python/Node/gh/linters. Claimed receipts: support ticket volume **down 50%**, faster resolution, developer hours moved to judgment work.

## Why it matters for code review

This is continuous harnessed throughput applied to the *upkeep queue* that usually loses to feature heroics. Review is not a human bottleneck to clear after a burst — Themis never gets “too busy,” and Hyperion’s merge authority is script-bounded so overnight motion cannot auto-approve itself. FOMO that agents aren’t working overnight is answered with a fleet *and* a self-healer watching the fleet. Pair with Auto mode’s continuity layer and Mouse’s stop-at-merge house rules: always-on only compounds when review, merge, and silence-on-failure are first-class jobs, not afterthoughts.
