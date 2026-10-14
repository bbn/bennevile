---
title: "GEPA: reflective prompt evolution that beats RL on few rollouts"
description: "ICLR 2026 oral: Genetic-Pareto prompt optimization that diagnoses trajectories in natural language—strong results including code-optimization search."
kind: paper
date: 2025-07-25
source:
  title: "GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning"
  url: https://arxiv.org/abs/2507.19457
project: steward
---
GEPA argues that language is a denser learning medium than sparse scalar rewards. It samples trajectories (reasoning, tool calls, outputs), reflects in natural language, proposes prompt updates, and keeps complementary lessons from a Pareto frontier of past attempts.

Across six tasks it beats GRPO by ~6% on average (up to 20%) with up to 35× fewer rollouts, and beats MIPROv2 by over 10%. They also show it as an inference-time search strategy for code optimization.

## Why it matters for code review

Prompt-and-scaffold tuning for review agents usually burns tokens on blind A/B. GEPA’s pattern—diagnose the trajectory, keep the complementary lessons—maps cleanly onto review harnesses where you want better reviewer instructions without RL infrastructure. The Pareto keep-set is especially relevant when different review failure modes need different prompt patches.
