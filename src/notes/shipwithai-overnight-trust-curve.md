---
title: "Overnight FOMO is a trust problem — nap runs before full nights"
description: "Apr 9 Ship with AI: 56h/week idle agent capacity; night-shift skill wraps Ralph with pre-flight, kill conditions, and morning categorization — calibrate small before you sleep on it."
date: 2026-04-09
kind: field-note
source:
  title: "Ship While You Sleep"
  url: https://shipwithai.substack.com/p/ship-while-you-sleep
project: steward
---

Manuel Salvatore Martone and Alessandro Magionami’s Apr 9 issue frames the psychological half of always-on agents as accounting: ~15 focused human hours/week versus an agent that can run 168. Sleep alone wastes ~56 hours — about 3.7× typical focused build time — if nothing trustworthy is queued. The blocker isn’t missing loop tech (Ralph, Claude `/loop`, specs, skills); it’s **trust you never built**, and the catastrophic story of waking to eight hours of corrupted code.

Their answer is ritual around the loop, not a smarter model. The `night-shift` skill owns PREPARE and REVIEW; Ralph (or native loop) owns the overnight grind. Pre-sleep: reality check (first runs max 1 spec / 1–2h), `check_sleep_ready.py` (clean git, safe branch, tests, typecheck, valid specs), generated guardrails (allowed paths, hard blocks on auth/migrations/env/deps, kill on stuck errors ×3, scope drift, commit-count explosion), and an explicit human start — the skill never auto-launches. Morning: `morning_review.py` categorizes SHIPPED / PARTIAL / STUCK / DRIFTED with timelines, out-of-scope files, and recommended merge/revert — never auto-merge.

The trust curve is the transferable recipe: **nap runs** (1 spec, 1h, daytime) → half-nights → full nights only after calibration. They set first-run success at ~30–40%, climbing toward 60–80% on well-scoped bugs after 5–10 runs — never 100%, never for ambiguous specs. Outcome D (drift into blocked auth) is the scary case that proves the kill condition: abort at the first scope violation beats seven more hours of confident damage. Productive complication: overnight is any unattended window (meetings, workouts); continuous daytime fleets are a different problem.

## Why it matters for code review

FOMO that agents aren’t working on your behalf overnight is real capacity dying on the table — but only after guardrails and a morning judge exist. Continuous harnessed momentum compounds when each night leaves categorized evidence (ship / partial / stuck / drift), not a mystery branch. Pair the trust curve with independent critique or dual-model review: reclaim the night for reversible, kill-conditioned jobs, and spend review bandwidth on diffs the harness already refused or passed against explicit scope.
