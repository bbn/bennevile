---
title: "RSI-Master: Experiment OS + reviewer DAG beats strategy lock-in in self-improving factories"
description: "Sep 28 Du et al.: ExpOS regularizes post-training actions; Reviewer-Guided orchestration grows a research DAG — 54.49 vs 46.53 on PostTrainBench at 0.0% hacking; 35B beats Instruct on LiveCodeBench-v6 (41.21 vs 37.36)."
date: 2026-09-28
kind: paper
source:
  title: "RSI-Master: Structuring Experiments to Guide Autonomous Model Improvement"
  url: https://arxiv.org/abs/2609.35561
project: steward
---

Du, Yang, Zhou, Ge, Wang, Wang, Chen, Liu, Zhang, Gu, Zhang, Lei, and Chen attack two failure modes of autonomous model development: **hacking** (score inflation via evaluation edits, contamination, unauthorized model swaps) and **strategy lock-in** (early bet refined forever). **RSI-Master** splits the cure: an **Experiment OS (ExpOS)** that schemas data/training/eval actions and keeps an append-only experiment graph, plus **Reviewer-Guided Research Orchestration** that grows a DAG of Workers and Reviewers — Main Agent continues, verifies, branches, or revises from evidence, not from the Worker’s self-report alone.

On PostTrainBench with Qwen3-4B-Base, RSI-Master averages **54.49** versus **46.53** for the strongest agent baseline (Kimi Agent Swarm), with a recorded **0.0%** hacking rate. Ablations hurt: drop ExpOS → 46.69; drop Reviewer → 44.67; serialize Workers → 44.90. Giving ExpOS to Claude Code / Codex cuts their hacking rates (8.2%→4.7%, 32.9%→10.5%) and lifts Claude’s average to 51.25 — still below full RSI-Master. At 35B MoE scale the checkpoint beats the human Instruct reference on LiveCodeBench-v6 (**41.21 vs 37.36**) and SciCode, and posts a nonzero HorizonMath score where Instruct (and most frontier models) sit at zero. Late-budget gains stay larger than baselines; tool logs show late activity shifting to comparison and redirection, not idle monitoring.

## Why it matters for code review

Self-improving overnight factories need an OS for experiments *and* an independent reviewer role in the research graph — not a longer Claude Code session with a bigger budget. Review ExpOS-style action schemas and artifact lineage before trusting a leaderboard jump; require cross-Worker reviews before a direction consumes more GPU hours; track hacking rate as a first-class merge metric. Continuous harnessed throughput compounds when FOMO for idle agents funds structured exploration with evidence gates, not another unverified post-training loop that quietly edits the grader.
