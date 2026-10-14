---
title: "verify-gate-mcp: the agent that did the work can never mark it complete"
description: "Jul 9 Monkeyattack MCP: criteria-at-birth, claim_done with evidence, verify hard-rejects E_SELF_VERIFY; pending→claimed→verified|rejected is forward-only in SQLite."
date: 2026-07-09
kind: field-note
source:
  title: "verify-gate-mcp — prover ≠ verifier completion gate"
  url: https://github.com/Monkeyattack/verify-gate-mcp
project: steward
---

[Monkeyattack](https://github.com/Monkeyattack/verify-gate-mcp)’s verify-gate-mcp (repo Jul 9) is a tiny MCP server with one rule: the agent that does the work can never mark it complete. Tasks are born with ≥1 non-empty acceptance criterion (no add-criteria-later tool). A worker calls `claim_done` with evidence and is permanently recorded as the prover. Only a **different** agent identity can call `verify`; same-agent verify returns `E_SELF_VERIFY` and the state does not move. Terminal states are irreversible: `pending → claimed → (verified | rejected)`. Remediation of a reject is a new task with `supersedes` for lineage — not a rewrite of history.

The gate lives server-side (SQLite CHECK + compare-and-swap in `IMMEDIATE` transactions, WAL for multi-agent stdio), not in a prompt the maker could ignore after compaction. Production war stories they cite before open-sourcing: a devops agent’s “fix” that was not running; a trading gate that would have fail-OPEN; and the reciprocal claim that real work usually passes clean on the first try — the gate is a filter, not a wall. Criteria must be checkable by someone who did not do the work (“GET /healthz returns 200” beats “works well”). Verifiers are told to fail-first against the live system, not against the evidence paragraph.

## Why it matters for code review

Overnight factories fail the honest-but-lazy way: the same session that shipped the change grades it done after context blur. Protocol-enforced prover ≠ verifier is the continuous-verification tax you cannot edit out of a prompt. Burst mastery still wins when one human is in the chair and the change is small; always-on motion only compounds when “done” is a second identity’s irreversible verdict against criteria written at birth. Review the SQLite ledger the way you review CODEOWNERS — if the maker can self-verify, you do not have a gate.
