---
title: "AI software factory: coding speed alone hits Amdahl’s wall—automate the whole SDLC"
description: "Sep 30 Pavlenko et al. (Microsoft): Hotspan targeting + Darwin evolutionary swarms on ECTs; Autoperf 0.35 PRs/engineer-hour (3× agentic coding); Darwin up to 22× token-efficient vs OpenEvolve; OSS top-20 avg +13.8%."
date: 2026-09-30
kind: paper
source:
  title: "Towards an AI Software Factory for Data Systems"
  url: https://arxiv.org/abs/2609.36323
project: steward
---

Anna Pavlenko and collaborators at Microsoft (with Wisconsin and GitHub) name the Amdahl trap: a **10×** coding speedup barely moves end-to-end SDLC latency when targeting, review, and ops stay human-bound. Their **AI Software Factory** stacks a World Model (provenance-gated viewpoints over telemetry, code, reviews, incidents), **Hotspan** (evidence-ranked Evolutionary Coding Tasks with ROI and production-derived eval harnesses), **Darwin** (memetic evolutionary swarms—agent sessions as variation operators inside an ideator-guided search), adversarial review assist, and AutoSRE. Scope is deliberately narrow: Data Systems plus Evolutionary Coding Tasks with measurable objectives (e.g., latency), so automated feedback can close the loop. Darwin’s agent-first search is up to **22×** more token-efficient than OpenEvolve-style baselines on classical problems; hypotheses are first-class shared memory with tabu and exploration bonuses so parallel agents do not rediscover the same dead end.

Production Autoperf across tens of Dynamics/Power/Agent 365 repos reports **0.35** PRs per engineer-hour on application work—about **4.7×** manual and **3×** today’s best agentic coding—median gains **1.72×** (p90 **10×**) across latency, throughput, and resource metrics. On **45** OSS systems under a **$2,500**/repo token budget, every target improved; the best **20** averaged **+13.8%**. Decision traces from targeting and Darwin feed World Model updates and DPO preference fine-tunes (parent→child diffs ranked by objective), closing a self-improvement loop. The paper is frank about open problems: general World Models, flighting automation, noisy Darwin cost, and calibrating trust in World Model promotion.

## Why it matters for code review

Overnight continuous-optimization factories do not fail at “write the patch”—they fail when targeting lacks evidence, review cannot absorb agent volume, and merge still means reputation rather than measured lift. Treat Darwin-style swarms as always-on capacity that still needs Hotspan-grade eval harnesses and maker≠checker review before production; score factory throughput by verified objective movement, not PR count. Continuous verified momentum compounds when the whole SDLC loop emits auditable decision traces; FOMO for more coding agents without targeting/review/ops automation just moves the bottleneck one step downstream.
