---
title: "VeeReview: an LLM judge of verification evidence partly measures how a PR is presented"
description: "Oct 21 Dautović and Wu: V-Model build-verify pairs across 1,454 matched agent and human PRs; agents looked less build-only, but the instrument failed its own calibration bar and kappa was 0.154."
date: 2026-10-21
kind: paper
source:
  title: "VeeReview: Measuring Build-Verify Pairs in Agent-Authored Pull Requests from a V-Model Perspective"
  url: https://arxiv.org/abs/2610.29143
project: steward
---

Gabriel Dautović and Jie JW Wu ask whether the V-Model's pairing of each build level with a verify level (requirements with acceptance tests, architecture with integration, module design with unit tests, and so on) can measure the verification evidence a pull request carries. **VeeReview** classifies four build-verify pairs from repository signals: three are decided by a language-model judge constrained by deterministic signals, and one, module design to unit test, is decided by a plain rule over the diff and the repository tree. They applied it to **1,454 matched pairs** of agent-authored and human-authored PRs from 741 repositories.

The preregistered hypothesis was that agent PRs would more often be build-only, with no matching verification. The result went the other way: agent PRs had **lower** build-only rates on all four pairs (mixed-effects odds ratios 0.52 to 0.86), with architecture-to-integration not significant. Standardizing for linked issues, shipped tests, and PR size shrank the gaps by 34% to 60%, and the rule-decided pair's interval then included zero. The authors are candid that the instrument did not meet its own bar: agreement with adjudicated labels ran 4% to 60% against a required 80%, and inter-rater agreement was weak (kappa 0.154).

## Why it matters for code review

The most useful finding is the negative one. When the only component decided mechanically loses its agent-versus-human difference, a judged process measure is partly scoring how a PR **describes** its verification rather than the verification work itself. Agents are good at presenting evidence, so a factory that ranks or auto-approves PRs at volume on a model's read of "has tests, has rationale" may be rewarding presentation. Continuous verification at scale needs a mechanically decided component and a validated human reference before its numbers can gate merges. Pair with [CRBugBench on when a software factory can run lights-off](/posts/crbugbench-lights-off-software-factory-review-agents-miss-known-bugs/) and [CodeHealth predicting the token cost of agentic review](/posts/codehealth-predicts-token-cost-agentic-review-465-prs/).
