---
title: "openJiuwen: static harnesses lose when long-horizon evidence keeps arriving"
description: "Aug 28 openJiuwen team: Rail-composed Inner/Outer loops + runtime adaptivity — SWE-bench Verified 82.6% (+3.4 pp) and Terminal-Bench 2.1 87.19% (+3.39 pp) over strongest selected leaderboard points."
date: 2026-08-28
kind: paper
source:
  title: "openJiuwen: Beyond Static Harnesses for Long-Horizon Coding Agents"
  url: https://arxiv.org/abs/2608.27969
project: steward
---

Huawei’s openJiuwen team names two harness failures continuous factories hit as soon as agents run past a single session: **Structural Composability** (capabilities and topologies accumulate as bespoke orchestration) and **Runtime Adaptivity** (pre-run decisions go stale once diagnostics, tests, progress, and context pressure change mid-trajectory). Their open harness answers both with a shared Inner Loop/Outer Loop substrate, **Rail**-based lifecycle hooks that compose the same way for single agents, delegated sub-agents, and Swarm Flow, and framework-controlled adaptation around a **fixed** model policy — Context Management, Goal Mode (acceptance vs resource stop), LSP-driven passive feedback, and cross-task Self-Reflection.

On SWE-bench Verified with Claude Opus 4.5 (high), openJiuwen resolves **82.6%**, **+3.4** pp over the strongest selected non-bash-only leaderboard point (**79.2%**, also Opus 4.5). On Terminal-Bench 2.1 it posts **87.19%** with GPT-5.6 Sol (**+3.39** pp over Claude Code + Fable 5 at **83.8%**); model-matched Fable 5 reaches **84.04%**. Duration buckets on SWE stay competitive into the 1–4 hour band (**52.38%** vs **35.71%** for mini-SWE-agent at the same Opus high setting), consistent with context management under long trajectories rather than just a hotter model.

Code: [openJiuwen-ai/jiuwenswarm](https://github.com/openJiuwen-ai/jiuwenswarm). Caveats they own: system-level leaderboard comparisons, not fully controlled harness-only ablations; Goal Mode still task-level; Self-Reflection and offline evolution are complementary, not yet one loop.

## Why it matters for code review

Always-on factories that ship a static harness and hope the night’s evidence will be ignored are optimizing for the first hour. Review overnight control the way openJiuwen splits the problem: compose capabilities on one execution substrate, and let newly arrived tests, LSP diagnostics, and goal assessments change context and stop — without swapping the model mid-run. Continuous verified momentum compounds when morning merge gates see a harness that adapted under volume; FOMO for idle agents is wasted if the fleet kept replaying a plan written before the first failing check.
