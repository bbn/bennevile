---
title: "Comprehension debt is the review failure that still merges green"
description: "Sep 10 TNS field note: functionally correct agent PRs that cross domain boundaries slip past human review — Executable Architecture (pytest-archon / ArchUnit) makes boundary violations fail CI instead."
date: 2026-09-10
kind: field-note
source:
  title: "Stop AI code sprawl before it destroys your software design"
  url: https://thenewstack.io/stop-ai-code-sprawl/
project: steward
---

Emmanuel Akita’s receipt for a failure mode reviewers keep missing: the most dangerous agent PR is the one that works. A junior’s broken change fails the build. Five hundred lines of correct billing that quietly imports shipping, or a domain model that reaches for boto3, merges because nothing exploded and nobody has time to read the import graph across a thousand-line agent diff.

He names the gap **Comprehension Debt** — not messy logic, but a lost mental model: how fast code is written outruns how well the team still understands why the system is shaped the way it is. Documentation-as-prompt-context is a fallacy here. Agents take the shortest path to the objective; soft Wiki rules do not survive volume. You cannot depend on humans to catch architectural drift at agent PR rates. Fitness functions have to fail the build.

The operational move is Executable Architecture: ArchUnit-style rules as tests. In Python, `pytest-archon` encodes “billing never imports shipping” and “domain models stay free of SQLAlchemy/boto3”; CI fails with a concrete import violation instead of hoping a reviewer notices. Feed the failure back into the agent’s loop and the fix can be mechanical. Pair hard module boundaries (import-linter / arch rules) with complexity caps so the agent is forced to decompose, and when you do still review, look at interfaces — new deps, endpoints, schema — not every loop.

## Why it matters for code review

Line-by-line review was never the right instrument for domain-boundary enforcement, and agent volume made that obvious. Put architecture in CI as hard constraints; reserve human attention for intent and blast radius. Otherwise green merges quietly erase the map the next on-call needs.
