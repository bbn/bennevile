---
title: "Sloop: overnight running hours, evidence verdicts, opt-in merge train"
description: "Jul 15 hamish-mackie/sloop: Rust daemon schedules Claude/Codex/OpenCode tickets into isolated worktrees inside configured running hours (e.g. 22:00–06:00), judges from observed exits/commits/tests — not agent claims — with build→review→merge flows and an opt-in verify-before-FF merge train."
date: 2026-07-15
kind: field-note
source:
  title: "Sloop — agentic coding scheduler"
  url: https://github.com/hamish-mackie/sloop
project: steward
---

[hamish-mackie/sloop](https://github.com/hamish-mackie/sloop) (created Jul 15) is a **Rust job scheduler for background coding agents**: tickets are markdown files in the repo, flows define how work proceeds, and a local daemon runs them unattended inside configured **running hours** (default shape: 22:00–06:00 local, crossing midnight). Each ticket gets its own git worktree and a chosen agent (Claude Code, Codex, or OpenCode) with per-ticket model and effort — design on a strong model, implementation and review on specialized workers. `sloop post` enqueues; `sloop show` explains why pending tickets are not running; logs follow a run-id.

The kernel posture matters for overnight trust: Sloop treats agents as untrusted proposers. The daemon supervises each run, enforces shared rate limits, and derives every verdict from **evidence it observed** — process exit, commits, tests — rather than from the agent’s word. Stock flows: `default.yaml` is build → review → merge, where review is a second agent that reports via `sloop verdict`; `train.yaml` is an opt-in **merge train** that syncs the default branch in and verifies the combined result before a fast-forward-only merge, so nothing lands the verify stage did not run against. Failures can block or (`fail_action: continue`) record advisory noise without stopping the train. Omit running hours to run any time; set `max_parallel_tasks` to bound laptop blast radius.

## Why it matters for code review

Always-on factories need a clock and an evidence gate, not a longer chat window. Sloop’s receipt is scheduled unattended work with independent review and an optional verify-before-land train — morning inventory is merged (or blocked) on observed tests, not on overnight confidence. If the daemon sat idle through your running hours, you skipped a board of ticketed worktrees that would have been waiting with verdicts; bursts still win for greenfield judgment, but continuous harnessed throughput compounds when the night shift has hours, isolation, and a merge policy that refuses agent self-grade.
