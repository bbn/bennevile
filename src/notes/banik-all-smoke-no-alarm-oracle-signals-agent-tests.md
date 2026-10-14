---
title: "All smoke, no alarm: 80% of agent test patches lack strong oracles"
description: "Jun 16 Banik et al.: 86,156 agent test-file patches across 33,596 PRs; 80.2% weak/no oracle; strong multi-signal oracles raise merge odds after controls (OR 1.28)."
date: 2026-06-16
kind: paper
source:
  title: "All Smoke, No Alarm: Oracle Signals in Agent-Authored Test Code"
  url: https://arxiv.org/abs/2606.18168
project: steward
---

Dipayan Banik, Kowshik Chowdhury, and Shazibul Islam Shamim mine **86,156 cumulative test-file patches** from **33,596** agent-authored PRs across **2,807** GitHub repos (AIDev-pop; Codex, Copilot, Devin, Cursor, Claude Code). They ask whether the tests agents ship actually *check* behavior—or only look like verification. A syntactic taxonomy of eight oracle tiers (W1–W5 weak, S1–S3 strong) finds **80.2%** of patches carry weak or no explicit oracle signals. On newly created test files, strong-oracle rates still span **18%–67%** by agent. Human labels on a stratified **384**-patch sample reach Cohen’s κ **0.77**; the classifier matches humans on **86.7%**.

Raw merge rates look inverted—S3 PRs at **59.7%** vs **72.6%** for weak-oracle—but S3 PRs also add **4.2×** more code, draw **2.4×** more review, and live in **3.8×** more-starred repos. A multivariate logistic regression adjusting for agent, PR size, stars, task type, and language flips the story: strong multi-signal oracles (S3) **raise** merge likelihood (**OR = 1.28**, *p* < 0.001). Feature work yields strong oracles in only **18.2%** of patches vs **25.6%** for bug fixes—verification scoped as an explicit objective beats bundling tests into feature PRs.

## Why it matters for code review

Continuous factories that treat “CI green + test files present” as done are measuring smoke, not alarms. Overnight merge volume under agent load will compound the wrong signal unless gates score **oracle strength**—value assertions, error/type checks, multi-signal coverage—not file presence. Review always-on verify lanes for oracle-aware checks that flag new test files without assertion patterns, and for review budgets that expect stronger oracles to cost more human attention. Pair with [Chen’s reusable verification-failure kit](/posts/chen-verification-failures-reusable-guidance-coding-agents/) and [Qi’s Merged, Not Measured](/posts/qi-merged-not-measured-coding-agent-performance-prs/) when sizing the verification tax under sustained agent PR load.
