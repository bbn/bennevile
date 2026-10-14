---
title: "Groundability: weak reviewers catch strong agents when the check is independent"
description: "Oct 1 Guo et al.: 411 execution-labeled traces; official evidence lifts weak reviewers (5/6 improve catch and cut over-rejection); deployable cascade recovers catch 0.76–0.80 but over-rejects ~0.66—decisive checks beat bigger judges."
date: 2026-10-01
kind: paper
source:
  title: "Groundability, Not Scale Alone: When Weak Reviewers Can Audit Strong Coding Agents"
  url: https://arxiv.org/abs/2610.01023
project: steward
---

Junyu Guo, Shangding Gu, Ming Jin, and Javad Lavaei (UC Berkeley / Virginia Tech) ask when a **nominally weaker reviewer** can decide whether a coding-agent patch actually solves the issue. On **154** GPT-5.4 SWE-bench Lite/Verified traces, omissions dominate defects (**76/101**), and patch-only or raw-trace review fails: an 8B reviewer accepts all nine design-set omissions from the diff alone. **Groundability** is the property they name—whether an independent check (static analysis, a runnable test) can answer the disputed claim—not more context or a bigger judge.

With **official execution evidence** as an upper-bound diagnostic (format frozen on a 32-trace design set), five of six reviewers improve **both** catch and over-rejection on **122** held-out traces; GPT-OSS-120B and GPT-4.1 classify every trace correctly. Parameter count is not monotonic: Qwen3-235B’s unchecked catch (**0.28**) sits below Llama-8B (**0.70**). A frozen **deployable cascade**—no-change reject → patch-caused static errors → generated tests kept only if they fail on the unpatched base → residual 8B vote—reaches coverage **0.89 / 0.86** and catch **0.76 / 0.80** on held-out GPT-5.4 and Gemini sets, but over-rejection stays **~0.66** and most false rejects come after automatic checks end. One passing generated test has accept precision **0.30**; a checked failure that still fails on the patch has reject precision **0.82**.

## Why it matters for code review

Always-on lanes that FOMO for “another overnight pass” still ship plausible omissions when review is testimony or structured-but-unchecked notes. Review agent PRs for Guo-shaped contracts: spend budget on **independent checks before the LLM judge**, gate generated tests on fail-on-base, keep **uncertain** when no decisive check exists, and do not treat reviewer scale as the lever. Continuous verified momentum compounds when weak auditors get groundable evidence; peak-session mastery that exits on a confident summary does not. Pair with [VeriHarness’s disagreement/consensus environmental verifier](/posts/zhang-veriharness-disagreement-consensus-environmental-evidence/) and [Nikolaev’s Claim Plane](/posts/nikolaev-claim-plane-pre-write-admission-parallel-limits/) when the merge gate has to audit a stronger builder.
