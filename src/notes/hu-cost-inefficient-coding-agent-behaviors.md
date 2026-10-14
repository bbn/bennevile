---
title: "Three silent cost leaks: subsumed retrieval, similar scripts, test re-execution"
description: "Sep 25 Hu et al.: 1,200 trajectories — three behaviors hit 79–98% of tasks and up to 22.75% of cost; structure-aware retrieval can raise spend 28%; developer-designed skills cut cost up to 41.73%."
date: 2026-09-25
kind: paper
source:
  title: "Analyzing and Mitigating Cost-Inefficient Behaviors in Coding Agents"
  url: https://arxiv.org/abs/2609.30725
project: steward
---

Hu, Jiang, Liang, Dey, Wu, and Tan’s Sep 25 study is a receipt book for the **verification tax continuous factories pay in tokens**, not just in false greens. They analyze **1,200** trajectories from Claude Code and Mini-SWE-Agent across four configurations on SWE-bench Verified, then evaluate mitigations over **10k+** trajectories on held-out Verified and Pro tasks.

Three recurring behaviors cover **79–98%** of tasks and account for up to **22.75%** of task monetary cost: **subsumed retrieval** (re-reading code already covered by a prior read — up to **92.33%** of tasks / **11.41%** of cost), **similar script generation** (regenerating near-duplicate probes and patch scripts instead of editing persisted artifacts), and **test re-execution** (rerunning identical tests without an updated patch). Architecture matters: Claude Code’s cross-agent subsumption comes from subagents returning summaries the main agent then re-reads; Mini-SWE-Agent pays more for zoom-in localization, low-feedback shell edits, and long debugging loops. Structure-aware retrieval (CodeGraph) is not a free win — verbose feedback and altered delegation raise end-to-end cost by up to **28.14%** in some cells. Agent-synthesized skills from traces give at most **~22%** savings; **developer-designed**, high-level, trace-agnostic skills cut cost by up to **41.73%** while shrinking all three behaviors.

## Why it matters for code review

Always-on agent fleets compound waste the same way they compound merges. Review overnight spend the way Hu et al. attribute cost: ask which steps were subsumed re-reads, regenerated scripts, or no-op retests, and whether the harness ships reusable artifacts and fail-closed test reuse rather than hoping the model invents frugality. Steady harnessed throughput is not more tokens overnight — it is a control plane that refuses to re-pay for context and validation the factory already had.
