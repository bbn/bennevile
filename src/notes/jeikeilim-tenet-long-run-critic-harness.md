---
title: "Tenet: 12+ hour runs with independent critics, not self-certified done"
description: "Apr 8 Tenet: interview→spec→DAG→execute→evaluate loop — model-tier-shaped plans, grounded+ungrounded critics (code/test/e2e), doctrine that self-corrects between overnight cycles."
date: 2026-04-08
kind: field-note
source:
  title: "Tenet — agent harness for long, reliable autonomous development"
  url: https://github.com/JeiKeiLim/tenet
project: steward
---

JeiKeiLim’s Tenet (repo Apr 8; npm `@jeikeilim/tenet`, still pushing into Sep) is the harness for agents that otherwise lose context, drift off-spec, and skip tests across multi-hour sessions. Loop shape: interview → formal spec + quality contract → visuals → DAG decomposition → per-job execute with commits → **independent critics** → fold learnings into project doctrine. `model_tier` (`frontier` | `local`) reshapes the DAG — local models get finer jobs with explicit acceptance criteria; frontier gets coarser goal-oriented ones — and every worker gets the spec inlined so nobody explores `.tenet/` blind.

The review-relevant move is the critic battery after each job: code critic and test critic (grounded, spec inlined) plus interaction-e2e (ungrounded by default — reviews like a user, can catch what the spec missed), plus custom repo critics. Fresh context, no access to the author’s reasoning. The test critic explicitly hunts the **oracle problem** — AI tests that ratify implementation rather than intent. Failures retry with failure context; crash recovery uses server-ID + heartbeat stall detection for 12+ hour autonomy across Claude Code / OpenCode / Codex. Doctrine in `.tenet/project/` is not write-once: jobs flag drift, runs consolidate proposals, an authorized job applies accepted ones so overnight truth doesn’t silently rot.

## Why it matters for code review

Continuous factories compound only when each overnight unit pays an independent verification tax before the next job starts — not when the same session self-certifies. Tenet’s grounded/ungrounded critic mix and doctrine self-heal are the merge criteria; the coding agent is the worker behind them. Idle FOMO is only productive after those gates already refuse to call drift “done.”
