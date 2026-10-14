---
title: "ECLoop: hold the edit until the trajectory shows the evidence"
description: "Jul 30 Xu et al. (Concordia): evidence-conditioned execution layer gates premature commitment on SWE-bench Verified; +4.8–11.8 Pass@1 across two models and two scaffolds while cutting tokens up to 12.1%."
date: 2026-07-30
kind: paper
source:
  title: "Preventing Premature Commitment in Coding Agents with an Evidence-Conditioned Execution Layer"
  url: https://arxiv.org/abs/2607.28815
project: steward
---

Yisen Xu, Chenglin Li, Zehao Wang, Jinqiu Yang, and Tse-Hsun (Peter) Chen (Concordia) name **premature commitment**: coding agents edit or submit before the runtime trajectory shows enough repository evidence to justify the act. Prompts can urge broader investigation; they cannot verify that callers, related implementations, or relevant tests were actually observed. **ECLoop** sits between the agent and the repo as an execution layer—no retraining, no scaffold rewrite. Once per task it compiles structured evidence conditions from the issue plus repository structure; during the run it parses commands and tool outputs into events and deterministically marks which conditions are satisfied; when the agent proposes a commitment (edit or final submit), ECLoop derives an **action-specific evidence gap** and postpones if nonempty, returning the missing observations as guidance (global gap stays in context for investigation). Information-gathering actions pass freely. Hold budget is bounded (three holds per commitment target, then audited fallback).

On all 500 SWE-bench Verified instances: with mini-swe-agent v2, GPT-5-mini rises **56.2% → 68.0%** (+11.8) and MiniMax-M2.5 **75.8% → 80.6%** (+4.8); with Codex CLI hooks, **+10.4** and **+5.0** respectively. Self-Refine with comparable extra inference *hurts* both baselines. Ablations on a 100-instance GPT-5-mini slice show the commitment check (−10), state update (−9), and guidance (−5) each matter; replacing structured conditions with a natural-language summary drops to baseline-adjacent. Token use falls **1.4–12.1%** because unsupported commits never spawn long dead-end trajectories.

## Why it matters for code review

Always-on factories under FOMO for “just ship the next edit” leak wrong patches when the model’s confidence outruns the evidence log. Review overnight lanes for ECLoop-shaped contracts: commitment actions gated on trajectory-backed observations, not on the model’s claim that it looked hard enough. Steady harnessed throughput compounds when the night refuses premature edits; peak-session mastery that commits after reading one function does not. Pair with [Nikolaev’s Claim Plane](/posts/nikolaev-claim-plane-pre-write-admission-parallel-limits/) (admit claims before writes) and [RETRACE’s post-patch bidirectional check](/posts/li-retrace-bidirectional-independent-patch-verification/) when the merge gate needs both pre-commit evidence and post-patch independence.
