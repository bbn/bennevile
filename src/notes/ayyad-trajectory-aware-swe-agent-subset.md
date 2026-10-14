---
title: "10% trajectory-aware subset, ~90% cheaper SWE-agent regression"
description: "Sep 21 Ayyad et al.: outcome-group + centroid-in-embedding selection over sanitized trajectories — 5–10% subsets cut avg resolve-rate error 3–11% and worst-case 38–46% vs strongest random/stratified baselines; median error <5% at 10%."
date: 2026-09-21
kind: paper
source:
  title: "Trajectory-Aware Benchmark Subset Selection for Cost-Efficient Software Engineering Agent Regression Testing"
  url: https://arxiv.org/abs/2609.24928
project: steward
---

[Ayyad, Wang, Shin, Zou, Adams](https://arxiv.org/abs/2609.24928) (Queen’s / Concordia, Sep 21) treat SWE-agent regression testing as the bottleneck continuous harnesses already feel: every model/prompt/framework tweak wants a full SWE-Bench-class re-run at hundreds of millions of tokens, so shops subsample — usually fixed-seed random. Across **31,779** public trajectories from **58** runs and five frameworks, they replace that draw with **trajectory-aware** selection: group instances by historical pass/fail (or pass-count consistency), sanitize trajectories to strip outcome leakage, embed step behavior, then pick instances **closest to each group's embedding centroid**.

The sticky comparison is against the strongest outcome-stratified random baseline. At **5% and 10%** subset sizes, centroid-within-strata cuts average resolve-rate estimation error by **3–11%** and worst-case error by **4–11%** vs a typical baseline draw / **38–46%** vs that baseline's 95th-percentile draw. A **10%** trajectory-aware subset keeps **median** estimation error **below 5%** while using ~**90%** fewer tokens — and the method is cost-neutral on instance expense (a \(k\%\) subset costs ~\(k\%\) of full tokens). Ablations matter: embeddings alone or stratification alone underperform; both are required. Hardest scenario is framework change, where historical trajectories may not match the new agent's behavior — the paper is honest about that ceiling.

## Why it matters for code review

Always-on factories that ship agent harness changes every night cannot afford full-bench CI on every PR and cannot trust a lucky 50-instance sample. Trajectory-aware subsets are the verification-tax move under volume: keep a cheap, behaviorally representative regression slice so overnight harness edits still get a trustworthy resolve-rate signal before humans promote. Peak-session heroics hide flaky evals; continuous merge-rate under load needs a subset that tracks the full suite without burning the budget.
