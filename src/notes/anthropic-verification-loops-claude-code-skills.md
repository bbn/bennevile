---
title: "Verification loops as skills: encode the morning tax once"
description: "Jul 22 Anthropic (Delba de Oliveira): turn the manual checks you keep repeating into Claude Code skills — standalone, embedded, chained, or on every PR — so modest continuous verify runs without relying on memory."
date: 2026-07-22
kind: field-note
source:
  title: "Building verification loops in Claude Code with skills"
  url: https://claude.com/blog/building-verification-loops-in-claude-code-with-skills
project: steward
---

Delba de Oliveira’s Jul 22 Anthropic post is the operational half of “higher bar than human code”: verification is how agents check work before claiming done, and whatever Claude cannot infer from typecheckers, linters, tests, and runtime errors is still a **manual follow-up you repeat**. Those follow-ups become *verification loops* — iterative check-and-fix cycles — and in Claude Code they package as **skills** so every session applies the same checks without relying on someone remembering `/verify`.

Built-ins they name: `/verify` (build/run/observe), toolchain errors Claude already acts on, Code Review research preview, GitHub Actions that invoke a verification skill on push/PR, spec-validation skills, and Managed Agents rubrics with a separate grader. Custom loops start from the corrections you made this week, written like a day-one handoff to a teammate. Placement matters: **standalone** (invoke after the artifact exists), **embedded** (append to the producing skill so it always fires), **chained** (one skill ends by calling the next — their internal pattern: `/code-review` → `/simplify` → `/verify` → design checks), then **on every PR** so teammate and agent changes share the same gate. The promotion rule: when you are running a check after every change, it has earned embed or chain; when the chain is stable, promote it to team PR infrastructure.

## Why it matters for code review

The tortoise is not a longer heroic Claude session — it is modest verified momentum that keeps running. Skills are how you stop paying the morning tax in personal diligence. Burst mastery still works when the problem needs a peak session; it loses when volume makes “remember to verify” the failure mode. Encode the check once, chain it so the agent cannot quietly skip it, and reserve human attention for the judgment the skill cannot write down. If your always-on story has no packaged verification loop, you bought FOMO and still sample diffs by hand at 9am.
