---
title: "MCRI: score agent skills before you burn the execution budget"
description: "Oct 2 Yang et al.: MCRI (Metadata/Constraints/Resources/Instructions) on 63,812 OpenClaw skills; 58,275 skill-conditioned runs; top-1 selection lifts +17.7 / +22.8 / +19.6 percentile points vs strongest baselines on BigCodeBench / BFCL / Mind2Web."
date: 2026-10-02
kind: paper
source:
  title: "MCRI: A Four-Dimensional Framework for Analyzing and Evaluating Agent Skills"
  url: https://arxiv.org/abs/2610.01506
project: steward
---

Zongrui Yang, Li Xintong, Runchen Xu, Zhongsheng Wang, Zhedong Lin, Haoyuan Li, and Jiamou Liu treat agent **skills** as intermediate artifacts between prompts and programs—information gain plus behavioral constraint—and propose **MCRI**: Metadata (when to invoke), Constraints (what behavior is forbidden), Resources (external task-specific information), and Instructions (how to call tools/orchestrate). They operationalize it as MCRI-Eval (LLM scoring with dimension rubrics) on **63,812** public OpenClaw skills, then run **58,275** skill-conditioned executions across BigCodeBench, BFCL-Fundamental, and Mind2Web.

MCRI-Eval scores correlate positively with community popularity (stars/downloads/installs), with correlations strengthening toward the head of the distribution (e.g. all-time installs ρ up to **0.393** at top 0.5%). On downstream ranking, MCRI-Eval wins C-index and Spearman against name/summary and full-text holistic baselines on all three benchmarks. For top-1 selection, the skill it picks advances **17.7 / 22.8 / 19.6 percentile points** in actual performance rank versus the strongest baseline on BigCodeBench, BFCL-Fundamental, and Mind2Web respectively (e.g. Mind2Web top-1 reaches the **99.3rd** percentile). Ablations differentiate dimensions: removing Resources weakens star association; removing Instructions most hurts install association. Absolute pass-rate bands are tight, so the authors frame the win as *prioritization before costly execution*, not a substitute for running the suite.

## Why it matters for code review

Always-on factories under FOMO for “just install another skill” pay verification tax on every candidate. Review continuous skill hubs for MCRI-shaped contracts: pre-execution scores on identifiability, constraint sufficiency, resource relevance, and instruction executability that narrow the overnight trial set—then still re-evaluate after harness or API migration. Steady harnessed throughput compounds when the night’s skill CI refuses to burn full rollouts on text that looks polished but fails constraint or interface checks; peak-session mastery that bolts on a starred skill without a gate does not. Pair with [Vo’s continuous process-level skill evaluation](/posts/vo-continuous-process-level-evaluation-enterprise-skills/) and [Tan’s EngramBench for skill-evolution harnesses](/posts/tan-engrambench-skill-evolution-capability-overlap/) when “done” for a skill means the selection signal and the trajectory checks both held.
