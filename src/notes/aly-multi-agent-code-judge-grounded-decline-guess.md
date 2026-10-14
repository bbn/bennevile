---
title: "Multi-agent code judges need discriminating evidence — or should decline to guess"
description: "Sep 28 Aly/Assaf/Kobti: MARCH on CodeJudgeBench ties 78–95%; same questions on both solutions 76.6%; withhold non-discriminating comparisons → 20.7%→36.9% accuracy while answering half."
date: 2026-09-28
kind: paper
source:
  title: "When Is a Multi-Agent Code Judge Actually Grounded? Two Label-Free Measurements, and a Judge That Declines to Guess"
  url: https://arxiv.org/abs/2609.30328
project: steward
---

Salma Roshdy Aly, Hussein Assaf, and Ziad Kobti’s Sep 28 note is a fail-closed measurement for agentic review pipelines that split “write” from “judge.” Soft teams already let one model propose a merge verdict; multi-agent checkers promise independence by breaking the opinion into claims a separate verifier answers without seeing the first model’s reasoning. On code, that promise has a silent failure mode accuracy alone hides: when the evidence cannot tell two candidates apart, the pipeline still returns a confident winner.

They run published MARCH unmodified on CodeJudgeBench (paired correct vs subtly buggy solutions from three generators × three difficulties) and HumanEvalFix, judging with Qwen3-8B and 14B — **54** cells, ~**2,000** comparisons. The pipeline never errors. It also declares the two solutions equally good on **78–95%** of comparisons and reaches **4.4%** accuracy where the same model asked directly hits **43.7%**. Two label-free measurements from the pipeline’s own logs explain it: on **76.6%** of comparisons the proposer asked **the same questions** about both solutions, so answers could not discriminate; the checker agreed with **80.7%** of claims. The repair is a gate that withholds comparisons whose proposer questions are identical — no labels, no extra model calls — lifting accuracy from **20.7% to 36.9%** while still answering half the queue (+16.2 pp; holds across generators, difficulties, and both judge sizes). Direct single-model judging still wins overall (**73.4%**, answering everything); the contribution is knowing when the multi-agent judge has **no basis** and declining instead of guessing.

## Why it matters for code review

Always-on review fleets under volume need a third verdict as much as merge gates do. Treat “agent approved” as EXACT only when the evidence differed between candidates; otherwise leave the PR in undetermined for a human or a stronger path. Continuous verified momentum is not more confident rubber stamps overnight — it is a harness that refuses to invent discrimination the claims never had.
