---
title: "Agent PRs: reviewer engagement and stable loops beat more commits"
description: "Feb 23 MSR ’26 study of 33,596 agent-authored PRs (AIDev): 71.5% merged overall, but merge odds track reviewer engagement and coordination stability more than iteration volume. Force pushes and large changes hurt; actionable review loops explain most qualitative successes."
date: 2026-02-23
kind: paper
source:
  title: "When AI Teammates Meet Code Review: Collaboration Signals Shaping the Integration of Agent-Authored Pull Requests"
  url: https://arxiv.org/abs/2602.19441
project: steward
---

**Costain Nachuma and Minhaz F. Zibran** treat agent-authored pull requests as socio-technical events, not just patches. Using AIDev’s curated popular subset — **33,596** agent PRs across **2,807** repositories and five coding agents — they ask what share merge and which review-time signals associate with integration.

**Baseline (RQ1):** 71.5% merged, 21.6% closed without merge, 6.9% still open. Rates and speed vary sharply by agent: OpenAI Codex merges at **82.6%** with median decision under an hour; Copilot at **43.0%** with a 13-hour median; Devin sits in between at **53.8%**.

**Collaboration signals (RQ2):** logistic regression with repository-clustered errors finds **receiving at least one review** is the strongest correlate of merging. Force pushes during review and larger change size lower merge odds. Once those are in the model, commit count and adding tests add little independent explanatory power. Conditional on getting a review, longer time to first review correlates with higher merge odds — likely prioritization, not a virtue of delay.

A qualitative sample of 60 PRs puts meat on the coefficients. The dominant success pattern is an **actionable review loop** (32 of 60; 30 of the merged cases): concrete feedback, targeted agent revisions, convergence. Non-merges cluster on design disagreement, incomplete solutions, process blocks, and coordination breaks. Iteration without convergence does not rescue them.

## Why it matters for code review

A continuous factory that measures “commits overnight” or “agent revisions” is measuring the wrong thing. What predicts merge is whether a human engages and whether the agent can run a stable, goal-aligned loop without rewriting history mid-review. Harnesses that keep PRs small, avoid force-push thrash, and route to a real reviewer beat ones that only maximize activity. Pair with [He et al. on review shifting to automation under a 2× mandate](/posts/he-enterprise-2x-mandate-review-shifted-to-automation/) and [Cloudsail on autonomy one task type at a time](/posts/cloudsail-autonomous-software-factory-one-task-type-at-a-time/).
