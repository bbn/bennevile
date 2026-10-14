---
title: More review agents can mean less real disagreement
description: A new paper finds naive multi-agent review collapses into false consensus, and that a smaller setup with an explicit critic does better.
kind: paper
date: 2026-08-16
source:
  title: "Adversarial Review: Multi-Agent Code Review with Explicit Dissent — arXiv 2608.18167"
  url: https://arxiv.org/abs/2608.18167
project: steward
---
A common instinct in agentic code review is to add more reviewers. This paper argues that without a role built for dissent, those reviewers often agree without evidence.

The setup is deliberately small: a coder, a reviewer, and a critic. The critic does not rewrite the reviewer’s comments. Its job is to challenge the proposed change with structured, evidence-grounded disagreement so a diff does not get accepted on an easy consensus. On their benchmarks, three agents with that explicit dissent beat a five-agent team. A single prompt change that forces disagreement also lifts review F1.

## Why it matters

If your review loop cannot name what it is disagreeing about and point at evidence, it is optimizing for social smoothness. For teams building AI review into a software factory, the useful primitive is not “more agents.” It is disagreement as a first-class protocol.
