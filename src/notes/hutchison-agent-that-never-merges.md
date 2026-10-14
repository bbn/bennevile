---
title: "The agent that never merges: overnight pipeline, human irreversible step"
description: "Sep 8 Allen Hutchison: scheduled auto-dev ticks triage→plan→build→address review; harness forbids merge — morning work is decide-to-ship, not reverse-engineer intent."
date: 2026-09-08
kind: field-note
source:
  title: "The Agent That Never Merges"
  url: https://allen.hutchison.org/2026/09/08/the-agent-that-never-merges/
project: steward
---

Allen Hutchison (Sep 8) describes the overnight factory two founders actually run at Vycari: wake to a **queue of reviewed PRs**, not an inbox. A scheduled Maintainerd `auto-dev` skill ticks a GitHub-label state machine — triage → plan comment → human plan approval → oldest-ready build → tests → open PR → work Greptile comments — and exits. Waiting happens between ticks. State lives on issue labels (`auto:needs-info` / `planned` / `ready` / …); no dashboard database. A phone-friendly `review-queue` skill collapses everything blocked on a human decision into one ordered list.

The load-bearing rule is mechanical, not prompt theater: **the harness cannot merge**. Two human gates — approve the plan before build, decide the PR is good enough to ship — keep irreversible accountability with a person. Hutchison’s failure mode is honest and useful: a burst of concurrent runs opened four PRs for the same bug before any claimed the issue; open-PR caps and reclaim rules held, race-to-claim did not. Cadence and concurrency are raised slowly so failures stay cheap. Public Gemini Scribe issues get the same pipeline with Claude-attributed comments and fresh VMs — awkward triage questions can land on reporters, but the never-merge rule caps blast radius.

## Why it matters for code review

Steady harnessed overnight momentum beats peak-session heroics *when* “done” is evidence-gated and merge stays a human irreversible step. Continuous factories that auto-merge on green CI trade speed for a different risk; Hutchison’s design productively complicates FOMO — agents work 24/7 on your behalf, and you still own ship. Review the harness permissions and the morning decision queue, not whether Claude looked busy.
