---
title: "Harness-of-Harness: loops that separate build tests from independent eval"
description: "Sep 1 HoH wraps existing coding harnesses in planning–coding–testing iterations that force new capability each loop, schema-constrained artifacts, and an independent tester — +52% avg relative vs standalone harnesses."
date: 2026-09-01
kind: paper
source:
  title: "Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement"
  url: https://arxiv.org/abs/2609.01481
project: steward
---

Autonomous greenfield development isn’t “longer SWE-bench.” Yan, Su, Zhang and coauthors argue the real failure mode is *coherence over time*: lost requirements, local fixes that violate distant constraints, repair loops that never grow capability, and premature “done.” Their answer sits *on top of* existing coding harnesses (Codex, OpenCode, Pi): Harness-of-Harness (HoH).

Each iteration: a planner must both clear outstanding problems *and* deliver a small new capability; a developer embeds focused tests while implementing; a tester then independently evaluates the system against overall requirements *and* the plan (white-box + black-box; functional, completeness, usability, even audio/visual when relevant). Structured reports feed the next plan. Artifacts are schema-constrained (bad shape → retry) — constrain verifiable outputs, don’t prescribe the workflow. Continuity is progressive disclosure of persisted files (index first, detail on demand), role-scoped tools/skills, reuse over recreation, and versioned project history so you can roll back after a regression.

Receipts: across GameCraft-Bench, FrontierSWE, and ProgramBench, three harness–model pairs beat the standalone harness after three iterations — average relative gain 52.25%, max 82.86%. On FrontierSWE with Codex+GPT-5.5, ten iterations move 22% → 72.67%. Multi-day open-ended run (>70 iterations): a playable FPS with story, combat, polish, and audio, trajectory committed to GitHub after each stage.

## Why it matters for code review

Same pattern as a healthy PR→merge line: the agent that wrote the change doesn’t get to grade it alone. HoH’s independent tester is the research receipt for separating implementation-time feedback from acceptance evaluation — and for refusing loops that only repair without shipping new capability. If your factory’s “verify” step is the coding agent’s own unit tests, you built a self-grading homework loop, not a merge gate.
