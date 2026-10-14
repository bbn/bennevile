---
title: "Nocturne: label an issue, wake to a verified PR — never a merge"
description: "Jun 2026 ba1lly/nocturne: daemon picks agent-labelled issues across repos, isolated worktree + verify_cmd + review/fix budget, opens a PR; optional CI/review shepherding — never merges, force-pushes, or touches main."
date: 2026-06-08
kind: field-note
source:
  title: "nocturne — autonomous coding orchestrator for the night shift"
  url: https://github.com/ba1lly/nocturne
project: steward
---

[Nocturne](https://github.com/ba1lly/nocturne) (ba1lly) is a local-first night-shift orchestrator for teams that want backlog burn-down while they sleep without handing merge authority to the loop. You label an issue `agent` (or a per-repo label). The daemon triages it as DOABLE / NEED_INPUT / SKIP, then spawns **one opencode session** in an isolated git worktree off `main`. Inside that session the agent changes code, runs a configured `verify_cmd` until it passes, invokes a reviewer (local skill, installed fallback, or opencode’s built-in `/review`), and loops review→fix up to a budget before writing a PR body. Nocturne creates the PR; Discord can ping. NEED_INPUT issues get a question comment and park; SKIP gets an idempotent marker. Optionally, with `reactions.enabled`, the daemon shepherds open PRs it authored — re-dispatch on failing CI, address “changes requested,” notify when approved and green — and still **never merges, never force-pushes, never touches `main`**.

The control plane is deliberately serial and budgeted: one task at a time across a multi-repo config, quiet hours, rolling wall-clock and token caps, per-task timeouts, pause/unpause via SQLite, and a `require_new_test` knob when you want the overnight suite to leave a test behind. Eligibility is open + labelled + not already tracked as done/parked/skipped/failed. The contract is morning-shaped: a reviewable PR with verification receipts and a capped review loop, not an unattended promotion to production.

## Why it matters for code review

Always-on capacity compounds past peak-session heroics only when overnight mistakes stay on a branch and humans keep the merge button. Nocturne’s FOMO fix is an inbox of verified, self-reviewed PRs under hard never-merge rails — review the accept trail and CI shepherd history, not a 3am land on `main`.
