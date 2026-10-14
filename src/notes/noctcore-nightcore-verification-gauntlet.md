---
title: "Nightcore: autonomy at full speed — merge only after the gauntlet"
description: "Jun 21 Nightcore: local Claude Kanban studio — worktree builds, anti-gaming + Structure-Lock gates, independent reviewer PASS/CHANGES/FAIL, flight-recorder ledger; you approve merge."
date: 2026-06-21
kind: field-note
source:
  title: "Nightcore — Full-loop autonomy inside an enforced harness"
  url: https://github.com/noctcore/nightcore
project: steward
---

[Nightcore](https://github.com/noctcore/nightcore) (local-first Rust/Tauri studio; repo Jun 21; alpha through Sep with Structure-Lock and async lint-meta still landing) runs Claude as a small autonomous team on a Kanban board — each Build/TDD card in its own git worktree — and then refuses to treat green as enough. **Nothing merges on trust.** Completion enters `Verifying`: project build and lint/typecheck, then an **independent reviewer agent** that returns `PASS` / `CHANGES_REQUESTED` / `FAIL` and drives the task state machine. Merging is downstream of that verdict and of your approval.

The harness is product code, not prompt advice. A **Structure-Lock** re-runs the project’s own architecture/lint/coverage rules before review and again at merge. Guardrails catch the overnight failure modes: diff and contract budgets park oversized scope; a strictness ratchet fails any regression in `any` / `@ts-ignore` / `eslint-disable` counts; an anti-gaming sweep flags skipped tests, gutted assertions, and gate-config tampering; secret scan and injection quarantine fence untrusted issue/PR text. Policy tiers (deny/ask/allow) run in `PreToolUse` even under permissions bypass; optional macOS Seatbelt confines writes beneath the agent. Every allow/deny lands in an append-only `.nightcore/ledger/<taskId>.ndjson` flight recorder — audit what ran, not what the session claimed. Auto Mode assigns work with concurrency caps and a circuit-breaker; you still ship commit/merge/PR from the board.

## Why it matters for code review

Continuous overnight factories compound past peak-session Claude mastery only when verification is an enforced state transition the builder cannot talk past. Bursts still win on a single deep change where gauntlet tax exceeds the work; always-on loops lose the night when “done” means the agent optimized for green. FOMO that agents aren’t working overnight is cheaper than waking to parallel worktrees whose only gate was a hopeful diff viewer.
