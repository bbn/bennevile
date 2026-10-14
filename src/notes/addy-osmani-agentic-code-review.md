---
title: "Agentic code review: understanding stayed expensive"
description: "Addy Osmani’s 2026 map: Faros/GitClear/CodeRabbit data, blast-radius tiering, heterogeneous AI reviewers, and humans on the loop—not reading every line."
kind: field-note
date: 2026-06-15
source:
  title: Agentic Code Review
  url: https://addyosmani.com/blog/agentic-code-review/
project: steward
---
The constraint moved: agents write faster than humans read. Faros-scale telemetry shows more throughput alongside huge jumps in churn, defects, review duration, and zero-review merges. GitClear’s line: ~4× raw output for ~12% delivered-value gain—the gap is review work.

Review purpose shifted because agent reasoning is usually discarded with the diff; reviewers reconstruct intent. Fix is tooling: decision logs on PRs. Run heterogeneous AI reviewers—overlap across tools is tiny in one cited experiment—so diversity beats four copies of one model.

Playbook: tier by blast radius; circuit-break high-maintenance agent PRs early; require evidence before human review; keep PRs small; read test-diff changes harder than implementation; treat CI as immovable; human owns merge.

## Why it matters for code review

This is the field manual for matching review effort to cost-of-being-wrong when generation is free and comprehension is not.
