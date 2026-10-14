---
title: "Foreman: workers are forbidden from writing verification.json"
description: "Jun 2026 VisionForge Foreman: gated plan→ADR/PRD→issues→TDD→e2e; PreToolUse deny + read-only evaluator agent; Foreman alone flips pass; retro patches need bench reports."
date: 2026-06-21
kind: field-note
source:
  title: "Foreman — gated agentic orchestrator for headless Claude Code"
  url: https://github.com/VisionForge-OU/foreman
project: steward
---

[VisionForge-OU/foreman](https://github.com/VisionForge-OU/foreman) (PyPI `foreman-orchestrator`, v0.6.0 Jun 21) is a Textual TUI that supervises headless Claude Code through a gated delivery pipeline — `plan → ADR/PRD → issues → TDD build → e2e` — pointed at any repo. Design phases stay human-gated with **hash-sealed approvals**: approve the body, and any edit auto-invalidates the seal. Build phases get guardrailed autonomy: per-run turn/cost/time budgets Foreman enforces by killing the subprocess (Claude has no `--max-turns`), worktree isolation with a declared `touches` conflict graph, and durable state as committed files under `.foreman/` — kill mid-build and it recovers from disk.

The trust surface is structural, not prompted. A worktree `PreToolUse` hook **denies** worker writes to `verification.json` (and issue status); only Foreman’s own writer flips `passes` after acceptance checks, full-suite regression ratchet, lint/typecheck, and evidence-dir validation. A separate read-only `--agent foreman-evaluator` (tools: Read/Grep/Glob only — verified no Write) grades the committed slice; objections bounce a fresh worker. `foreman retro` clusters failures into skill/prompt patches that must pass `foreman bench` and the same hash-sealed human gate before they land. `foreman demo` runs the whole machine on mocked stream-json at zero token cost.

## Why it matters for code review

Always-on factories die when the builder blesses its own “done.” Foreman’s useful claim is **builder/grader separation you can point a hook at**: the model never owns the pass bit, the evaluator cannot mutate the tree, and self-improving skill patches still need a bench report plus a sealed human approval. Peak-session mastery still wins on ambiguous design; the continuous path needs exactly this kind of independent verification surface so morning review is receipts and escalations, not reconstructing whether last night’s agent told the truth.
