---
title: "Loop engineering in the wild: 217 confirmed always-on agent loops, almost no committed state"
description: "Aug 22 Lulla et al.: gray-lit definition + mine of 36,710 repos; 217 confirmed autonomous loops (mostly event PR-review/cron triage); configs committed, runtime state almost never versioned."
date: 2026-08-22
kind: paper
source:
  title: "Loop Engineering: Building Blocks, Adoption, and Impact"
  url: https://arxiv.org/abs/2608.21884
project: steward
---

Jai Lal Lulla, Vahram Nersesyan, Seyedmoein Mohsenimofidi, Christoph Treude, and Sebastian Baltes put **loop engineering**—designing systems that start coding agents on a schedule or repo event and stop them on a machine-checkable condition—on an empirical footing. A gray-literature review converges on building blocks: triggers, stop conditions, persistent state, independent verifiers, budgets, and escalation. A mining study then scans **36,710** engineered software repos and manually verifies every heuristic match.

They confirm autonomous agent loops in **217 of 256** candidate repos (**0.59%** of the frame; precision **0.868**). Of those, **180** run on repo events only (mostly automatic PR review), **21** on schedule only, **15** on both. Claude Code dominates attributions (**189/217**). The split that matters for factories: **committed triggers are common** (253 repos with schedule/event agent workflows), but the discourse-prescribed **state files are almost absent**—two candidates, both rejected as homonyms; zero committed stop-condition phrase matches, budget files, or loop-referenced verifier subagents. Loops run; their runtime state lives outside version control (issue trackers, platform run histories). A planned autonomy experiment (interactive vs goal-driven vs scheduled) is outlined for the journal extension.

## Why it matters for code review

Always-on factories are already shipping in open source—mostly as event-triggered review and cron triage—without the STATE.md orthodoxy the blogs prescribe. Review continuous agent lanes for what this study can actually see: committed schedules and event workflows that invoke an agent CLI, named escalation, and whether anyone can audit *what the loop did* when state never lands in git. FOMO for “overnight agents” without observable stop conditions and independent verification is exactly the unverifiable configuration the authors flag. Pair with [Osmani’s loop engineering field note](/posts/addy-osmani-loop-engineering/) and [LoopsBench’s dependency-DAG eval](/posts/li-loopsbench-harness-to-loop-engineering-eval/) when promoting unattended merge-rate goals.
