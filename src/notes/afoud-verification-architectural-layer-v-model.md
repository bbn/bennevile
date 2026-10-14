---
title: "Verification as an architectural layer: V-model agents that abstain instead of burning the budget"
description: "Sep 25 Afoud & Wu: pair each spec level with an external verifier; deterministic gates + optional judges; unverified ReAct answers 0/10 (all hit caps), verified VG answers 8/10 and abstains with cause."
date: 2026-09-25
kind: paper
source:
  title: "Verification as an Architectural Layer for LLM Agents: A V-Model Design, and a Pilot Study of Its Deterministic Core"
  url: https://arxiv.org/abs/2609.31937
project: steward
---

Afoud and Wu argue that ReAct-style agents concentrate strategy, action choice, formatting, and adequacy judgment in one model — so a loop that cannot progress does not report failure; it continues until an external budget kills it. They transplant software engineering’s **V-model**: specification levels descend from requirements to steps; each level pairs with a dedicated verifier; a deterministic controller enforces every verdict; memory is written only by verification outcomes. Each verifier splits a zero-cost **deterministic gate** from an optional LLM **judge**, so the two halves can be priced separately. Output is an accepted answer **or** an abstention naming the failing level — never a fluent guess the caller cannot distinguish from success.

A pilot on MuSiQue four-hop (8B backbone, five configurations, 47 executions) makes the termination contrast stark. Unverified plain ReAct and ReAct+planner answered **none** of ten questions — every scoreable run hit the step cap; uncapped runs ran until the provider refused them. The minimal verified configuration (gates, no planner) answered **eight of ten** and abstained on the rest with a recorded cause. Deterministic gates produced **eight of nine** observed corrections at zero marginal cost; adding a planner **without** its paired integration verifier degraded success (~0.80 → ~0.08 when a plan actually ran). The authors are explicit about scope: silent-error detection is untested at 8B, guards and gates are still confounded, and the integration (L2/R2) pair needs a code domain such as SWE-bench.

## Why it matters for code review

Overnight agent factories raise the verification tax precisely when ReAct-style loops refuse to decline. Review always-on agent infra for external, binding verifiers per specification level — and for merge criteria that treat “hit the token limit” as a failed run, not a soft timeout. Continuous verified momentum compounds when FOMO for more unattended steps funds free deterministic gates and reasoned abstention rather than another bursty Claude Code session that only stops when the provider pulls the plug.
