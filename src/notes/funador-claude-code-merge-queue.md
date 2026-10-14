---
title: "Parallel Claude lanes need a local merge queue — and a human promote"
description: "Jul 30 funador: FIFO land + checkCommand for multi-worktree Claude Code; promote is human-only; slow gates cap landings/hour; checkCommand≠human review (on purpose)."
date: 2026-07-30
kind: field-note
source:
  title: "Claude Code Merge Queue — local merge queue for parallel Claude Code agents"
  url: https://github.com/funador/claude-code-merge-queue
project: steward
---

funador’s `claude-code-merge-queue` (Show HN Jul 30; MIT npm package) is the last-mile harness for the problem continuous factories hit the moment they go multi-agent: several Claude Code worktree lanes finish, build, and test at once, then race the same integration branch. The tool serializes **land** through a local FIFO so push races, redundant heavy builds, and shared-resource flakiness stop owning the night.

Shape of the loop: numbered `lane/` worktrees (hooked into Claude’s native `WorktreeCreate`), `build-lock` for machine-wide serialized builds, `land` (rebase + push via the queue with `checkCommand` as the only landing gate), `sync` to fast-forward the main checkout, and **`promote` — human-only**, never in agent instructions. A pre-push hook makes `land` non-optional: direct push to integration is rejected; missing `checkCommand` fails closed by default. `init` writes config, CLAUDE.md (“land when green without being asked”), the WorktreeCreate hook, and scripts.

The productive complication is printed under “Know the limits,” and it is the review lesson: **no human reviews any of this before it lands.** `checkCommand` passing is the only gate — a real suite and `echo ok` look identical. Want a human on every change? That step is missing on purpose. Other ceilings map to factory ops: crash-safe locks by PID liveness (not timeouts); one machine, not a fleet; a slow `checkCommand` is a hard throughput ceiling (3–4 minute suites cap you well under ~20 landings/hour); rebase conflicts abort cleanly for the agent to resolve and re-`land`.

## Why it matters for code review

Merge rate under sustained parallel agent load is a harness property, not a model property. Continuous overnight momentum without a serialized land path just dumps racey green branches into morning triage. Keep `promote` (or equivalent) human-owned, treat `checkCommand` as necessary but not sufficient for judgment, and budget review/verification time as the real landings-per-hour constraint — not how many Claude tabs you can open.
