---
title: "MCR-Bench: multi-round code review is not a one-shot classify task"
description: 2,269 real multi-round review tasks with defect lifecycle labels—LLMs degrade as rounds grow and miss low-salience defects.
kind: paper
date: 2026-08-27
source:
  title: "From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench"
  url: https://arxiv.org/abs/2608.27442
project: steward
---
Most LLM review papers flatten review into a single static decision. MCR-Bench refuses that: five languages, 2,269 real multi-round tasks, fine-grained defect metadata, and cross-round state labels that track each defect’s lifecycle.

Findings are blunt. Mainstream LLMs are weak at detection and at tracking defect state across rounds; performance falls as interaction length grows. Semantically complex or low-salience defects get missed. Error analysis points at temporal misalignment and weak long-range memory—classic agent failure modes, measured on review.

## Why it matters for code review

If your bot only comments on round one, you are evaluating a different job than the one humans do. MCR-Bench is the right stress test for review agents that claim to “follow up,” “verify fixes,” or “close the loop” across a PR thread.
