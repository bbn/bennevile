---
title: "Night shift: OS schedule → isolated worktree → morning accept/discard"
description: "Aug 23 Quiroga TaskKeeper: scheduled Claude/Codex runs in a fresh git worktree; VS Code closed; local review inbox with cost + diff; accept merges locally, discard deletes the worktree — never auto-push."
date: 2026-08-23
kind: field-note
source:
  title: "I gave my AI coding agents a night shift"
  url: https://dev.to/nestor_quiroga_d0a1aef9d7/i-gave-my-ai-coding-agents-a-night-shift-f60
project: steward
---

Nestor Quiroga’s Aug 23 write-up separates two wants teams blur: *scheduling a prompt* versus *waking to reviewable overnight work*. Schedulers that launch Claude Code or Codex against your working directory are fine at 2pm when you’re watching; at 3am they can trash the branch you’ll open tomorrow. [TaskKeeper](https://marketplace.visualstudio.com/items?itemName=argalla.taskkeeper) (VS Code / Open VSX; local-first, no telemetry) runs each scheduled job in a **fresh git worktree** pinned to the exact base commit. Your checkout is untouched. When the run finishes, results land in a **morning inbox**: transcript summary, diff, files changed, cost, and two buttons — **accept** (local merge, never a push) or **discard** (worktree and branch gone).

The runner is the OS’s own scheduler (Windows Task Scheduler / macOS launchd), not a tray daemon: VS Code can be closed; a short-lived worker takes a machine-wide slot, records state in local SQLite, and the extension only reads that DB. Safety choices that matter for always-on capacity: per-run permission profiles (**audit** read-only vs **isolated changes**) that your personal Claude config cannot widen; a **Last night** digest plus a health check that turns a task red if its OS trigger silently unregistered; and a monthly spend cap the runner enforces before the next job burns tokens. Templates cover dependency bumps, changelog drafts, and flaky-test repairs — the boring overnight suite continuous factories actually want.

## Why it matters for code review

Always-on momentum compounds past peak-session heroics only when overnight mistakes stay on a copy and the human owns the merge button in the morning. Quiroga’s FOMO fix is an inbox of isolated, costed diffs — review the accept/discard trail, not a 3am edit to `main`.
