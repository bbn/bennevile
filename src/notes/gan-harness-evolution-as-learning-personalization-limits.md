---
title: "Harness evolution as learning: why more memory and more update rounds still leave an oracle gap"
description: "Sep 29 Gan/Gong/Liu: AppWorld-P preference benchmark + approximation/generalization/optimization decomposition—context vs control reachability; memory length U-curve (~0.77→0.20 then rebound); ACE/TEPA/TRACE plateau ~0.4–0.5 vs oracle 0.071."
date: 2026-09-29
kind: paper
source:
  title: "Harness Evolution as Learning: Approximation, Generalization, and Optimization Limits of Self-Improving Personal Agents"
  url: https://arxiv.org/abs/2609.36892
project: steward
---

Zeyu Gan, Zixuan Gong, and Yong Liu cast **personal-agent harness evolution**—context, memory, tools, and execution around a **frozen** model—as a learning problem with classical risk pieces: **approximation** (what the harness class can express), **generalization** (finite interaction evidence), and **optimization** (what the update recipe actually reaches). Empirically they build **AppWorld-P**, preference rules as executable checkers on AppWorld tasks (claude-haiku-4-5 fixed), and measure preference violation rate.

Three tensions land with numbers. **Architecture:** stated context collapses in-support formatting/sign-off violations (e.g. 1.00→0.07 / 0.00), but out-of-support checksums, habitual cards, and running totals stay high until **control** harnesses compute or rewrite actions (Harness computes: 0.17 / 0.00 / 0.00). **Scale:** learner-generated memory length is non-monotonic—pooled violations fall from ~**0.77** at L=0 to ~**0.20** at L=10, then rebound to ~**0.25–0.27** at L=20–150. **Self-evolution:** ACE, TEPA, and TRACE cut violations to ~**0.4–0.5** by n=6 against a no-memory **0.881**, then plateau—leaving ~**0.40** above the oracle context rate of **0.071**; Reflexion barely moves. Theory matches: context stays inside the pretrained policy hull while control can leave it; fixed feedback budgets make longer memories statistically riskier; biased online updates can converge to a positive optimization floor.

## Why it matters for code review

Continuous harness loops that “just keep evolving overnight” can still **stabilize short of done**. Productive complication for always-on factories: review whether a preference (or eng convention) is context-reachable or needs a checker/rewrite; treat memory growth as a coverage–estimation tradeoff, not a virtue; and demand held-out checkpoints that show the oracle gap closing—not only early training wins. Pair with [Jiang’s HarnessEvolve reference-trajectory gates](/posts/jiang-harnessevolve-reference-trajectory-self-evolution/) and [Xia’s RRSI regularized self-improvement](/posts/xia-rrsi-regularized-harness-self-improvement/).
