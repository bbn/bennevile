---
title: "Bello: independent supervisor, completion review, and adversary around the coder"
description: "Makson179 Bello (May 2026; still shipping Sep 24): Codex/Claude/API coder in a disposable workspace; fresh-context supervisor for risky actions; completion review + adversary refuse 'done' on claims; ProgramBench C+A +26% mean vs raw; Efficient Budget −66% Codex weekly usage at same quality."
date: 2026-05-24
kind: field-note
source:
  title: "Bello — build a cheaper, more reliable coding team from the models you already have"
  url: https://github.com/Makson179/Bello
project: steward
---

[Makson179’s Bello](https://github.com/Makson179/Bello) (MIT; `pipx install bello`; still landing Windows/sandbox hardening as of Sep 24) is the overnight control plane that refuses the two bad defaults: babysit every command, or grant full permissions and hope. A persistent coder (Codex CLI, Claude Code, or API providers) works in a disposable workspace with network off by default. Around it, four optional roles each get their own model and reasoning effort: a **runtime supervisor** that judges risky boundary crossings from a fresh, small context and can restart a spiraling generation with a structured `HANDOFF.md`; a **completion reviewer** that certifies behavior against the task and a validation ledger, not the coder’s readiness claim; an **adversary** that attacks the finished artifact without the development history; and a local **log distiller** that keeps tool-output tokens on-machine instead of stuffing the coder’s context.

The measured receipts matter for continuous factories. On ProgramBench (Solar / Samtools / Rumdl), Sol Ultra with one completion pass plus one adversary pass raised mean completion from **53.53% to 67.67%** versus raw Codex (+26.4%), at roughly 2.5× wall time — slower nights, denser verified work. An Efficient Budget mix (Luna-heavy coder/review/adversary) used **66.3% less** of a weekly Codex limit than raw Sol XHigh while matching or slightly beating mean score (48.80% vs 48.10%) across twelve runs — same quality, less burn. Runtime-only supervision still lifted long contradictory-spec tasks without the final exam. Fail-closed approvals: if the supervisor is unreachable or returns garbage, the action is declined. Morning surface is `.supervisor/FINAL_REPORT.md` plus inspectable `events.jsonl` / `PROGRESS.md` / `DECISIONS.md`.

## Why it matters for code review

Always-on harnessed momentum beats a heroic Claude Code session when “done” is an independent exam, not a model’s end-of-context confidence. Review Bello the way you review a merge queue: who owns the risky-action gate, whether completion and adversary share context with the writer (they must not), and whether the morning report separates validated checks from remaining risk. The FOMO that agents weren’t working overnight is the wrong fear if “working” meant self-graded passes; the scarce review surface is the fresh-context supervisor ledger and the adversary’s surviving findings.
