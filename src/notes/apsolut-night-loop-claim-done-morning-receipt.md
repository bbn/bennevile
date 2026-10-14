---
title: "NIGHT LOOP: CLAIM_DONE is rejected while the harness is still red"
description: "Jun 14 apsolut: Claude Code overnight wrapper — Night Contract, question firewall, PreToolUse outside permissions, Stop-hook ratchet vs model claims, SHA-256 event tape, tamper-evident Morning Receipt."
date: 2026-06-14
kind: field-note
source:
  title: "NIGHT LOOP — unattended agents need deterministic completion proofs"
  url: https://github.com/apsolut/night-loop
project: steward
---

[apsolut/night-loop](https://github.com/apsolut/night-loop) (Jun 14) is a thin overnight wrapper around one native Claude Code background session — not a provider router. The design bet is disposability: sessions die; durable state lives in `progress.md`, the working tree, and `.night-loop/state/`, and a SessionStart hook reinjects the ledger so any new session can resume. Attended `setup` compiles a **Night Contract** (goal, permission profile, limits, worker cap); everything after is noninteractive (`start` / `full` / `status` / `stop` / `resume` / `morning` / `doctor`).

The trust stack is the review surface. A **question firewall** answers PermissionRequest and MCP elicitation without waking you, while still recording the signals. A **PreToolUse gate** stays outside both workspace and full permission profiles — `full` maps to Claude’s `bypassPermissions` for the host, but NIGHT LOOP still blocks push, publish, deploy, destructive delete, unapproved fetch, production writes, and control-plane edits. The **Stop hook** runs an independent ratchet: a model-written `CLAIM_DONE` is **rejected while any exact harness command is still red**. Crash recovery resumes the native session with backoff. An append-only JSONL event tape is **SHA-256 chained**; `morning` verifies the chain and emits Markdown/JSON receipts (criteria, tests, verdicts, recoveries, blocked actions, rollback). Workers are optional and capped; default is one.

## Why it matters for code review

Always-on factories lose the night to confident early clock-outs and unanswered prompts — FOMO becomes idle infrastructure. NIGHT LOOP’s useful claim is that completion is a **deterministic proof plus a chained receipt**, not a chat summary. Review the Morning Receipt and the rejected `CLAIM_DONE` path the way you’d review a merge gate: promote only what survived the ratchet; reopen anything the firewall parked as interaction-required.
