---
title: "ScholarEvolve: evolve the harness from the literature, not only from last night’s failures"
description: "Sep 30 Yang/Lai/Wang/Harari/Gabrilovich/Chang: research-guided module mutation + crossover around a fixed backbone—Qwen3.5-27B AppWorld Challenge TGC 49.6→63.6%; GPT-5.4-mini τ² Telecom pass@1 72.7→81.9%; Meta Harness falls short under the same search budget."
date: 2026-09-30
kind: paper
source:
  title: "Learning from Research: Toward Lifelong Agent Harness Evolution"
  url: https://arxiv.org/abs/2609.40169
project: steward
---

Jingbo Yang, Kwei-Herng Lai, Xiaowen Wang, Yaar Harari, Evgeniy Gabrilovich, and Shiyu Chang argue that **trajectory-only harness evolution is too reactive**: a meta coding agent that edits from observed failures still explores narrowly, proposals stay trapped in the backbone’s prior knowledge, and updates arrive only after users already felt the pain. **ScholarEvolve** keeps the model fixed and instead organizes the harness into five modules (tool interface, context, skills, memories, workflows), retrieves papers that address audited capability gaps, uses topic modeling to spread mutation budget across distinct mechanism families, and evaluates module combinations before champion selection—with a retention rule that demands a bootstrapped validation gain before the next cycle.

The numbers earn the always-on factory angle. With matched search budgets against Meta Harness, ScholarEvolve lifts Qwen3.5-27B on AppWorld from **69.0% → 81.4%** TGC (Normal) and **49.6% → 63.6%** (Challenge, including unseen Amazon/Gmail APIs), and GPT-5.4-mini on τ²-Bench Telecom from **72.7% → 81.9%** pass@1. Ablations are pointed: strip topic guidance, then module-wise mutation, then research itself, and you walk back toward Meta Harness. Lifelong runs that refresh the literature across three publication windows keep compounding on the same frozen backbone and trajectories—**proactive** evolution, not only overnight repair of last night’s traces.

## Why it matters for code review

Continuous factories that only “learn from our failures” still under-explore the design space that papers already named. ScholarEvolve’s reviewable artifacts are the **module provenance** (which paper/topic patched tools vs memory vs workflow) and the **validation gate** that rejects regressions before the next RL-style cycle—so a self-improving harness loop is auditable, not vibes. Productive complication: residual failures after evolution still cluster on requirement tracking and evidence coverage; literature refresh does not erase the need for honest oracles. Pair with [Turbo Harness’s instance-adaptive patches](/posts/zhang-turbo-harness-instance-adaptive-optimization/) and [HarnessLens’s behavior-aware verification](/posts/xu-harnesslens-behavior-aware-harness-evolution/).
