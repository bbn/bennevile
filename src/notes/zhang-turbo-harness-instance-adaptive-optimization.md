---
title: "Turbo Harness: recycle the search exhaust into a per-instance patch"
description: "Sep 30 Zhang/Wang/Xu/Metaxas: a small RL editor adapts a globally optimized harness per task from the outer-loop playbook—SWE-smith-MR 50.7→64.0 (Haiku) and 70.7→88.0 (Gemini), often with fewer steps."
date: 2026-09-30
kind: paper
source:
  title: "Turbo Harness: Instance-Adaptive Harness Optimization"
  url: https://arxiv.org/abs/2609.40330
project: steward
---

Tunyu Zhang, Hao Wang, Kai Xu, and Dimitris N. Metaxas argue that **one global harness is the wrong unit of deployment**. Outer-loop search (Meta-Harness and kin) spends heavily to produce a single $H^\star$ that is then applied uniformly—yet SWE-style issues from different repos want different verify budgets, tool policies, and control knobs. **Turbo Harness** keeps that expensive search, but recycles its “exhaust”: the archive of candidate harnesses, traces, and success/failure evidence is summarized into a structured **playbook**, then a lightweight harness editor (Qwen3.5-9B, GRPO-trained) proposes **one instance-specific patch** to $H^\star$ before the frozen execution model runs.

The empirical claim is not marginal. On SWE-smith-MR under a tight 40-step / $3 budget, Turbo lifts Meta-Harness from **50.7% → 64.0%** with Claude Haiku 4.5 and **70.7% → 88.0%** with Gemini 3.7 Flash—while often cutting steps and cost (Gemini: 23.1 → 8.7 steps, $0.310 → $0.046). On Terminal-Bench-2.1 with Sonnet 4.5, it takes the lead at **55.5%** pass even where Meta-Harness alone underperforms human-designed Terminus harnesses. Ablations are pointed: for the small editor, **neither playbook alone nor RL alone** beats the global harness; both together do.

## Why it matters for code review

Always-on factories that “optimize the harness once” still leave headroom under heterogeneous queues. Turbo’s reviewable artifact is the **per-issue patch plus playbook provenance**—what control-flow, verify gate, or prompt injection changed for *this* worktree—not a vibes story that the overnight run “felt smarter.” Productive complication: adaptation quality is only as good as the outer-loop archive; a thin search history cannot be turbocharged into diversity that was never explored. Pair with [Adaptive-GEPA’s router+specialist co-evolution](/posts/chen-adaptive-gepa-routed-specialist-harness/) and [Harness-R1’s failure-trajectory editing](/posts/shao-harness-r1-learned-runtime-editing/).
