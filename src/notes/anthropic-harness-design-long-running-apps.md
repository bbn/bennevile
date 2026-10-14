---
title: "Generator vs evaluator: separate the judge from the builder"
description: Anthropic Labs’ GAN-inspired planner/generator/evaluator harness—sprint contracts, Playwright QA, and shedding scaffolding as models improve.
kind: field-note
date: 2026-03-24
source:
  title: Harness design for long-running application development
  url: https://www.anthropic.com/engineering/harness-design-long-running-apps
project: steward
---
Self-evaluation is structurally soft—agents praise their own mediocre work. Separating generator from evaluator (tuned to be skeptical) is the lever; frontend criteria (design, originality, craft, functionality) made subjective quality gradable.

Full-stack version: planner expands a one-liner into an ambitious spec; generator works in sprints; evaluator negotiates a sprint contract then drives Playwright against live apps. Solo vs full harness on a retro game maker: minutes/$9 vs hours/$200—and a playable game vs broken wiring.

Later, Opus 4.6 let them remove sprint decomposition; evaluator value became conditional on whether the task sits beyond solo reliability. Lesson: every harness piece encodes an assumption about model weakness—retest when models jump.

## Why it matters for code review

Independent QA agents with pre-agreed acceptance criteria are the research-grade version of “don’t let the author model grade its homework.” Contract-before-code is review shifted left.
