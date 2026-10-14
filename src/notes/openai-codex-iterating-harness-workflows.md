---
title: "Codex harness files: plans are not evidence"
description: "Aug 3 Tony Alaniz (OpenAI Cookbook): phased harness/build files, human gates, and an append-only build-log that records observed verification — so long-running agent work cannot mark a phase complete on narration alone."
date: 2026-08-03
kind: field-note
source:
  title: "Iterating Development Workflows with Codex"
  url: https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex
project: steward
---

Tony Alaniz’s Aug 3 OpenAI Cookbook recipe is a concrete file layout for continuous agent work that refuses to confuse **plan** with **proof**. Optional conventions around Codex — `AGENTS.md`, `GOALS.md`, `PLANS.md`, `PROMPTS.md`, plus `harness/build/phase-*.md`, `harness/context/`, and `harness/build-log.md` — turn a long-running coding agent from a chat transcript into a gated factory with an audit trail.

Ownership boundaries are the reusable part. Build files describe one bounded phase: objective, non-goals, approval gate, red/green/refactor/verification plan, acceptance criteria, and the evidence required before “done.” They are plans, not claims that work finished. Phase context files capture only material decisions and constraints (not narration). The **build log** is the source of truth for observed progress: exact commands run, pass/fail results, blockers, limitations. Statuses are explicit (`Not started` / `In progress` / `Blocked` / `Complete`), and completion is forbidden without evidence that tests and verification actually ran — never inferred from “code exists” or a prior conversation. Activity entries are append-only; corrections add a new entry rather than rewriting history.

The workflow is deliberately human-gated between phases. Prompts require read-only preflight, an approval summary before writes, and a stop after the selected phase — no silently starting the next one. Commits, pushes, deployments, and credentials stay behind separate explicit approval. When the manual process gets heavy, the recipe shows skill-ifying it (`harness-author`) with a deterministic validator that rejects planning-only runs that sneak in application scaffolding, absolute paths, or unapproved artifacts. A blameless retrospective loop then promotes friction back into instructions, validators, or regression tests — the self-improving factory as file discipline, not vibes.

## Why it matters for code review

Always-on agents without an evidence ledger produce morning inventories of confident narration. This cookbook relocates review into the harness: phase contracts reviewers can sample, and a build-log that cannot promote planned checks into passing evidence. Continuous verified momentum looks like append-only receipts across overnight phases — not a longer peak session that marks itself complete.
