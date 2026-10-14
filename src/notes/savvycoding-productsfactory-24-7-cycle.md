---
title: "ProductsFactory: a 24/7 cycle that opens PRs only after deterministic gates"
description: "SavvyCoding’s experimental factory: ~60s orchestrator cycle, sandboxed Claude personas, lint/drift/test/verify recipes before PR, reviewer + auto-merge, supervisors that break cascade loops."
date: 2026-09-18
kind: field-note
source:
  title: "ProductsFactory — A 24/7 autonomous software-development system"
  url: https://github.com/SavvyCoding/ProductsFactory
project: steward
---

[ProductsFactory](https://github.com/SavvyCoding/ProductsFactory) (SavvyCoding; experimental/research, still actively pushed as of Sep 18) is a concrete always-on software factory rather than a one-night Claude session: a long-running **orchestrator** cycles about every sixty seconds — trainer/on-demand persona, reviewer preempt, then round-robin product → sandboxed agent session — while a FastAPI PM dashboard and Postgres hold products, features, phases, sessions, and alerts that humans and agents share.

Each session is one **persona** inside a hardened Docker image (non-root, capability-dropped, no docker socket): designer writes docs; coder implements a feature; reviewer reviews the session PR; scheduled maintenance personas cover architect/documenter/analytics/refactorer. The important boundary is **post-session, pre-PR**: static lint guards, AST drift detectors, a real test run, and designer-authored verification recipes must pass before commit/push/open PR (`orchestrator/pipelines/post_coder.py`). One PR per feature straight to `main`; reviewer approves; auto-merge squash-merges. Rule-based **supervisors** detect cascades — stuck features, review ping-pong, false success, environment failures — and route to `Blocked` with an auditable reason instead of looping forever. An optional phase gate freezes later phases until a PM approves.

Status is honest: spends real compute, pushes real code, sandbox-and-cost-controls required. Early stars; the artifact worth stealing is the shape — continuous cycle + persona isolation + deterministic gates *before* the review surface + cascade breakers — not the claim that auto-merge is free.

## Why it matters for code review

Modest verified momentum compounds when the factory’s night (and day) ends in gated PRs a reviewer can promote, not in heroic transcripts. ProductsFactory’s cycle is the anti-burst version of harnessed throughput: keep agents working on your behalf, but refuse to open the merge queue until lint, drift, tests, and verify recipes have already paid the first proof.
