---
title: "Isolated milestones look solved; continuous evolution does not"
description: "Mar 13 Deng/Chen et al.: on SWE-Milestone’s 98 dependency-linked milestones, frontier scores fall from >80% independently to ≤38.03% continuously—recall still grows, precision saturates, regressions snowball."
date: 2026-03-13
kind: paper
source:
  title: "SWE-Milestone: Evaluating AI Agents on Continuous Software Evolution"
  url: https://arxiv.org/abs/2603.13428
project: steward
---

Gangda Deng, Zhaoling Chen, Zhongming Yu, Xingyao Wang, and colleagues (USC / UCR / UCSD / OpenHands and partners) argue that SWE benches that reset the repo after each task hide the failure mode that matters for always-on factories: **error accumulation across a dependent stream**. Their DeepCommit pipeline rebuilds release ranges into verifiable **Milestone DAGs**—functionally cohesive commit groups with prerequisite edges—yielding **SWE-Milestone**: **98** human-verified milestones across **7** itineraries and five languages. Agents evolve a **persistent** codebase; new milestones unlock only when prerequisites complete; snapshots are graded in isolation for Fail-to-Pass feature work and Pass-to-Pass regressions.

The headline gap is stark. Independently, frontiers clear **>80%** on the same milestones; under continuous evaluation the best Score is **38.03%** (Claude Opus 4.6 + OpenHands), with full Resolve Rate at most **~13%**. The mechanism is asymmetric: **Recall** (new feature tests fixed) keeps growing near-linearly, while **Precision** (edits that improve rather than break existing tests) **saturates**—agents still implement, but they stop protecting the system. Unresolved regressions propagate through the DAG (“snowball”), and late milestones rarely resolve fully. Behaviorally, higher scores track proactive exploration plus **disciplined verification**; blind thrashing without tests accelerates debt. Cost is not mastery: Gemini 3 Flash matches Gemini 3 Pro at roughly one-ninth the spend.

## Why it matters for code review

Peak-session heroics on a fresh checkout are a different sport from overnight lanes that keep yesterday’s half-fixed debt. Merge-rate dashboards built on isolated issues will overstate readiness for continuous factories. Review that asks only “did this milestone’s new tests pass?” without a regression portfolio is measuring the half that still scales. Pair with [Li’s LoopsBench](/posts/li-loopsbench-harness-to-loop-engineering-eval/) when the question is loop engineering under persistent obligations, and with [Mehta’s regression-gated RL](/posts/mehta-cross-benchmark-transfer-rl-agentic-coding/) when training itself must fail closed on pass-to-pass breaks.
