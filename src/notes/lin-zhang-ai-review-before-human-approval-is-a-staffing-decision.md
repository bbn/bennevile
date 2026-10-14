---
title: "When AI review should come before human approval depends on which stage is short"
description: "Lin and Zhang (HKUST) model agent PRs as a queue with a mandatory human merge gate and an optional AI reviewer in front. Optimal review passes through four phases as maintainer capacity grows, including one where a useful reviewer is deliberately left idle because its false rejections cost more agent runs than its catches save. Calibrated on SWE-Review data, adaptive routing beats review-everything or review-nothing by up to 37%."
date: 2026-09-16
kind: paper
source:
  title: "When Should AI Review Precede Human Approval of Agent-Generated Code? (arXiv 2603.13870v2)"
  url: https://arxiv.org/abs/2603.13870v2
project: steward
---

[Ruihan Lin and Jiheng Zhang](https://arxiv.org/abs/2603.13870v2) of the Hong Kong University of Science and Technology treat the agent PR pipeline as what it has become: generation is cheap and fast, and a human maintainer still has to approve every merge. Teams can put an AI reviewer in front of that gate to filter defective changes. The paper, first posted in March and substantially revised on September 16, asks how much of that review to use and for which kinds of task.

## Review has two costs, not one

The model has three pools: coding-agent runs, AI review and human approval. An AI reviewer helps by keeping bad changes away from maintainers. It costs inference, and every false rejection sends a merge-ready change back for another agent run. So a reviewer's two error rates load different resources. A false acceptance wastes maintainer time. A false rejection wastes generation. The authors' summary is blunt: "AI review is a capacity decision as much as an accuracy decision," and a single accuracy score can't say how much to review.

## Four phases, one of them surprising

For one category of work, the best share of changes to send through AI review moves through four phases as maintainer capacity grows. With few maintainers, review everything. Then the reviewer saturates and extra approval capacity is filled directly. Then generation becomes the bottleneck, and the plan cuts reviewed volume: "an informative reviewer is deliberately left idle because its rework displaces new work." Finally, with plenty of maintainers, review is bypassed. Across several categories, the category that should get review changes at a few staffing breakpoints, so ranking categories once by reviewer quality is wrong at some staffing level.

## The numbers

The calibration uses the false-rejection and false-acceptance counts from [SWE-Review](/posts/swe-review-arxiv/), with three generator quality tiers. Adapting review to both capacities beats the better of always-review and never-review on 62.7% of the capacity grid, by up to 37%. In the multi-category scenario, never-review loses up to 28.8% when maintainers are scarce and always-review loses up to 57.6% when they aren't, because three review servers cap how much generation can flow. A routing rule the authors call Quota Tracking gets within about 0.4% to 0.8% of the planning bound at scale, while the fixed rules stay several percent off regardless of size. The arrival rates, service rates and staffing are illustrative scenarios, not measurements from a real team.

## How it fits

This pushes back on a reflex in always-on factories: put an AI reviewer on every change because inference is cheap. When agents run around the clock and maintainer attention is the scarce input, screening hard is right. But once a team has enough review to keep up and generation is what binds, an over-eager reviewer burns agent time on rework of changes that were fine. It's the formal version of the [review-minutes capacity plan](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), with the added point that the right review intensity moves whenever the bottleneck does. The practical ask is to measure both error rates of your review agent, not just how many bugs it catches.
