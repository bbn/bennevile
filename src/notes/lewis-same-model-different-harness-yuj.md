---
title: "Same model, different harness: the solver is the pair"
description: "Aug 26 Lewis (Yuj): paired control vs closed-loop harness on fixed weights — tight 20k Verified F2PF 28%→49%, solutions 43→72; frozen treatment transfers across four model designs; wide window mostly erases the gap."
date: 2026-08-26
kind: paper
source:
  title: "Same Model, Different Harness: Different Coding-Agent Results"
  url: https://arxiv.org/abs/2608.26218
project: steward
---

Sydney Lewis asks the measurement question continuous factories keep dodging: if the model and task stay fixed, does changing the **harness** change what gets done? Using the **Yuj** harness, a control arm feeds the full chronological transcript until the window fills; the treatment keeps the same durable record but mechanically shortens older tool results as context pressure rises, detects stall patterns (repeated failing commands, read-without-edit), and intervenes without an LLM judge. Same weights, tasks, tools, window, and protocol — only the checked-in configuration package differs.

Under tight context the gap is large. On a 169-task SWE-bench Verified cohort (20,480-token window, 480s endpoint), treatment raises mean per-task fail-to-pass fraction from **28% → 49%** and complete solutions from **43 → 72**. SWE-bench Pro and FeatureBench pressure cohorts move the same direction on F2PF. The same frozen treatment, with no model-specific retuning, lifts both endpoints for three additional model designs (Devstral, Nemotron, Qwen3.8). When the window is effectively unconstrained (262k), Verified and Pro arms land close — the harness lever shows up when history competes with the next decision. Evaluations that name only the model are naming half the solver.

## Why it matters for code review

Overnight harnessed throughput compounds past peak-session heroics only if you version and review the harness the way you version the model: view construction, stall detectors, context policy, stop rules. A “Claude Code mastery” burst on a generous window can look like a model win that was actually a harness non-bind. Pair with harness-effect and scaffold-audit notes: when agents work while you sleep, report model **and** harness configuration on every merge-rate claim — or you will optimize the wrong half of the factory.
