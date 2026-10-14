---
title: "Ericsson: multi-agent review with project context hits 96% accuracy"
description: "Sep 14 industrial DSR study: specialized agents + context-specific knowledge across readability/maintainability/reliability/performance; >200 issues, ~69% rated important."
date: 2026-09-14
kind: paper
source:
  title: "Using Agentic AI for contextualized and multifaceted code review at Ericsson"
  url: https://arxiv.org/abs/2609.15877
project: steward
---

Lin et al.’s Sep 14 arXiv paper (2609.15877) is an industrial Design Science study of agentic code review under the volume pressure AI coding agents create. The gap they name: LLM review approaches rarely carry *project-specific* contextualized knowledge, and few are evaluated in real industry settings. Their answer is a multi-agent system that combines specialized agent skills with context-specific knowledge to flag antipatterns across four dimensions — **readability, maintainability, reliability, and performance** — rather than a single generic “review this diff” pass.

Evaluation is the receipt that survives vendor demos. They generated reviews for several commits, surfaced **more than 200 issues**, and had the case-company developers manually validate correctness and importance. Reported results: **96% accuracy** on correctly identifying issues in the investigated commits; of those correct findings, **~69%** rated important (**~33%** severe / must-fix, **~36%** should-fix). Qualitative developer feedback backs usefulness. Caveat for readers: this is one industrial case under DSR, not a cross-org meta-analysis — treat the percentages as a calibrated existence proof that contextualized multi-agent review can clear a human validation bar, not as a universal bot scorecard.

## Why it matters for code review

Tortoise factories that run overnight still dump review debt on humans unless the *review stage* is itself a harnessed loop with domain context. Generic comment bots are hare-adjacent: fast on every PR, thin on the antipatterns that only show up with project memory. Ericsson’s split across four dimensions plus developer-validated importance is the shape continuous verification needs under sustained agent PR volume — specialized reviewers, grounded context, and a human-labeled importance filter so the morning queue is triage, not archaeology.
