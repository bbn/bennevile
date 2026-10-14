---
title: "Harneloop: portable harness units with artifact-aware tests and evidence-gated promotion"
description: "Ker102 Harneloop (v0.0.2): self-evolving harness units — capture artifacts/traces, diagnose, candidate patches, promote only with evidence; ViperMesh case study: 2.53× speedup, +8.19 visual, −90.9% tokens vs Blender MCP baseline."
date: 2026-07-21
kind: field-note
source:
  title: "Harneloop: self-evolving AI agent harnesses with evidence-gated promotion"
  url: https://github.com/Ker102/Harneloop
project: steward
---

[Ker102/Harneloop](https://github.com/Ker102/Harneloop) (v0.0.2 public alpha) is an agent-first framework for building and evolving **task-specific harnesses** — not another agent runtime. Each portable **harness unit** carries goal, environment map, harness material, experiments, evidence, regression cases, and restorable versions. The loop is concrete: attempt the real task, capture artifacts/logs/traces/state, compare to the desired outcome, trace mistakes through the recorded run, propose a candidate change (instructions, context, tools, retrieval, validators, environment) in an isolated workspace, and promote only when evidence shows improvement without unacceptable regressions. Finished runs are immutable; missing artifacts cannot support a release.

The ViperMesh case study (Blender spatial-reasoning / scene construction) keeps the acting model fixed at GPT-5.5 High and compares the evolved harness to an Anthropic × Blender MCP baseline: faster on **6 of 7** comparable live tasks (**2.534×** mean speedup), preliminary neutral LLM visual eval **+8.19** points across seven render pairs, and **90.91%** lower local acting-agent token usage on the documented comparable pair. Harneloop did not generate the scenes — it structured the artifact loop that verified harness changes. Harness-first stance: optimize the control plane before weights; every promoted version stays inspectable and restorable.

## Why it matters for code review

Always-on factories that only mint more diffs overnight are optimizing the wrong layer — Harneloop’s useful unit is a *versioned harness change with artifact evidence*, not a longer Claude Code burst. Review harness-evolution PRs the way promotion works here: demand candidate workspace + attached evidence + regression cases, reject missing-artifact “we improved,” and ask whether the night can pause/move/export the unit without rewriting the working harness in place. Steady harnessed throughput compounds when FOMO for idle agents funds evidence-gated harness search rather than unlogged prompt thrash.
