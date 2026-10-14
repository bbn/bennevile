---
title: "Two unattended days: gate completion on artifacts, not reports"
description: "Jul 20 Solar/Favur: six-session 2048 SOW run — false completion, oscillation, context exhaustion, review cost; validators cite docs/hashes; play-the-game signal beats green suite; task drift still open."
date: 2026-07-20
kind: field-note
source:
  title: "What it takes to run an agent unattended for two days"
  url: https://dev.to/favur/what-it-takes-to-run-an-agent-unattended-for-two-days-29bk
project: steward
---

[Charles Solar / Favur](https://dev.to/favur/what-it-takes-to-run-an-agent-unattended-for-two-days-29bk) (Jul 20) reports a two-day unattended run on Meta Muse Spark 1.1 against a 2048 SOW: **131 files with tests across six sessions**, no human in the loop. The useful half is the failure taxonomy — better models raise output quality but do not remove long-loop failure modes. **False completion**: a step reports success without the work; validators gate advancement on artifacts (cite ≥2 context docs; reject commits without hash + non-empty file list; machine-check structured acceptance fields). Work and judgment are separated — the workflow agent sequences and enforces; tests are written before implementation. **Non-convergence**: oscillation between two wrong solutions looks like normal token spend; fix with per-step retry budgets that cannot re-arm, declared failure paths, re-entry caps, and run-wide circuit breakers. **Context exhaustion** is tier-summarized then hard-blocked near the ceiling. **Review quality** prices over-flagging with a false-positive breaker after three bad findings. Capability gaps may be abandoned without scoring penalty — otherwise agents conceal them with fabricated work. Checkpoints persist across the six sessions.

Honest non-goal: **task drift** has no semantic check; constraints are structural (fixed advancing tool, injected requirements, durable strategy from planning). Stronger completion than a green suite: the run **launched and played** the built game. Repo and full recording linked from the post.

## Why it matters for code review

Always-on harnessed throughput compounds only when overnight “done” is artifact-backed and loops that oscillate halt instead of burning the night. Favur’s FOMO antidote is concrete — six sessions of verified slices beat a heroic Claude burst that still needs a human to notice false completion. Keep humans on drift and product promises; let the harness own hashes, budgets, and the refusal to advance on prose.
