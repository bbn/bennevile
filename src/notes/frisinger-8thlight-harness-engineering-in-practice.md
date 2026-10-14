---
title: "Harness engineering: the repo enforces what prompts only suggest"
description: "Sep 4 Frisinger at 8th Light: verification is the bottleneck; fail-closed gates, evidence ledgers, and provenance turn overnight agent output into accountable inventory — not plausible debt."
date: 2026-09-04
kind: field-note
source:
  title: "From AI Code to Trusted Software: Harness Engineering in Practice"
  url: https://8thlight.com/insights/harness-engineering-in-practice
project: steward
---

Travis Frisinger’s Sep 4 8th Light piece is the consulting-floor companion to [his Aug 27 factory memoir](/posts/frisinger-what-matters-after-software-factory-works/). Agents absorb a wiki, agree, and break the rule on the next session; humans absorb standards through review comments that stick. The only place agent lessons accumulate is the **repository itself**. Harness engineering is the discipline of making those standards executable: permissions and boundaries, gates that fail closed, evidence attached to every change, observability across runs rather than moments. Models supply capacity; the harness supplies observable accountability.

The stall he names is the continuous-factory failure mode: pilots demo brilliantly, then drown in **plausible-but-unverified inventory** — including the personal overnight loops engineers already run and the Ramp/Stripe/DoorDash-class internal factories. Maturity moves assisted → harnessed → risk-tiered → autonomous, but the human checkpoint never vanishes; it moves earlier (diff → evidence → intent on risky cases → boundaries). Concrete patterns: required checks that block merge even for a senior having a good day or an agent at 3 a.m.; a merge step that treats a broken “did checks pass?” probe as failure; spend-limit stops that refuse quiet degradation; provenance manifests on PRs so RCA months later can answer what produced the change; independent verification so the same reasoning path does not both write the patch and define proof. Review shifts from reading every line to auditing verdicts and sampling where evidence is thin.

## Why it matters for code review

Steady harnessed overnight throughput beats peak-session heroics only when the morning queue is **evidence**, not confidence. FOMO that agents sat idle is the wrong fear next to eight hours of unverified green. Treat fail-closed gates and provenance ledgers as the merge surface; leave the model’s claim of done outside the trust boundary.
