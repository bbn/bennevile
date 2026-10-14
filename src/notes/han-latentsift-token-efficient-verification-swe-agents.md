---
title: "LatentSift: cut the verification tax when Best@K multiplies overnight candidates"
description: "Sep 28 Han et al.: replace Stage-1 LLM execution-free verifier with policy hidden-state filtering — EF-verifier tokens −66.6–81.0% and total verification tokens −49.1–62.1% at K=16 on SWE-bench Verified; DeepSWE hybrid Best@16 59.26%→60.06%."
date: 2026-09-28
kind: paper
source:
  title: "LatentSift: Policy-State Filtering for Token-Efficient Verification of Software Engineering Agents"
  url: https://arxiv.org/abs/2609.36371
project: steward
---

Yuning Han, Yangchenchen Jin, Tyler Jandreau, and Jingwei Sun start from a scaling tax everyone running always-on SWE agents feels: generating **K** candidate trajectories already costs hundreds of thousands of tokens, and hybrid verification—LLM execution-free (EF) scoring, regression tests, LLM-generated tests, final EF pick—can consume as many tokens again. On DeepSWE-Preview at **K=16**, Stage 1 alone is ~850K tokens per instance and full verification ~1,050K, matching candidate generation. Existing cascades re-read every long trajectory through a separate verifier model before any test runs.

**LatentSift** replaces that first stage with a token-free, execution-free filter over hidden states the policy already produced: reasoning, observation, and function-call channels, compared against positive/negative banks collected during policy training, fused with a lightweight linear scorer, retaining the top half for execution-based stages. On SWE-bench Verified across three agents and two policy sizes at **K=16**, LatentSift cuts EF-verifier tokens by **66.6–81.0%** and total verification tokens (including test generation) by **49.1–62.1%**, while hybrid Best@16 matches or improves each agent’s reference workflow—**59.26% → 60.06%** on DeepSWE-Preview. Oracle retention after Stage 1 stays comparable to the LLM EF verifier (97.72% vs 97.44% at K=16). Ablations show all three channels and two-sided distance-to-success/failure banks contribute; savings widen as K grows.

## Why it matters for code review

Overnight factories that raise K “because Best@K goes up” without shrinking the verification cascade will spend as much on judging candidates as on producing them—and the queue still waits on an LLM pass over every trajectory. Treat Stage-1 filtering as harness software: reuse policy states, keep execution-based gates and a final verifier on the survivors, and budget verification tokens per merge alongside generation. Continuous verified momentum under volume means the verification tax must scale sublinearly with candidate count; FOMO for larger overnight sample sets without a cheaper filter just buys a more expensive morning review pile.
