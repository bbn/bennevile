---
title: "CodeReviewer: large-scale pre-training for review tasks"
description: Early foundation model for automating code review activities—quality estimation and comment generation from diffs and review data.
kind: paper
date: 2022-03-17
source:
  title: Automating Code Review Activities by Large-Scale Pre-training
  url: https://arxiv.org/abs/2203.09095
project: steward
---
Before the agent era, CodeReviewer showed you could pre-train specifically for review: diffs in, quality estimates and review comments out, using large-scale code-review corpora. It became a standard baseline for later LLM fine-tunes (LLaMA-Reviewer and friends).

It is still useful context: many “new” LLM review demos rediscover tasks this line of work already framed—comment generation, refinement, quality scoring—without the agent scaffolding.

## Why it matters for code review

When you evaluate a flashy multi-agent reviewer, keep CodeReviewer-era tasks in the mix. If a system cannot beat a specialized review pretrain on comment quality, the agents may be expensive theater around a weaker core.
