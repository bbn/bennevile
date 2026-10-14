---
title: "Nightgauge: issue-to-PR overnight — six stages, twenty-one deterministic gates"
description: "Jul 22 Nightgauge (open-core): local issue→PR pipeline with isolated stage handoffs, build-as-hard-gate validation, batch overnight runs, cascade circuit breaker — nothing ships unmeasured."
date: 2026-07-22
kind: field-note
source:
  title: "Nightgauge — Work the day shift. Ship the night shift."
  url: https://github.com/nightgauge/nightgauge
project: steward
---

[Nightgauge](https://github.com/nightgauge/nightgauge) (Mark McCorkle / Edibu; open-core Apache-2.0, Jul 22) is the productized form of the continuous overnight factory: days for PRDs and stories; nights for an **issue-to-PR pipeline** that agents run locally on your machine. Tagline discipline: *nothing ships unmeasured.* Six stages — Issue Pickup → Feature Planning → Feature Dev → Feature Validate → PR Create → PR Merge — each in **isolated context** with JSON handoffs, not an accumulated conversation; the site claims ninety-four verified phases and **twenty-one deterministic gates** after LLM stages. Planning is documentation-first and approval-gated; validation treats **build pass as a hard gate**; PRs carry full stage traceability; merge can auto-fix lint/format within a bounded envelope and escalate with a stage-exit diagnostic when it cannot.

Guardrails sit beside the pipeline: cascade circuit breaker (clustered failures pause, no auto-resume), prompt-injection firewall, failure taxonomy that keeps infra blips out of health scores, hash-chained audit archival, baseline detection so auto-fix only owns regressions it introduced. Batch overnight runs queue multiple issues sequentially; cost-aware model routing picks within a performance envelope from your own success history. VS Code extension + Go orchestrator + portable skills across Claude / Copilot / Codex / Cursor / Gemini; cloud off by default. A public run cited on the product page (issue #338, 2026-08-29) finished six stages in ~83 minutes for ~$6.72. Still early stars; actively shipping (v0.4.5 landed 2026-09-21).

## Why it matters for code review

Always-on factories beat peak-session heroics when the night ends in gated PRs with phase evidence, not a hero transcript. Treat Nightgauge’s stage gates and morning queue of reviewed PRs as the review surface — promote what survived deterministic verify, reopen what the circuit breaker parked — so overnight capacity compounds merge rate under load instead of inventing a morning archaeology tax.
