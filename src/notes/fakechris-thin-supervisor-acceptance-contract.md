---
title: "thin-supervisor: 'done' is the acceptance contract, not the agent's claim"
description: "Apr 8 thin-supervisor: sidecar over Claude/Codex CLI — continue/verify/retry/recover/escalate; verifier + AcceptanceContract gate finish; Stop-hook closes the loop when you leave."
date: 2026-04-08
kind: field-note
source:
  title: "thin-supervisor — acceptance-centered run supervisor for coding agents"
  url: https://github.com/fakechris/thin-supervisor
project: steward
---

[fakechris/thin-supervisor](https://github.com/fakechris/thin-supervisor) (Apr 8 2026; PyPI `thin-supervisor`) names the silent failure mode of long agent runs: the model asks "should I continue?" while nobody is watching, or it says "done" without the tests passing. The fix is a **sidecar supervisor** that sits beside the agent you already use (Claude Code, Codex, or any CLI agent in tmux / open-relay / JSONL observation), watches checkpoints, and emits typed decisions — continue, re-inject, verify, retry, branch, recover, escalate, or finish. You keep the familiar agent UI; the control plane owns whether the run advances.

"Done" is defined by an **AcceptanceContract** (required evidence, forbidden states, risk class, reviewer gating) plus a verifier that actually ran — not by the worker's prose. Checkpoints normalize into a causality chain (`CheckpointEvent` → `SupervisorDecision` → `HandoffInstruction`) so every injection traces to a decision. Supervision intensity follows a `WorkerProfile` and one of three policies (`strict_verifier` default / `collaborative_reviewer` / `directive_lead`) so a strong worker is not micromanaged. When you walk away, a Stop-hook path can hand the next instruction back into Claude/Codex instead of dead-ending at "pause for human," and operator channels (TUI, Telegram/Lark, A2A) escalate clarification when confidence is low. The honest bound: this is run governance and acceptance gating, not a substitute for a held-out oracle on the product domain.

## Why it matters for code review

Continuous verified throughput only beats a heroic afternoon of Claude when the night cannot stall on a permission prompt or self-declare victory. thin-supervisor makes the morning board the contract and the verifier exits — promote what the acceptance gate closed, reopen escalations, and treat chat confidence as a claim under review. Peak-session mastery still wins for judgment you want to steer live; the overnight queue is for work whose finish line is already written down.
