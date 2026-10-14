---
title: "Code review is evidence — it does not own the outer SDLC loop"
description: "Aug 13 Qodo field note: independent review re-enters judgment under agent volume, but lifecycle authority still decides whether the task may advance after commits, CI, repairs, and stale approvals."
date: 2026-08-13
kind: field-note
source:
  title: "Moving from AI Code Review to the Outer SDLC Loop"
  url: https://www.qodo.ai/blog/moving-from-ai-code-review-to-the-outer-sdlc-loop/
project: steward
---

Nnenna Ndukwe’s architecture note starts where most “AI code review” posts stop. Independent review is where context, judgment, and responsibility re-enter a workflow that produces changes faster than humans can read. A review result is still only evidence. It does not own the durable state of the longer delivery process: tests pass then CI fails; CI passes then review blocks; the agent repairs and the earlier evidence goes stale; someone approves a PR while another commit lands; merge happens and the expected release artifact never ships.

The outer loop she names is intent → context → plan → change → verification → review → remediation → approval → release evidence → learning. A workflow graph can expose the route. Production still needs contracts for state, authority, evidence freshness, retries, side effects, observability, cost, and human intervention. Her split across open work is the load-bearing design: Governed Agent Autonomy Patterns bounds one attempt (plan, permission, tool trust, verification, runtime accountability); ThreadLoop decides whether the longer-lived task may advance on current repository evidence; an external runtime only schedules. Nondeterministic reasoning stays useful; transitions, approvals, receipts, and budgets stay deterministic. Observability that can authorize a transition is a control-plane bug.

## Why it matters for code review

Treat the review bot / steward / human comment as an evidence producer with independence from the implementer — then give a separate lifecycle authority the job of asking whether that evidence still applies to *this* commit, under *this* policy, before the task advances. Otherwise “approved” is a snapshot that agent repair loops quietly invalidate.
