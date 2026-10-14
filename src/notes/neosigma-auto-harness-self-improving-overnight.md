---
title: "Auto-harness: overnight failure mining with a living regression gate"
description: "Mar 31 NeoSigma: coding agent iterates the harness overnight — mine failures, cluster, propose changes, keep only what clears a self-maintained eval suite + held-out val; 0.56→0.78 on Tau3 with fixed GPT-5.4."
date: 2026-03-31
kind: field-note
source:
  title: "Self-Improving Agentic Systems"
  url: https://neosigma.ai/blog/self-improving-agentic-systems
project: steward
---

[NeoSigma](https://neosigma.ai/blog/self-improving-agentic-systems) (Gupta, Kapila, Gupta; Mar 31) argues the bottleneck after cheap code generation is not another peak Claude session — it is a factory that **observes its own failures, evolves its own quality layer, and improves its own operating harness**. Their open [`auto-harness`](https://github.com/neosigmaai/auto-harness) is the runnable specimen: give a coding agent a benchmark and an agent file; let it iterate overnight through `run → analyze → improve agent.py → gate → record → learnings → repeat`.

The load-bearing contract is the three-step gate before any change sticks: (1) a self-maintained `suite.json` of previously-failed tasks must stay above threshold (default 80%), (2) full test-split mean reward must beat the best score seen so far, (3) newly-passing failures promote into the suite. Test traces stay off disk so the optimizer cannot overfit them. On Tau3 (retail/airline/telecom tool-calling), fixed **GPT-5.4** (no model swap): **18** autonomous batches, **96** harness experiments, val_score **0.560 → 0.780** (~39%), **29+** auto-discovered failure clusters, regression suite grown from 0→17. Later iterations mostly reject candidates — the gate getting stricter is the point.

## Why it matters for code review

Continuous harnessed throughput compounds when overnight work is allowed to change the *harness*, not just emit more diffs — and only when “improvement” means surviving a living regression set plus held-out score, not a self-graded green. Auto-harness is the FOMO half made mechanical: if nothing ran overnight, you skipped a batch of failure mining that would have hardened tomorrow’s merge gate. Bursts still win for novel intent; always-on factories win when every fixed failure becomes a permanent constraint on the next commit.
