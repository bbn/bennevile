---
title: "Reviewer skills are the floor; agent management is the job"
description: "Sep 10 field note: after 30 days of agent-primary production code, Tamiz argues the craft moved upstream — specify interfaces, manage context, verify fit — and treating agents as juniors you only review leaves architectural debt."
date: 2026-09-10
kind: field-note
source:
  title: "From Code Reviewer to Agent Manager: Lessons from 30 Days of AI-Generated Software"
  url: https://tamiz.pro/insights/code-reviewer-to-agent-manager-ai-generated-software
project: steward
---

Tamiz Uddin spent twelve years as a code reviewer and assumed the skill would transfer when agents became the primary authors. Thirty days of agent-first production work said otherwise. Code review assumes an autonomous author whose decisions you evaluate. Agent management assumes *you* are the author and the model is a fast, sometimes catastrophic implementer. The work moved upstream: decisions before the code exists, then verification that output matches intent.

Three practice shifts matter for anyone still staffing “reviewers” as the control plane. Prompt design replaces code reading as the primary craft — treat the prompt like an API contract (interfaces first, implementation filled in). Context becomes an engineering artifact: a living `CONTEXT.md` tuned for the model, not Wiki prose for humans. And reading is not verification: generated code can look right, pass tests, and still misunderstand the domain — so check fit to the surrounding system top-down through dependencies, not bottom-up line by line.

He also prices the taxes most org charts ignore: cognitive load of tracking what the agent knows, time spent untangling bad design that was “faster” to generate, and reliability cost from non-deterministic runs of the same prompt. The keep for hiring and role design: keep humans on architecture and specification; treat review as QA, not the main contribution. Write tests against generated functions before you even read them.

## Why it matters for code review

If your team still measures the human job as “catch bugs in the agent PR,” you are staffing the old bottleneck. Spec, interface contracts, and verification posture scale; pasting agent diffs into a review UI does not. Re-title the scarce role honestly — agent manager with a review gate — or you will keep promoting reviewers into a craft that no longer matches the work.
