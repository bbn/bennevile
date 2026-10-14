---
title: "Harness as handoff: next session reads the repo, not the chat"
description: "Sep 14 Bonomo build log: CLAUDE.md operating loop, sprint contracts, implementer≠evaluator, session-handoff.md — Session B finishes after /clear with zero naming drift from Session A."
date: 2026-09-14
kind: field-note
source:
  title: "Building a Harness From Zero"
  url: https://dev.to/cristianbonomo/building-a-harness-from-zero-17if
project: steward
---

Cristian Bonomo’s Sep 14 DEV write-up is a full cycle on a toy ledger-cli — deliberately small so the harness, not the app, is visible. His definition: a harness is the files/conventions/rules that let an agent operate in a repo *without* someone feeding chat context. Done-criteria that live only in a disappearing thread make every next session (or teammate) invent different decisions. Put those decisions in the repository as the single source of truth.

Receipts from the build. `CLAUDE.md` stays ≤100 lines: operating loop, rules, required files, completion gate, before-you-stop — architecture moved to `ARCHITECTURE.md`. `feature_list.json` carries priority, status (`not_started`…`passing`), verification steps, and evidence. First feature run “worked” but invented an anonymous return type; conventions weren’t written down, so the agent couldn’t guess them. Fixes that compound: separate implementer from evaluator (self-eval bias), sprint contracts with explicit *Exclusions*, `CONVENTIONS.md`, an evaluator rubric scored 0–2 on six dimensions (Accept only if all 2s or documented exception), and a clean-state checklist (build, tests, progress matches commits, no leftover junk) that the evaluator must confirm *after* commit.

The load-bearing demo is Session A → Session B on validation errors. Session A builds the error hierarchy and proves it on one flow, writes `session-handoff.md`, leaves the feature `in_progress`. Session B starts with `/clear` — no shared chat — and only the handoff file. Bonomo checked the code: zero redefinitions, zero naming drift. The third feature then ran contract → implementer → evaluator → checklist without manual mid-course correction. Difference wasn’t a smarter model; design decisions were already in the repo before generation started.

## Why it matters for code review

Continuous factories need pick-up-able work across sessions and agents, not one heroic context window. Independent evaluator + rubric + clean-state checklist is the review layer that survives overnight and always-on runs. If your loop trusts the implementer’s “passing” note, or lets the next session reinvent types because the handoff lived in chat, you will feel the FOMO of idle agents *and* pay the morning tax of unverifiable diffs.
