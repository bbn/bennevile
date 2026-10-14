---
title: "When review alone no longer scales: layered supervision"
description: "Aug 26 Stolze & Strässle (ESEM 2026): five-practitioner study — preventive + executable + human layers; review 3–4× generation; promote recurring findings into lint."
date: 2026-08-26
kind: paper
source:
  title: "When Review Alone No Longer Scales: Layered Supervision in AI-Assisted Software Engineering"
  url: https://arxiv.org/abs/2608.26316
project: steward
---

Markus Stolze and Mirco Strässle’s ESEM 2026 practice paper is a tight interview study (five practitioners, member-checked, situated in a 50-respondent alumni survey) of what happens when AI-assisted generation outruns the old review-centric control story. Their claim is not “add another bot reviewer.” It is that organizations redistribute supervision across **three guardrail layers** so no single stage carries the load: **preventive** (architectural intent externalized into specs, steering files, structured plans), **executable** (lint, tests, CI, fitness functions that break the build), and **human oversight** that shifts from line-by-line inspection toward supervisory interpretation — architecture, explainability, long-term maintainability.

The receipts are practitioner-concrete. Code writing becomes “very cheap” while “the bottleneck clearly moving to review”; one architect clocks manual review of a one-shot AI implementation at **three to four times** the generation time. Participants name **false correctness** — syntactically fine, locally coherent, architecturally opaque (“functionally correct, but nobody understands why”). Upstream specification becomes consequential rather than ceremonial: “two thirds of the time go into specification refinement.” Executable guardrails expand — “If a rule is relevant, it must be enforced through linting” — and human oversight becomes concurrent (“observe step-by-step… interrupt early”) rather than fire-and-forget. One failure mode is pure inventory: months of AI-generated change without proportionate review capacity ended with a feature discarded and rewritten once architectural problems became visible.

Caveats the authors own: n=5 interviews, convenience survey, single-coder analysis (mitigated by member-checking), one co-author also an interviewee. Read it as a field map, not a prevalence claim.

## Why it matters for code review

Continuous factories do not get a free pass on human attention — they **promote recurring review findings into scripts**, front-load specs that agents cannot push back on, and reserve humans for judgment that lint cannot encode. Always-on throughput compounds only when preventive and executable layers shrink the queue before morning review; FOMO for more overnight tokens is wasted if the only gate is still a human reading every line after integrate.
