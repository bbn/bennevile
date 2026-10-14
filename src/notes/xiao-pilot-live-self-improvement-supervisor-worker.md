---
title: "PILOT: live steering mid-run beats post-hoc harness updates alone"
description: "Aug 27 Xiao et al.: supervisor–worker harness redirects active workers and distils skills/memory live; +14.6/+12.4 pp Terminal-Bench self-improvement, tokens down ~43–47%."
date: 2026-08-27
kind: paper
source:
  title: "PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents"
  url: https://arxiv.org/abs/2608.26530
project: steward
---

Yang Xiao, Yusong Sun, Haoyi Wu, Wenyang Hui, Wen Da, Zhaokai Luo, Mu Chuan, Yao Hu, Wenjie Li, and Chengyue Jiang (AllSpark) argue that most self-improvement is **too late**: reflection, judges, and harness edits run after the trajectory ends, so they cannot recover the active run or validate lessons against the execution that revealed them. **PILOT** is a supervisor–worker harness for **live** self-improvement with two coupled mechanisms. **Live steering**: a separate supervisor stays connected through a two-way channel (notification, question, result; steer, abort) and can redirect or kill the worker mid-turn without waiting for a final summary. **Live self-evolution**: procedures, conventions, and failure modes distilled during supervision update persistent skills and memory; later workers in the same episode or later episodes load the evolved harness. Implemented as an extension to the Pi coding-agent runtime with the same frozen model as supervisor and worker.

Holding backbone fixed, PILOT ranks first in five of six backbone–benchmark combinations. On Terminal-Bench 2.0 it averages **71.6%** one-shot pass rate (**+5.3** pp over Pi). In a self-improvement setting that sweeps the benchmark across iterations without feeding verifier outcomes into skill authorship during the run, best-so-far Terminal-Bench rises **+14.6** pp (GLM-5.1) and **+12.4** pp (Kimi-K2.6); mean output tokens per evaluated task fall **42.9%** / **47.4%** while successful evaluations per million tokens more than double. Hard tasks absorb most of the live-steering-aided successes—easy tasks rarely need mid-run redirection.

## Why it matters for code review

Continuous factories that only evolve prompts and skills between overnight jobs miss the compounding available **inside** a long run: recover the active branch, then keep the lesson for the next worker. Review always-on supervisor lanes for PILOT-shaped contracts—separate oversight context, abort authority, and harness updates that do not wait for morning postmortems—without collapsing supervisor and worker into one context that cannot see its own stall. Steady harnessed throughput compounds when correction and accumulation share one loop; peak-session heroics that cannot be redirected mid-flight do not. Pair with [Razhigaev’s reviewed-core Ouroboros evolution](/posts/razzhigaev-ouroboros-reviewed-core-evolution/) and [Harness-of-Harness multi-day continual improvement](/posts/harness-of-harness-continual-improvement/) when sizing multi-day agent budgets under FOMO for agents that keep working while you sleep.
