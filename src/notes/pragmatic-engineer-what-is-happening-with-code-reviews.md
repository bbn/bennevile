---
title: Under agent PR volume, teams are redesigning review — not abandoning it
description: Gergely Orosz surveys how labs and startups actually handle the review flood — from reviewing the AI review, to blast-radius triage, to reviewing plans and schemas instead of diffs.
date: 2026-09-08
kind: field-note
source:
  title: "What is happening with code reviews? — The Pragmatic Engineer"
  url: https://newsletter.pragmaticengineer.com/p/what-is-happening-with-code-reviews
project: steward
---
GitHub’s own chart is the setup: PRs up roughly fivefold over three years, with another near-doubling since late 2025. Orosz’s survey of CTOs and eng leads is useful because it refuses a single slogan. Most shops are not dropping human review; they are relocating scarce attention.

The patterns that keep showing up: humans review the AI review (sometimes after multi-vendor or multi-agent passes, with noise still the failure mode — Uber’s uReview grades and filters comments before a person sees them); triage by blast radius so low-risk paths can clear on automated gates while auth, schema, and public API stay human; review the plan, tests, or database schema harder and the implementation less; and force smaller PRs so review stays tractable. Duckbill’s risk-label experiment is the receipt for the triage move — roughly double merge throughput once most PRs skipped a human pass behind stronger tests and lint.

## Why it matters for code review

The durable question is not “AI review or human review.” It is which gates earn a person, which earn a heterogeneous agent stack, and how you keep silence and risk labels honest when generation got cheap and understanding did not.
