---
title: "VeriHarness: resolve disagreement, challenge consensus—same model, environmental evidence"
description: "Oct 1 Zhang et al. (Google Cloud AI Research): same-model agentic verifier with disagreement resolver + consensus challenger; +6.2/+6.4 over single rollout; verification skills self-evolve from failure feedback."
date: 2026-10-01
kind: paper
source:
  title: "VeriHarness: Scaling Agentic Verification for Long-Horizon Tasks"
  url: https://arxiv.org/abs/2610.00972
project: steward
---

Caiqi Zhang, Rujun Han, Zifeng Wang, Zoey CuiZhu, Nigel Collier, Tomas Pfister, and Chen-Yu Lee (Google Cloud AI Research / Cambridge) attack the verification gap that kills overnight factories when there is **no stronger judge** and no reference answer: the generator is already the frontier model. Empirically, on ten-rollout Claude Opus 4.8 pools for APEX-Agents, **34%** of unanimous claims are still wrong, while **74%** of disputed claims hide a correct candidate that majority vote often misses (most-frequent correct only **47%**). **VeriHarness** turns the *same* model into an agentic verifier with a workspace, evidence tools, and reusable verification skills. A **disagreement resolver** (separate context) checks competing claims against source files and recomputations; a **consensus challenger** (separate context) proposes how shared values or omissions could fail and tests those hypotheses; adjudication in a fresh context selects a base and an evidence-backed revision plan. Across five workspace benchmarks (APEX-Agents, Workspace-Bench Lite, WorkBuddy, SpreadsheetBench 2, JobBench) and two backends, selection alone beats voting / best-of-N / LLM-as-a-Verifier / tool-using judge baselines; full revision lifts average gains over a single rollout to **+6.2** (Gemini 3.5 Flash) and **+6.4** (Claude Opus 4.8). The protocol ports into Gemini CLI, Claude Code, and Codex with most of the selection gain intact. Skills can self-evolve from development failures: libraries grown from empty beat the human-authored library on held-out tasks; human initialization then adds further held-out lift. ~26k rollouts released (HF) plus code.

## Why it matters for code review

Continuous factories under FOMO for “another overnight pass” still ship wrong unanimous answers when verification is self-consistency or a same-model chat judge. Review always-on lanes for VeriHarness-shaped contracts: separate resolver and challenger contexts, claims checked against the workspace not against peer rollouts alone, and a verification record that links claim → check → evidence → verdict. Steady harnessed throughput compounds when the night improves selection and revision under environmental evidence; peak-session mastery that exits on consensus confidence does not. Pair with [Macedo’s verification ladder](/posts/macedo-stop-hand-holding-loop-specification-verification-ladder/) and [Nikolaev’s Claim Plane](/posts/nikolaev-claim-plane-pre-write-admission-parallel-limits/) when the artifact is a report, workbook, or patch the builder cannot be trusted to grade.
