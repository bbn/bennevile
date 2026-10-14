---
title: "Cole's dark factory: holdout validator and a perimeter the factory can't amend"
description: "Aug 14 coleam00: Archon cron factory — dumb label dispatcher, independent validate-PR holdout, governance files auto-reject; humans file issues and promote releases only."
date: 2026-08-14
kind: field-note
source:
  title: "The Dark Factory Experiment (RAG YouTube Chat App)"
  url: https://github.com/coleam00/dark-factory-experiment
project: steward
---

[coleam00/dark-factory-experiment](https://github.com/coleam00/dark-factory-experiment) (holdout/ratchet commits Aug 14; live RAG chat app) is a public **level-4** dark factory: humans file issues and promote releases; Archon workflows on a cron own triage → implement → validate → merge. Three layers stay separate — **Archon** (deterministic workflow engine stitching agent nodes to `gh`/scripts), **Claude Code** (tools), **model** (Sonnet/Haiku, swappable). Shared state is GitHub labels, not a private DB: issues march `factory:triaging` → `accepted` → `in-progress`; PRs `needs-review` → `approved` (auto-merge) or `needs-fix` (max two) → `needs-human`.

The non-negotiables are the thesis receipt. The **validator never reads the implementation plan** — StrongDM-style holdout against the issue outcome, so the maker cannot game acceptance. **Governance files** (`MISSION.md`, `FACTORY_RULES.md`, `CLAUDE.md`) plus auth/rate-limit/deploy configs are a human-authored perimeter: any PR touching them auto-rejects before other checks. The **dispatcher is dumb on purpose** — ~100-line bash every 30 minutes, priority fix-PR → validate-PR → implement → triage, `MAX_PARALLEL=4`; an earlier LLM dispatcher hallucinated work that did not exist. Finishing in-flight work before new triage is load-bearing. Weekly browser regression files issues back into the same queue. Flood protection and per-node `maxBudgetUsd` cap spend. Explicitly not level 5: the factory does not invent its own product backlog.

## Why it matters for code review

Overnight harnessed momentum compounds only when merge authority is a holdout against reality and the factory cannot rewrite the rules that judge it. Continuous factories beat burst Claude heroics when the cron keeps verified PRs moving — and when "done" is an independent validator, not the implementer's story about its plan.
