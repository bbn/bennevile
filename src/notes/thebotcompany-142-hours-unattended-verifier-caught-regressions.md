---
title: "TheBotCompany: 142 hours of unattended multi-agent development, where a separate verifier rejected up to 18.6% of milestones"
description: "An ASE 2026 paper ran a self-organizing agent team on four real projects for 142 wall-clock hours and 164 milestones with no human intervention after setup, for about $1,500. A dedicated verification phase rejected 18.6% of milestones on one project, unit-test gates still missed regressions the planner later caught, and reverts restored the baseline every time."
date: 2026-03-26
kind: paper
source:
  title: "TheBotCompany: Self-Organizing Multi-agent Systems for Continuous Software Development"
  url: https://arxiv.org/abs/2603.25928
project: steward
---

Wenhan Lyu, Yue Xiao, Yixuan Zhang and Yifan Sun built [TheBotCompany](https://arxiv.org/abs/2603.25928), an open-source orchestrator for software development that keeps running for days rather than finishing one task. The paper, accepted at ASE 2026 and revised in August, cycles each milestone through strategy, execution and verification. Manager agents hire, assign and retire worker agents, and humans steer asynchronously by filing issues that managers pick up at phase boundaries instead of interrupting work in progress. A 24-hour rolling spending cap keeps cost bounded.

## What sustained running produced

Across four projects in Go, Python, Rust and C++, the system completed 164 milestones and 616 agent cycles over 142 wall-clock hours, reaching each project's main quality target with no human intervention beyond initial setup. The [paper's table](https://arxiv.org/html/2603.25928) puts total spend at about $1,520, with per-milestone cost ranging from about $5 to $44 depending on how coarsely the planner sliced the work. Cost per milestone did not climb as the codebases grew.

## Verification did the steering

On projects with shifting numeric targets, the verifier was busy. It rejected 18.6% of verifications on a Rust LaTeX renderer measured by pixel similarity to pdflatex output, and a smaller share on a Go simulator held to timing-accuracy bounds. The authors argue those rejections were not waste: each one added to a list of approaches known to cause regressions, which fed back into planning. Whenever a regression milestone was followed by a revert, the score returned to or beat its earlier baseline.

The gates also leaked. In one traced episode a milestone passed the verifier's unit-test gate, and the planner caught a regression at the CI level on its next cycle and scheduled a revert. The authors' conclusion is that the unit-test gate alone is not enough and the planning cycle acts as a second quality layer. Most failures were domain problems such as accuracy regressions and missing requirements rather than coordination breakdowns.

## The caveat

On a separate benchmark, the multi-agent setup used roughly 1.65 times the tokens of Claude Code running alone, and there was no single-agent baseline for the multi-day projects. So the paper shows a team of agents can keep making verified progress for days, not that it beats one strong session per dollar. Compare [Harness-of-Harness reopening closed issues after regressions over 70+ loops](/posts/harness-of-harness-continual-improvement/), [a verify-gated night shift](/posts/nightcrew-verify-gated-night-shift/), and [agent-run checks that became their own failure layer](/posts/ferris-bonilla-assuring-ai-written-software-checks-became-fallible-layer/).
