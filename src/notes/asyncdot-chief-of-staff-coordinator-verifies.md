---
title: "Chief of Staff: one session verifies; others execute; the board is memory"
description: "Sep 19 AsyncDot: coordinator≠implementer, durable Plan Desk state, red-gate-first, re-run claimed commands — exit codes decide; reports are evidence, not instruction."
date: 2026-09-19
kind: field-note
source:
  title: "Orchestrating Claude Code Agents: The Chief of Staff Pattern"
  url: https://asyncdot.com/blog/chief-of-staff-pattern-orchestrating-claude-code-sessions/
project: steward
---

[Mithushan Jalangan](https://asyncdot.com/blog/chief-of-staff-pattern-orchestrating-claude-code-sessions/) (AsyncDot; 19 Sep 2026) names the overnight failure mode as organizational, not model-capacity: long sessions compact away detail, self-reports drift from reality, and lessons vanish unless they live outside the conversation. Adding more agents multiplies unreliable reporters. The fix is a division of labour they call **Chief of Staff** — their label for orchestrator-worker / coordinator-implementor-verifier: one long-lived session coordinates and verifies; separate short-lived sessions implement; a durable external board holds truth.

The coordinator’s job is overwatch, not authorship. It pulls the next unblocked card, writes a brief a weaker model could follow, runs a **red gate first** (verifier must fail before work proves anything), re-runs every claimed command so exit codes decide, reads the **diff not the transcript**, then flips status and commits **one item alone**. The moment the coordinator starts coding, verification collapses into a single overloaded session. Tooling is replaceable — Claude Code sessions, a scriptable workspace launcher (they use cmux), and an MCP board (Plan Desk) — but the roles are not. Sessions are disposable; the board is not. Status flips atomically with the work, never batched at standdown.

The portable verification discipline is the meat. Treat every agent report as **evidence, not instruction**. Verify artifacts by reading values back out of the artifact, never from the shell variable you think you wrote. Watch the defect class that reports success for work it did not do: vacuous assertions, silent no-match greps, swallowed errors, wrong time filters, stale premises, scope mismatch. Prove a positive control before believing a negative. Durable channels beat ephemeral ones — committed briefs and board cards arrive; session messages can queue, hold, or expire. Timebox for **surfacing, not cutting**: finish-verify-commit the in-flight item when the timer fires, then report. Honest limit: without a durable store you are not running this pattern — you are running several sessions and hoping.

## Why it matters for code review

Continuous harnessed throughput compounds when someone whose job is knowing what is true sits outside the builders — red-gate-first, independent re-runs, one commit per board card. Peak-session Claude mastery still wins on a single well-scoped change where coordination tax exceeds the work; always-on factories lose the night to green summaries that never touched the tree unless the review surface is the board plus proven diffs. FOMO that agents aren’t working overnight is the wrong fear — the right one is waking to a fleet of self-reports nobody re-ran.
