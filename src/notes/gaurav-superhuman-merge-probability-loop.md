---
title: "superhuman: closed-loop merge-probability until a maintainer would merge"
description: "Apr 22 gaurav0107/superhuman: multi-agent Claude/Codex harness scores its own PR on a 10-dimension rubric, iterates the weakest dimension to ≥95% over two runs, learns from merge_outcomes.jsonl — with merged PRs into transformers, airflow, oxc."
date: 2026-04-22
kind: field-note
source:
  title: "superhuman — closed-loop open-source contribution agent"
  url: https://github.com/gaurav0107/superhuman
project: steward
---

[gaurav0107/superhuman](https://github.com/gaurav0107/superhuman) (created Apr 22; v0.6.x) treats “will a maintainer merge this?” as a **control problem**, not a one-shot generation bet. Open-loop tools write once and hope; superhuman is closed-loop: pick issue → profile repo → plan → build → **merge-probability-scorer** (10 weighted dimensions: correctness, tests, style, PR format, process, scope, docs, commit hygiene, risk, historical signal) → fix only the weakest non-plateaued dimension via language specialists → re-score until **≥95% sustained over two runs** or an adaptive iteration cap (3/6/10 by diff size). Every merged or abandoned PR appends to `~/.superhuman/global/merge_outcomes.jsonl`, calibrating the next prior. State is typed JSON Schema under `~/.superhuman/` with a SHARED_STATE concurrency contract; scripts are unit-tested bash extracted from prompts.

Safety rails matter for unattended contribution: CI allowlist from workflow discovery, `--force-with-lease` to the fork only (never upstream, never plain `--force`), impact-auditor before shared-function refactors, prompt-injection halt on review comments that ask for shell/URL fetches, reputation cooldown for repos that reject/ignore. Receipts are not vibes — listed merges into [huggingface/transformers](https://github.com/huggingface/transformers/pull/45611), [apache/airflow](https://github.com/apache/airflow/pull/65685), [oxc-project/oxc](https://github.com/oxc-project/oxc/pull/23015), ant-design, pydantic-ai, pytorch-lightning, and more across Python/Rust/TS/Kotlin/C++. Runs on Claude Code (subagents + slash commands) and Codex (skill adapter); fleet mode parallelizes independent contributions with flock mutexes.

## Why it matters for code review

Verification tax under volume is the bottleneck when agent PRs flood maintainers. superhuman’s receipt is pre-submission scoring that burns iterations *before* spending human attention — and a learning prior so the next overnight run starts smarter than the last. Continuous harnessed momentum compounds when “done” means sustained merge probability plus allowlisted CI, not a confident chat transcript. Bursts still win for novel product intent; self-improving factories win when every merge outcome hardens the gate for the next PR.
