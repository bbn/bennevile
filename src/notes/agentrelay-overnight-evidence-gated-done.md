---
title: "AgentRelay: overnight control is PreToolUse blocks + evidence-tagged morning reports"
description: "Jul 27 MalyStern: local Rust supervisor for Claude/Codex/ACP — block forbidden tools before they run, gate done on real tests, undoable checkpoints, budget kill-switch, VERIFIED/RECORDED/ESTIMATED report lines."
date: 2026-07-27
kind: field-note
source:
  title: "AgentRelay — supervise an AI coding agent overnight and keep control"
  url: https://github.com/MalyStern/agentrelay
project: steward
---

MalyStern’s AgentRelay (repo Jul 27; Rust daemon + Claude Code plugin + optional Tauri app) is the overnight control plane that assumes the usual unattended failure modes and answers each **deterministically**: drift, a stray push, a stop that doesn’t stop, a night burned on one broken fix, or success the model can’t prove. It is local-first on purpose — no account, no telemetry — opposite of a hosted “just trust the agent” product.

The load-bearing pieces: a **PreToolUse guard** that blocks forbidden calls (push, write outside the workspace, touch `.env`) *before* they run — verified against a live Claude, not only in theory; **evidence-gated done** where your validators’ exit codes decide, not the model’s claim; checkpoints that commit **only the agent’s work** so undo is `git reset --keep` without eating your dirty tree; a spend cap checked before every turn (money is what git can’t restore); quota-wall scheduling so a night can resume instead of dying at the limit. The morning artifact is the review surface: every report line tagged **VERIFIED** (a command decided it) / **RECORDED** (observed) / **ESTIMATED** (rule of thumb) — nothing the model merely claimed. Honest status: phases 1–4 shipped with 284 Rust tests plus an e2e harness that proves the `.env` deny path; a full live overnight against real Claude quota-resume is still on the human checklist.

## Why it matters for code review

Always-on factories only beat interactive Claude Code mastery when “done” and “safe” are harness properties with provenance you can read at 8am. Continuous verified momentum looks like AgentRelay’s split: the agent supplies intelligence; the supervisor owns refusal, checkpoints, and a report that separates evidence from guesswork — so morning review promotes reversible units instead of reconstructing what the model believed it did.
