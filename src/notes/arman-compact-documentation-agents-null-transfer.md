---
title: "Compact docs regenerate the file; they do not raise issue resolution when source is already loaded"
description: "Sep 25 Arman & Molybog: roundtrip optimizer hits fidelity 1.0; source-withheld resolution 0.08→0.71; with source present, compact/full/retrieved context never beat issue-only across models and ten repos."
date: 2026-09-25
kind: paper
source:
  title: "Compact Documentation for Coding Agents: A Benchmark, an Optimizer, and Why It Does Not Transfer"
  url: https://arxiv.org/abs/2609.31587
project: steward
---

Md Shohel Arman and Igor Molybog’s Sep 25 paper builds the documentation a continuous factory wishes it had — then shows when that documentation stops buying merges. They score a **roundtrip** describer by whether code regenerated from the description alone passes the original tests, optimize the describe prompt against that signal, and test whether the resulting compact docs help agents resolve real repository issues.

Completeness, not length, drives fidelity. The optimizer reaches **fidelity 1.0** on training fixtures and lifts held-out fidelity from **0.5 to 1.0**, converging on prompts that list imports, exact literals, signatures, and exception paths. With the source **withheld**, optimized descriptions lift mean test-pass fraction from **0.08** (issue alone) to **0.71**. With the source **present** — how coding agents normally operate — the benefit disappears. Across two model families, Kind-B fixtures, and SWE-ContextBench Lite (**58** paired tasks), neither ~80-word compact docs, full optimized descriptions, nor retrieved past-task context beat issue-only by more than a single task; longer documentation can nudge rewrites that break tasks the issue alone would have patched. A positive control confirms the harness can detect a real effect when one exists.

## Why it matters for code review

Overnight factories that mint AGENTS.md dumps and hope context compounds are optimizing the wrong regime. Review documentation the way Arman and Molybog split the boundary: treat high-fidelity file specs as a **compression format for code that does not fit**, not as a merge-rate booster when the agent can already `read` the file. Continuous verified momentum compounds when the harness loads what is missing and refuses redundant restatements that inflate rewrite risk — FOMO for idle agents is wasted if the night’s “better docs” only made the morning diffs larger.
