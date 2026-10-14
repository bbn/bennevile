---
title: "Frozen 4B model proposes; external entailment gate releases"
description: "Sep 24 İşcan: candidate generation ≠ release authority — 21/22 fabricated ready plans on unanswerable tasks all rejected; 0 false releases / 83 gated (U≤3.54%); ungated shell 9/18 false."
date: 2026-09-24
kind: paper
source:
  title: "Requirement-Bound Verified Commissioning: A Frozen Four-Billion-Parameter Local Model as a Candidate Generator under an External Acceptance Layer with Verification and Release Authority"
  url: https://arxiv.org/abs/2609.30219
project: steward
---

Mehmet İşcan’s Sep 24 paper is a preregistered measurement of the Simplex-shaped split agentic SDLC keeps reaching for: **candidate generation separated from release authority**. On a sealed 144-task sensor coordinate/polarity commissioning benchmark (96 answerable / 48 unanswerable, written by isolated agent contexts blind to the gate), a frozen local **4B** Qwen3 is only a residual candidate generator when a deterministic parser cannot bind the requirement. Plans release solely when an external entailment gate derives both facts under a sealed grammar — no model confidence score in the decision.

The receipts separate the two roles. On parser-routed unanswerable tasks the model committed fabricated ready plans on **21 of 22**; the acceptance layer rejected **all** of them. Among **83** gated releases at seed 0 there were **0** false releases (one-sided 95% Clopper–Pearson upper bound **0.0354**, below a sealed 5% headline — reported as diagnostic under i.i.d.). A model-free replay reproduced the same 83 releases with zero model calls. Comparators bite: separate ungated shell **9 of 18** false; in-run ungated terminal **6 of 13** false. Trust-boundary caveat owned: with a gold user the endpoint is clean, but wrong-answer sweeps still release when the requirement leaves a fact open (**169/431** pairings), and a post-seal campaign outside the benchmark recorded **1** false release in 146. Gate sensitivity and real users were not measured.

## Why it matters for code review

Continuous factories that let the same agent declare ready and merge are measuring self-verification — the arm İşcan shows fails open on unanswerable work. Review overnight inventory as two artifacts: the candidate, and an independent acceptance decision with a fail-closed third state when evidence is missing. FOMO for idle agents is the wrong fear if release authority still sits inside the generator; steady verified momentum needs an external gate that can reject a confident ready plan.
