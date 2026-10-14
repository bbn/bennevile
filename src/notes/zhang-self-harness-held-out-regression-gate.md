---
title: "Self-Harness: the same fixed model improves its own harness under a held-out gate"
description: "Jun 8 Zhang et al.: Weakness Mining → bounded proposal → promote only if held-in and held-out both non-regress; up to +132% relative Pass across Terminal-Bench-2 / SWE-bench Verified / AppWorld."
date: 2026-06-08
kind: paper
source:
  title: "Self-Harness: Harnesses That Improve Themselves"
  url: https://arxiv.org/abs/2606.09498
project: steward
---

Zhang, Zhang, Li, Zhang, Chen, Zhang, Bai, and Hu ask whether harness improvement has to come from a human engineer or a stronger outer optimizer — or whether the *same* frozen model, under its current harness, can propose bounded edits that survive regression. **Self-Harness** is that loop: evaluate and cluster verifier-grounded failure patterns (Weakness Mining), generate diverse yet minimal candidate edits tied to a failure mechanism (Harness Proposal), and promote only when both held-in and held-out pass counts are non-negative with at least one strict gain (Proposal Validation). Model weights and the evaluator stay fixed; only the harness lineage moves.

Starting from a deliberately minimal DeepAgent harness across MiniMax M2.5, Qwen3.5-35B-A3B, and GLM-5, every one of nine model–benchmark combinations improves *both* splits. Headline relative overall Pass gains reach **132%** (Qwen on AppWorld); absolute lifts hit **+40.6** pp (GLM-5 on AppWorld, 44.4% → 85.0%). Held-out often moves as much as held-in — so the gate is not just protecting a training-set scoreboard. Retained edits are concrete and model-specific: early artifact creation and tool-loop bounds for MiniMax; dependency prechecks and tool-error recovery middleware for Qwen; session-persistent env changes and explore→implement transitions for GLM-5; on SWE-bench, patch-verifier subagents and FAIL-TO-PASS cycles rather than “try harder” prompts.

## Why it matters for code review

Always-on factories that only mint more diffs overnight are optimizing the wrong layer — Self-Harness shows the night can harden the *control plane* if every harness edit carries held-in evidence and a held-out non-regression receipt. Review harness-evolution PRs the way promotion works here: demand the targeted failure mechanism, the edited surface, and split-wise pass deltas; reject tradeoffs that raise one split by burning the other. Steady harnessed throughput compounds when FOMO for idle agents funds auditable harness search rather than another unlogged Claude Code burst.
