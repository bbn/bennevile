---
title: "Otis: eight checks between the agent and the PR — including mutation-light"
description: "May 29 42nights Otis: issue→PR overnight agent whose centerpiece is an 8-check harness (typecheck, suite, plan-tests, mutation-light, lint, diff cap, banned patterns, critic); never auto-merges."
date: 2026-05-29
kind: field-note
source:
  title: "Otis · the AI engineer at 42nights — overnight agent with an 8-check verification harness"
  url: https://github.com/42nights/42n-bot
project: steward
---

[42nights](https://github.com/42nights/42n-bot)’s Otis (repo May 29) is an overnight coding agent built around one sentence: the model can write the code; the hard part is proving it works. Label an issue `bot-please` (or click **Fix it** from the inbox) and walk away — wake to a PR you can read in a minute, or a transparent “I tried, here’s where I got stuck” comment if the harness could not be satisfied. The inner loop is Claude Code; Otis owns the outer game: worktree isolation, verification, iteration, PR opening, cost tracking, audit.

Eight checks run between every implementation attempt and the PR. Hard gates: typecheck (stack-autodetected), the full existing suite, every `tests_to_add_or_update` path from the plan present in the diff, **mutation-light** (stash the impl, restore only the new tests, they must fail; pop, they must pass), diff-size cap (1000 lines, 2× for large plans), and banned patterns (`@ts-ignore`, `it.skip`, `eslint-disable-next-line`, …). Soft gates: lint and a Haiku critic (confidence ≥ 60, `implements_issue === "yes"`, no high-severity hidden-bug flags) whose verdict still lands in the PR body. Hard-gate failure → up to three implementer iterations; exhaustion still opens a PR under `bot-needs-review` with the full verification table — transparent failure over confident broken. Default: **never auto-merge**; humans merge. Planner may abort cleanly on ambiguity or danger. Design motto: minimum scaffold, maximum verification — a grader the model cannot bullshit.

## Why it matters for code review

Continuous overnight throughput only beats bursty Claude mastery when each unit pays a verification tax the agent cannot edit. Mutation-light is the sharpest receipt in this pack: new tests that pass with the impl stashed are rubber stamps, not evidence. Review Otis the way you review a merge queue — the eight-check table and `bot-needs-review` label are the merge criteria; the session narration is just the worker’s diary. FOMO that nothing moved overnight is cheaper than waking to green PRs whose tests never failed without the change.
