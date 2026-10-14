---
title: "Harness search is multi-objective: joint accuracy, safety, and tokens beat staged phases"
description: "Sep 25 Mukherjee & Tanjim (Adobe): MoMHa joint reward J=0.482 vs 0.198–0.422 baselines; safety 0.781; +2.7 overall vs two-phase at 95 fewer tokens/example; wins 5/7 held-out real-world columns."
date: 2026-09-25
kind: paper
source:
  title: "MoMHa: Multi-Objective Optimization of LLM Harnesses over Accuracy, Safety, and Tokens"
  url: https://arxiv.org/abs/2609.30967
project: steward
---

Subhojyoti Mukherjee and Md Mehrab Tanjim’s Sep 25 Meta-Harness study treats the **Python around the model** — prompts, routing, retries, parsers — as a first-class design surface whose quality is inherently multi-objective. An accurate harness that never refuses unsafe requests, or that burns an order of magnitude more tokens, is not a good harness. Their headline system, **MoMHa**, gives an agentic proposer (Claude Code) filesystem access to prior harness source, traces, and scores, and optimizes a single-phase joint reward over accuracy, behavioural safety, and token cost.

Joint beats staged. Against ten baselines including accuracy-only MH, DSPy, TextGrad, GEPA, and AutoHarness, MoMHa leads the synthetic-track joint mean (**J = 0.482** vs **0.198–0.422**), winning **7/10** per-domain columns, and the held-out real-world track (**J = 0.461** vs DSPy’s **0.377**), winning **5/7** columns with **zero** additional search. It posts the highest U-SafeBench behavioural safety composite (**0.781**) and beats a two-phase “accuracy then tokens” ablation by **+2.7** overall points at **95** fewer tokens per example — because Phase 1 freezes structure before cost can reshape it. Trace-level feedback and per-domain safety skills are load-bearing; harnesses discovered on Haiku transfer unmodified to **8 of 12** target models.

## Why it matters for code review

Always-on factories that tune prompts for pass rate alone are optimizing a scalar the merge queue does not pay. Review harness evolution the way MoMHa scores candidates: demand a joint ledger of correctness, refusal/helpfulness under profile-conditioned risk, and tokens per example — and prefer single-phase search that can discover confidence-gated verifiers over two-phase pipelines that lock in expensive structure overnight. Steady harnessed throughput compounds when the control plane searches the program around the model, not when FOMO launches more agents under an accuracy-only reward.
