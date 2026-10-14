---
title: "ModularRSI: evolve five harness modules on benchmark-disjoint tasks, then freeze"
description: "Sep 14 Wu et al.: contrastive trajectory RSI over Agent Loop / Tool Use / Observation / Context / Completion modules on 2,000 external tasks — lifts TerminalBench 2.0 Acc 47.57→52.43 and transfers across models; joint/non-modular evolution regresses."
date: 2026-09-14
kind: paper
source:
  title: "ModularRSI: Modular and Generalizable Recursive Harness Self-Improvement"
  url: https://arxiv.org/abs/2609.14857
project: steward
---

Wu, Ren, Li, Li, Yang, Zhang, Gu, Yang, Batista-Navarro, Zhang, Liu, Zhou, Dai, and Lin treat harness recursive self-improvement as a **credit-assignment** problem, not a bigger rewrite budget. Evolving on evaluation-benchmark slices entangles reusable mechanism fixes with task-specific answers; whole-harness edits entangle unrelated control planes. **ModularRSI** answers with three constraints: evolution data drawn from **2,000 externally curated executable tasks** disjoint from TerminalBench 2.0 and SWE-Bench Verified; **contrastive** same-task success/failure trajectories aggregated across tasks to surface recurring behavioral deficiencies; and a harness split into five independently evolvable modules — Agent Loop, Tool Use, Observation Management, Context Management, and Task Completion Detection — each modified under a restricted scope, then merged through a cross-module integration pass with program checks, reward-blind diff review against task-specific overfitting, and smoke execution before retention.

With DeepSeek-V4-Flash-Preview, a TB-related evolve set lifts TerminalBench 2.0 Acc **47.57 → 52.43** (Pass³ **30.34 → 35.96**) and still improves SWE-Bench Verified out of domain (**73.40 → 75.80**); the SWE-related set mirrors the transfer the other way. The same frozen TB-evolved harness improves GLM-5.2, MiniMax-2.5, and DeepSeek without re-evolution. Ablations cut: non-modular and joint all-module evolution both fall *below* the Terminus-2 baseline, while every single-module variant improves Acc and integration wins again (**52.43**). Under a matched benchmark-disjoint protocol, Meta-Harness and AHE stay near baseline (~+1 pp); ModularRSI clears **+5** Acc points.

## Why it matters for code review

Always-on factories that rewrite the harness overnight need merge criteria that punish benchmark memorization and whole-file thrash. Review harness-evolution PRs the way ModularRSI promotes: demand module-scoped diffs, contrastive failure evidence across tasks, and a frozen harness evaluated off the evolve set — not “Acc went up on the suite we trained.” Continuous verified momentum compounds when FOMO for more RSI rounds funds attributable module repairs rather than another bursty Claude Code rewrite of the whole control plane.
