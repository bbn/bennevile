---
title: "Mouse: seven overnight requirements + house rules that grade events"
description: "Aug 28 field note: unattended coding needs verify-outside-worker, admissible evidence (not narration), budget reservation, resumable controller, and stop-at-merge — plus inject/copy/grade playbooks."
date: 2026-08-28
kind: field-note
source:
  title: "How to run code agents overnight"
  url: https://mouse.dev/blog/running-code-agents-overnight/
project: steward
---

Pete’s Aug 28 Mouse post is a clean tortoise checklist for the FOMO half of the week’s thesis: always-on agents are possible only when the *supervisor* is designed for sleep, not when the model is “good enough” in a peak session. The seven requirements: (1) continue without user questions — overnight converts `ask`→`deny` with a risk flag, and auto-kills attempts stuck in `awaiting_input`; (2) **verification outside the worker’s context** — the agent that wrote the diff does not grade it; (3) evidence that excludes the worker’s thoughts — ledger events carry an admissibility flag; narration is for debug, gates cite diffs/verdicts/`check_status`; (4) hostile-repo protection — issues/TODOs/README treated as untrusted data in delimited blocks; sandbox + per-turn git tokens + default-deny egress; (5) budget **reservation** before parallel starts (not a shared balance ten agents all read as “under”); (6) controller resumable from persisted state (kill anywhere, another process resumes — Postgres advisory lock for single-flight); (7) hard stop before irreversible actions — overnight runs do not merge, push, or open a PR (`no-auto-pr-overnight` CI lint).

The house-rules layer is the review-shaped half. A `SKILL.md` alone fails silently overnight (skill never selected; load ≠ follow; no proof steps ran). Mouse attaches behavior three ways: **inject** rules every turn, **copy** matched playbook steps into the todo list, **grade** pass/fail/blocked from emitted events instead of the agent’s summary. Ten rules include `prove-it`, `pin-first`, `small-units`, `try-dont-ask`, and `stop-at-merge` (“Drive to a PR with evidence attached. Never merge or force-push a shared branch”). Ceremony scales lite/full/ultra so process stays proportional.

## Why it matters for code review

Burst Claude mastery without an admissible evidence path is still heroics with a morning tax. Mouse relocates review into the overnight harness: independent verifier, ledger that cannot cite self-serving narration, and an explicit merge cord so unattended throughput compounds as *reviewable artifacts*, not merged risk. Pair with Cherny’s continuous verification stack — continuous motion only beats peak-session FOMO when continuous measurement and a human-owned merge gate sit in the same factory.
