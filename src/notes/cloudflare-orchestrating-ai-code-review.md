---
title: "Cloudflare’s AI review isn’t a chatbot — it’s a CI orchestrator"
description: "Apr 20 field report: up to seven specialist OpenCode reviewers under a coordinator; 48k MRs / 30 days, median 3m39s, $1.19 avg, break-glass 0.6%."
date: 2026-04-20
kind: field-note
source:
  title: "Orchestrating AI Code Review at scale"
  url: https://blog.cloudflare.com/ai-code-review/
project: steward
---

Ryan Skidmore’s receipt from putting LLMs in Cloudflare’s merge path: off-the-shelf reviewers weren’t customizable enough; naively stuffing a diff into one prompt was noise. They built a CI-native orchestration layer around OpenCode instead — plugins for VCS, model gateway, Engineering Codex compliance, AGENTS.md freshness, telemetry — and a coordinator that spawns up to seven specialists (security, performance, code quality, docs, release, Codex compliance, AGENTS.md) then dedupes, re-categorizes, and posts one structured review.

Risk tiers keep cost honest: typo MRs get trivial (coordinator + one generalist, cheaper model); security-touching or large diffs get full. Diff filtering strips lockfiles and generated noise (migrations exempt). Circuit breakers and per-family failback chains handle provider outages; a Workers KV control plane can disable a provider without a code deploy. Re-reviews carry prior findings and respect “won’t fix.” Escape hatch: human `break glass` forces approval and is telemetried.

First 30 days (Mar 10–Apr 9, 2026): 131,246 review runs across 48,095 MRs in 5,169 repos; median 3m39s; avg $1.19 (P99 $4.45); 159,103 findings at deliberately low volume (~1.2/review); break-glass on 0.6% of MRs; ~85.7% cache hit rate on ~120B tokens. Honest limits: weak architectural and cross-system judgment, subtle concurrency, cost scaling with diff size.

## Why it matters for code review

This is the production shape of “agentic review” when you refuse both vendor black boxes and one-shot chat: specialization + coordinator judgment + risk-tiered spend + ops that treat model calls like any other CI dependency. If your factory’s review agent can’t name what it ignores, can’t fail closed on criticals, and can’t be hot-routed when a provider melts, you haven’t shipped a gate — you’ve shipped a comment bot.
