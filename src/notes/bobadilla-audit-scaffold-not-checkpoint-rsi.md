---
title: "Audit the scaffold, not the checkpoint: frozen weights still let RSI expand"
description: "Sep 28 Bobadilla-Suarez, Suh, Fortin: stationarity dichotomy — fixed reachable edit set ⇒ saturation; escape only if the scaffold expands. Best-of-k buys rate not ceiling; same-family vote fails 42% of tasks."
date: 2026-09-28
kind: paper
source:
  title: "Audit the Scaffold, Not the Checkpoint: A Stationarity Dichotomy for Recursive Self-Improvement in Agentic Coding"
  url: https://arxiv.org/abs/2609.34924
project: steward
---

Bobadilla-Suarez, Suh, and Fortin ask the governance question most overnight RSI dashboards get wrong: is a **frozen checkpoint** evidence that recursive self-improvement has stopped? Their **stationarity dichotomy** says no. Iterative self-modification hits strict diminishing returns whenever the agent’s reachable set of edits stays fixed, and can escape only if that set expands. Rewriting scaffolding — tools, verifiers, decomposition — expands what an agent reaches **without touching a weight**, so frozen weights buy an eventual ceiling but not stationarity along the way. Audit the scaffold, not the checkpoint.

They read refinement as gradient boosting on residual error (a patch / git diff), then measure where deployed loops break the analogy: patches **compose** instead of standing beside each other to be voted on, and worker failures **overlap**. On SWE-bench Lite refinement, per-round improvement decays toward zero; across 401 production sessions churn decays geometrically — a shape shared with a pre-AI human baseline. Sideways, best-of-$k$ orchestration realizes the best worker’s ceiling exactly (width buys **rate**, not budget). The vote that would beat that ceiling needs diversity real same-family workers lack: on 30 workers, failure overlap sits at its maximum and a majority fails **23/55 (42%)** of tasks. Re-consulting a fixed pool has a horizon computable in advance unless the pool can already fit the work.

## Why it matters for code review

Always-on factories that advertise “weights frozen, therefore safe RSI” are checking the wrong artifact. Review harness-evolution and multi-agent orchestration PRs for whether the night expanded tools, verifiers, or decomposition — and for retention / diversity evidence before trusting a vote. Continuous verified momentum compounds when FOMO for more unattended rounds funds scaffold audits and measurable saturation curves rather than another burst that confuses a frozen checkpoint with a stationary factory.
