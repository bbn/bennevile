---
title: "Cursor: one week, ~1k commits/hour — harness over heroics"
description: "Feb 5 research: Wilson Lin’s multi-agent harness ran continuously a week (~1k commits/hr, 10M tool calls); planner/subplanner/worker handoffs; 100% per-commit correctness killed throughput."
date: 2026-02-05
kind: field-note
source:
  title: "Towards self-driving codebases"
  url: https://cursor.com/blog/self-driving-codebases
project: steward
---

Wilson Lin’s Feb 5 Cursor research post is the continuous-factory receipt at industrial scale — and a productive complication of “perfect every commit.” Internal research built a harness to orchestrate many thousands of agents on a from-scratch web browser. By the prior month the system ran **continuously for one week**, making the vast majority of commits without human intervention. The browser was not meant for external use; imperfections were expected. The milestone was runnable work from agents that kept going.

The harness was hill-climbed, not declared. A single Opus “keep going” session lost the plot and proclaimed victory early. A shared lock-file for peer self-coordination produced contention, illegal lock ops, and throughput collapsing toward 1–3 agents. Planner → executor → workers → independent judge fixed ownership but bottlenecked on the slowest worker and couldn’t readjust mid-plan. A “continuous executor” that also planned became overloaded — sleeping, refusing to fan out, claiming premature completion. The final design: a **root planner** that owns scope and never codes; recursive **subplanners** that own narrow slices; **workers** on isolated repo copies that return a single handoff (notes, concerns, deviations, findings) so the planner stays in continuous motion without global synchronization. An integrator gate was tried and removed — hundreds of workers into one red-tape merge became the bottleneck.

Throughput peaked at **~1,000 commits per hour** across **~10M tool calls** over the week. The complication that matters for continuous verified factories: requiring **100% correctness before every commit** caused serialization collapse — workers left scope to fix typos, pile-ons on the same break, effective throughput died. Allowing a small *stable* error rate, with a periodic green snapshot / fixup pass, kept the factory moving. Sync turbulence was accepted the same way. Infra lesson: on one large VM, disk and compile hotspots under hundreds of agents dominate; project architecture becomes agent throughput; vague specs get amplified, not rescued, at this scale.

## Why it matters for code review

Steady harnessed throughput compounds past peak-session Claude mastery — and also past “perfect every commit” heroics that stop the line. Review and ownership relocate to planner intent, handoff quality, and periodic green reconciliation, not line-by-line of a thousand commits an hour. Pair with verify-first in-loop gates so accepted slack does not become silent merge tax.
