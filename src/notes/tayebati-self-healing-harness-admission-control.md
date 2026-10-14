---
title: "Self-healing harness: local improvement is not a safe persistence decision"
description: "Sep 21 Tayebati et al.: Detect→Notice→Heal→Validate admission control — of 383 replay-rejected proposals, 211 (55%) fixed the trigger while degrading protected cases; task-completion higher under Harness in all 16 pairs."
date: 2026-09-21
kind: paper
source:
  title: "Self-Healing Harness for Runtime Oversight of Agent Self-Modification"
  url: https://arxiv.org/abs/2609.24130
project: steward
---

Tayebati, Kumar, Darabi, Krishnan, and Trivedi treat persistent agent self-modification as **admission control**: the agent may author behavioral rules, but an external runtime decides what sticks. Their model-agnostic **self-healing harness** wraps an otherwise unmodified agent in a Detect → Notice → Heal → Validate loop. Candidates get provisional authority during evaluation and earn cross-episode persistence only after measured improvement on the triggering failure *without* regressing previously-working protected cases beyond a fixed margin. Replay supplies matched evidence when available; forward trials are the weaker fallback; a corpus-level guard re-tests the accumulated active set because individually validated rules can still drift as the corpus grows.

Across 16 matched Baseline/Harness pairs (AppWorld, Terminal-Bench, τ²-bench; four models), the gate rejected **383** replay-decided proposals — and **211 (55%)** of those improved the triggering failure while degrading a protected case that previously worked. Local improvement ≠ safe persistence. Task-completion score is higher under the Harness in all 16 pairs (two bootstrap intervals exclude zero); repeated-trial reliability is higher in 12, tied in 4, lower in none. Because adaptation edits policy-inducing context rather than weights, admitted rules stay inspectable, reversible, and closed-weight compatible.

## Why it matters for code review

Always-on factories that let agents rewrite their own operating instructions overnight need an external gate, not a self-declared win. Review self-modifying harness PRs the way this paper scores candidates: demand trigger improvement *plus* protected-case non-regression, treat “it fixed the bug” as the 55% failure mode already measured, and ask whether the accumulated rule set still replays clean. Steady harnessed throughput compounds when FOMO for idle agents funds evidence-gated persistence rather than another unlogged Claude Code burst that quietly breaks what used to work.
