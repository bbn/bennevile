---
title: "Unhealthy code costs more for agent reviewers too: each CodeHealth point cuts review-and-fix tokens 3.5–6.1%"
description: "A pre-registered study ran 465 agent-authored PRs through a frozen five-agent review-and-fix pipeline on three LLMs. Healthier baseline code meant fewer tokens, independent of PR size, because review agents iterate more on messy code."
date: 2026-10-15
kind: paper
source:
  title: "CodeHealth Predicts the Token Cost of Agentic Code Review: A Pre-Registered Study of 465 Agent-Authored Pull Requests"
  url: https://arxiv.org/abs/2610.21914
project: steward
---

**Lo Gullstrand Heander, Markus Borg, Emma Söderberg and Christofer Rydenfält** asked whether the old case for refactoring still holds when no human reads the code. They sampled **465** agent-authored PRs from **246** repositories in the AIDev dataset, stratified by baseline CodeHealth (a maintainability score) and by PR footprint, and ran every PR through the same frozen pipeline: four review agents and one batch fix agent, prompts hashed and registered in advance, on three different LLMs.

For all three models the result pointed the same way. Each CodeHealth point was associated with **3.5% to 6.1% lower token cost**, with confidence intervals excluding zero. CodeHealth was unrelated to PR size, so this isn't just "big PRs cost more." The extra cost showed up in the review stage, where agents **took more iterations on unhealthy code without writing more comments**. Two of three pre-registered code smells predicted fix cost. And the batch fix pass didn't make the code healthier: median CodeHealth after the fix was unchanged.

The authors are careful about the mechanism. Adjusting for the size of the scored files absorbed the effect, which they read as file size carrying it, so refactoring that only moves the score without changing structure or file size may not buy much. The per-point effect is modest, but it compounds across a pipeline that reviews every push.

## Why it matters for code review

When agents review and fix around the clock, the codebase itself sets part of the verification bill. Messy files make review agents spin longer per PR, and the fix agents don't clean up as they go, so the cost persists. That gives maintenance work a line item in an always-on factory's token budget, alongside [Tessl's finding that a small tail of many-round PRs eats half its review spend](/posts/tessl-75-percent-prs-merge-without-human-review-loop-spend/) and [Nemeth's 500-round loop where checking cost more than writing](/posts/nemeth-500-rounds-autonomous-loop-checking-costs-more-than-writing/). See also [reviewers on reviewability debt](/posts/rahman-who-pays-review-cost-reviewability-debt/).
