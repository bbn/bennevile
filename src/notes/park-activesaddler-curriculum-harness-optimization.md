---
title: "ActiveSaddler: the harness curriculum co-evolves—which failures get the next rollout"
description: "Oct 1 Park et al. (Microsoft/POSTECH/KAIST): ActiveSaddler treats scenario selection for harness optimization as a non-stationary bandit over failure-pattern arms; +4.4 / +7.5 pp Pass@1 over the same optimizer with a fixed scenario order."
date: 2026-10-01
kind: paper
source:
  title: "ActiveSaddler: Automated Curriculum Learning for Agent Harness Optimization"
  url: https://arxiv.org/abs/2610.00906
project: steward
---

Sungho Park, Wonjoong Kim, Jue Zhang, and coauthors (Microsoft / POSTECH / KAIST) split automated harness optimization into two budgets: **how** to patch prompts, tools, and control logic, versus **which training scenarios** generate the feedback that drives those patches. Existing AHO methods (AutoSaddler, GEPA, Meta-Harness) mostly fix the scenario schedule up front. As the harness evolves, unresolved failures lose attention too early and repaired ones keep burning rollouts—especially costly under a capped interaction budget.

**ActiveSaddler** reformulates scenario selection as automated curriculum learning: a non-stationary bandit whose arms are **failure patterns** instantiated online from diagnosed traces. Three modules co-evolve with the harness—a Failure-Pattern Extractor (atomic / composed patterns, not coarse categories or one-arm-per-scenario), an Arm Prioritizer (LLM scores severity, fixability, breadth, side-effect risk), and an Exploration Controller (revisit known arms vs draw unseen scenarios). Instantiated on AutoSaddler with the same optimizer and rollout budget, it lifts test Pass@1 by **+4.4 pp** on GAIA2 (**59.8%** vs **55.4%**) and **+7.5 pp** on Terminal-Bench 2.0 (**80.0%** vs **72.5%**), beating difficulty-ordered fixed curricula and transferring a **+3.0 pp** lift when wrapped around GEPA. Ablations hurt: category/scenario arms, flat arm scores, and a fixed every-five-iteration explore schedule each erase most of the gain. End-to-end, curriculum overhead is offset by fewer wasted task-agent rollouts (e.g. GAIA2 **58.5%** dev accuracy at **$298** vs AutoSaddler **$1,360** to the same mark).

## Why it matters for code review

Self-improving overnight factories that only ask “did the patch land?” still under-allocate the scarce resource that compounds: **which failure class gets the next verified loop**. Review harness-evolution PRs for ActiveSaddler-shaped artifacts—versioned failure-pattern registries, pull-vs-draw decisions, and attributable arm scores—not a shuffled mini-batch and a hope the meta-agent notices. Steady harnessed throughput compounds when the curriculum tracks unresolved weaknesses as the control plane changes; bursty mastery that rewrites prompts against a fixed task order does not. Pair with [HarnessLens’s behavior-aware verification](/posts/xu-harnesslens-behavior-aware-harness-evolution/) and [AutoAgent’s overnight hill-climb](/posts/thirdlayer-autoagent-overnight-harness-hillclimb/) when promoting unattended harness diffs past a leaderboard bump.
