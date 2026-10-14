---
title: "AutoCompact: long-horizon coding agents learn when to compact—and what to keep"
description: "Oct 1 Zhang et al.: SFT+RL teaches when to compact, what working state to keep, and how to continue; +9.2 / +5.0 abs pass on SWE-bench Verified / SWE-PolyBench; 256K never overflows, 16K shares length-triggered fallback."
date: 2026-10-01
kind: paper
source:
  title: "AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents"
  url: https://arxiv.org/abs/2610.02163
project: steward
---

Xuan Zhang, Longtao Zheng, Cunxiao Du, Bo An, and Xin Dong treat context management for repository agents as three coupled decisions: **when to compact**, **what working state to preserve**, and **how to continue** from that state—not merely how to avoid overflow. Length-triggered methods wait until a budget threshold; proactive rubrics and offline-inserted compression calls leave summaries and post-compaction actions unsupervised. **AutoCompact** adds a model-invocable `compact()` action, collects **1,052** judge-corrected on-policy trajectories (trigger / working-state / continuation corrections executed before the environment continues), fine-tunes, then runs outcome-based RL (GRPO, binary task success only) so coding and compaction share one reward.

On the same Qwen3-Coder-30B-A3B scaffold, AutoCompact reaches **39.6%** on SWE-bench Verified and **24.5%** on SWE-PolyBench Verified—**+9.2** and **+5.0** absolute over the full-history base (**30.4** / **19.5**). Gains hold across inference budgets from **$0.10–$4.00** per task under a **256K** window that never hits forced compaction and under a shared **16K** length-triggered fallback. Ignoring the same trained checkpoint’s compaction calls drops pass rates (largest gap **19.9%** at $0.10), so the win is not training alone. RL also raises proactive compact use (**44.3% → 58.5%** of tasks) while cutting key-state and next-action summary omissions.

## Why it matters for code review

Continuous overnight lanes fill context with stale searches and failed hypotheses long before the window overflows; agents that only compact at the limit restart mid-stage or lose the next edit plan. Review agent PRs for AutoCompact-shaped contracts: a learned compact point after a stage resolves, a working-state summary that names files and remaining actions, and a first post-compact step that follows that plan rather than re-exploring. Always-on factories that FOMO for another pass need this to sustain verified momentum without context blowups—pair with [Osmani on state, sessions, and handoffs](/posts/addy-osmani-long-running-agents-state-sessions-handoffs/) and [Li’s grow-the-harness-not-the-context](/posts/li-grow-the-harness-not-the-context/) when the merge gate asks whether the lane can run past a single context fill.
