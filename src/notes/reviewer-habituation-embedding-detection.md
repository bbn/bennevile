---
title: "Reviewer habituation shows up in embeddings, not lexical metrics"
description: "Yu et al. track 400 repeat reviewers of agent PRs: approvals climb while hand-crafted comment features stay flat — sentence-embedding centroids move, and language shifts lag the approval change."
kind: paper
date: 2026-09-05
source:
  title: "Beyond Lexical Metrics: Sentence-Embedding Detection of Reviewer Habituation in AI Code Review"
  url: https://arxiv.org/abs/2609.06213
project: steward
---
On AIDev, Yu, Liu, and Zhang follow 11,429 reviews from 400 repeat reviewers over 207 days. Approval of agent-authored PRs rises from 30.5% in early periods to 36.6% later (Wilcoxon p = 8.6e-8). That is the habituation signal at the gate.

The surprise is what does *not* move. Lexical diversity, Shannon entropy, technical specificity, and constructive actionability show no clean monotonic decline across exposure deciles, and a logistic model on those features loses to the majority-class baseline. What does move is latent structure: late-period comment centroids drift farther from each reviewer’s early centroid than chance, and a small MLP on three embedding statistics reaches F1 0.74 under reviewer-stratified CV. Granger tests put the arrow the wrong way for comfort — approval-rate changes predict later specificity shifts, not the reverse.

## Why it matters for code review

If you are watching “are our reviews getting softer under agent volume,” comment dashboards built on classical linguistics will miss it. Habituation is a behavioral prior shift that shows up in distributional comment space after the rubber stamp already moved. Structural fixes (rotation, risk routing, independent agent reviewers) beat hoping lexical QA will catch fatigue.
