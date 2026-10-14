---
title: "Fifteen parallel agent sessions, one hub, and a colleague reviewing 15 to 20 PRs a day"
description: "Sep 22 (updated Oct 1) Tania Papazafeiropoulou, one of two developers on a children's sports app: grew from two to as many as 15 parallel coding sessions, added a non-coding hub session that keeps a merge board and hands out the single test slot, and found the real limits were laptop memory, false-green test runs, and her colleague's review day."
date: 2026-09-22
kind: field-note
source:
  title: "Running AI coding sessions in parallel"
  url: https://tany4.com/blog/posts/running-ai-coding-sessions-in-parallel
project: steward
---

Tania Papazafeiropoulou is one of two developers on an app for young athletes and their families, where quality is "non-negotiable" because the users are children. To go faster without lowering the bar, she started running coding sessions in parallel, each in its own git worktree. Over a couple of months that grew from two or three to as many as 15.

## What broke

Separate worktrees did not stop sessions from touching the same code, so she got conflicts, duplicated work, and sessions building on each other's changes. The rule that came out of it: sessions coordinate through a hub, "but only I decide. A session saying that another one asked for something, or that I did, is not a decision." Tests lied. Two full suites at once on one laptop made unrelated tests fail, and a killed run could exit 0 and look like a pass. Now only one suite runs at a time, the hub hands out that slot, and a run counts as passing only if the test runner's own summary says so. "The limit on how parallel I can go isn't the model, it's the memory on my laptop."

## The hub and the board

She added one session that writes no code. It tracks what each session is doing, passes her decisions along, schedules tests, and keeps one board with a row per PR, grouped by who must act next: her, her colleague, a session still building, or nobody. Each row shows CI state, open review threads, conflicts, how it was tested with links to evidence, and one line on what it needs to merge. She reads her own group first, "because that's where I'm the one holding things up." Each morning the hub gives a summary; each evening every session wraps up and writes its state to the board. Before human review every change passes tests, lint, type checks, a local automated review run until clean, and an answer on every PR thread. Before big merge batches she builds all open branches together into one preview to catch cross-session conflicts. Nothing merges without her colleague's approval.

## Why it matters for code review

This is the counterweight to the overnight-factory stories: parallelism driven by one attentive human during the working day, with the queue kept honest by a board and a daily handoff rather than a scheduler. It works, and the costs are named plainly. The board drifts, the hub sometimes merged a PR and ran the check that should have come first in the same step, and "it takes a lot of attention." Her colleague reviews everything it produces, "which on a busy day can be 15 to 20 PRs." More sessions moved the limit to one machine's memory and one reviewer's day. Compare [worktree agents that open PRs but do not merge](/posts/chancay-agent-worktree-pr-not-merge/), [the fleet that went dark when the reviewer ran out of time](/posts/nuetzel-software-factory-went-dark-reader-ran-out-of-time/), and [the attention cost of a fleet you feel you must keep busy](/posts/driventodevelop-agent-anxiety-idle-fleet-attention/).
