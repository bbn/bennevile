---
title: "OpenSearch: harness-first SDLC — trust the loop, not the review queue"
description: "May 15 field note: Atlas/Ralph/Nitro/Sentinel each run inside a verification harness — live local stack, A/B benchmarks, plan-then-approve — because agents generate faster than humans can review."
date: 2026-05-15
kind: field-note
source:
  title: "Agentic SDLC: How OpenSearch accelerates engineering using its own engine"
  url: https://opensearch.org/blog/harness-first-agentic-sdlc-how-opensearch-builds-software-using-its-own-search-engine/
project: steward
---

OpenSearch’s May 15 engineering note is a factory receipt with four named agents and one shared rule: each agent runs inside an automated verification loop that validates output before anyone trusts it. Generation stopped being the bottleneck; deciding whether to trust what was generated is the scarce work.

The cast: **Atlas** keeps a living knowledge base (code + wikis + ticket-to-SOP extraction) with embedding dedup on every update — one run cited 967 generated files across 160 packages plus 819 curated SOPs and 99 auto-extracted ones. **Ralph** is a harness-based parallel development pipeline: coordinator boots a live local stack, decomposes a feature spec, fans developer/QA/validator agents, and verifies against the running services each iteration so integration failures show up in seconds instead of a remote CI wait. **Nitro** profiles real workloads (up to 165M docs with JFR/GC/NMT), A/B-tests candidate fixes against a frozen baseline, and only promotes improvements — one OpenSearch 3.3.0 run rejected two regressors and kept a candidate with ~5% sort+term latency and ~12% GC-time gains; three validated fixes over ~6 days elapsed without human babysitting. **Sentinel** runs on-call triage on a cron with plan-then-approve before any execute path, scoped credentials that can only comment, and staged rollout from manual → triage-only → autonomous.

The design principle they italicize: **harness-first, not review-first**. “A code review catches one bug once; a harness catches that class of bug on every future iteration.” Nitro’s operational lesson lands the same way: never let the agent write its own quality gates; freeze evaluation criteria before it proposes changes. Humans stay at decision points (spec, QA review, on-call approval, optimization targets) while the inner loop runs without them.

## Why it matters for code review

Always-on factories beat peak-session heroics when verification is continuous and machine-checkable — not when a morning human reads every generated line. OpenSearch relocates trust into Ralph’s live stack, Nitro’s frozen benchmarks, and Sentinel’s approval gate so review capacity scales with volume. Productive complication they own: Ralph’s validator is still an LLM judging another LLM’s output against a spec — they are measuring agreement with humans and false-promote rate before treating that gate as proven. Continuous momentum without an independent evidence surface is just overnight FOMO with a bigger PR queue.
