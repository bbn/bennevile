---
title: "Nightshift: a clock-out gate keeps the punch list a contract, not a vibe"
description: "Jul 2026 Orwa Mahmoud: Claude/Codex/Cursor shifts with persistent punch list, park-don’t-ask, watchman recovery, morning receipts — AdaptTable overnight: 9 items, gate-green commits, local until human push."
date: 2026-07-19
kind: field-note
source:
  title: "Nightshift — accountable long-running coding shifts"
  url: https://github.com/orwa-mahmoud/nightshift
project: steward
---

[Nightshift](https://github.com/orwa-mahmoud/nightshift) (Orwa Mahmoud; MIT; Claude Code, Codex, and Cursor) is a harness for the failure mode that kills overnight momentum: the agent finishes the easy half, quietly rewrites “done,” parks the hard items as “deserving a focused session,” and leaves a question at 02:40 that freezes the rest of the shift until morning. Nightshift’s answer is a **durable work contract** — persistent punch list, item-level verify/commit lines, a **clock-out gate that rejects premature stop** while boxes remain open, a parking lot with chosen defaults instead of live ASK, and a watchman that recovers failed sessions across compaction.

The Jul 19 AdaptTable overnight run is the public receipt: **nine punch-list items**, one conventional commit per item between ~01:50–04:18, **four issues closed on merge**, **v1.2.0 on npm the same day**. The contract enforced **one gate-green commit per item** (`pnpm check` with coverage thresholds, plus Playwright 61/61 and a clean Sonar pass on the site path); **park, don’t ask** — five owner decisions logged to `parking-lot.md` with defaults so the night continued; **push stayed human** — branch local until morning review. A later documented **45-hour** contract survived a host handoff into a human-reviewed **67-commit** PR. Morning review starts from the morning receipt and per-item receipts (state, verification, token/time tables where the host exposes them), not a marathon chat scroll.

Ready-made Hunt/Quality shifts and open-ended timed objectives sit beside hand-authored lists; artifact mode works without Git. Honest limits: host recovery/CLI surfaces differ; commits stay local unless the contract authorizes otherwise; documented runs are examples, not benchmarks.

## Why it matters for code review

Always-on agents only beat bursty Claude Code heroics when unfinished work remains a file-level contract under a deterministic gate — and when ambiguity parks instead of freezing the factory. Nightshift’s review surface is the morning receipt plus reversible, gate-checked units waiting for human promote: FOMO that nothing useful ran overnight is often one early clock-out or one unanswered question that turned eight hours of capacity into idle infrastructure.
