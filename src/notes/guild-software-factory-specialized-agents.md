---
title: "Guild’s factory: specialized agents, separate reviewer, human merge"
description: "Guild’s Sep 3 Software Factory receipts — 34% of merged PRs, separate review agent before humans, maintenance agents that keep the loop alive, ~$12 model spend per merged PR."
date: 2026-09-03
kind: field-note
source:
  title: "Introducing Guild Software Factory"
  url: https://www.guild.ai/blog/product/introducing-guild-software-factory
project: steward
---
Guild’s own numbers, not a pitch deck: 34% of merged PRs written autonomously by their Software Factory, 56% of all code fixes, 91% of merged Factory PRs with no extra engineer commits, ~$12 model spend per merged PR, and in some workflows time-to-fix down ~97%. The interesting part is the shape, not the headline.

It is not one giant coding agent. A dispatcher routes GitHub/Jira events (including a `guild-auto` label), a planner scopes the change, an implementer writes and runs existing checks in a sandbox and opens a draft PR, and a *separate* reviewer agent clears draft status before a human spends time. Maintenance agents — conflict resolver, janitor, code health, test triage — keep the system running for weeks without babysitting. Humans still own the merge: agents do the work, people own the outcome.

## Why it matters for code review

Same factory lesson as Uber and Black Box, with a clean control point: independence between implementer and reviewer is designed in, and the scarce human gate stays at merge rather than line-by-line authorship. The receipt for eng leads spinning up software factories is that the review agent is part of the pipeline architecture — not a bolt-on bot that comments after the flood — and the maintenance agents are what make the loop durable.
