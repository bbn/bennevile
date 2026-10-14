---
title: "AACR-Bench: repo-level automatic code review with expert-verified defects"
description: "A multi-language ACR benchmark that expands defect coverage ~285% via AI-assisted, expert-verified labels and stresses context retrieval choices."
kind: paper
date: 2026-01-27
source:
  title: "AACR-Bench: Evaluating Automatic Code Review with Holistic Repository-Level Context"
  url: https://arxiv.org/abs/2601.19494
project: steward
---
Most ACR evals inherit noisy PR comments as ground truth and stay stuck at single-file diffs. AACR-Bench pushes the other way: full cross-file context across languages, plus an “AI-assisted, expert-verified” labeling pipeline that surfaces latent defects missed in original PRs.

They claim a 285% increase in defect coverage versus raw PR comments, and show that prior leaderboard reads were partly artifacts of thin context. Context granularity, retrieval method, language, and whether you use an agent scaffold all move the score—and they move it differently per model.

## Why it matters for code review

If your internal eval is “match historical review comments,” you are grading against incomplete labels. AACR-Bench is a concrete argument to rebuild review evals around expert-verified defects and repo-level context, not just comment regeneration BLEU.
