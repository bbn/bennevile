---
title: "Hellström: an overnight fleet merged 11 PRs, sat idle 94.5% of the night, and had no quality gates"
description: "May 6 from Felix Hellström: the first unsupervised night of his agent orchestrator ran 686 cycles in 7.5 hours, dispatched 103 tasks against 54 issues, auto-merged 11 PRs, flagged 9 for review, and killed and re-dispatched 8 stalled agents. Every failure lived in the harness, not the agents — and auto-merge on a green suite was luck, not a guardrail."
date: 2026-05-06
kind: field-note
source:
  title: "An overnight agent fleet merged 11 PRs while I slept"
  url: https://felixhellstrom.com/blog/eleven-prs-while-i-slept/
project: steward
---

Felix Hellström let his orchestrator run unattended for the first time on the night of March 1, 2026, and wrote up the numbers. Over **7.5 hours** the loop ran **686 orchestration cycles**, pulled **54 issues** from a backlog, dispatched **103 tasks**, and auto-merged **11 PRs**: dependency upgrades, bug fixes, feature work and new tests, each passing the suite before merge. **Nine** more were flagged for manual review. **Eight** agents stalled mid-task and were detected, killed and re-dispatched without him touching the keyboard.

The number he puts beside the 11 is **94.5% idle**. The fleet did real work in 5.5% of its runtime and spent the rest polling an empty queue.

The setup is three layers: a scheduler that prioritizes backlog issues by label and assigns them to agent slots; Claude Code instances, each in its own tmux pane with one issue and a fresh checkout; and a supervisor that treats a pane with no output as stalled. He trusted that last layer least, because it reads a side effect (terminal output) instead of a real status signal, and it was the first thing he rebuilt.

What broke, with nobody awake to paper over it:

- **No adaptive polling.** The loop kept checking a drained queue on a fixed interval. Back off when empty, ramp up when work arrives.
- **No wall-clock timeout.** One agent ran for more than six hours on a single task and burned most of the night. His fix: kill and re-dispatch anything past 30 minutes on one issue.
- **Duplicate dispatches.** 103 dispatches for 54 issues. Two cycles inside the same polling window could grab the same issue; issues have to be locked before dispatch, not after.
- **No quality gates.** PRs auto-merged on a green suite with no diff-size ceiling, no post-merge CI, and no human gate above a complexity threshold. "For a first run I got lucky. Luck is not a guardrail."
- **Destructive restarts.** Reconciling state on startup killed every running agent and lost in-flight work.

None of those failures is about the agents writing bad code. Every one lives in the infrastructure around them: scheduler, dispatch lock, health check, reconciliation. The morning after, the run's own failure log became the next backlog.

## Why it matters for code review

This is the honest ledger of an always-on factory's first night: real merges while the operator sleeps, plus a harness that wasted most of its clock, double-booked work, and merged on green tests alone. The compounding comes from fixing the loop, and the merge gate is the piece that can't stay on luck. Compare [Saagar Patel's night fleet and its verification bill](/posts/saagarpatel-night-fleet-654-prs-verification-bill/), [Relux on goal mode burning tokens while idle](/posts/relux-codex-goal-mode-idle-token-burn/), and [Winslow's point that coordinator-done is not merge](/posts/winslow-overnight-agent-merge-gates-coordinator-done-is-not-merge/).
