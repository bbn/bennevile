---
title: "Sashiko's 191k kernel reviews: a clean pass is not a bug-free patch"
description: "At LPC 2026, Google's Roman Gushchin updated Sashiko, the open-source agentic harness that watches Linux kernel mailing lists. Phoronix reports 191k patch reviews across 99 lists, 463 CVEs citing it this year, and 1,277 upstream commits. On a 1,000-regression benchmark, Gemini 3.1 Pro found 53.6% of bugs that had already passed human review and merged — and the slides' own caveat is 'Clean pass != bug-free.'"
date: 2026-10-08
kind: field-note
source:
  title: "Google's Sashiko AI Has Completed 191k Patch Reviews, Cited On Nearly 500 Kernel CVEs (Phoronix)"
  url: https://www.phoronix.com/news/Sashiko-Linux-AI-Metrics
project: steward
---

[Michael Larabel at Phoronix](https://www.phoronix.com/news/Sashiko-Linux-AI-Metrics) covers Roman Gushchin's Linux Plumbers Conference 2026 update on [Sashiko](https://github.com/sashiko-dev/sashiko), the Google-sponsored, Linux Foundation–hosted agentic harness that reviews Linux kernel patches from mailing lists. In under a year it has completed more than 191,000 patch reviews across 99 lists, run more than 19 million autonomous Git lookups, drawn 7.6k replies from more than 1.1k developers, and been cited in 1,277 upstream commits and 463 CVEs this year.

## Discovery first, then try to kill the finding

The [LPC 2026 slides](https://lpc.events/event/20/contributions/2645/attachments/2136/4851/Sashiko%20-%20LPC%202026%20(1).pdf) are the denser half of the story. Sashiko is not a one-shot "find bugs" prompt. Stages 1–7 enumerate concerns from different angles — intent, claims, control flow, lifetimes, locking, hardware, security — then stages 8–9 actively try to falsify them against the tree before a concern becomes a finding. Gushchin's design note is that asking the model to report only bugs it can prove at 100% confidence lowers discovery; separating discovery from verification raises it.

On a benchmark of 1,000 real kernel regressions with known later `Fixes:` commits, spanning hundreds of subsystems, Sashiko with Gemini 3.1 Pro scored 53.6% detected or partially detected. Every one of those bugs had already passed human review and merged into mainline. The slides' own caveat belongs on every always-on review dashboard: "Clean pass != bug-free."

## Local mode for agent loops

The project is also shipping a local CLI (`sashiko review HEAD~2..HEAD`) so coding agents can call the same harness inside write → verify → fix loops before a human sees the patch, plus dog-feeding Sashiko on its own PRs. That is continuous review infrastructure sitting under both human mailing-list traffic and agentic coding, not a burst of hero sessions.

## How it fits

This is the clearest public scale receipt for independent verification under sustained load: hundreds of thousands of reviews, measurable catch rate on bugs humans already waved through, and an explicit refusal to treat a green agent pass as proof. It supports the case for modest always-on review factories over peak-session mastery, and it productively complicates any harness that equates "the reviewer said OK" with "the change is safe." Pair it with [greens that prove nothing until you drive them red](/posts/dsalathe-greens-that-prove-nothing-drive-guards-red/) and [AI review as a staffing decision rather than a default](/posts/lin-zhang-ai-review-before-human-approval-is-a-staffing-decision/).
