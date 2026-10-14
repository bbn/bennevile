---
title: "24 agents, 105 merged PRs, and a dispatcher that idles when the review queue is full"
description: "Jun 26 Yuvrajsinh (Trevion build log): an always-on daemon dispatches headless agents into worktrees around the clock, about four commits a day including nights. Two things made it work: a per-area regression gate that auto-reverts before a PR opens, and a MAX_OPEN_REVIEW ceiling added after 50 open PRs piled up and started to rot."
date: 2026-06-26
kind: field-note
source:
  title: "How I got 24 AI agents to develop my codebase while I sleep"
  url: https://legendev.org/notes/build-org/
project: steward
---

A solo builder with a 144K-line platform (53 tables, 410 endpoints, seven services) stopped trying to out-type the backlog and built a daemon instead. The Build Engine reads a task queue, picks the next item and sends a headless Claude agent into an isolated git worktree to plan, code, run its area's tests and open a PR. There are 24 roles now: six build squads plus an architect, a security sentinel, a chaos prober, a regression gate and staleness trackers.

The number he leads with is modest on purpose: **105 PRs merged, 84 tasks shipped, about four commits a day**, sustained through nights and days he never opens the laptop. That's the case for steady harnessed output in one line. Nobody would call four commits a day a heroic session, but it doesn't stop.

## What made it safe to leave running

- **The gate came before the agents.** Every PR runs its area's regression gate before it is allowed to open, and a failure is reverted automatically. Before the gate, he writes, the loop "produced code that looked plausible and broke something two services away."
- **Cheap and slow, by design.** The engine routes through the local CLI on a subscription, so tokens cost nothing extra, but the CLI throttles hard. A concurrency limit of two, and calls that go from five seconds to two minutes under load, mean the system has to be built for the slow case.

## Why it matters for code review

In late June he found **50 open PRs** waiting for him. They were drifting from main, picking up conflicts and losing their value. The fix was three PRs written by the engine itself: a `MAX_OPEN_REVIEW` ceiling that stops dispatch when the queue is full, a merge-train driver that drains reviewable PRs in order, and a rebase-or-close pass that cleared seven stale ones. A daily run ceiling and a kill switch came with them.

The idle reason in his code says it plainly: the review queue is full and the human is the bottleneck. A human still reviews every PR, and he calls that the design, not a stopgap. Agents earn auto-merge one area at a time as their gates get stronger. For an always-on setup, the ceiling is what keeps the work flowing steadily rather than piling up for a human to clear in one go. Pair with [sizing the queue in review minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/) and [a 24/7 agent queue run continuously](/posts/jackzhaojin-continuous-agent-24x7-queue/).
