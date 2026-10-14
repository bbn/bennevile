---
title: "pr-autopilot: opt-in stages from open PR to green merge — never silent by default"
description: "May 6 FelipeOFF Claude Code skill: Reviewer + Author subagents triage every human/bot comment, attribute CI before patching, stop on business rules; --auto is explicit, bare run only opens the PR."
date: 2026-05-06
kind: field-note
source:
  title: "pr-autopilot — full Pull Request lifecycle skill"
  url: https://github.com/FelipeOFF/pr-autopilot
project: steward
---

[FelipeOFF/pr-autopilot](https://github.com/FelipeOFF/pr-autopilot) (created 6 May 2026; still shipping features through Sep) is a Claude Code skill that turns the long PR ritual into one orchestrated command — **create → review → triage every comment → respond → re-review → resolve conflicts & fix CI → wait for CI → merge** — with the important default that **every stage is off until you ask**. Bare `pr-autopilot` opens the PR and stops. `--review`, `--resolve`, `--merge`, or `--auto` turn the factory on deliberately.

The split is Reviewer vs Author. The Reviewer runs parallel code and test tracks (deep maintainability audit plus test-value assessment that will recommend deleting tautologies), posts structured findings, and treats “works” as insufficient for approval. The Author, under `--resolve`, pulls **every** comment already on the PR — humans and bots (Copilot, CodeRabbit, Sonar) — classifies critique vs noise vs already-handled, can refute a wrong blocker with evidence, resolves merge conflicts by merging base in (no force-push), and fixes failing CI only after **attributing** the failure: is the file in your diff, does the same job fail on the base branch or sibling PRs, is it a missing secret? Your breakage gets patched; someone else’s never gets papered over with a skipped test. Two hard stops stay human: business-rule changes route through an explicit confirm skill before the Author ships a decision you did not make, and “this isn’t my PR’s fault” CI triage posts only with permission (once), staying quiet under `--auto` with a drafted note instead. Verification gates (lint, typecheck, tests) must stay green before any push; state under `.pr-autopilot/<PR>/` makes runs resumable. Optional `--jev` Specgate and stacked `--cascade` forests are further opt-ins — `--auto` does not silently enable them.

## Why it matters for code review

Continuous verified momentum is not the same as a skill that merges by surprise. pr-autopilot’s receipt is **admission control on autonomy**: the same lifecycle that drains overnight comment and CI debt only runs as far as the flags allow, and CI attribution plus business-rule stops are the review surfaces that keep volume from becoming silent policy change. FOMO that the PR is still red at 9am is real — so is review debt from an agent that “fixed” a flaky base-branch job by weakening the suite. Prefer an opt-in loop that resumes from disk over another peak session that re-discovers the same threads from scratch.
