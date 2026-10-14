---
title: "SCLATE: month-long agent calendars on a hybrid clock, not a custom loop per harness"
description: "Sep 26 Jung/Bilkhu et al. (Apple): open event scheduler + hybrid simulated clock compresses 30-workday MetaClaw to median 5.9h (162×); ten harness×memory configs × ten models; post-train through unmodified Claude Code/Hermes/Codex."
date: 2026-09-26
kind: paper
source:
  title: "SCLATE: A Substrate for Continual-Learning Agent Training and Evaluation"
  url: https://arxiv.org/abs/2609.32391
project: steward
---

Youngmok Jung, Sirajul Salekin, Henry Tran, Javier Movellan, Zhao Huang, and Manjot Bilkhu (Apple) target a missing substrate for **continual-learning agents**—systems of model + harness + memory that must interleave tasks with session stop/start, crons, and memory consolidation across multi-day horizons. Existing suites either hardwire a built-in assistant or schedule only the benchmark’s events, so every harness–benchmark pair reinvents a scheduling loop. **SCLATE** makes both sides adapters on one **open event scheduler**. A **hybrid simulated clock** flows with wall time while the agent (or a background job) is busy, then jumps idle gaps—compressing overnight and weekend silence into pure execution time via `libfaketime` so unmodified Claude Code / Hermes / Codex crons and memory sidecars see the scenario timeline without source edits. An in-container proxy records tokens and log-probs for every model call, attributed to harness vs memory, turning the same runs into post-training rollouts.

On seven ported benchmarks (MetaClaw, GAIA-2, AppWorld, LongMemEval, PersonaMem, SWE-Gym, SWE-bench Verified), a 30-workday MetaClaw arc spanning 40 calendar days finishes in a **median 5.9 real hours** (**~162×** speed-up; **142×** over all runs combined). Across **100** MetaClaw configs the scheduler dispatches **77,700** benchmark-side and **12,400** agent-side events; GAIA-2 fires **13,050/13,050** environment events with **98.7%** at the scenario-specified delay. Head-to-head: **ten** harness×memory configurations × **ten** models show no single memory wins for every model—added Mem0/Hindsight/GBrain underperforms native memory in **11/50** Claude Code / Hermes cells—and models differ sharply in harness use (Gemini-3.7F spends **7.6%** of tool calls on session-search vs ≤**1.6%** for others). Post-training Qwen3.5-4B through unmodified harnesses lifts held-out MetaClaw by up to **+11.8** pp (Claude Code + Mem0) and SWE-bench Verified Pass@1 **9.8%→26.5%** under Claude Code, with **6.8×** fewer file lines read on matched tasks.

## Why it matters for code review

Always-on factories that only measure single-session SWE patches miss the overnight shape of real agent work: session boundaries, nightly consolidation, mid-turn notifications. SCLATE’s useful receipt is infrastructural—put crons and memory on the same clock as the workload, compress idle time without lying about event order, and score model–harness–memory *together*. Continuous verified momentum compounds when you can replay a month of factory life in hours and reject “we bolted on Mem0” claims that don’t beat native memory for that model. FOMO for more overnight sessions without a shared scheduler just multiplies one-off harness scripts.
