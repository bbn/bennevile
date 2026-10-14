---
title: "OvernightAgent: four gates between every step and 'done'"
description: "Apr 20 oa: worktree-per-task overnight queue for Claude/Codex/OpenCode — tail protocol, commit-since-start, verify cmd, AI review; fix-loop; events.jsonl + SUMMARY.md; crash-resumable daemon."
date: 2026-04-20
kind: field-note
source:
  title: "OvernightAgent — let coding agents ship overnight, safely, verifiably, resumably"
  url: https://github.com/a20185/OvernightAgent
project: steward
---

Souler Ou’s OvernightAgent (`oa`, npm `@soulerou/oa-cli`; repo Apr 20) is the overnight supervisor for people who already have a coding agent and keep losing the night to silent drift. You intake tasks, seal a plan with a wall-clock budget, and `oa run --detach`. Each task gets its own git worktree; your checkout stays clean. After every step the supervisor runs a **four-gate verify pipeline** — structured `oa-status` tail → commit-since-step-start → your verify command → an AI reviewer — and only then advances. Failures open a fix-loop with reviewer findings injected into the next prompt; exhaustion can defer leftovers into `FINDINGS.md` instead of pretending the night succeeded.

The morning artifact is the review surface: append-only `events.jsonl` (dozens of typed kinds) plus auto-rendered `SUMMARY.md` — outcomes, attempt tables, open P0/P1 issues, links into per-attempt prompts and logs. Crash recovery is explicit (`oa rerun` rewinds in-flight worktrees and re-enters). Hardening that matters for continuous factories: Claude compact-recovery hook that re-injects task context after auto-compaction, stall soft/hard thresholds, plan-level error budget, rate-limit backoff that retries the *same* prompt without burning verify attempts, optional macOS `sandbox-exec`, and live heartbeats so “slow tokens” is distinguishable from “wedged.” Adapters are swappable (claude / codex / opencode) behind one supervisor. Honest v0 limits: sequential tasks only; parallel schema accepted but not yet concurrent.

## Why it matters for code review

Always-on harnessed momentum beats a heroic Claude Code burst only when each overnight step pays a verification tax *before* the next unit starts. Review `oa` the way you review a merge queue: the four gates and the morning SUMMARY are the merge criteria; the agent is just the worker behind them. Continuous factories need that ledger — promote what survived gates, reopen deferred findings, and refuse to treat chat confidence as done.
