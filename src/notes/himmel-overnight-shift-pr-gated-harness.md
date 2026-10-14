---
title: "Himmel: overnight ticket dispatch that still cannot merge without review"
description: "Jun 2026 yotamleo/Himmel: worktree-isolated Claude Code harness — /overnight-shift opens PRs while you sleep; hooks block main edits and unreviewed PRs; /pr-check multi-agent gate; handover state survives sessions."
date: 2026-06-16
kind: field-note
source:
  title: "himmel — a harness for Claude Code"
  url: https://github.com/yotamleo/Himmel
project: steward
---

[Himmel](https://github.com/yotamleo/Himmel) (yotamleo, June 2026, actively maintained) is a solo/small-team harness *for* Claude Code: worktree isolation, PR gating, Jira tracking, and overnight unattended runs without treating the chat as the system of record. The engine automates the repeats — commit hooks, session guardrails, handover state, Jira sync — so capability is not the scarce resource.

`/overnight-shift` dispatches scoped tickets as parallel agents that branch, self-review, and **open PRs while you sleep**; an auto-arm-on-cap watchdog schedules a relaunch when usage limits approach so a long run survives the wall. Mistakes are structurally hard: hooks block edits on `main`, secret reads, and opening a PR without a passing review at the tool-call layer. `/pr-check` runs a review panel plus a cross-model first pass and gates merge on a clean result, with an adversarial verify-before-critical rule aimed at hallucinated findings. Cross-session **handover** markdown keeps decisions (*why*, not only *what*) so the next session resumes without re-explaining; forge-agnostic GitHub/Bitbucket paths keep the same worktree→PR→merge loop.

## Why it matters for code review

Always-on factories only compound past peak Claude sessions when overnight work arrives as review-gated PRs with durable state — not as a longer babysat chat. Himmel’s overnight dispatch plus hard merge gates is the continuous-throughput pattern: agents keep moving after you leave; humans still own the irreversible stamp.
