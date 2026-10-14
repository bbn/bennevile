---
title: "RRSI: regularize harness self-improvement so evolve-set gains survive OOD"
description: "Sep 21 Xia et al. (Google Cloud AI Research): annealed edit budgets, leakage critic, noise-adjusted floor, and cost-aware pruning — up to +14.1 evolve / +4.7 OOD with 30% fewer policy tokens than unregularized RSI."
date: 2026-09-21
kind: paper
source:
  title: "RRSI: Regularized Recursive Self-Improvement of Agent Harnesses"
  url: https://arxiv.org/abs/2609.24972
project: steward
---

Xia, Han, Wang, Chen, Zhuang, Lee, Huang, Yu, CuiZhu, Ming, Yao, Gokturk, Pfister, and Lee treat harness recursive self-improvement as an **overfitting** problem, not a search-budget problem. A frozen backbone plus an editable harness of prompts, control flow, tools, memory, and context management is already a practical RSI loop — but when the same finite evolve set drives both proposal and selection, large in-distribution lifts shrink or vanish out of distribution. **RRSI** keeps the edit space open and instead regularizes the *search trajectory*: proposal-side annealed edit budgets (early rounds may combine a few coordinated changes; later rounds sparsify toward attributable one-edit candidates) plus evidence-aware credit over evolution history; selection-side leakage critic (reject benchmark-specific answers and inert machinery before scoring), a noise-adjusted acceptance floor calibrated from the base harness, gain-dependent cost caps, and Lasso-style pruning of components that stop earning measured gains.

Across eight benchmarks in coding (Terminal-Bench 2.1 → SWE-bench Verified), agentic workspace (Harvey LAB → JobBench / GDPval / APEX-Agents), and engineering design (EngDesign → Frontier-Eng), RRSI gains up to **14.1** points on the evolve split and up to **4.7** out of distribution while cutting policy tokens ~**30%** versus unregularized evolution. The ranking flips vs Meta-Harness / AHE / TTHE / HarnessX: those methods look strong on evolve; RRSI posts the smallest evolve gain and the only OOD average that clears the unevolved harness by more than a point. Ablations show removing proposal or acceptance regularizers raises evolve scores and lowers transfer — unconstrained selection spends accepted edits on noise and context, not mechanism.

## Why it matters for code review

Always-on factories that evolve harnesses overnight need merge criteria that punish evolve-set memorization. Review harness-evolution PRs the way RRSI selects: demand a leakage screen, a noise-band delta, and a cost justification — not “mean went up on the suite we optimized.” Continuous verified momentum compounds when FOMO for more evolution rounds funds reusable, cheaper harness mechanisms rather than another bursty fit to tonight’s training tasks.
