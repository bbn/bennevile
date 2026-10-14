---
title: "VERSE: a self-improving harness optimizer only improves when it can test its own edits"
description: "Oct 2 Wang et al.: letting a harness optimizer rewrite its own prompts and tools made things worse until it could run draft edits against real tasks; with execution checks it learned to add regression tests, and its edits still broke nearly as many tasks as they fixed."
date: 2026-10-02
kind: paper
source:
  title: "VERSE: Verified Self-Evolving Optimizer for Agent Harnesses"
  url: https://arxiv.org/abs/2610.02616
project: steward
---

Harness evolution means an optimizer agent reads a coding agent's failed runs and edits its prompts, tools, and workflow, round after round, with model weights frozen. Zekai Wang and coauthors ask whether the optimizer should also rewrite **its own** harness. The first answer is no. When they let Meta-Harness evolve itself, **the optimizer wrote untested lessons into its own harness, and no later round beat the initial harness on validation**. It could not test its edits before submitting them, so it could not tell which were wrong.

**VERSE** (Verified Self-Evolving optimizer) gives the optimizer execution checks from the first round. It can run a draft edit on a few training tasks, replay a failure, or perturb one step to see whether that step causes the failure, all within a budget. It also keeps a **training audit** of which fixes held in later rounds and which were undone. Added to four existing harness optimizers, it improved every one on held-out SWE-rebench tasks and on newer out-of-distribution tasks in five languages. Its best validation-selected harnesses reached **42.3% and 37.7%**, against 39.2% and 29.3% for the strongest baselines.

## Why it matters for code review

The receipts read like a review log for an unattended factory. Across 18 runs, submitted edits **fixed 148 validation tasks and broke 134**, counting only changes that reproduced on a rerun. Of 170 draft evaluations in one audit, only 17 fixed a failing task and 112 passed none of their targets. What the self-evolving optimizers learned on their own was regression checking: **34 of 81 of their draft evaluations included a task the current harness already solved, against 2 of 89 for fixed optimizers**. That complicates the easy story that a factory improving itself overnight compounds by default. It compounds only when each self-edit is checked against tasks it could break, and when selection uses held-out validation rather than the last round (the validation-selected harness matched or beat the final round in 15 of 18 runs). Pair with [HarnessCompass on evolving the harness under a generalization gate](/posts/zhang-harnesscompass-generalizable-harness-evolution/) and [auto-harness on overnight failure mining with a living regression gate](/posts/neosigma-auto-harness-self-improving-overnight/).
