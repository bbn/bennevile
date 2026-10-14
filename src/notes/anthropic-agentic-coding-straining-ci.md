---
title: "Anthropic: agentic coding strained CI 25× — redesign the selector, don’t buy another day"
description: "Sep 14 Malhotra: 8× code, 10× tests, 25× CI jobs in six months; patches lasted 70d/29d/<1d before a journaled, horizontally scaled test-impact service — overnight agents raise the floor."
date: 2026-09-14
kind: field-note
source:
  title: "Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic"
  url: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
project: steward
---

Sachin Malhotra’s Sep 14 Anthropic engineering note is the clearest public receipt that **continuous agent throughput relocates the bottleneck into verification infrastructure**. Anthropic engineers ship ~**8×** as much code per quarter versus 2021–2025; Claude authors ~**80%** of it and already participates in review/approval. Tests grew ~**10×** with only a nominal headcount bump. Net: **CI job volume up ~25× in six months**. Writing stopped being the constraint; once review accelerates, CI absorbs the blast radius.

The strained surface was their deterministic **test impact analysis** service — a listener that records every CI result and a selector that chooses which tests run on each PR. It started as a singleton (one writer needed for per-test history), so it could not shard. Listener lag under multi-job-per-second load is not a dashboard curiosity: ~20 minutes of lag can mean tens of thousands of unapplied test updates — flaky reds that should be known, fixed tests that never run, widespread failures that spawn duplicate investigations. Agents need a crisp, valid test set to self-verify; stale selection is silent wrongness, worse than a crash.

Three patches bought shrinking runway: bigger machine (~**70 days**), per-package sharding (~**29 days**), daily restarts (**<1 day**, and they made the backlog worse by dropping results). The durable fix was architectural: listeners became **stateless** workers appending to an in-memory **journal**; a small consumer rolls history every few seconds; the selector looks up fresh state. Cutover flattened the hourly max backlog. Rebuild took **three weeks** for one engineer — a year earlier it would have been closer to a quarter — because generation is no longer the scarce step on the redesign either.

Malhotra’s doctrine for everyone else: assume **25×** load within two quarters (design v0 for 10–20× if budget allows); instrument so jobs in equal jobs out; **keep mutable history out of the process** from day one. He also names the shape continuous factories create: Claude prefers smaller, more granular PRs (more jobs per day), and **agents push overnight and on weekends**, raising the activity floor even while humans still drive bursty approvals.

## Why it matters for code review

Always-on and overnight agents only compound when the merge gate’s truth source — impact-aware CI — scales with generation. Peak-session heroics that mint PRs without a selector that stays fresh just manufacture review FOMO of a different kind: green checks backed by stale history. Treat verification infrastructure as part of the harness, not a side quest after the agents are “working.”
