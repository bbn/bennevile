---
title: "It is not my code anymore"
description: "Sep 7 Camargo research note: authorship ≠ responsibility after AI-generated defects; acceptance evidence should start from the demand, not the diff."
date: 2026-09-07
kind: paper
source:
  title: "It Is Not My Code Anymore"
  url: https://arxiv.org/abs/2609.09022
project: steward
---

Hypothetical: a model slips `1/0` into a feature, a developer skims the diff, enrollment breaks. Who wrote the expression? The model produced it. Who is responsible? That is a different question — review duty, release authority, harness design, and who restores the service can each have a different answer. Camargo’s research note (no new empirics) separates authorship, felt ownership, and post-failure responsibility, and refuses to let “we co-created it” paper over those gaps.

Useful distinctions for agentic factories: reviewing a diff can fulfill a duty without making you the producer; collective ownership does not specify who can stop a release or who investigates; Elish’s moral crumple zone warns against blaming the nearest human with least control. Quality engineering should define acceptance evidence from the *demand* (outside-in — can the student enroll?) rather than from the producing process (inside-out — did the generated tests pass?). A proving ground for journeys beats a green unit suite that never checked the academic record. Where a trained system can meet the same acceptance criteria without minting a new program, the authorship puzzle dissolves — responsibility for the service does not.

## Why it matters for code review

Agent PR volume makes “my code” a bad merge vocabulary. Staff the roles the note names — stop authority, acceptance oracle, incident owner — and score releases on demand evidence, or rubber-stamp review becomes the crumple zone for every model slip the harness didn’t catch.
