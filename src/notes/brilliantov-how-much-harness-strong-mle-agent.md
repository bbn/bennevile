---
title: "How much harness does a strong MLE agent still need?"
description: "Sep 30 Brilliantov/Hernández-Cano/Abbé: under matched backbone, hardware, and 24h budget, a minimal single-session coding agent (Malena) matches or beats elaborate open-source MLE harnesses—coding-agent access dominates further scaffolding."
date: 2026-09-30
kind: paper
source:
  title: "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?"
  url: https://arxiv.org/abs/2609.40303
project: steward
---

Kirill Brilliantov, Alejandro Hernández-Cano, and Emmanuel Abbé put a hard question to the **elaborate MLE-harness** literature: once the backbone can read, write, and bash inside a real coding-agent session, how much of the outer machinery still earns its keep? Their ladder of controlled ablations—chat completion → oneshot coding-agent session → tree-search over sessions → **Malena**, a single long-running session with a minimal tool set (submission registry, system/time, background jobs)—finds that **giving the model a coding-agent environment is the dominant intervention**. Search topology (chain / greedy / UCB1 / Best-of-N), extra autonomy scaffolding, and multi-agent orchestration (delegation, parallelism, broadcast) do not yield statistically significant gains once that environment is in place.

The generalization check is the sting. Holding backbone, hardware (1×A100), and wall-clock budget fixed, Malena **matches or outperforms** four open-source SOTA MLE harnesses (MLEvolve, AiScientist, Arbor, ScienceFlow) across frontier backbones on fixed MLE-bench and NatureBench cohorts. Trace analysis suggests why: capable agents already run adaptive search—balancing rare techniques against late-run performance focus while reusing checkpoints—without a hand-coded tree telling them what to try next. Weaker backbones still benefit from hand-crafted workflow priors; as agentic capability rises, the plain loop closes the gap (echoing Sutton’s bitter lesson).

## Why it matters for code review

This is a productive complication for overnight-factory cheerleading: **sustained throughput is not the same as more scaffolding**. Continuous factories still need isolation, budgets, and honest oracles—but review should ask whether the harness is buying verified merge rate or just coordination tax around a model that already knows how to iterate. Score the merge floor under matched compute before celebrating the multi-agent org chart. See also [Fan’s empirical harness-design ablations](/posts/fan-empirical-harness-design-coding-agents/) and [Hu/NanoHarness on model×harness interaction](/posts/hu-demystifying-harness-effects-nanoharness/).
