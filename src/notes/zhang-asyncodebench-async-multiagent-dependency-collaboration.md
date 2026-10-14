---
title: "AsynCodeBench: green tests can hide unresolved cross-agent dependencies"
description: "Sep 26 Zhang et al.: dependency-centric async multi-agent SE bench — ADPR/DRS over 19 tasks, 52 deps; Test Pass ≫ ADPR (71.6% of Async-Manager-RO outcomes); coordination often closes in a mid-run hopping window."
date: 2026-09-26
kind: paper
source:
  title: "AsynCodeBench: Benchmarking Collaboration of Asynchronous Multi-Agent Systems in Software Engineering"
  url: https://arxiv.org/abs/2609.32662
project: steward
---

Zhang, Xiong, Jiang, Zhong, Yuan, Li, Lin, Chang, Hu, Wang, and Lin argue that multi-agent coding evals still judge the wrong thing: final task tests inherited from single-agent SWE, which **conflate coding skill with cross-agent coordination**. **AsynCodeBench** makes collaboration measurable. Each of 19 real-repo tasks ships an explicit dependency graph and executable Dependency Checkers (upstream / downstream / integrated). Two metrics: **ADPR** (fraction of declared dependencies satisfied in the final integrated workspace) and **DRS** (first checkpoint where a dependency becomes satisfied). Five protocols on a shared OpenHands harness — Single, Serial, Async-Private, Async-Manager-RO, Async-Manager — across ten open-weight models.

The gap is the point. Multi-agent is not uniformly better than Single (six of ten models improve under their best multi protocol; four do not — including strong soloists Qwen3.8-27B and DeepSeek-V4). Under Async-Manager-RO, Test Pass Rate and ADPR correlate only moderately (Pearson *r* ≈ 0.62), and the mismatch is asymmetric: Test Pass exceeds ADPR in **71.6%** of 190 model–task outcomes; **32** outcomes hit ≥80% Test Pass while resolving fewer than half of declared dependencies (**26** with ADPR = 0). Dependency trajectories expose a recurring **hopping window**: a large share of eventual closures concentrate in a mid-to-late burst rather than steady accumulation. Stronger solo coding in the Qwen family does not automatically translate into matching collaboration gains.

## Why it matters for code review

Always-on parallel agent fleets that only gate on suite green will ship “done” work with unresolved handoffs. Review async multi-agent factories for dependency-level oracles and integration-checkpoint telemetry — not just merge CI — and treat hopping bursts as a coordination signal, not proof that continuous factories are always superior to a single strong owner. FOMO for more concurrent agents compounds only when ADPR-class metrics absorb the volume; otherwise morning review becomes archaeology of green-but-broken composition.
