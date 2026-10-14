---
title: "Merge rate became AI coding’s scoreboard — and the boards don’t agree"
description: "Aug 4 Pipeline Mag: four 2026 merge-rate studies disagree; rejections are mostly silence; Faros shows review time +441% and churn +861% under heavy AI — throughput ≠ what survived."
date: 2026-08-04
kind: field-note
source:
  title: "Merge Rate Became AI Coding's Scoreboard, and It Doesn't Agree"
  url: https://pipelinemag.ai/posts/merge-rate-ai-coding-agent-scoreboard-disagreement/
project: steward
---

[Pipeline Mag](https://pipelinemag.ai/posts/merge-rate-ai-coding-agent-scoreboard-disagreement/) (4 Aug 2026) takes the metric engineering leaders now use to pick coding agents — **pull-request merge rate** — and shows why a leaderboard built from it is mostly reading the room, not the model. Four 2026 studies on roughly the same AIDev substrate disagree on both rankings and levels: Mazloomzadeh et al. put Claude Code at **84.3%** and Devin at **43.0%**; Pinna et al. reorder the same five agents (Codex first, Claude Code third at **71.9%**); LinearB’s 8.1M-PR, 4,800-team cut puts AI-**assisted** PRs merging inside 30 days at **32.7%** vs **84.5%** for human ones. Task mix and framing do the heavy lifting — documentation PRs accept at **82.1%** vs **66.1%** for new features in Pinna’s stratification; LinearB’s windowed assisted population was never going to match star-filtered agent-authored slices.

The rejection anatomy is the sharper receipt. On 3,225 agent-authored fix PRs, Abujadallah et al. report **46.41%** rejected — and **49.3%** of those carry **no documented reason**, another **17.3%** die from inactivity, while outright technical failure explains well under a fifth. Median rejected churn still lands in the **81–293** line band a maintainer had to skim. Merged agentic PRs, where checked, show comparable or lower defect proneness than human ones — so low acceptance is not a clean quality signal. After merge, Faros’ two-year sweep of 22,000 developers is the board that actually moves: merge rate **+16.2%** under heavy AI adoption, median time in review **+441.5%**, no-review merges **+31.3%**, code churn **+861%**. “Throughput measures what was shipped, not what survived.”

## Why it matters for code review

Continuous harnessed factories that optimize for merge rate are gaming the queue, not compounding verified momentum. Review depth, churn, and defect escape are the morning surfaces that tell you whether overnight volume survived; a Claude Code burst that merges on an easy task mix still beats an always-on pipeline that floods silence-reject PRs. FOMO that agents aren’t shipping overnight is cheaper than a scoreboard that confuses maintainer free afternoons with agent competence.
