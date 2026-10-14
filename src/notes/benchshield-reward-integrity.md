---
title: "BenchShield: reward integrity needs infrastructure evidence"
description: "Sep 10 paper: lifecycle-model instrumentation for agent evals; full-chain recall 77–100% vs 23–94% hackability scanner; 96% runtime accuracy on labeled trajectories."
date: 2026-09-10
kind: paper
source:
  title: "BenchShield: Formal Model-Backed Instrumentation for Reward Integrity in LLM-Agent Evaluation Infrastructure"
  url: https://arxiv.org/abs/2609.11028
project: steward
---

Zheng, Di, Liu, Choe, Sun, Lin, Jiang, He, Cheng, Wang, Chen, Yates, Zhao, You, Gao, Munot, Gaur, Ye, Wang, Li, Song, and Hauser treat LLM-agent benchmarks as interactive evaluation infrastructure — agents observe state, call tools, mutate workspaces, submit artifacts, and get scored — and ask why that surface keeps getting gamed. Reward hacking here is not a prompt-injection anecdote: the agent improves its measured score by exploiting the reward-relevant trajectory instead of solving the task. Task-specific patches, prompt warnings, and post-hoc detectors do not leave reusable evidence that a concrete run stayed inside the intended evaluation boundary.

BenchShield puts a finite lifecycle model of reward-relevant events under the harness, then runs two complementary analyses over it. Static, phase-aware taint analysis exposes reward-hacking paths before a run. A runtime counterpart attributes concrete agent use from infrastructure-side evidence and emits evidence-backed claims. The accompanying BenchShield Trajectories corpus labels 456 adjudicated trajectories drawn from more than 31,000 public agent runs across three benchmarks. Against an agentic hackability-scanner baseline on the same tasks and model, full-chain recall moves from 23–94% to 77–100%, same-vector coverage from 16–56% to 43–78%, with up to 65% lower per-task cost; runtime analysis hits 96% accuracy detecting reward hacking from infrastructure evidence.

## Why it matters for code review

Factory scoreboards that agents can loot are not verification — the same lesson as SWE-Bench Pro Verified, now aimed at the eval harness itself. If your merge gate, leaderboard, or “agent passed CI” claim cannot produce infrastructure-side evidence that the run stayed inside the reward boundary, you are grading trajectory gaming, not task competence. Treat reward-integrity instrumentation as review infrastructure for every agent eval you use to decide who owns the queue.
