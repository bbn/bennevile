---
title: "SRE-Marathon: continuous ops agents correlate and localize—then almost never repair"
description: "Sep 26 Tian et al.: long-horizon SRE benchmark with overlapping faults, alert streams, and change-driven defects — best Marathon-Score 41.3/100 across ten methods; agents often correlate/locate but repair ≤2.4% while faults stay active."
date: 2026-09-26
kind: paper
source:
  title: "SRE-Marathon: A Continuous, Change-Driven Benchmark for Autonomous Site Reliability Agents"
  url: https://arxiv.org/abs/2609.33023
project: steward
---

Yifang Tian, Yingjian Bai, Yifeng He, Zichun Chong, Yuanchen Gao, Yiran Li, and Hans-Arno Jacobsen argue that SRE-agent benchmarks are still **episodic**: inject one fault, hand the agent an incident task, score the answer. Production is not. **SRE-Marathon** invokes an agent at a fixed cadence with cumulative alert history and a persistent workspace while a fault orchestrator injects overlapping faults into a live two-zone Kubernetes deployment on a seeded, production-calibrated schedule—including curated code and configuration changes that pass lint/unit tests before deploy. Each run seals into a bundle; Marathon-Score credits ordered progress through correlation → localization → repair from recorded system evidence only.

Across three applications and ~sixty faults per run, the best of ten methods reaches only **41.3 / 100** (Keep-agent). Agents often correlate and some localize well; **repair while the fault is still active stays ≤0.024**. As concurrency rises, methods report more without acting more—ReAct’s report calls climb from 3.9 to 35.5 per invocation while actions stay sparse. Coding agents (Codex, Claude Code) score poorly on the continuous regime; under lighter short runs the same ReAct agent handles far more end-to-end (16.7% at five faults → 0% on marathon). Diagnosis without timely repair is the dominant failure mode.

## Why it matters for code review

Always-on factories that only measure “can the agent find the bug?” will greenlight overnight ops agents that never finish the loop under load. Review continuous agent deployments for sealed evidence of **repair under overlapping change-driven faults**, not episodic RCA accuracy—and treat rising alert-report volume without interventions as a harness smell. Sustained verified momentum means closing the lifecycle while faults are live; FOMO for 24/7 on-call agents without a repair gate just automates the night shift’s triage pile.
