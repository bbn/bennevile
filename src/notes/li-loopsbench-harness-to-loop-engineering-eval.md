---
title: "LoopsBench: end-state pass rate misses the loop—best config resolves 25%"
description: "Jul 31 Li et al. (Microsoft): 112 dependency-DAG tasks, 5,300+ units, flow-aware test release + live regressions; Opus-4.7 + Claude Code + outer continuation tops out at 25% resolve."
date: 2026-07-31
kind: paper
source:
  title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation"
  url: https://arxiv.org/abs/2608.00267
project: steward
---

Han Li, Zhemin Fang, Rili Feng, Yingqi Zhao, Jiaheng Liu, Pengfei Gao, He Ye, Dayi Lin, Qingwei Lin, Saravan Rajmohan, and Dongmei Zhang argue coding-agent eval is shifting from **harness engineering** to **loop engineering**: sustained work over dependency structure, state continuity, and regression pressure. **LoopsBench** materializes **112** long-horizon tasks (PR sequences, course labs, research evolutions; 8 languages, 9 domains) as dependency DAGs with **>5,300** separately testable development units. A flow-aware runtime releases tests along the ready frontier and keeps completed nodes as live regression obligations while recording loop traces.

The ceiling is low. Strongest configuration—**Opus-4.7 with Claude Code and outer continuation**—resolves **25.00%** of tasks. Without outer continuation, runs typically cover only a shallow dependency prefix. Across loop profiles (Codex/Claude goal modes, Claude dynamic workflows, Ralph), **regression events remain visible**; recorded plans recover only part of the source-evidenced prerequisite DAG (closed loops Edge F1 ~0.58–0.71; open loops ~0.27–0.39). Agents author sparse tests relative to native suites and produce longer patches than gold on resolved units. Dynamic workflows renew context most aggressively and post the best observed resolve among the four RQ3 profiles—but still do not erase regressions.

## Why it matters for code review

Overnight factories judged only on final green miss the obligations that accumulate while the agent works: prerequisite order, residual routing, and previously passing units that later fail. Review always-on long-horizon lanes for LoopsBench-style contracts—separately testable units, regression retention after each increment, and traces that attribute failure to plan/state/loop rather than “the model.” Continuous verified momentum compounds when the outer loop keeps completed work as live checks; bursty single-issue mastery does not measure that surface. Pair with [Lulla’s OSS loop-adoption mine](/posts/lulla-loop-engineering-building-blocks-adoption/) and [Peng’s LoLBench long-horizon proposals](/posts/peng-lolbench-long-horizon-proposal-modular-dev/) when sizing multi-day factory budgets.
