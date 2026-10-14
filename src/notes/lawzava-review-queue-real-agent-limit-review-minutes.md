---
title: "Your agent capacity is your verified-throughput rate, not your seat count"
description: "Oct 5 Law Zava: measure offered review demand in review-minutes against effective reviewer capacity, tier review by risk before capping anything, and when the cap binds, put agents to work shrinking reviewer minutes rather than adding submissions."
date: 2026-10-05
kind: field-note
source:
  title: "The Review Queue Is Your Real Agent Limit"
  url: https://lawzava.com/blog/2026-10-05-the-review-queue-is-your-real-agent-limit/
project: steward
---

Law Zava starts from a mechanism he has argued before: **speedups upstream of a fixed-capacity stage turn into queue, not throughput**. Here he makes it a capacity plan for the question an engineering VP actually faces in Q4: how many agent seats can we absorb, and what do we change to absorb more?

The plan needs two numbers he says nobody measures. The first is **offered review demand, counted in review-minutes rather than pull requests**. A dependency bump and an authorization rewrite are different loads, so estimate minutes per change from size, surface touched, and blast radius, then calibrate from actuals. Seats are not demand: a seat can sit idle, or it can produce changes that arrive with evidence and review faster. The second number is **effective reviewer capacity**, meaning the minutes qualified reviewers really give after meetings, on-call, and their own delivery work, measured from review activity instead of assumed. Because review job sizes vary enormously, waits grow nonlinearly as demand approaches capacity. He declines to quote a magic threshold and says to watch the ratio and the queue-age tail together, per risk class.

The first lever is **risk-tiered review, before any cap**. Reversible, well-tested, non-privileged changes get automated checks plus sampled human review, and a tier keeps its lighter process only while the sample shows no escapes. High-risk changes draw on a reserved budget, "so an authorization change never queues behind forty dependency bumps." What tiering cannot do is repeal the arithmetic on what remains, so the human tiers still need a work-in-progress cap. When the cap binds, the rule for agents is specific: **"an author rechecking itself is not verification."** Capped agents split oversized changes, rebase stale ones, answer comments, repair failing checks, and attach evidence that cuts a reviewer's minutes per change, while new submissions wait.

## Why it matters for code review

This is the strongest recent complication for anyone who equates always-on agents with compounding output. Running agents around the clock only compounds up to the point where review is saturated. Past it, extra agent hours just lengthen the queue unless they go toward the constraint itself. The practical reframe is that overnight work should include *queue maintenance and evidence*, not only new diffs, and that the right health metric is p95 queue age per risk tier and escapes per hundred merges, not PRs opened. Zava's buying rule fits on one line: buy seats up to the constraint, then spend the money on tiering, evidence, and reviewers. Pair with [Rangle on senior attention as the overnight review queue's real limit](/posts/rangle-sisyphus-predicament-senior-attention-overnight-queue/) and [Apushkinsky on why correlated AI review passes earn less credit than they look](/posts/apushkinsky-review-credit-correlated-ai-passes/).
