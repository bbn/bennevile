---
title: "SDLI: security debt banks when agents bank progress"
description: "Sep 28 Rajput et al.: Security Debt Line Integral couples SAST risk to historical-best test progress — 3.9%/26.2% agree2-positive among working SWE-bench/ProgramBench runs; gowsdl debt arrives in one write and persists."
date: 2026-09-28
kind: paper
source:
  title: "Trajectory-Level Security Debt in LLM Coding Agents"
  url: https://arxiv.org/abs/2609.35199
project: steward
---

Rajput, Kabore, Song, Tessa, Malloy, Klein, and Bissyandé notice that coding agents traverse hundreds of intermediate states while security review usually scans only the final artifact. They define the **Security Debt Line Integral (SDLI)**: at each checkpoint, charge a BBCS SAST risk reading (Bandit / Bearer / CodeQL / Semgrep) against the increase in historical-best test pass ratio. Risk after progress plateaus contributes zero; later cleanup does not refund prior charges. Two-tool CWE agreement (**agree2**) is the stricter channel.

Among working solutions, scanner findings coexist with green tests: **3.9%** of 830 passing SWE-bench runs and **26.2%** of 80 ProgramBench runs (≥90% official tests) carry non-zero agree2 endpoint SDLI (union rates much higher; excluding three advisory-heavy classes drops ProgramBench agree2 to 6.2%). Same-task SWE-bench siblings can diverge — eight non-zero and one zero on hatch-422. A reconstructed ProgramBench gowsdl trajectory shows the anatomy overnight factories fear: **62** probing actions at zero risk, then one heredoc write that introduces every later-flagged CWE class, then **53** functional refinements that never move the risk reading. MirrorCode checkpoints almost never decrease agree2 risk once it appears. A single repair case study can lower scanner signal while preserving local behavior — and also shows equivalent API rewrites that satisfy detectors without removing capability.

## Why it matters for code review

Continuous verification under volume is not only unit-test green. If agents bank functional progress overnight while security debt banks with it, morning humans inherit a progress-weighted exposure curve they never saw forming. Review always-on loops for checkpoint SAST (or equivalent) gated on progress events — not only final CI — and treat “pass rate up, risk flat” as incomplete. Bursts of supervised Claude still win when you cannot afford trajectory monitoring; harnessed factories that skip it compound insecure architecture choices under the same FOMO that celebrates unattended merge rate.
