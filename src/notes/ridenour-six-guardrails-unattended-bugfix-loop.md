---
title: "Six guardrails so an unattended bug-fix loop can leave the desk"
description: "Sep 2026 Brett Ridenour: draft PRs only, P2/P3-only autofix, never push main, halt on broken baseline or three consecutive fails, hard wall-clock cap — scar tissue as the safety model."
date: 2026-09-01
kind: field-note
source:
  title: "Six Guardrails on My Unattended Bug-Fix Loop"
  url: https://www.brettridenour.com/blog/six-guardrails-on-my-unattended-bug-fix-loop
project: steward
---

[Brett Ridenour](https://www.brettridenour.com/blog/six-guardrails-on-my-unattended-bug-fix-loop) (September 2026) runs `/autopilot 2h` inside Freebo: a Claude Code skill that stress-tests staging in Chrome, triages bugs, and attempts small fixes while he is away. The pitch sounds unsafe until you read the six rules pinned at the top of the skill file — scar tissue, not aspirations.

Exact fence: **draft PRs only** (never merge, never mark ready-for-review); **P2/P3 only** get `claude-fix` — P0/P1 become `human-review-required` and the fix loop refuses them; **never push to main** (`auto/fix-issue-<n>` branches only); **halt on broken baseline** if typecheck or build fails at iteration start (`HALT.md`); **halt after three consecutive fix failures**; **hard wall-clock cap** checked from an on-disk `END_TS` so compaction cannot lose the deadline. Severity is a fork, not decoration: autonomous agents get safer by narrowing the allowed target set, not by hoping for a smarter classifier. A bad night’s blast radius is a stale draft-PR queue you can bulk-close, not an in-flight merge. Heartbeats stay in `STATUS.md` — one digest per iteration — so “unattended” does not mean a phone full of live FIX_COMMITTED spam.

## Why it matters for code review

Continuous overnight factories only beat peak-session heroics when the harness owns what the agent is *not* allowed to do. Ridenour’s receipts relocate judgment: machines bring draft inventory and loud halt signals; humans still own irreversible steps, high-severity bugs, and the merge button — without paying attention tax for every verify-fix cycle.
