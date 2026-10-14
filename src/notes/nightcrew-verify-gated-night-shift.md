---
title: "nightcrew: BACKLOG in, typed failures out — verify before any land"
description: "Jul 2 nightcrew: overnight control plane around Codex — plan from markdown backlog, worktree isolation, deterministic verify, independent merge review, streak guards, morning report."
date: 2026-07-02
kind: field-note
source:
  title: "nightcrew — your coding agents on the night shift"
  url: https://github.com/1977744311/nightcrew
project: steward
---

nightcrew (npm; Jul 2) frames the overnight problem the same way Orbit and AgentRelay do — interactive CLIs fail unattended in known ways — then turns each failure into a **typed, recoverable event** instead of a morning surprise. You write a markdown BACKLOG and go to bed. The control plane (Codex via the official SDK today) authors a bounded plan, executes in an isolated `nightcrew/<plan-id>` worktree, runs your deterministic verify profile, and only then asks an **independent merge reviewer** on a fresh session to judge intent, scope, and honesty. Your checkout stays clean; protected-path edits revert before commit.

The failure table is the product: off-task wander → plan review on bounded seams; “done” without proof → verify profiles gate landing and downgrade to `repair`; self-approving slop → separate merge review; infinite retry → failure/no-commit/control-only streak guards; quota wall → `quota_exhausted` schedules a window-aware resume. Loop operations are explicit: plan → execute → verify → repair → periodic garden hygiene. `nightcrew run` for one supervised iteration, `loop` for a bounded unattended session, `crew start` for the daemon across projects and schedule windows; morning is `nightcrew report` — what landed, what failed, what it cost, which decisions wait. `.nightcrew/` is committed; runtime state is gitignored — the repo *is* the database.

## Why it matters for code review

Overnight harnessed throughput compounds when landing is verify-then-independent-review, not agent self-certification, and when spirals stop with typed reasons instead of silent token burn. Continuous factories need that morning ledger: promote what survived gates, reopen what repair couldn’t finish, and treat the BACKLOG-plus-report pair as the review surface — not a mystery worktree of claimed greens.
