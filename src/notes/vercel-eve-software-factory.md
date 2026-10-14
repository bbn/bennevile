---
title: "Foreman: four stations, cross-vendor review, draft PR"
description: "Aug 25 Vercel guide: eve software factory moves labeled work through triage → plan → implement → independent review on a different model vendor, with bounded request_changes loops and evidence against acceptance criteria."
date: 2026-08-25
kind: field-note
source:
  title: "Build a software factory with eve"
  url: https://vercel.com/kb/guide/eve-software-factory
project: steward
---

Vercel’s Foreman guide is a concrete factory shape built on eve: label a GitHub issue `factory`, @mention the bot, or delegate from Linear, and the orchestrator runs four stations — classifier, analyst, implementer, reviewer — ending in a *reviewed draft* pull request. Humans keep ready/merge. Along the way it triages inbound work, attempts to fix red CI on its own branches (capped), and posts progress where the work arrived.

The review station is the receipt worth stealing. The reviewer never sees the implementer’s reasoning — only the pushed branch — and runs on a **different model vendor** on purpose, so correlated blind spots do not ride along for free. Acceptance criteria written by the analyst are the contract the reviewer scores against, criterion by criterion, with evidence. Revisions are bounded: a `request_changes` verdict loops findings back to the implementer at most twice; if it still fails, the line halts and reports unresolved findings rather than opening a PR. When the reviewer approves, the orchestrator opens a draft PR whose body includes that pass/fail against each criterion, and durable repo facts can merge into a factory “brain” for later runs.

## Why it matters for code review

This is the software-factory control loop written as product wiring: generation capacity is not merge authority; independent review is a station with its own model family, a written contract, and a hard stop. If your agent pipeline still lets the author model grade its own diff — or opens PRs after an unbounded “keep fixing until green” loop — Foreman’s shape is the counter-example: separate implementer from reviewer, pin acceptance criteria, bound repair, and make the draft PR carry the review evidence humans actually need to decide.
