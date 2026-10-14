---
title: "The Trust Ladder: review autonomy is earned, measured, and demotable"
description: "July field note: Elstner’s four-rung promotion architecture for AI code review — shadow → advisory → soft-gate → hard-gate — on trailing precision, availability, latency, and false-block rate, with silence treated as failure."
date: 2026-07-23
kind: field-note
source:
  title: "The Trust Ladder: Supervised Autonomy for AI Code Review"
  url: https://isimplifyme.com/whitepapers/the-trust-ladder
project: steward
---

Joseph Elstner’s whitepaper answers the Step-3 bottleneck Cherny names for supervised autonomy (~100 agents per engineer): the ceiling is not tokens, it is *trust in the review loop*. Granting a probabilistic reviewer merge authority on faith relocates the gap rather than closing it. The Trust Ladder makes autonomy a state a gate earns on published numbers, holds on published numbers, and loses automatically.

Four rungs, per risk class, never on a calendar: **L0 Shadow** (log verdicts, post nothing, block nothing), **L1 Advisory** (one comment per PR), **L2 Soft-gate** (required check with logged override, neutral-on-failure), **L3 Hard-gate** (no bypass — deliberately unscheduled). Promotion bars cite trailing-window precision, availability, p95 latency, and false-block rate; demotion on a missed bar is automatic. Trust is the *minimum* of those signals — a precise-but-absent gate still fails the way their retired 33%-precision reviewer failed across seven silent weeks.

The harness under the ladder is route → find → verify: deterministic risk-class routing, coverage-first find, then an adversarial verify stage that tries to *refute* each finding. Verdicts bind to the exact commit; infrastructure failure resolves to neutral plus alarm; findings are never auto-applied. An availability watch ships *before* the reviewer so silence is a first-class failure. Escape rate (production incidents traced to merges the gate passed) is tracked as a lagging recall proxy with no early promotion threshold.

## Why it matters for code review

Factories that flip “AI review required” without measuring precision and availability are manufacturing false confidence. Publish the bars before the numbers can flatter you, fail neutral and loudly, and keep humans on the decisions that never climb — deploys, money, secrets, destructive ops — until a gate has earned the rung in writing.
