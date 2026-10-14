---
title: "CHILL-Harness: don’t always-full the overnight loop — authorize only advantageous interventions"
description: "Jul 28 Fu et al.: causal CIEL+ARCO orchestration — GAIA 71.3% at 28.4% fewer tokens; SWE-Verified 65.6% at 13.1%↓ tokens / 25.9%↓ time; Always-Full ablation collapses GAIA to 27.7%."
date: 2026-07-28
kind: paper
source:
  title: "CHILL-Harness: Counterfactual Harness Learning for Efficient Reasoning in Long-Horizon Agents"
  url: https://arxiv.org/abs/2607.25825
project: steward
---

Fu, Ding, Chen, Xin, Zhang, Li, Wei, Yuan, and Wang treat fixed harness workflows as the tax continuous factories pay when every step looks like a full deliberation. **CHILL-Harness** reframes adaptive orchestration as a causal problem: estimate whether an admissible alternative workflow beats the factual one under the same context (**CIEL** — Causal Intervention Effect Learning from checkpointed paired executions), then realize only adaptations with enough expected advantage (**ARCO** — route-before-generation Skip/Light/Full, CRE revision gate, CAE completion that still requires a task verifier). Success-preserving constraints mean efficiency labels are positive only when pass rate holds.

On matched model/tool/env settings it preserves or improves success while cutting cost: GAIA **71.3%** at **96M** tokens (**28.4%** below the cheapest baseline) and **46.6%** less runtime; SWE-bench Verified **65.6%** at **13.1%** fewer tokens and **25.9%** less runtime; Terminal-Bench 2.0 **56.1%** near LemonHarness’s **57.4%** at **23.1%** fewer tokens. The Always-Full ablation — force Full deliberation whenever feasible — is the complication continuous factories need: GAIA success collapses **71.3% → 27.7%** under over-intervention, SWE drops with more tokens, and Terminal burns tens of millions of planner tokens for almost no gain. Selective counterfactual deliberation, not “keep thinking overnight,” is the load-bearing move.

## Why it matters for code review

Overnight harnessed momentum beats peak-session heroics only when the control plane refuses expensive interventions that do not buy a verified delta. Review continuous runs the way CHILL authorizes revisions: demand a factual-vs-candidate advantage, a route chosen *before* candidate generation, and a completion gate that still needs explicit task evidence — and treat Always-Full as the FOMO failure mode that burns the night without compounding mergeable work.
