---
title: "Augment CIV: separate the judge from the builder — or keep the single-agent burst"
description: "Jun 3 Augment guide: Coordinator–Implementor–Verifier splits planning, execution, and spec-grounded validation so generation errors stop grading themselves — and names when single-file bursts still win."
date: 2026-06-03
kind: field-note
source:
  title: "Agentic SDLC Implementation: The Coordinator-Implementor-Verifier Pattern"
  url: https://www.augmentcode.com/guides/agentic-sdlc-coordinator
project: steward
---

Augment’s Jun 3 (updated Jun 18) guide is a useful productive complication for continuous factories: role separation is not always the win. The Coordinator–Implementor–Verifier (CIV) pattern assigns planning, execution, and validation to separate agents so the same reasoning path that wrote the code is not also the one that decides it is done. Verification criteria come from the Coordinator’s specification, not the Implementor’s trail; Implementors work in isolated git worktrees; Verifier diagnostics route back as targeted retries instead of whole-workflow restarts.

Why single-agent SDLC fails on multi-file work: generation errors survive “review” because the reviewing pass shares context with the producing pass; retries chain without a stop owner; merge readiness becomes a judgment call with no evidence trail. Augment maps CIV across phases — structured spec with human approval before writes, parallel Implementors without direct agent-to-agent coordination (Factory Missions-style fresh worker sessions), layered verification (deterministic gates → LLM reasoning → dynamic tests), then a merge-readiness pack bundling acceptance evidence for CI and human merge.

The decision matrix is the interesting half. Choose single agent when the change is one file/module, lint/types are enough, runtime is under ~30 minutes, and standard PR review catches the residue. Choose CIV when three or more independent modules are in play, specification-grounded behavioral validation is required, runs stretch multi-hour/multi-day, or correlated errors create downstream failures. Cognition’s caution lands here too: naive multi-agent write setups fail without careful context design; read-only subagents are the mature baseline.

## Why it matters for code review

Always-on harnessed momentum is not “more Claude windows.” It is a factory that refuses to let the writer grade its own diff — until the change is small enough that coordination overhead exceeds the correlated-error risk. CIV relocates review into an independent, spec-grounded gate and a merge-readiness pack so continuous throughput arrives as evidence, not heroics. The complication to keep: for single-file bursts, a peak session with ordinary PR review can still beat a three-role orchestra. Match the harness to the blast radius, then keep humans on the merge button.
