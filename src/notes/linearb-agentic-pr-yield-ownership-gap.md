---
title: "LinearB 2026: agent PRs merge less without owners; AI review lifts yield"
description: "Jul 28 LinearB 2.7M-PR benchmarks: elite orgs merge agent PRs at 79% vs 92% human-only (37% at top 60%); ownership — not model skill — is the limiter; AI code review lifts PR yield up to +5–7pts while generation moves the bottleneck downstream."
date: 2026-07-28
kind: paper
source:
  title: "The AI engineering productivity gap: 2026 benchmarks"
  url: https://linearb.io/resources/ai-engineering-productivity-gap
project: steward
---

[LinearB’s 2026 AI benchmarks](https://linearb.io/resources/ai-engineering-productivity-gap) (published Jul 28; 2.7M PRs, 83k developers, 253 orgs, Feb–May 2026) productively complicate the always-on factory story with **merge-rate receipts**. Very-high AI users hit 2.3× their June 2025 merge rate by May 2026 while no-AI developers were roughly flat — but autonomous agents are still a thin slice of delivery. At elite orgs, 54% of PRs show AI coding assistance and 45% of merged lines are AI-written, yet **under 5% of PRs come from autonomous agents**.

The agentic yield gap is the hard number: at the top 10% of orgs, agent-opened PRs merge within 30 days at **79%** versus **92%** for human-only PRs; at the top 60%, agentic yield falls to **37%**. LinearB’s diagnosis is ownership, not capability — an agent PR with no engineer attached tends to sit unmerged (experimentation at the edges, not agents inside delivery). AI code review runs the other way: PRs with an AI review attached merge at the highest rate of any category, lifting yield up to five points over the all-PR baseline and up to seven over human-only at the top 60%. Among very-high AI users, PR yield slipped 4.4% YoY even as merge rates climbed — faster generation moved the bottleneck into review and testing. Token spend at the 90th percentile hits ~$481/dev/month (still under ~4% of fully loaded cost); the useful metric is **cost per delivered PR**, not raw tokens.

## Why it matters for code review

Overnight harnessed momentum only compounds if morning inventory actually merges. LinearB’s receipt is that always-on generation without named owners and review gates produces abandoned agent PRs — verification tax under volume shows up as yield, not as a weaker model. Continuous factories that attach ownership, AI review, and merge policy to every agent PR protect the throughput story; bursts of unowned agent output still lose to a quieter shop that converts opened PRs. FOMO when agents are not working on your behalf is real — so is FOMO when they worked all night and nothing landed.
