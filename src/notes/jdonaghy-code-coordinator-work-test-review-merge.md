---
title: "code-coordinator: Work → Test → Review → Merge as one overnight drive"
description: "May 17 JDonaghy code-coordinator: Claude CLI fleet across worktrees/machines; Test gates Review; independent review; merge queue + overnight drive-queue — human approves dispatch, harness drains to merge."
date: 2026-05-17
kind: field-note
source:
  title: "code-coordinator — Multi-agent coordinator for Claude Code"
  url: https://github.com/JDonaghy/code-coordinator
project: steward
---

[JDonaghy’s code-coordinator](https://github.com/JDonaghy/code-coordinator) (PyPI; created May 17; still shipping through late Sep) is the always-on board for a Claude Code fleet: many isolated worktrees on one laptop, or several machines over Tailscale, behind a single gated pipeline. There is no Anthropic API key — it drives the `claude` CLI on a Max/Pro seat. A human still approves every dispatch; once approved, `coord drive <repo> <issue>` carries that issue unattended through **Work → Test → Review → Merge** as a durable, resumable state machine. Kill the terminal or crash the daemon and re-running picks up from the board, not from a blank session.

The gates are the product. **Test precedes Review** and holds it until a `passed`/`skipped` verdict exists — Pending Test never gets a review and never merges. A failed test routes like request-changes: fix on the *same* branch, capped retries, then escalate to a human rather than orphaning work. Review is a fresh, zero-context session (optionally on a different machine) against the repo’s own rules. Merge is a dependency-aware queue with auto-rebase for mechanical conflicts and escalation for semantic ones. Milestone mode amortizes expensive gates: a mock-first Gate-A contract before dispatch, independent Gate-B architecture review of the assembled milestone, Gate-C acceptance on the accumulated suite, then Gate-D ship. The [oracle loop](https://github.com/JDonaghy/code-coordinator/blob/main/docs/ORACLE_LOOP.md) goes further — an independent agent writes acceptance tests from the contract and delivers them **read-only** to the worker, so the sealed suite is an external trust gate the implementer did not author. Overnight volume sits on [`coord drive-queue`](https://github.com/JDonaghy/code-coordinator/blob/main/docs/DRIVE_QUEUE.md): queue issues, tick the board while you sleep. Receipts live as GitHub comments with structured markers plus a SQLite board; the tool’s own history claims ~1,800 self-driven commits and releases cut on most merges to `main`.

## Why it matters for code review

Continuous harnessed momentum is this shape of board: approve once, then let Test hold Review, Review hold Merge, and a drive-queue drain issues overnight without a peak-session babysitter. Burst Claude mastery still wins when the work is novel product judgment a sealed suite cannot encode; factories lose the night when “done” means the worker’s optimism or when review starts before tests exist. The FOMO that agents weren’t working on your behalf is the wrong scarcity if nothing was queued behind Work→Test→Review→Merge — the scarce surface is the morning merge queue and the oracle suite that refused to let the writer grade itself.
