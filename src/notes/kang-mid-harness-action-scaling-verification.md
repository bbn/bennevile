---
title: "Mid-Harness: verify the action before the environment commits"
description: "Sep 30 Kang et al.: sample N candidate terminal actions and verify at the model–harness boundary—GPT-5.6 Sol verifier lifts TMAX-9B Pass@1 50→68% on TerminalBench-Lite; pairwise + distillation recover part of the gap without retraining the generator."
date: 2026-09-30
kind: paper
source:
  title: "Mid-Harness: Scaling Actions Between Model and Harness for Terminal Agents"
  url: https://arxiv.org/abs/2609.39982
project: steward
---

Minki Kang and collaborators target a failure mode that overnight loops feel acutely: **a single bad command mutates the environment** (wrong package, wrong edit) long before the trajectory score turns red. Trajectory-level Best-of-N and sequential refine help, but they pay for whole re-runs. **Mid-Harness** inserts compute at the **model–harness boundary**: at each step, sample $N$ candidate actions from the same history, verify them, and forward only the chosen one—generator weights and harness loop unchanged.

The coverage claim is strong. With TMAX-9B fixed on TerminalBench-Lite, a frontier listwise verifier (GPT-5.6 Sol) raises Pass@1 from **50.00% → 68.03%** at $N=8$, evidence that useful alternatives already sit in the sample and weak verification leaves them on the floor. Self-verification is harder: more candidates barely help under weak listwise scoring; **pairwise** comparison is the best of the evaluated mechanisms (54.76% Pass@1), and distilling the frontier verifier’s pairwise judgments into TMAX-9B lifts that to **57.14%** without touching the generator. Combining Mid-Harness with Best-of-$T$ or Sequential Refine beats spending the same budget on more full trajectories alone—and the pattern transfers across model sizes, Terminus-2 / Vanillux2 harnesses, Terminal-Bench 2.1, SWE-bench Verified Mini, and FeatureBench-Mini.

## Why it matters for code review

Continuous verification under volume is not only CI after the PR—it is the **pre-execution gate inside the turn**. Mid-Harness makes that gate reviewable: which mechanism (listwise / pointwise / pairwise), what false-accept rate on command semantics and execution feasibility, and whether action scaling is cheaper than another overnight re-run. Productive complication: without a capable verifier, sampling width is mostly theater. Pair with [HiSentinel’s Allow/Redirect/Hard-Pause pre-execution policy](/posts/zhao-hisentinel-pre-execution-intervention/) and [AgentRelay’s evidence-gated done](/posts/agentrelay-overnight-evidence-gated-done/).
