---
title: "Evaluating AI reviewers: pilots beat leaderboard cosplay"
description: CodeRabbit’s David Loker on why multi-bot-on-one-PR comparisons mislead, and which behavioral metrics (acceptance, noise, coverage) actually matter.
kind: field-note
date: 2026-01-09
source:
  title: An (actually useful) framework for evaluating AI code review tools
  url: https://www.coderabbit.ai/blog/framework-for-evaluating-ai-code-review-tools
project: steward
---
Benchmarks are fragile—database history as cautionary tale. Start from ranked objectives (defects, maintainability, noise, trust). Prefer in-the-wild pilots over offline theater; if offline, use your PRs.

Strong warning: running multiple AI reviewers on the same live PR creates interference—tools suppress duplicates, humans drown, precision metrics rot. Compare via parallel repos/teams, time-slicing, or mirrored PRs in isolation.

Metric stack: accepted issues by severity/category as primary quality signal; acceptance rate × volume for noise; normalize by PR size/type; treat slower merges as possible rigor, not failure.

## Why it matters for code review

Teams buying reviewers need an evaluation method that measures developer action, not screenshottable comment counts. This is the anti-bingo-card brief.
