---
title: "Compositional safety failures: individually safe harness updates can fail together"
description: "Sep 29 Zhang et al.: 43 pairwise + 18 irreducible 3-way failures across AgentDojo/ASB; incremental interaction hypergraph + runtime monitoring cuts residual CFR to ≤1.27% while checking ~20–34% of actions."
date: 2026-09-29
kind: paper
source:
  title: "Compositional Safety Failures in Harness Evolution: Identification and Runtime Monitoring"
  url: https://arxiv.org/abs/2609.33123
project: steward
---

Zhang, Liu, Lai, Chen, and She study a risk that whole-harness or single-component validators miss: **compositional safety failures** in harness evolution. Memory, prompts/skills, and tools update independently for utility; each singleton can stay safe while their joint activation is not. Hosted on a unified A-Evolve harness with representative evolvers (ReasoningBank, GEPA, Voyager, Alita) and a fixed Qwen3-32B backbone, they build four-config panels (baseline, each update alone, both) and require every singleton to remain safe and utility-preserving before counting a joint violation.

Across AgentDojo, Agent-SafetyBench, and Agent Security Bench they find **43 pairwise** compositional failures (CFR 14.01% / 18.18% / 1.53% on eligible panels) and **18 irreducible three-way** failures where every proper subset stays safe. Exhaustive composition checking scales combinatorially as retained states accumulate. Their answer is an **incremental interaction hypergraph**: versioned component states as nodes, safety-relevant higher-order interactions as hyperedges (observed vs predicted), updated only in the local neighborhood of a change, with LLM semantic filtering of candidates. Runtime monitoring then checks a composition only when all of its states activate in the current decision context — before the action takes effect. Versus SHE and HarnessLens, residual CFR falls to at most **1.27%** while preserving utility and invoking the checker on **20.1–33.6%** of candidate actions; naive exhaustive checking is safer still but far costlier. Sensitivity on interaction radius \(h\) shows the familiar safety–utility–cost trade-off.

## Why it matters for code review

Self-improving overnight factories that gate each memory, skill, or tool patch in isolation still ship latent joint hazards. Review harness-evolution PRs for cross-component interaction tests — not only per-update safety — and for runtime monitors that fire on activated compositions rather than trusting offline validation trajectories. Continuous verified momentum compounds when FOMO for more unattended self-edits funds hypergraph-style interaction coverage and measured residual CFR, not another burst that merges three “green” updates that only fail together.
