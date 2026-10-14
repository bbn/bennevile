---
title: "CRJudgeBench: plausible review comments still need a repository-grounded judge"
description: "Sep 30 Pan et al.: 1,199 PR review comments (764 trustworthy / 435 untrustworthy); frontier LLMs miss most bad comments (GLM-5.3 negative recall 20.77%); Sentinel evidence-seeking judge reaches 76.60% accuracy (+19.78 pp over base, +6.13 over GLM-5.3)."
date: 2026-09-30
kind: paper
source:
  title: "CRJudgeBench: Can AI Detect Plausible but Invalid Code Reviews?"
  url: https://arxiv.org/abs/2609.37216
project: steward
---

Yue Pan, Jiawei Li, Ziyuan Zhang, Xiangxin Zhao, and He Ye start from a scaling problem every agentic review pipeline hits: models emit fluent, actionable comments that are still factually wrong for the patch and repo. Existing review benchmarks score generation or issue discovery; none ask whether a given comment’s technical claim holds in repository context. **CRJudgeBench** fills that gap with **1,199** instances from real PRs—**764** trustworthy and **435** untrustworthy (human false alarms plus expert-verified negation, symbol, and location perturbations)—and a held-out test of **359**.

**Sentinel** is a mini-swe-agent judge that searches, reads diffs, and gathers evidence before predicting trustworthiness, trained via LEAP-style action-level distillation from a privileged teacher that never leaks gold labels into student inputs. On the test set Sentinel hits **76.60%** accuracy versus **70.47%** for GLM-5.3 and **56.82%** for the untrained Qwen3-Coder-30B base. Trustworthy recall is high for everyone (~**98%**); the hard class is untrustworthy comments—GLM-5.3 recalls only **20.77%**, Sentinel **37.69%**—and all models bias toward predicting “true” far above the **63.79%** base rate. Larger repos (PostHog-scale) remain the worst accuracy band.

## Why it matters for code review

Volume review factories that auto-approve or auto-apply agent comments without a second evidence pass will launder plausible false alarms into the merge queue. Put a repository-grounded trustworthiness gate—maker≠checker on the comment itself—between generation and human attention, and score overnight review fleets by untrustworthy-recall, not comment count. Continuous verified momentum needs the review layer to fail closed on claims it cannot ground; FOMO for more AI reviewers without a judge just multiplies confident wrong suggestions.
