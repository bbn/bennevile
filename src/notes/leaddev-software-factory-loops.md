---
title: "Build loops, not agents: the software factory that clears the plateau"
description: "LeadDev’s Sep 10 field guide: individual coding agents stall at 20–30% org gains; step-function lifts come from separated multi-agent loops—starting with PR→merge."
date: 2026-09-10
kind: field-note
source:
  title: "The engineer’s guide to building a software factory"
  url: https://leaddev.com/software-quality/the-engineers-guide-to-building-a-software-factory
project: steward
---

Chris Kelly’s receipt from talking to hundreds of eng leaders: coding agents were sold as 2–3× org productivity; what shows up is closer to 20–30%. The plateau is structural. Faster authorship still funnels through the same review queues, planning cycles, and deploy process. The unit that breaks it is not a better single agent — it is a *software factory*: instrumented, quality-gated production lines where throughput is outcomes and humans spend time on highest-leverage judgment.

Each line is an agentic *loop* with separated objectives (risk, author, fault-finder, human-router) — the same reason you don’t let engineers approve their own PRs. Three loops keep showing up first:

**PR → merge.** Risk analyzer routes; deep reviewer hunts objective bugs; fixer clears findings/CI/conflicts; verifier posts inspectable proof (logs, screenshots, replayable traces); intent reviewer surfaces decisions that need humans; memory manager writes per-repo corrections back in. Their wall: 1,400+ open PRs and ~20h median to first human comment → reported 66% faster time to merge.

**Ticket → PR.** Planner grounds a human-reviewable spec before code; author, test author, compliance, and intent reviewer hand off into the merge loop. Cited epic: ~1 week of senior work → 3.5 hours including an hour of human review.

**Alert → resolution.** Investigator → RCA → fix/rollback/escalation with humans on production-impacting calls. Across five on-call channels: agents handled 81.3% of incidents (from 0.4%), median first RCA 30.1 → 6.2 minutes.

Underneath: orchestration, isolated cloud runtimes, event triggers, shared memory, model routing, and governance/audit so leaders will widen autonomy.

## Why it matters for code review

Review is the first production line most teams need when agents raise PR volume — and it only compounds if risk routing, adversarial checking, verifiable proof, and intent judgment are *separate jobs*, not one agent grading its own homework. Treat the merge gate as a loop that leaves memory behind, or you will keep buying authorship speed that dies in the queue.
