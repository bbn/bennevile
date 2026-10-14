---
title: "harnesswright: an agent's done is a claim — the gate returns a receipt"
description: "Jul 2026 Falco: zero-runtime CLI that never runs agents; ledger slices + verity claims reconciled to filesystem, git HEAD, and exit codes — exit 0/1/2; dogfooded 18+ green claims that caught its author."
date: 2026-07-02
kind: field-note
source:
  title: "harnesswright — governance-first, verification-first harness generator"
  url: https://github.com/pietro-falco/harnesswright
project: steward
---

[pietro-falco/harnesswright](https://github.com/pietro-falco/harnesswright) (repo Jul 2) states the overnight-factory axiom in one line: **an agent’s “done” is a claim, not a fact.** The CLI never executes or orchestrates agents. `init` drops a governance pack into any repo — evidence-gated slice ledger (`.harness/ledger.md`), config, ADR scaffold, [verity](https://github.com/pietro-falco/verity) claims manifest, pre-commit hook, per-session worktree script, CI `gate.yml`, plus `AGENTS.md` / `SKILL.md`. `next` is read-only: the unlocked slice and its criteria. `gate` reconciles declared claims against the **literal filesystem, git HEAD, and command exit codes** — exit `0` all pass (receipt), `1` a claim fails (full stop for operator review; the agent does not retry its way to green), `2` config error. No LLM-as-judge: a model check is an opinion; a receipt is evidence. Framed as the Truth layer under Spec Kit (intent) and orchestrators (execution).

Credibility argument is dogfood: the repo adopted its own harness and is gated by `gate` in CI — 18+ claims green at HEAD, three of them because the harness caught its author. Complements, not competitors: write intent upstream, scale execution with whatever agent you already run, let a deterministic gate decide whether “done” is true.

## Why it matters for code review

Modest verified momentum overnight only compounds when completion authority sits outside the worker. harnesswright relocates the morning review surface from chat confidence to a machine receipt shared by laptop and CI — the same shape as continuous factories that refuse to merge on agent narration. Peak-session Claude mastery still wins when the question is product judgment; unattended loops win when a failing claim is a hard stop, not another prompt round.
