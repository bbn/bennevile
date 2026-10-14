---
title: "Commit gates fail when every verifier shares the same evidence"
description: "Sep 10: VP-CONTROL shows cross-model votes over shared evidence still approve 62.9% of unsafe proposals vs 22.9% with an independent source — source diversity beats model diversity for agent commit gates."
date: 2026-09-10
kind: paper
source:
  title: "Engineering Reliable Commit Gates for Agentic AI: Cost-Aware Verification Portfolios under Common-Mode Data Failures"
  url: https://arxiv.org/abs/2609.10969
project: steward
---

Agentic systems commit state-changing actions. Stacking more verifiers feels like safety — until they inherit the same upstream fault. This paper’s VP-CONTROL design and deterministic benchmark treat the *commit gate* as a cost-aware verification portfolio under common-mode data failures: 48 task templates → 2,880 scenarios across six fault regimes.

The headline experiment freezes proposals from two local actor families and runs a fixed-call 2×2 that separates verifier-*model* diversity from *evidence-source* diversity. A cross-model vote over **shared** evidence still approves 62.9% of unsafe proposals. With an **independent** evidence source that drops to 22.9%. Source effect: 40.9 percentage points. Model diversity effect: 11.3. A portfolio controller that picks verification plans from deployment-observable metadata, calibrated to a nominal 5% per-task risk target, gets to 1.9% unsafe execution with 38.2% automated safe coverage on the locked test — and matched-budget portfolios beat fixed policies. Transfer is conditional (unseen fault families still hurt; a FinQA check fails to reproduce the source effect with the tested setup).

## Why it matters for code review

“Second model looks at the same CI log / same diff summary” is not an independent review. Factories that fan out specialist reviewers still need *independent evidence* — separate sandboxes, withheld tests, alternate traces — or the merge gate is a correlated committee rubber-stamping a shared hallucination. Treat evidence provenance as part of the review protocol, not an afterthought once the models disagree.
