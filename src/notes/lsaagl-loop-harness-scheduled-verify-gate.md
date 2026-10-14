---
title: "loop-harness: you don't prompt Claude — scheduled loops do"
description: "Jun 10 loop-harness: cadence-driven Claude loops in worktrees — primary stages output, second agent must print VERDICT: PASS before PR/comments/Slack ship."
date: 2026-06-10
kind: field-note
source:
  title: "loop-harness — autonomous loop harness for coding agents"
  url: https://github.com/lSAAGl/loop-harness
project: steward
---

lSAAGl’s `loop-harness` (repo Jun 10) flips the interactive habit: **you don’t prompt Claude; loops do.** A scheduler ticks; a due loop gets a fresh git worktree and a task-specific skill; a primary `claude -p` session stages commits or outbox action files; a **second Claude session** with read-only-ish tools inspects the staged work, runs cheap checks, and must print `VERDICT: PASS` before the orchestrator pushes a PR, posts comments, or hits Slack. Fail → log + retry next cycle. The primary agent never ships on its own.

Starter loops make the continuous-factory shape concrete: `triage-ci` every 10m (verified CI fix PR or diagnosis), `pr-reviewer` every ~3m, `issue-groomer` hourly, nightly `dependency-updater` and `doc-sync`. Safety is mechanical — worktree isolation, staged outputs, scoped `--allowedTools`, idempotent state files that dedup processed IDs, graceful degradation so one failing loop doesn’t kill the daemon. Dashboard shows cadence, success %, and failures across loops. The README’s warning is load-bearing: write loops can open PRs; start read-only, smoke-test `run-once`, never grant tools a loop doesn’t need.

## Why it matters for code review

Steady harnessed throughput compounds when review and merge gates fire on a cadence whether or not a human is at the keyboard — and when “ship” is a second-agent verdict, not the worker’s self-certification. Continuous factories look like this: queue → isolated work → independent verify → staged output. Idle capacity is FOMO only after those loops already refuse to land unverified work into your default branch.
