---
title: "Mandible: 12k agentic review verdicts and the round-4 elbow"
description: "Aug 20 Watson Labs / Swamp: Gymwasp’s Mandible factory — 372 issues, 1,801 review rounds, 11,967 verdicts. 65% mergeable after one round; after round 4 the loop oscillates; 29% shipped on warn; volume 3× with median rounds flat."
date: 2026-08-20
kind: field-note
source:
  title: "6 Learnings from 12,000 Agentic Code Reviews"
  url: https://blog.watson-labs.co.uk/6-learnings-from-12000-agentic-code-reviews/
project: steward
---

Watson Labs’ Aug 20 write-up (James Owens / Gymwasp data via Swamp) is the verification-tax receipt continuous factories need: measure the review loop the way you once measured CI, or you will confuse spinning with converging. Gymwasp’s factory — **The Mandible** — plans, builds, reviews, and ships with swamp as the harness. Humans sit at Plan and Review for product judgment; **no human is reading the code**. Six months, **372 issues**, **1,801** adversarial review rounds, **11,967** reviewer verdicts, **483** blocking fails, **280** issues shipped.

Seven parallel reviewer lanes (separate model instances, no shared sight): test coverage (strictest — assumes broken until a real-fixture integration test proves otherwise), clean code, frontend, DDD, security, accessibility, observability. Each lane gets a narrow brief plus an explicit out-of-lane exclusion list so the same finding is not echoed seven times. Round verdict = worst of seven (`pass` / `warn` / `fail`). Headline numbers: **65%** of issues are mergeable (no failing lane) after a single round; **94.5%** by round three; **98.9%** by round four. Clean-pass (all seven green) is a harder curve — and **29%** never reached it; they shipped on warn (their risk tolerance). Naive average rounds on clean-pass-only issues: **3.31**; honest average including warn-shipped: **5.99** (~44% undercount). After round 4, conditional pass rates flatten and **218** fails appeared in previously clean lanes — the loop introduces about as much as it removes. Shipping volume tripled in one month with median rounds holding at **4** (Pearson r ≈ 0.08) — deterministic harness shape absorbing load. Plan review was cheap relative to code review (338 vs 1,463 rounds): agents miswrite code more often than plans. Flake tax: 3.7% of verdicts lost to agent crashes; 8.1% of rounds had at least one lane unassessed; 111 iterations died before a verdict.

## Why it matters for code review

Always-on agent volume without an instrumented review loop just relocates heroics into endless re-review. Mandible’s elbow is the productive complication: continuous verification compounds until roughly round four, then more rounds buy oscillation, not quality — ship at mergeable, batch follow-ups, retune briefs instead of adding rounds. Pair with Faros factory measurement and Prokop Simek’s agent PR pickup queues: harnessed throughput beats burst mastery only when the factory can tell converging from spinning under sustained load.
