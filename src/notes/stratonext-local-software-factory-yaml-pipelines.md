---
title: "Local Software Factory: YAML pipelines, worktrees, coding agents as workers"
description: "Sep 21 StratoNext sf: local factory — GHA-style YAML pipelines (agent + shell stages), per-request git worktrees, parallel queue, optional daemon; reuses installed Claude/Codex CLIs; human-review stages when needed."
date: 2026-09-21
kind: field-note
source:
  title: "Local Software Factory — pipelines as code, coding agents as workers"
  url: https://github.com/stratonext/software-factory
project: steward
---

[stratonext/software-factory](https://github.com/stratonext/software-factory) (`sf` on PyPI; MIT; repo from Sep 21, Show HN shortly after) brings the software-factory idea down to one laptop: define pipelines as versionable YAML (GitHub Actions–shaped), submit requests, and let coding-agent CLIs plus shell stages move each request from intake to done — or to a human-review gate — without a separate metered API product. Install once with `uv tool install software-factory`, `sf init`, point stages at the agent CLI you already pay for (`claude` runner + OAuth token), and `sf doctor` checks git, CLI, token, and paths.

The continuous shape is the point. Pipelines live under `~/.sf/pipelines/` (shared across repos) or alongside code; a `quick` pipeline is literally `code` (Claude with a prompt file) → `commit` (shell). Richer graphs mix plan → human review → code → test → security review. Each request gets its own git worktree under `~/.sf/worktrees/<repo>/<id>/`, so parallel features do not stomp each other or your open editor. `sf submit` / `sf run` drain the queue; `sf daemon start` polls every few seconds so work starts when you walk away. `sf status` / `sf show` / `sf replay` make the morning inventory the run ledger, not chat archaeology. After a request finishes you still merge (`git merge sf/<n>`), unless you automate commit/merge in a later shell stage — the factory isolates and verifies stage-by-stage; it does not silently own main.

Honest limits: experimental local tooling (10★ at writing); JEV-backed judging stages need a JEV key; merge into main remains an explicit human/git step unless you wire it. The useful claim is architectural, not star count: factory = versioned pipeline + isolated workers + optional always-on daemon.

## Why it matters for code review

Overnight FOMO that agents sit idle is solved by a queue and a daemon; the harder FOMO is parallel agent sessions that collide and leave unreviewed diffs. Continuous harnessed throughput compounds when each request is a worktree-isolated pipeline with explicit review stages, not five chat tabs sharing one dirty tree. Review local factories the way you review CI: YAML is the merge criteria, worktrees are the blast-radius control, and human-review stages are the override policy. Pair with [Nalivator’s script-owned merge](/posts/nalivator-dark-factory-scripts-decide-merge/) when merge must stay deterministic, and with [ProductsFactory’s cycle supervisors](/posts/savvycoding-productsfactory-24-7-cycle/) when cascades (review ping-pong, false success) need rule-based halt.
