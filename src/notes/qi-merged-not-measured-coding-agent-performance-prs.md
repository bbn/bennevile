---
title: "Merged, not measured: agent performance PRs pass on reputation, not speed-ups"
description: "Sep 30 Qi et al.: of 1,262 AIDev performance fixes, 57% merge; acceptance tracks repo history with the agent (33%→84%) more than coded content; only 11% carry a performance test; of 30 re-executed merges, 18 deliver, 9 show no gain/regress, 14 change untested inputs."
date: 2026-09-30
kind: paper
source:
  title: "Merged, Not Measured: An Empirical Study of Performance Issues Fixed by Coding Agents"
  url: https://arxiv.org/abs/2609.37985
project: steward
---

Zhenyu Qi, Haotang Li, Jinfu Chen, Huashan Chen, Yutong Zhao, Derui Zhu, Tomas Cerny, Bo Liu, and Sen He study what maintainers actually do with coding-agent PRs that claim to make software faster. From AIDev v4’s **71,677** agent PRs they hand-confirm **1,262** performance issues across six agents and **582** repos, then re-execute rejected claims and merged fixes that change tests. Closed fixes merge **57%** of the time; **61%** of rejections state no reason. Acceptance climbs with the agent’s prior track record in the repo (**31–37%** with none → **70%** after many merges) and with the repo’s pre-opening merge rate on other agent PRs (**33%** → **84%**). Merged patches delete a larger share of the lines they touch (**0.26** vs **0.15**); coded root cause, description “AI flavor,” attached measurements, and test co-change do **not** separate outcomes within agent and repository.

Evidence is thin where it matters most. Agents change tests in **37%** of fixes and only **11%** carry a performance test or benchmark; acceptance is no higher with any test kind. Of **30** re-executed merged fixes, **18** met the delivery criterion, **3** improved below the claim, **9** showed no significant gain or regressed, and **14** change behavior on untested inputs. On the rejected side, only **6 of 23** re-executed claims held under a three-run pilot. The merge outcome tracks who the agent has been to that repository—not whether the claimed speed-up is real.

## Why it matters for code review

Always-on factories that score success by merge rate will look productive while shipping unverified performance claims and silent regressions. Treat merge as admission to a measurement queue, not as proof of delivery: require workload-bound benchmarks (or fail closed), keep maker≠checker on the measurement path, and score overnight throughput by verified effect rather than green PRs. Continuous verified momentum compounds when reputation cannot launder a missing speed-up; FOMO for more agent PRs without a measure-before-merge gate just amplifies the same unmeasured claim.
