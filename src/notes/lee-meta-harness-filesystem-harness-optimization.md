---
title: "Meta-Harness: overnight harness search needs the full trace filesystem, not a score summary"
description: "Mar 30 Lee et al.: agentic outer loop over harness code with filesystem access to prior code/scores/traces — +7.7 pp vs ACE at 4× less context; TerminalBench-2 #1 Haiku / #2 Opus among reported agents."
date: 2026-03-30
kind: paper
source:
  title: "Meta-Harness: End-to-End Optimization of Model Harnesses"
  url: https://arxiv.org/abs/2603.28052
project: steward
---

Lee, Nair, Zhang, Lee, Khattab, and Finn treat harness engineering as something a continuous factory can run overnight — not a handcrafted peak-session craft. **Meta-Harness** is an outer loop whose proposer is a coding agent with filesystem access to *every* prior candidate’s source, scores, and raw execution traces (grep/cat, not a packed summary). Compressed-feedback text optimizers (OPRO, TextGrad, GEPA, OpenEvolve) typically see ~2–26K tokens of history per step; a Meta-Harness evaluation can leave ~10M tokens of diagnostics on disk for selective inspection.

On online text classification the discovered harness beats ACE by **7.7** points at **4×** fewer context tokens, and matches the next-best optimizer’s final accuracy after four evaluations instead of ~60. On retrieval-augmented IMO-level math, one frozen harness transfers across five held-out models for a **+4.7** average point lift. On TerminalBench-2 it surpasses hand-engineered Terminus-KIRA on Opus 4.6 (**76.4%**) and ranks **#1** among reported Haiku 4.5 agents (**37.6%**). Ablations isolate the load-bearing move: scores-only or scores-plus-LLM-summary search collapses; raw traces are what let the proposer form causal hypotheses (e.g. prompt rewrites confounding structural fixes) and pivot to safer additive edits like environment bootstrap.

Project: [yoonholee.com/meta-harness](https://yoonholee.com/meta-harness/); TerminalBench artifact: [stanford-iris-lab/meta-harness-tbench2-artifact](https://github.com/stanford-iris-lab/meta-harness-tbench2-artifact).

## Why it matters for code review

Always-on factories that only mint more diffs overnight are optimizing the wrong layer — Meta-Harness shows the night can harden the *control plane* if the loop keeps falsifiable experience, not a leaderboard scalar. Review harness-evolution PRs the way Meta-Harness scores candidates: demand code + traces + scores as the mergeable unit, treat summary-only “we improved” as the ablation that already lost, and ask whether the edit is additive and revertible. Steady harnessed throughput compounds when FOMO for idle agents funds filesystem-backed search rather than another unlogged Claude Code burst.
