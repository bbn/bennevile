---
title: "Kitchen Loop: 1,094 merged PRs under unbeatable tests and pause gates"
description: "Mar 26 Roy: six-phase coverage-exhaustion loop over two production systems; 285+ iterations, ~$0.38/PR, zero oracle-detected regressions; drift control + drain/starvation gates keep the night honest."
date: 2026-03-26
kind: paper
source:
  title: "The Kitchen Loop: User-Spec-Driven Development for a Self-Evolving Codebase"
  url: https://arxiv.org/abs/2603.25697
project: steward
---

Yannick Roy’s Mar 26 paper treats continuous factories as a **coverage-exhaustion** regime, not issue-patching: enumerate a specification surface, exercise it as a synthetic power user (~1,000× human cadence), verify with ground-truth the implementer cannot fake, and halt when quality drifts. The **Kitchen Loop** composes that into a six-phase cycle—Backlog → Ideate → Triage → Execute → Polish → Regress—anchored to a unified trust model: specification surface, **Unbeatable Tests** (4-layer compile → execute → parse → state-delta checks plus adversarial UAT with a sealed test card and a zero-context evaluator), multi-model review, and **Drift Control** with regression oracle plus automated pause gates (drain on PR backpressure, starvation when Execute yields nothing, consecutive oracle failures).

Across two Almanak production systems (DeFi strategy SDK + signal platform) the loop ran **285+** iterations and merged **1,094+** PRs at ~**$0.38**/PR (~$350/month subscriptions), with **zero** regressions detected by the domain oracles and quality gates climbing from 76–91% to 100%. A concrete UAT receipt: 38 green unit tests on a backtest HTTP service still failed the sealed user journey because constructors were never wired—PRODUCT_FAIL kept the ticket open. Ralph-style overnight commit loops are positioned as the ancestor missing ticket parity, pause gates, and a Foundation/Composition/Frontier scenario mix; task-completion agents stay local-fix modes.

## Why it matters for code review

Always-on merge volume without a specification surface and an author-independent oracle is just a faster way to accumulate unverifiable “done.” Review continuous lanes for Kitchen-Loop-shaped contracts: sealed user-test cards the implementer cannot execute, state-delta oracles that outrank file presence, and gates that **pause or drain** when open PRs or starvation accumulate. Steady harnessed throughput compounds when the night is allowed to stop; FOMO for idle agents without drift control is the failure mode the pause gates exist to catch. Pair with [Proof-or-Stop’s evidence-gated lifecycle](/posts/proof-or-stop-evidence-gated-lifecycle/) and [Lulla’s OSS loop-adoption mine](/posts/lulla-loop-engineering-building-blocks-adoption/) when promoting unattended factories past CI-green.
