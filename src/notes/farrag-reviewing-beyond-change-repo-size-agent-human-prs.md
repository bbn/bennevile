---
title: "In larger repos, reviewers name existing code outside the change more often — on agent and human PRs alike"
description: "Sabry E. Farrag measured 92,042 inline review comments on agent PRs across 2,034 GitHub repos: 6.5% name a repository item outside the diff, rising with odds ratio 1.35 per tenfold increase in code files. Human PRs show a similar size gradient; a robust agent-only excess is not established."
date: 2026-10-11
kind: paper
source:
  title: "Reviewing Beyond the Change: Repository Size and Existing Code Across Agent and Human Pull Requests"
  url: https://arxiv.org/abs/2610.15567
project: steward
---

**Sabry E. Farrag** asks a concrete question about what reviewers actually write when agents open pull requests: how often do inline comments name an existing repository item that lies *outside* the change under review, and does that rate rise with repository size?

An automatic instrument resolves names in top-level inline comments against the repository at the PR's base commit, with size-matched negative controls for chance matches. On **92,042** eligible comments on agent PRs in **2,034** GitHub repositories, **6.5%** name an outside item (interval 5.6–7.5), far above the ~1% chance-match rate. Most of those hits are code symbols or paths, not process files. A pre-specified log-linear model finds an odds ratio of **1.35** per tenfold increase in code files (interval 1.15–1.59), and the rise survives net of chance. Exploratory fits put most of the climb between small and mid-sized repositories (roughly under ~3,000 code files); among the largest repos the estimate is imprecise.

Human PRs in the same repositories show a similar size gradient. The pre-specified agent-vs-human comparison finds a small agent excess (ratio of odds ratios **1.15**) that sits just inside the author's bound for a negligible difference; other specifications, including same-repository-and-month cells, do not establish a robust agent-specific excess. Recall of the instrument is only about **44%**, so the shares likely understate how often reviewers point outside the change. Context files (`CLAUDE.md`, `AGENTS.md`, and kin) show no clearly estimated effect on the size gradient.

## Why it matters for code review

At factory volume, part of what humans still supply in review is project knowledge the change did not carry: an existing helper to call, a module convention, a placement rule. That burden grows as the codebase grows, for agent and human PRs alike, which is a verification tax that does not show up in lines changed. The practical move Farrag points to is turning recurring outside pointers into checks, context retrieval, or written conventions rather than re-teaching them on every PR — the same direction as [Rahman's reviewability debt](/posts/rahman-who-pays-review-cost-reviewability-debt/) and [CRBugBench's finding that review agents drop hardest where project context is missing](/posts/crbugbench-lights-off-software-factory-review-agents-miss-known-bugs/).
