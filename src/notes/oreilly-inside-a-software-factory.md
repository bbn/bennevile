---
title: "Inside a software factory: eight stages, don’t overbuild"
description: Paul Iusztin maps factory stages onto the SDLC, puts humans on brainstorm/plan/final check, and warns that first-version autonomy theater often fails.
kind: field-note
date: 2026-09-04
source:
  title: Inside a Software Factory
  url: https://www.oreilly.com/radar/inside-a-software-factory/
project: steward
---
A calm formalization amid “loop/graph engineering” buzzwords: a software factory is an org chart of loops with gates. Eight stages from triage and brainstorm through implement, review, release, and monitor—plus a shared context layer (LLM wikis, ADRs, glossaries).

Humans belong at brainstorm and plan; agents own implement/review loops if the plan is strong. Split engineer vs QA agents to avoid self-grading. Strong plans make cheaper models actually cheap; weak plans make “cheap” models burn tokens on retries.

The author overbuilt Squid v1 into an uncontrollable monolith, then rebuilt for granular commands plus optional end-to-end autonomy. Build vs buy tracks team scale: skills on a harness for small teams; platforms when unsupervised fleets need observability and billing.

## Why it matters for code review

Factory review isn’t “more bot comments”—it’s product/architecture checks against tickets and ADRs, code-quality guards against slop, and CI that auto-files fix tasks. Planning quality determines whether those gates are cheap or chaotic.
