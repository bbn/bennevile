---
title: "A routine that runs is not a job that got done"
description: "Aug 2026 Paul Kuo: Cherny’s 388→180 maintenance PRs vs 150 days of launchd/Cowork jobs — silent failure when green logs lie; verification must sit outside the executor."
date: 2026-08-14
kind: field-note
source:
  title: "The AI That Patrols My Systems Every Day — Until the Watchdog Itself Broke"
  url: https://paulkuo.tw/en/articles/agentic-operations-silent-failure/
project: steward
---

Paul Kuo’s Aug 2026 essay is the productive complication for daily agent maintenance: **a routine that runs is not the same as a job that got done**. He reads Boris Cherny’s Anthropic experiment — Slack channel `proj-claude-maintains-apps`, daily Claude routines across iOS/Android/desktop/web/CLI/Agent SDK (crash fuzzer, dup unifier, dead-code remover with next-day log proof, flaky/useless-test cleanup, abstraction police), **388 PRs opened / 180 merged** after Claude Code Review + human review — as a shift in who *initiates* work. The durable asset is operational knowledge encoded as routines you tune for tomorrow, not a single peak chat.

His own side is 150 days of defensive automation: **23 launchd jobs**, crontab, hooks, and Cowork schedules (11 of 39 still active). The failure modes that matter for always-on factories all look healthy: exit green, logs full, dashboard lit — and nothing intended happened. Three varieties: (1) action ran with no effect (`git add` on paths later `.gitignore`’d, error swallowed by `2>/dev/null`, ~**90 days** silent); (2) real alerts that were false (laptop sleep gaps); (3) the watchdog itself broken while reporting all clear (Aug 9 pre-push “health check” crashed, then printed hardcoded **“no divergence”** while origin was three commits behind, including a security fix). He changed the string to “divergence state unknown (detection did not complete)” — wording that must never revert.

The load-bearing design claim: **verification must sit outside the executor**. Cherny’s PR + automated review + human review + CI is an external auditable interface; the 388→180 gap is the funnel working, not a pure quality insult. Offensive routines fail loudly (no PR today); defensive ones produce nothing when healthy — indistinguishable from never having run — so roughly half his jobs exist only to prove others aren’t lying (contract curls vs hardcoded expected statuses, Sunday restore drills, chaos drills that manufacture failures). Routines also expire; disabled schedules keep a one-line “deactivated on / replaced by” note so six months later nobody fears turning them off.

## Why it matters for code review

Continuous overnight maintenance without an independent “did it actually happen?” layer is FOMO cosplay. Green CI and a confident summary are the same costume Kuo’s watchdog wore. Always-on factories compound only when merge gates, contract tests, and restore drills refuse to let the agent grade its own shift — and when someone owns routine lifecycle so yesterday’s cron does not become unkillable folklore.
