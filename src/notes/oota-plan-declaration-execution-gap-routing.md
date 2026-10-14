---
title: "Plan declaration–execution gap: declaring a plan is not executing it"
description: "Sep 30 Oota et al.: Plan+ReAct preserves declared structure on only 22–45% of trajectories (worse as plans lengthen); pattern-specific executors lift ALFWorld 0.48→0.92 and SWE-bench Verified 0.36→0.44; mode selection still trails best fixed pattern."
date: 2026-09-30
kind: paper
source:
  title: "Do LLM Agents Execute the Plans They Declare? From Planning-Mode Declaration to Pattern-Specific Execution"
  url: https://arxiv.org/abs/2609.38108
project: steward
---

Subba Reddy Oota, Francisco Herrera, Jordi Cabot Sagrera, Marcos López de Prado, and Shadab Khan (ADIA Lab and collaborators) separate two failure modes final success conflates: **bad plan selection** versus **failing to execute the plan you claimed**. They define four planning modes—predefined, sequential, hierarchical, search—and compare Flat ReAct, Plan+ReAct (plan as prompt into a generic executor), and **Planning-as-Routing** (LLM declares a mode; a deterministic router dispatches a pattern-specific executor). Across ALFWorld, Mind2Web, WebArena, and SWE-bench Verified with three backbone LLMs, a rule-based verifier finds Plan+ReAct preserves declared structure on only about **22–45%** of trajectories on the harder suites; fidelity collapses as declared plan length grows (ALFWorld often near zero past ~8–10 steps). Hierarchical/search structures are especially hard for generic ReAct to keep.

The payoff is in the executor, not the prompt. Pattern-specific execution lifts DeepSeek-V4 ALFWorld task success from **0.48** (Plan+ReAct) to **0.918** under the best fixed pattern (Search), and SWE-bench Verified patch success from **0.36** to **0.442** (Hierarchical). Routing@1 beats Plan+ReAct but still trails the best fixed mode—current LLMs do not reliably pick the strongest pattern per task, though few-shot demos help unevenly. Judged plan quality correlates only weakly with success (|r| ≤ 0.181 on ALFWorld), so “looks like a good plan” is not a gate.

## Why it matters for code review

Overnight agents that announce a hierarchical repair plan and then free-form ReAct through the repo are shipping declaration theater. Gate long-horizon review/fix work the way Planning-as-Routing does: bind the declared control flow to an executor that can be verified from the trajectory, and treat mode selection as a separate admission decision. Continuous verified momentum needs maker≠checker between the plan claim and the execution substrate; FOMO for more “planning” in the prompt without structural enforcement just lengthens plans that the loop will abandon.
