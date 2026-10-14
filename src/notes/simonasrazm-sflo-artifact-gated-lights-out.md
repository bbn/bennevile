---
title: "SFLO: lights-out only advances when the gate artifact exists"
description: "Mar 19 Simon Factory Lights Out: six sequential gates (Discover→Build→QA→Security→Verify→Ship), each requiring a named markdown artifact — no artifact, no progress; inner Build/QA loop capped at 10 rounds."
date: 2026-03-19
kind: field-note
source:
  title: "SFLO — Simon Factory Lights Out"
  url: https://github.com/simonasrazm/simon-factory-lights-out
project: steward
---

[simonasrazm/simon-factory-lights-out](https://github.com/simonasrazm/simon-factory-lights-out) (SFLO, Mar 19; still updated mid-Sep) is a gated pipeline protocol for building with agents: six sequential stages, each producing a **required artifact**. No artifact, no progress. No skipping.

Gate 1 (Discover / PM) writes `SCOPE.md`. An inner loop then alternates Gate 2 (Build → `BUILD-STATUS.md`) with Gate 3 (QA → `QA-REPORT.md`) and Gate 3.5 (Security → `SECURITY-REPORT.md`), capped at **ten rounds**, bouncing back to Build when scores fall below threshold or a critical finding appears. Only then does Gate 4 (PM Verify → `PM-VERIFY.md`) grade the whole; a non-A grade returns to the inner loop. Gate 5 (Ship → `SHIP-DECISION.md`) is the exit. Scout matches specialized agent directories (`BRIEF.md` + `SOUL.md`) to roles from the user prompt; `pipeline.yaml` owns models, thresholds, skills, and runtime policy across Codex, Cursor, and Claude installs. Multiple factories can run in parallel under `.sflo/` without sharing locks or state. Deterministic checks on project-relative deliverables named in `SCOPE.md` keep Gates 2–5 from treating prose as proof.

The author’s own note points a newer [Waydriver](https://github.com/simonasrazm/skills) variant as stronger for some workloads — SFLO itself remains the explicit lights-out contract: progress is artifact-shaped, not chat-shaped.

## Why it matters for code review

Continuous overnight momentum fails when “done” is a model’s last message. SFLO’s review surface is the gate file set: if QA or Security never wrote a report that clears threshold, the factory does not advance — the same fail-closed instinct you want on a merge queue. Steady harnessed throughput compounds past a heroic Claude burst only when each overnight hour leaves auditable artifacts a morning reviewer can open without replaying the session. Bursts still win for inventing scope; the harness wins for refusing to ship without the paperwork.
