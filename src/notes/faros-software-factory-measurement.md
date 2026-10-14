---
title: "Factory throughput without review capacity is a measurement failure"
description: "Sep 1 Faros field note: software factories coordinate agents, harnesses, and verification — and the 2026 Engineering Report shows AI adoption lifting throughput while PR review time jumped 441.5%."
date: 2026-09-01
kind: field-note
source:
  title: "What a software factory is and how it works"
  url: https://www.faros.ai/blog/software-factory
project: steward
---

Neely Dunlap’s Faros primer treats the software factory as the unit above a coding session: agents plan, write, test, review, and troubleshoot inside harnesses, skills, evals, and human checkpoints. The useful claim is operational, not branding. Existing CI/CD stays in the loop; the factory is what coordinates context, tools, workflows, and the checks that decide whether agent output may advance.

The measurement hierarchy is the receipt. Layer 1 is activity (sessions, tokens, skill executions, spend). Layer 2 is effectiveness (eval pass, first-pass success, intervention rate, cost per successful task — Uber’s cost-per-merged-PR / review / alert style). Layer 3 is engineering-system behavior (PR throughput, review time, rework, bugs, incidents). Layer 4 is software outcomes. Faros’s 2026 Engineering Report (telemetry across 22k+ developers / 4k+ teams) is the cautionary slide: higher AI adoption tracked with 33.7% more task throughput and 66.2% more epics completed — and with bugs per developer +54%, incidents per PR +242.7%, and median PR review time +441.5%. Activity and completion can look healthy while the review and reliability layers are drowning.

## Why it matters for code review

If you only watch agent sessions and task completion, a review queue exploding under agent PR volume looks like success. Score the factory through review latency, rework, and incidents as first-class outcomes — then spend harness and eval budget on verification capacity, not just generation throughput.
