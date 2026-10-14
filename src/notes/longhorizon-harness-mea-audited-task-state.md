---
title: "LongHorizon-Harness: only audited facts cross the round boundary"
description: "Aug 3 Ma et al.: Manage–Execute–Audit keeps task state outside the growing session; fresh-context executors, read-only auditors, and Claude Code/Codex backends — WeaveBench 51.8%→80.7% with the same model."
date: 2026-08-03
kind: paper
source:
  title: "LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks"
  url: https://arxiv.org/abs/2608.01964
project: steward
---

[Ma, Huang, Zou, Wang and coauthors](https://arxiv.org/abs/2608.01964) (3 Aug 2026; [code](https://github.com/AMAP-ML/LongHorizon-Harness)) locate long-horizon failure in the harness, not only the model: existing coding harnesses keep **execution, task state, and completion judgment inside one growing context**, so wrong self-assessments become premises for later rounds. Their fix is LongHorizon-Harness — reformulate the job as **task-state management** and advance state only with facts independently verified from the environment.

Each round is Manage–Execute–Audit (MEA). A **manager** (no environment tools) reads audited state and emits one bounded subtask contract — goal, acceptance criteria, constraints, relevant prior evidence — or `done` / `blocked` / `ask`. A **fresh-context executor** (Claude Code, Codex CLI, OpenClaw, … via AgentAdapter) performs only that contract; its raw trajectory is discarded. A **read-only auditor** inspects the resulting environment, returns complete/incomplete/blocked plus integrity (clean/suspect/violation), and may propose state updates the manager alone applies. Executor claims never write the persistent state.

Matched receipts with Qwen 3.7-Plus and Claude Code as backend: WeaveBench PassRate **51.8% → 80.7%**; Terminal-Bench 2.1 **69.7% → 77.2%**; OSWorld 2.0 binary completion **2.8% → 8.3%**. Claude Opus 4.7 on an OSWorld subset: **20.6% → 35.3%** binary. Case studies show the mechanism: stalled GUI retries become pending requirements for later executors; visually plausible “done” fails when the auditor checks underlying styles; pre-repair evidence stays pending until captured. Token cost is not a fixed tax — auditor spend is the main adder; on Terminal-Bench LH-Harness used **24% fewer** tokens at higher success.

## Why it matters for code review

Always-on momentum compounds only if **what crossed the night** was audited environment state, not a chat transcript that graded itself. MEA is the research shape of the independent auditor pattern: separate the writer from the checker, keep only verified facts between sessions, and treat “done” as a manager decision over audit reports — the review unit for continuous factories under volume.
