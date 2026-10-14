---
title: "18 of 20 tickets in one night, two human gates, and every failure fixed in the harness"
description: "Jul 16 (updated Sep 10) Łukasz Graliński, Pirxey: a one-person software factory ran 50 tickets in a week for about $2.90 each, including a 01:12–05:47 night run that finished 18 of 20. Humans approved every plan and merged every PR. The four things that broke were fixed in deterministic code, not prompts."
date: 2026-07-16
kind: field-note
source:
  title: "AI software factory: where the humans go"
  url: https://www.pirxey.com/briefs/005-ai-software-factory
project: steward
---

Pirxey, a Polish software consultancy, had its AI R&D lead run a software factory for one week in July: one person, two repositories, a planner, a builder, a verifier and a reviewer on separate models, and a harness of plain code underneath. From July 20 to 27 it took **50 tickets and completed 48**; the factory itself rejected the other two. That was 390 agent invocations, about 18.6 hours of engine time and **$145 at API-equivalent rates, roughly $2.90 a ticket**.

The number worth stopping on is one night. Between **01:12 and 05:47 on July 22**, the line claimed 20 tickets, completed 18 and rejected 2, for $31. All 42 tests passed, including one ticket the factory correctly marked BLOCKED because the work was already done.

## Where the humans stood

The factory runs unattended but does not merge on its own. A person makes **two decisions per ticket**: approving a file-level plan before anything is built, and merging the PR with its evidence folder open. The brief calls the second step "closer to a security review than to code review." Every verdict between those gates is a strict JSON contract, and anything ambiguous halts the line for a human rather than being guessed through.

## What broke, and where it got fixed

All four failures in the real week were fixed in the harness:

- **Four tickets in parallel edited the same file.** Fix: one worktree per ticket with file-level reservations, and a merge queue that re-verifies every waiting ticket when main moves.
- **Review loops oscillated.** Fix: the reviewer gets memory of prior rounds, plus oscillation detection.
- **Runs hung at 3am.** Fix: hard timeouts and adoption of orphaned runs.
- **Budget timeouts killed the frontier planner mid-plan.** Fix: per-model limits, with planning raised from 5 to 12 minutes.

"The prompts were marginal," Graliński writes. "The queue, the budgets, the contracts and the artefact trail were the work."

## Why it matters for code review

It's a vendor's case study, one person for one week, and its interactive gauges are modeled, so lean on the counted week and night run rather than the sliders. Still, the shape is useful. Steady overnight throughput here came from reliability engineering you can't see in a demo, and human review didn't go away. It moved to the two places where it costs minutes per ticket: before the build and at merge. That's a different answer than [letting goals auto-merge for days behind CI and review bots](/posts/indeev-spare-562-prs-goals-overnight-auto-merge/), and it's worth setting next to [the gates that decide how dark a factory can go](/posts/augment-dark-factory-escape-rate-halt/) and [where review rounds stop converging](/posts/watson-labs-mandible-12000-agentic-reviews/).
