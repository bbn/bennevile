---
title: "Codex Watch and fix: a 10-minute heartbeat that owns the PR last mile"
description: "Sep 3 RuntimeWire: OpenAI desktop Codex attaches a recurring heartbeat to a PR — re-reads live GitHub state, repairs CI and conflicts in a worktree, optionally merges; continuous ownership instead of one-shot heroics."
date: 2026-09-03
kind: field-note
source:
  title: "OpenAI quietly ships \"Watch and fix\" for Codex pull requests"
  url: https://runtimewire.com/article/openai-gives-codex-a-watch-and-fix-mode-that-keeps-repairing-your-pull-request
project: steward
---

[RuntimeWire](https://runtimewire.com/article/openai-gives-codex-a-watch-and-fix-mode-that-keeps-repairing-your-pull-request) (Merket; 3 Sep 2026) reverse-engineers a production OpenAI desktop feature that turns Codex from a one-shot author into a **persistent shepherd of a single pull request**. In build `26.901.20858`, user-facing toggles named “Watch and fix pull requests,” “Auto-merge when ready,” and custom watch instructions create a heartbeat automation (`Auto-fix PR #`) that wakes every **10 minutes**, re-reads live PR state with `gh`, and keeps repairing until the task completes, blocks, or the PR merges or closes.

The load-bearing design is recurrence without a sleeping turn. Codex does not hold an open model session while CI runs; each heartbeat inspects mergeability and checks fresh, focuses edits on failures the PR caused, resolves base-branch conflicts, mutates inside an **isolated git worktree**, commits and pushes, then cleans up. Instructions insist on re-checking GitHub rather than trusting earlier-turn state — the classic long-running-agent failure mode when other commits land and checks finish between wakes. Auto-merge is a separate preference defaulting off: with it disabled, Codex leaves the merge button to the human; with it on, green-and-mergeable is an intermediate state and the heartbeat keeps going until GitHub records the merge (or a human decision/credential is required, at which point it asks once and pauses).

RuntimeWire ties the product to OpenAI’s own Symphony internal story — agents with persistent workspaces, cadence watches, restart-on-stall — and notes Anthropic already ships overlapping Auto-fix / Auto-merge surfaces. The scoop is not uniqueness of the idea; it is Codex shipping a **bounded continuous loop** whose unit of work is the PR last mile. Rollout scope was unconfirmed at publish time; the reporting verified the settings and implementation path in the shipped package, not an end-to-end live GitHub demo.

## Why it matters for code review

Continuous harnessed throughput compounds when someone — human or automation — still owns the branch after the flashy generate step. Watch and fix is the factory move productized: modest verified wakes on a schedule beat another peak Claude session that abandons a red PR at 6pm. FOMO that nothing advanced overnight is often a missing heartbeat on the merge queue, not a missing bigger model. Review the opt-in merge rail and the “ask once then pause” stop condition as carefully as the repair prowess — always-on ownership without a human merge gate is a different product than overnight momentum with receipts.
