---
title: "Harness engineering: five layers, and review velocity as a Stage-1 metric"
description: "May 22 Neely Dunlap (Faros): Agent = Model + Harness — tool orchestration, verification loops, memory, guardrails, observability; baseline cost-per-merged-PR and review velocity before buying more peak-session model."
date: 2026-05-22
kind: field-note
source:
  title: "Harness engineering: A guide to building better AI coding agents"
  url: https://www.faros.ai/blog/harness-engineering
project: steward
---

Neely Dunlap’s May 22 Faros guide (updated Jul 15) is the operator’s map for the claim that always-on agent throughput is a **harness** problem, not a model-shopping problem. Formula up front: Agent = Model + Harness. Maturity arc: prompt engineering → context engineering → harness engineering — how the model is allowed to act and self-correct. Hashimoto’s working definition lands as the practice: when an agent makes a mistake, engineer the environment so it cannot make that mistake the same way again.

Why the shift happened is the review half. Faros’s 2026 Acceleration Whiplash report is the backdrop: AI adoption produces larger, wider-blast changes whose surface quality makes subtle errors cognitively expensive to catch — the **senior engineer tax**. Better context helps; it does not replace verification, scope limits, and accountability. Anthropic-shaped failure modes they treat as harness-solvable: victory-declaration bias, context anxiety that rushes unfinished work, one-shot overreach into undocumented tangles. The LangChain Terminal Bench receipt is the clean experiment: 30th → 5th **without changing the model**, only the harness. Their own routing eval (211 real tasks) pushes the equalizer claim further: open-weight models with a strong harness landing in the same quality band as frontier routes.

A production harness, in their cut, is five layers: **tool orchestration** (chain, recover, pivot), **verification loops** (fail-fast checks during the run, not only at the end), **context and memory** (codebase + session continuity + skills), **guardrails** (sandboxes, budgets, HITL for irreversible acts), and **observability** (traces and audit so regressions are measurable). Prebuilt agent harnesses (Claude Code’s tools, loop, permissions) are the starting point; org-specific compliance linters, migration locks, and audit sinks are the custom scaffold that turns a general agent into an accountable one.

Measurement is staged so leaders do not wait for perfect telemetry. Stage 1 — already available — is the overnight-factory scoreboard: dollars per merged PR, compute per active developer, time-to-merge for agent-assisted PRs, PR size vs human, early churn, **review velocity relative to PR size**. Stage 2 needs session→PR linking (first-pass success, survival, defect escape). Stage 3 adds complexity and survey signals. When a metric looks wrong, check the harness first: failed tasks often mean partial context or skipped verification; climbing cost often means redundant tool/context loops; lost reviewer confidence often means the harness omitted the reasoning reviewers need before they can trust the diff.

## Why it matters for code review

FOMO that agents are idle overnight is the wrong scarcity if you have not baselined review velocity and cost-per-merged-PR. Continuous harnessed momentum compounds when verification loops and guardrails run with the factory — not when peak Claude Code sessions dump larger diffs into a fixed human review budget. Start with Stage 1 metrics; let them name which of the five layers deserves the next engineering dollar.
