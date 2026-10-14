---
title: "Code Janitor: always-on cleanup that never floods the merge queue"
description: "Adapt’s recurring Code Janitor: hourly/daily scan → one small CI-gated cleanup PR at a time, memory-repo dedupe, human merge only — modest verified throughput as the product."
date: 2026-07-08
kind: field-note
source:
  title: "Code Janitor workflow — Adapt"
  url: https://adapt.com/workflows/code-janitor
project: steward
---

Adapt’s Code Janitor is the anti-hero continuous factory: not a swarm rewriting the world overnight, but a **recurring agent** (hourly or daily) that keeps opening small, high-confidence cleanup PRs behind *your* lint, typecheck, and test gates. Categories stay deliberately boring — blatant bugs, easy tracker issues, dead code, style drift, comment overuse. It clones a fresh `main`, logs findings into a separate **memory repo** (mission, index, open/fixed/wontfix, per-run journals), picks one fix it estimates under ~300 added lines (hard cap 500), runs `QUALITY_CHECKS` locally, and opens **at most one** `auto-fix/…` PR. If a prior auto-fix PR is still open, it addresses CI and review comments instead of stacking another. It never merges itself; human review remains the promotion step; the PR’s status checks are the source of truth.

That shape is the receipt for modest verified momentum. Cadence without a one-PR guardrail becomes review FOMO of a different kind — a morning wall of agent PRs. Memory-as-repo stops the amnesiac re-fix loop that burns tokens and reviewer patience. Abandon-and-learn (`issues/wontfix/`) when a “small” fix balloons past the line cap keeps the stream high-merge-rate by design. Wire it as an Adapt skill from `adaptcom/workflows` or any skill-format runner; the interesting artifact is the memory layout, not the model brand.

## Why it matters for code review

Continuous factories compound when overnight (or hourly) work arrives as **bounded, already-gated diffs** a human can promote — not as a heroic session dump. Code Janitor is the low-drama version of harnessed throughput: one open PR, CI as gate, durable memory of what was already tried. Prefer this rhythm over leaving Claude Code running until the usage window dies; FOMO that nothing cleaned the repo overnight is cheaper to fix with a janitor than with another unverified burst.
