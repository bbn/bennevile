---
title: "Closed-loop AI-to-AI review is real — and still a minority"
description: "Selvanayagam and Ghaleb link 248k agent-authored PRs that got at least one AI-attributed review on CodAGE — cross-product review is ~1.6% but grew two orders of magnitude from 2025-Q1 to Q3."
kind: paper
date: 2026-08-21
source:
  title: "AI-to-AI Code Reviews of GitHub Pull Requests"
  url: https://arxiv.org/abs/2608.21311
project: steward
---
Agents now sit on both sides of the PR: one writes, another comments. This paper builds the first large linked dataset of that closed loop from CodAGE — 248,641 unique AI-attributed PRs with at least one AI-attributed review. Most of that volume is same-product (208k); 45k are cross-product; a few thousand get both.

Cross-product AI-to-AI review is still only about 1.6% of identified agent-authored PRs, but absolute volume jumped more than 100× from 2025-Q1 to 2025-Q3. Output mix varies by author–reviewer pairing (CodeRabbit’s refactor-comment share differs sharply on Claude Code vs Copilot PRs), and same-product reviewers tend to leave more comments per PR, with the excess concentrated in the upper tail. Observed median latency is short when timestamps exist — minutes, not hours — with caveats on missing clocks and reviewer composition.

## Why it matters for code review

The factory pattern is already forming in the open: agent author → agent reviewer → human merge. Same-product loops risk shared blind spots; cross-product and heterogeneous stacks are how you buy independence. The measurement job for eng leads is not “do we have AI review” but which author–reviewer configurations actually change defect escape versus just commenting faster.
