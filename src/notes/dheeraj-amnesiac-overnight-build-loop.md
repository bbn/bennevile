---
title: "Amnesiac overnight agents: progress lives on disk, not in chat"
description: "Jun 16 Meela Dheeraj: hourly fresh sessions 11pm–7am, BUILD_SPEC + PROGRESS.md + git as memory — commit = checkpoint; irreversible ops deferred to ‘needs human’."
date: 2026-06-16
kind: field-note
source:
  title: "Building software with an amnesiac agent: notes on a resumable overnight build loop"
  url: https://dev.to/dheeraj16/building-software-with-an-amnesiac-agent-notes-on-a-resumable-overnight-build-loop-32kg
project: steward
---

Meela Dheeraj’s Jun 16 field note isolates the hard constraint of unattended agents: each session starts with **zero memory of the last**. The design problem is state, not prompting.

Setup is deliberately crude and transferable. A cron fires hourly from 11pm–7am (~eight runs). Every run is a fresh agent with no shared context. State lives on disk: the working tree, git history, immutable `BUILD_SPEC.md` (goal/architecture), and append-only `PROGRESS.md` (decisions + status). Each session reads those files and `git log`, reconstructs “where are we” from the code as source of truth (not the narrative alone), does one unit of work, commits, then appends what changed, **why** (chosen X over Y because Z), and the exact next step.

Commit granularity equals checkpoint granularity — worst case on interrupt is one lost unit. The “why” lines matter as much as the diffs; without them a later session re-litigates settled decisions. Guardrails make sleep safe: build, test, and commit locally are allowed; deploy, remote push, and secrets are forbidden and written into `PROGRESS.md` as “needs human” instead.

Receipt: a working full-stack monorepo (TS scheduling engine with property tests, multi-tenant auth, Drizzle/Postgres, re-validation, publish/share/export). Across runs the loop cleared a stale git lock and one session fixed an off-by-one spanning five files. The takeaway is explicit: leverage was not model fluency — it was a process where progress survives total context loss.

## Why it matters for code review

Overnight harnessed momentum compounds when memory and stop conditions sit outside the chat. Fresh-context hourly runs plus durable decision logs are how always-on factories keep moving without one long degrading session — and how reviewers inherit a trail of assumptions instead of a compressed blob of unobserved choices.
