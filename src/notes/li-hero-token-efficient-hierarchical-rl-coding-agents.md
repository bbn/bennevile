---
title: "Resolution first, then fewer tokens: HERO’s hierarchical RL for coding agents"
description: "Sep 30 Li/Jiang/Huang/Yang/Peng: HERO gates efficiency until the rollout group can resolve, then cuts unproductive low-entropy turns—on Qwen3.5, better resolve than GRPO with ~40% less token use."
date: 2026-09-30
kind: paper
source:
  title: "Doing More with Less Tokens: Hierarchical Reinforcement Learning for Efficient Coding Agents"
  url: https://arxiv.org/abs/2609.38885
project: steward
---

Haobin Li, Liang Jiang, Zhenyu Huang, Mouxing Yang, and Xi Peng (Sichuan University) target a practical failure of overnight coding agents: multi-turn tool loops burn tokens without a matching resolve-rate gain. Inference-time pruning and turn caps reduce cost but risk discarding task-relevant context. They instead train **token-efficient** policies with **HERO** (HiErarchical ReinfOrcement learning): prioritize task resolution, then activate efficiency once a rollout group clears a resolution threshold, and assign credit at both trajectory and turn grain.

Two observations drive the design. Successful trajectories for the same SWE task already vary widely in token use—so cheaper wins exist. Low turn-level entropy correlates with unproductive patterns (repeated tools, over-exploration, tool errors)—so fine-grained penalties can target waste without punishing every interaction. Coarse credit rewards concise paths **within the same outcome**; fine credit penalizes the lowest-entropy turn quintile. Resolution-first clipping keeps resolved rollouts’ advantages non-negative and unresolved ones non-positive so efficiency cannot outrank success.

Trained on **640** multilingual SWE tasks and evaluated under Claude Code on SWE-bench Verified and Multilingual, HERO lifts Qwen3.5 variants’ average resolve from **37.4%→42.2%** while beating GRPO’s resolve gains with **~39.8%** less token usage. Ablations show removing hierarchical gating cuts tokens but tanks resolve; both coarse and fine efficiency terms help. Inference-time compressors still stack on HERO-trained agents.

## Why it matters for code review

FOMO for “more agent steps overnight” often buys longer near-misses. A factory that compounds verified momentum needs policies that refuse to trade away resolve for thrift too early—and that stop paying for low-entropy thrash once the agent can finish. Token dashboards without a resolve gate will crown the wrong winners. Pair with [Zhang’s AutoCompact](/posts/zhang-autocompact-long-horizon-coding-context-compaction/) when long horizons also need contract-preserving compaction, and with [Deng’s continuous-evolution gap](/posts/deng-swe-milestone-continuous-evolution-precision-saturates/) when cheaper turns still have to protect precision across dependent milestones.
