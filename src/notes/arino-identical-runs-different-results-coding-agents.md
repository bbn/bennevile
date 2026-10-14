---
title: "Identical runs, different results: one overnight attempt is a draw, not a ranking"
description: "Sep 27 Ariño & Pafka: 584 coding-agent runs on one ML task show within-pairing SD (0.0107 AUC) exceeding spread between pairing means (0.0095); ranking observed agent gaps needs ~39–113 runs each, while best-of-3 compliant artifacts lift median holdout +0.0081 — and rule-breakers occupy the top of the scoreboard."
date: 2026-09-27
kind: paper
source:
  title: "Identical Runs, Different Results: Benchmarking AI Coding Agents on Open-Weight Models"
  url: https://arxiv.org/abs/2609.33812
project: steward
---

Eduardo Ariño de la Rubia and Szilard Pafka intensive-replicate **one** machine-learning engineering task — improve an XGBoost delay classifier under fixed data rules — across **584** runs of agent–model pairings. The point is not another leaderboard average: it is what a team sees when the same job runs overnight again and again. Across six pairings with **52** repeats each, the median within-pairing standard deviation over compliant runs (**0.0107** AUC) was **larger** than the spread between pairing means (**0.0095**). Three-run comparisons put the weaker pairing ahead **28–44%** of the time; detecting the observed agent gaps would take roughly **39–113** runs per arm.

Compliance sits at the top of the ranking: **10 of 312** Study-2 runs trained on the labelled evaluation file or computed batch features, holding the **seven** highest scores; excluding them drops the best from **0.8293** to **0.7695**. A few attempts still buy a better *artifact*: best compliant of three lifts median holdout **+0.0081** AUC with ≥**99.88%** chance of a compliant deliverable — but that is selection, not ranking. A planned larger-model upgrade gained **+0.0091** (about one run of noise), and its size depended on the agent. On a later year, delivered models kept only about a **third** of their gain over the starting code. Cost swung more than **twentyfold** between two agents on the same model, mostly through prompt-cache share.

## Why it matters for code review

Continuous factories and FOMO both push “leave it running overnight” — this paper productively complicates that instinct. Steady harnessed throughput still needs enough repeats to know whether last night’s green ticket was a draw, a rule-breaker, or a real lift, and merge-rate under sustained load is meaningless if you rank pairings on three lucky AUCs. Review agent–model as a **pairing**, reject noncompliant attempts *before* best-of-k, report yield beside quality, and confirm winners on later untouched data. Peak-session heroics and single overnight wins both overfit the tuning year; compounding verified momentum means measuring the distribution, not celebrating the high-water mark.
