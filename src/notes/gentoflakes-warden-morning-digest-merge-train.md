---
title: "Warden: overnight fleets are easy — the morning merge train is the product"
description: "Jul 19 Warden: worktree-per-unit agents, clean-room verify + fail-closed AUDIT PASS/FAIL, then digest ranks survivors and integrate re-runs every gate after each merge — base branch untouched."
date: 2026-07-19
kind: field-note
source:
  title: "Warden — audit-gated orchestration for parallel coding agents"
  url: https://github.com/Gentoflakes/warden
project: steward
---

[Gentoflakes/warden](https://github.com/Gentoflakes/warden) (Jul 19, still pushing late Aug) starts from the DORA hangover: AI nearly doubled PRs per developer while median review time rose **441%** and more changes merge with zero human eyes. Running ten agents overnight is commodity; Warden owns what lands on *you* at 8am.

Each unit runs in an **isolated git worktree**, then must clear two independent gates before it counts: deterministic `--check` commands re-run in a **clean-room** detached worktree (the agent’s own “tests pass” claim is never trusted), plus a fresh-context audit agent that must emit structural `AUDIT: PASS` / `AUDIT: FAIL` — no verdict means fail. Commit messages are treated as claims and cross-checked against the actual diff. `warden verify` works standalone on branches from Claude Code, Cursor, Conductor, or a coworker.

Then the morning product: `warden digest` ranks survivors by evidence (audit rejections, gate failures, retries, steering, scope drift, size), predicts pairwise merge conflicts without checkout, and proposes a dependency-aware order. `warden integrate` builds a merge train off base, merging in that order and **re-running every already-merged unit’s gates after each step** so semantic conflicts (green alone, broken together) die before a human reads a mystery stack. Warden never touches your base branch. Mid-run `warden steer` injects corrections without killing context — inbox contract, Claude Code hook, and attempt-boundary injection — while the audit gate still judges the final diff.

## Why it matters for code review

Always-on agent fleets invert FOMO: the anxiety is not idle Claude — it is ten unranked overnight branches with unknown interactions. Warden’s claim is that continuous harnessed throughput compounds only when the **morning admission surface** is as engineered as the night: clean-room verify, fail-closed audit, evidence-ranked digest, and a merge train that re-verifies after each land. Peak-session heroics still win for exploratory work you must steer live; for the backlog that should move while you sleep, the review artifact is the digest queue, not the agent chat.
