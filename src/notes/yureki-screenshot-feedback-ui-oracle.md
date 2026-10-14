---
title: "Screenshot as oracle: done requires a fresh capture, not green DOM tests"
description: "Aug 16 yureki_lab: Playwright capture harness + report.json (overflow, console errors, failed requests) + stale-hash gate — multimodal screenshots close the UI loop agents already have for pytest."
date: 2026-08-16
kind: field-note
source:
  title: "How I Gave My AI Coding Agent Eyes: A Screenshot Feedback Loop for UI Work"
  url: https://dev.to/yureki_lab/how-i-gave-my-ai-coding-agent-eyes-a-screenshot-feedback-loop-for-ui-work-jce
project: steward
---

[yureki_lab](https://dev.to/yureki_lab/how-i-gave-my-ai-coding-agent-eyes-a-screenshot-feedback-loop-for-ui-work-jce) (Aug 16) names a concrete failure mode for always-on coding agents: backend work has oracles (`pytest`, `tsc`); UI work had the human. Agents would ship green DOM tests while modals rendered behind content or buttons sat four hundred pixels off-screen — `toBeVisible()` is happy with elements no human can click. Pasting screenshots back by hand made the agent dependent on watching eyes, which kills unattended overnight runs. The fix wasn’t visual-regression baselines (useless while the UI is still being invented); it was **perception** — a ~60-line Playwright harness that boots the app, captures mobile/desktop PNGs, and emits `report.json` with console errors, failed requests, and `scrollWidth > clientWidth` overflow flags.

The harness alone didn’t stick. Soft “please review screenshots” was skipped once tests were green. Three contract changes made completion mechanical: (1) completion must include raw `report.json` plus a one-line description of each capture, (2) a checklist of fail-able questions (clipping, overflow, interactive elements in viewport, empty `consoleErrors`) instead of “review,” (3) a **stale-capture gate** — tree-hash in the report must match current sources or the run fails. Honesty limits are explicit: the loop catches broken layouts, not taste; “is this good?” stayed with the human. Cheap numeric signals (overflow, console errors) beat pixels for a whole class of bugs.

## Why it matters for code review

Overnight factories stall wherever the only sensor is a human. Closing the UI oracle gap is the same verification-tax move as requiring CI on every agent commit: “done” means a fresh artifact from the current tree, not a self-report. If agents keep shipping overnight UI without a capture gate, morning review inherits layout debt the loop could have rejected while you slept — FOMO with a receipt. Bursts still win for novel visual intent; continuous throughput wins when every mergeable UI change already survived an oracle the agent can query without you.
