---
title: "Agents Never Sleep: PARK the hard ticket, don’t freeze the night"
description: "Jul 2026 TokonoMix ANS: unattended ASK→PARK autonomy contract, deterministic test gates + git revert, watchdog resume, morning report that separates trusted done from daylight review."
date: 2026-07-06
kind: field-note
source:
  title: "Agents Never Sleep — autonomous execution governance for coding agents"
  url: https://github.com/TokonoMix/agents-never-sleep
project: steward
---

[Agents Never Sleep](https://github.com/TokonoMix/agents-never-sleep) (TokonoMix; v1.0.0 Jul 6, README still the living spec through v1.3.x) names a missing layer above Claude Code / Codex / Cursor: **autonomous execution governance**. It does not write code or judge correctness. It decides what an unattended run does when the worker is unsure — so one ambiguous ticket cannot burn the rest of the backlog while you sleep.

The failure mode is familiar. Without governance, ticket 13 hits a schema-direction question at 22:11; the agent’s only move is ASK; tickets 14–40 never run; morning is nine hours and real money frozen on a five-second human decision. ANS replaces that binary with an **ASK / PARK / HALT** contract enforced *structurally* (deny-hooks at the tool layer when `CLAUDE_UNATTENDED=1`, not a promise in a context window that will compact at 2am). Unattended, ASK is forbidden and becomes PARK. **PROCEED** only for low-blast-radius, reversible, isolated choices (naming, internal structure) — and every PROCEED is git-snapshotted so a red gate reverts. **PARK** defers *this* ticket with candidate interpretations and the exact morning next-action, then moves on. **HALT** is reserved for genuinely irreversible danger with no safety net. Hard-PARK surfaces include migrations, public APIs, auth/tenant boundaries, money, and unclear requirements.

The rest of the spine matches what continuous overnight factories need: a durable per-ticket state machine (`next` / `complete`); a **deterministic gate** (your test suite) as the only HARD block — delegated multi-model “council” review is advisory and can only withhold a trusted stamp (`DONE_LOW_CONFIDENCE` + needs daylight review); attempt/loop caps and a low-yield breaker so a cursed item cannot eat the night; `ans-run` preflight (config TOFU, autonomy flags as explicit human decision, working-tree flock); a heartbeat **watchdog** that resumably restarts overload freezes and reaps leaked MCP child trees; a ranked morning report (trusted done / daylight review / parked / blocked / blind spots). Honest limits: only Claude Code is live-verified for hook enforcement; other CLIs are built-to-contract; benchmarks are a methodology, not claimed results; 1-star early ecosystem.

## Why it matters for code review

Always-on agents beat peak-session heroics only when uncertainty does not halt the factory. ANS’s review surface is the morning report plus reversible units — not a transcript of a frozen ASK. Continuous verified momentum looks like PARK-and-continue under a deterministic gate, with humans owning the hard decisions daylight—and FOMO when nothing ran overnight is often just one unparked question that stopped everything else.
