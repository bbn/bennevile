---
title: "Ecdysis: don’t train the harness on every failure you see"
description: "Sep 10: harness evolution that separates model-specific accommodation from systematic harness repair via cross-task failure patterns — up to 1.84× faster training and +18.56% reasoning accuracy."
date: 2026-09-10
kind: paper
source:
  title: "Ecdysis: Efficient and Effective Training of Runtime Harnesses for LLM Agents"
  url: https://arxiv.org/abs/2609.11677
project: steward
---

Self-evolving runtime harnesses improve agents by rewriting the scaffolding around the model — then pay for it in wall-clock and overfitting. Yue, Cui, Sun, and coauthors name the bottleneck: an observed failure may be *model-specific* (accommodate this backend’s quirk) or *harness-level* (a systematic gap that recurs across tasks). Iterative search that revises against every instance overfits the seen tasks and burns repeated agent runs.

Ecdysis biases adaptation toward systematic deficiencies. Batch-level cross-instance failure aggregation jointly analyzes evidence across task instances; Failure-Driven Collaborative Refinement diagnoses causes and iterates harness modification specs with multi-role diagnosis rather than one-shot patch-from-this-traceback. Reported results: up to 1.84× speedup in harness training versus prior evolution methods, and +18.56% reasoning accuracy on the resulting harnesses.

## Why it matters for code review

Factories that “learn from failed PRs” into skills, hooks, and review prompts face the same diagnosis problem. Encoding every red CI into the harness is model babysitting; encoding recurring cross-task failure patterns is harness repair. Treat harness changelog review like dependency review: ask whether the change fixes a class of review misses or papers over one model’s bad day — then keep the eval set that would catch the overfitting.
