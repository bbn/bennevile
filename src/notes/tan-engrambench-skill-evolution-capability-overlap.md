---
title: "EngramBench: skill banks cut thrash, but the last mile still needs the model"
description: "Sep 30 Tan/Gu/Li et al.: capability-overlap-without-solution-overlap bench for skill-evolution harnesses—static skill banks slash multi-hour coding time >55% as an execution compass, without magically bypassing exact implementation."
date: 2026-09-30
kind: paper
source:
  title: "EngramBench: A Capability-Grounded Benchmark for Skill-Evolution Harnesses"
  url: https://arxiv.org/abs/2609.39284
project: steward
---

Zhixuan Tan, Pengjie Gu, Zhao Li, Yihan Hu, Xu He, Dong Li, and Jianye Hao attack a quiet failure mode in **skill-evolution harness** evaluation: scores that look like “the agent learned a reusable capability” when it mostly **copied near-duplicate solutions** from prior training trajectories. EngramBench’s governing rule is **capability overlap without solution overlap**—thirty diverse learning tasks plus thirteen unseen transfer tasks, with agents driven through interactive, multi-hour development cycles against LLM-simulated users.

Across **48 multi-hour trajectories** (with human-expert validation), the punchline is procedural, not magical. **Static skill banks do not erase the last mile of exact code implementation**—that remains bounded by the base model’s reasoning. What they *do* provide is an **execution compass**: by steering agents away from catastrophic, token-heavy trial-and-error, genuine capability abstraction cuts redundant context bloat and reduces overall coding time by **over 55%**. The benchmark’s contribution is the measurement frame itself—shifting skill-evolution claims from pattern matching toward verifiable cross-domain transfer.

## Why it matters for code review

Always-on factories that “remember skills overnight” only compound if the memory is a **verified capability**, not a leaked patch. EngramBench is a productive complication for harness cheerleading: persistent skill banks buy navigation and burn-rate under sustained load, but review still has to gate the last-mile diff against real oracles. Score skill evolution the way you’d score a merge queue under volume—did the harness prevent thrash and preserve transfer, or did it pad context with near-copies? See also [RASO’s cross-harness skill optimization](/posts/chu-raso-cross-harness-skill-optimization/) and [ModularRSI’s benchmark-disjoint harness evolution](/posts/wu-modularrsi-benchmark-disjoint-modular-harness-rsi/).
