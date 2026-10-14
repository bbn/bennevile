---
title: "Completion is a harness verdict, not a missing tool call"
description: "Aug 26 WonderLab / MyCodeAgent: single immutable loop + TransitionReason traces; completion gate PASS/UNVERIFIED/FAIL with feedback injection; terminal reasons exhaustively named."
date: 2026-08-26
kind: field-note
source:
  title: "Code Agent Dissection (11): Harness Design Part 1 — Control Flow"
  url: https://dev.to/wonderlab/code-agent-dissection-11-harness-design-part-1-control-flow-54c2
project: steward
---

[WonderLab](https://dev.to/wonderlab/code-agent-dissection-11-harness-design-part-1-control-flow-54c2) (Aug 26) dissects control flow in [MyCodeAgent](https://github.com/chendongqi/MyCodeAgent) and treats the harness as the apparatus that steers the model — not another prompt layer. The design bets on a **single** `_react_loop`: one `LoopState`, one step counter, no nested plan/execute machines to desync. State is a frozen dataclass; every change goes through `state.next(TransitionReason, …)` so the transcript can query *why* a transition happened (empty-response retries, completion-gate blocks) instead of inferring from call stacks.

The sharp move is the **completion gate**. Most frameworks exit when the model returns no tool calls. MyCodeAgent treats that as a candidate finish, then runs an independent verdict: PASS → return; UNVERIFIED → return with a marker; FAIL → inject a structured `<system-reminder>` (incomplete todos, missing test-evidence) and keep looping, capped by `completion_gate_retry_limit`. The gate does not trust self-declaration; it checks objective rules (todos still open? verification tool actually run?). Abnormal exits are exhaustive `TerminalReason` values — max steps, token budget, model error, empty-response exhaustion, gate blocked — each written as a terminal transcript event so resume logic can tell clean finish from crash.

A double loop separates step quota from error retries: inner retries for prompt-too-long / empty response do not burn the outer `max_steps` budget, so the step counter still means progress rather than recovery noise.

## Why it matters for code review

Overnight factories die on false completion more often than on weak models. A harness that only exits when the model stops calling tools will bless half-done nights; one that gates completion on evidence and names every terminal reason gives morning review a receipt trail instead of a shrug. Continuous verification under volume needs that control-plane honesty: modest harnessed steps that refuse “I’m done” beat a heroic Claude burst that never faced an independent finish check. The FOMO to fix is not idle agents — it is agents that exit without a gate the harness can defend.
