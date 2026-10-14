---
title: "Zakas’s five roles: where you stand on the agent spectrum"
description: "Observer → tech lead → architect → engineering manager (software factory) → product manager — pick deliberately by trust, blast radius, and how far you are from the code."
kind: field-note
date: 2026-09-08
source:
  title: "Five software engineering roles for working with AI"
  url: https://humanwhocodes.com/blog/2026/09/five-roles-working-ai/
project: steward
---
Nicholas Zakas maps human–agent interaction onto familiar collaboration roles instead of a binary “hands-on vs vibe.” Observer is pair-programming the agent line-by-line (review fatigue is the tax). Tech lead writes specs, leans on formatting/lint/coverage automation, and reviews at the end across parallel workstreams. Architect watches contracts and system shape more than diffs. Engineering manager assembles a software factory — PRD → tech spec → implementation plan → agents with acceptance criteria — and only drops into the code when the process fails. Product manager owns UX and journeys and accepts being unable to root-cause when the ship breaks.

None is “correct.” The dial is trust in the AI, risk of the work, and how much technical context you still hold. Zakas’s useful pushback on the EM/architect end: refining the process and restarting can cost more cycles than a hands-on dive when the factory is wrong.

## Why it matters for code review

Gives eng leads a shared vocabulary for *where* scarce human review sits under agent load — not “AI made us faster, cut reviewers,” but an explicit choice of role per task. Review fatigue shows up earliest in Observer and Tech lead; the factory roles only work if the gates and automation that replace line-by-line reading are real.
