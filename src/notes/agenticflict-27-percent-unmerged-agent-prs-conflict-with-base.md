---
title: "AgenticFlict: 27.67% of 107K unmerged agent PRs no longer merge cleanly, from 15% for Copilot to 32% for Codex"
description: "Ogenrwot and Businge replayed git merges for 107,026 open or closed-unmerged agent PRs from the AIDev dataset and found 29,609 with textual conflicts and 336,380 conflict regions, with conflict rates varying sharply by agent."
date: 2026-04-04
kind: paper
source:
  title: "AgenticFlict: A Large-Scale Dataset of Merge Conflicts in AI Coding Agent Pull Requests on GitHub"
  url: https://arxiv.org/abs/2604.03551
project: steward
---

Most talk about agent PR throughput is about review: who reads the diff, and how fast. [**AgenticFlict**](https://arxiv.org/abs/2604.03551), by Daniel Ogenrwot and John Businge (UNLV, AIware '26), measures a different place work stalls: **the PR can no longer merge into its base branch.**

They took 142,652 agent PRs from 59,412 repositories in the AIDev dataset and, for the open and closed-but-unmerged ones, ran a deterministic local merge (`git merge --no-commit --no-ff` of the PR head into its base). Of **107,026** PRs they could simulate, **29,609 conflicted, a rate of 27.67%**, producing **336,380** conflict regions with file and line spans. The paper calls the conflicts "both frequent and often substantial."

The spread across agents is wide (Table 2, with 95% confidence intervals):

- Copilot: 15.24% of 16,954 PRs
- Cursor: 19.75% of 7,196
- Devin: 22.85% of 8,241
- Claude Code: 25.93% of 779
- OpenAI Codex: 31.85% of 73,856

Two cautions before reading too much into those. The sample is PRs that were **not merged**, so this is a conflict rate among stalled or abandoned work, not among everything agents open. And the authors call their analysis preliminary and exploratory; a conflict in a PR that never merged can be a cause of the stall or a result of it sitting. The Claude Code sample is small. Dataset and code are on Zenodo.

## Why it matters for code review

When agents open PRs around the clock, the base branch keeps moving while each PR waits for review. Every hour of queue time makes a textual conflict more likely, and the rework lands on whoever picks it up. AgenticFlict gives that cost a number: more than a quarter of the agent PRs that didn't merge also no longer apply. That makes review latency, rebase policy and small diffs part of the same throughput problem, not separate ones.
