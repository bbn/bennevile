---
title: "Mixture of self-improving branches: stop evolving one harness trajectory into a local optimum"
description: "Sep 29 Dong et al.: branch harness search with evolving development subsets + proposal policies, then route among branch heads — relative gains over Meta-Harness of 34.8% Olympiad math, 11.6% Terminal-Bench 2.0, 3.8% SWE-bench Lite (66.0% resolution) with development-only selection."
date: 2026-09-29
kind: paper
source:
  title: "Mixture of Self-Improving Branches for Agent Harness Optimization"
  url: https://arxiv.org/abs/2609.37834
project: steward
---

Haoyu Dong, Yuhang Zhou, Zihao Lin, Yifan Wu, Bo Peng, Mingyi Wang, Xiangjun Fan, Lizhu Zhang, and Zhuokai Zhao treat harness optimization as recursive self-improvement: an agentic proposer writes harness code, evaluates it, and feeds traces into the next proposal. Meta-Harness already does that—but with a **fixed** development set and proposal policy, so search collapses onto one trajectory and complementary strengths that lose on average never get a chance to grow. Their fix is to run parallel **branches**, each with its own evolving development subset and proposal guidance: a branch keeps cases its leading harnesses solve more often than other branches, drops cases every frontier already solves, and revises its SKILL.md from local search history. At deploy time a router picks one development-selected branch head per new input—no test labels required.

With Claude Opus 4.6 as proposer and development-only selection, the routed system beats Meta-Harness across four settings: Olympiad math rises **46.0% → 62.0%** with Gemini 3 Flash (**+34.8%** relative) and **29.0% → 30.5%** with Claude Sonnet 4.5; Terminal-Bench 2.0 reaches **50.0%** (**+11.6%** relative); SWE-bench Lite hits **66.0%** issue resolution (**+3.8%** relative). Branch heads solve complementary held-out cases (combined coverage **+4–9 pp** over the stronger head); the router approaches or exceeds the stronger head without test-based selection. Ablations: updating development subsets every iteration beats every-5 (**62% vs 53%** on Math–Gemini); combining subset pruning with proposal adaptation (**62%**) beats either alone (**54% / 50%**). Search costs more task-solving tokens than Meta-Harness (~1.2–1.7×) even with pruning.

## Why it matters for code review

Factories that “self-improve the harness overnight” on one fixed eval slice will optimize into a local peak and miss the complementary failure modes that show up after merge. Run harness evolution as branched search with divergent objectives and a development-informed router, and review whether your continuous harness loop still explores cases the current champion already solved everywhere. Sustained verified momentum compounds when improvement itself stays adaptive under load; FOMO for a single overnight harness champion without branch diversity just hard-codes today’s blind spots into tomorrow’s default.
