---
title: "Teams gave up writing code easily, so why cling to review? Partly fear"
description: "Miikka Koskinen (quanttype, Oct 8): coding agents produce more code than reviewers can keep up with and review agents are now half-decent. His answer is to experiment bottom-up, including post-merge review and no review on low-stakes work, and to name the fear behind holding on to review as the last human checkpoint. Two cures: stronger guardrails and exposure."
date: 2026-10-08
kind: field-note
source:
  title: "Code review, autumn 2026 (quanttype)"
  url: https://quanttype.net/p/code-review-autumn-2026/
project: steward
---

[Miikka Koskinen's short post](https://quanttype.net/p/code-review-autumn-2026/) starts where many teams are: coding agents make it easy to produce more code than reviewers can keep up with, and review agents now produce reviews that are "at least half-decent." He separates two questions that usually get blurred: does a human need to review agent-produced code at all, and do we still need the practice where a second human reviews it?

## Experiment bottom-up, but not on the moneymaker

Rather than design the process top-down, Koskinen argues for experiments: try post-merge review, try automating review, try not reviewing at all. Make some of them bold enough to fail, because that is how you find the limits, but not in production on the app that pays the bills. He also warns against the setup where the reviewer is the first human to read the code; those reviewers end up complaining about "slop grenades."

## The fear half

His sharper point is psychological. Teams gave up writing code to agents with surprisingly little resistance, yet cling to code review. One reason is fear: having handed over control of the writing, review is the last human checkpoint before production, and people don't want to let go. He offers two ways through. Take control back with stronger guardrails (type checks, CI, monitoring, automatic rollbacks, backups, least-privilege permissions), or use exposure: let the agents run, let go, and see what happens.

## How it fits

This is the emotional counterweight to the anxiety of leaving agents idle. The urge to keep agents working around the clock and the urge to keep a human hand on every merge are both about control, and Koskinen's answer to both is the same: move trust out of the review moment and into guardrails that keep running when nobody is watching. He also notes that nobody is forcing you to produce that much more code, which complicates the case for maximum overnight output. Pair it with [agents that doubled the PRs while review drifted to the approve button](/posts/nakhat-agents-doubled-prs-review-went-to-approve-buttons/) and [a clean agent pass that still isn't a bug-free patch](/posts/sashiko-191k-kernel-reviews-clean-pass-not-bug-free/).
