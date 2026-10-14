---
title: "From verification failures to a reusable kit: procedures beat one-shot proofs"
description: "Sep 30 Chen et al.: K semantics + verification kit; HumanEval 164/164 Pass after two repairs; audits catch 12/12 seeded defects that still prove; KleverBench kit vs rules/advice mixed (± intervals include 0)."
date: 2026-09-30
kind: paper
source:
  title: "From Verification Failures to Reusable Guidance for Coding Agents"
  url: https://arxiv.org/abs/2609.39022
project: steward
---

Xiaohong Chen, Yuqing Zhai, Lingming Zhang, Grigore Roşu, and Sriram Vishwanath ask how **expert diagnosis of verification failures becomes reusable guidance** for coding agents that must ship both a program and a checkable correctness argument. The substrate is executable $\mathbb{K}$ semantics (shared language rules + conformance tests) plus a **verification kit**: versioned procedures with applicability conditions and checking examples for constructing specifications, repairing proofs, and auditing adequacy—model weights fixed while the harness accumulates experience.

The HumanEval campaign is the receipt for continuous factories. With supplied semantics and the kit, Stage-2 audits reach **97 Pass / 67 Concerns / 0 Fail** (100% “Legit”); after two targeted repairs the final set is **164/164** AI-audit Pass. Agent-authored semantics without the kit collapses to 14.0% Pass. A separate audit challenge freezes 12 clean/defective pairs where **every package’s $\mathbb{K}$ claims still prove**—completed audits detect **12/12** seeded defects and accept **12/12** clean packages (proof success ≠ intended behavior). KleverBench then stress-tests claim construction under swapped operator meanings: a frozen kit core lifts historical acceptance **270→312 / 372** attempts, but a controlled Luna/DeepSeek comparison against complete rules and equal-length generic advice yields **mixed kit effects whose paired intervals all include zero**—and DeepSeek hits cash-admission limits more often under the kit arm. Smart-contract and Optimism pause case studies show how storage aliasing, call-level rollback, and input-domain bounds become kit entries rather than one-off heroics.

## Why it matters for code review

Overnight factories that treat “the proof passed” as done are missing the kit lesson: reusable procedures for invariant mismatch, bridge classification, and input-coverage checks compound past a single Claude Code burst that rediscovers the same failure class. Review always-on verify lanes for versioned guidance with evidence requirements—and for audits that can fail a package whose checker still says #Top. The KleverBench controls productively complicate: more kit text is not free under budget, and selection of which procedures to load matters. Pair with [Zhang’s self-harness held-out regression gate](/posts/zhang-self-harness-held-out-regression-gate/) and [verification-surface reach](/posts/verification-surface-reach-decides-value/) when promoting overnight proof kits.
