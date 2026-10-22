---
title: "Two loops and one gate: an unattended slow loop holds, and autonomy is earned per project by tests proven to fail"
description: "Oct 22 Shai Kappel on six weeks of agents across solo projects: a hub loop has run unattended since mid-September, every job ending in a PR a human approves, while the fast per-project loop is parked. Autonomy is a per-project level set by oracle coverage and escalation rate, and no project is above level zero yet."
date: 2026-10-22
kind: field-note
source:
  title: "Two loops and a human"
  url: https://dev.to/shai_kappel/two-loops-and-a-human-41ig
project: steward
---

Shai Kappel's [six-week write-up](https://dev.to/shai_kappel/two-loops-and-a-human-41ig) opens with a status line most agent posts skip: the **slow loop has run unattended since mid-September**, and the fast loop ran for about ten days on one project and **is not running today**. The problem he is solving is one person across several projects with agents doing most of the typing, where the agents are "confident, fast, and have no memory of last week."

The slow loop lives in a hub repo of rules and distilled memory. A daily machine-check file, a daily digest, a Sunday sweep and a monthly memory rewrite each **end in a pull request a human approves**; the jobs may capture, route and propose, but never merge or delete. The sweep's first version asked "close or park?" per aged item and the list grew to 22. Now it proposes a verdict table with evidence and a hash, the human answers `go` once, and the apply step refuses if the table changed after approval.

The single gate is a protected main branch. The human's PRs need approval from a model reviewer that always runs from the trusted branch's copy of its own definition, so a PR can't bring its own reviewer; the automation's PRs need the human. A PR is mergeable when four things hold at one commit: a standing approval, no commits since, CI green (no checks at all is not green), and a clean security pass, and the digest prints that verdict for every open PR.

The fast loop's ten days produced the incident list. A resume path skipped the plan-approval cut, so **an unapproved plan executed for 78 minutes**. A wrapper parked for a human because it didn't recognize "Phase 14 is already complete", then did it again when the banner was reworded; the rule now is that finished is a state, not a sentence. Eleven checks that could not run read as passes, and a "drop is clear" message sat over 58 unfiled files.

So autonomy became a **per-project level, not a mode**, derived from two measured numbers: oracle coverage (a layer counts only when its test is decisive and has been made to fail on a deliberate break, with date and commit) and the escalation rate of stops the machine couldn't answer. The ladder runs from supervised phase to unattended roadmap, and the level is whatever the last window of phases supports, never the best ever reached. **No project is above level zero yet.**

## Why it matters for code review

This is a useful counterweight to overnight throughput stories. The part that keeps working around the clock is the slow loop that proposes and waits for one approval; the fast loop that would let agents run whole phases unattended stalled on state bookkeeping, not code quality. Kappel's bar for letting a loop run without a person is that every check has been seen to fail, which is the same distinction between a green suite and a [verifier with teeth](/posts/peter-stratton-dark-factory-reviewers-cannot-edit/) that keeps coming up in always-on factories. It is a single founder's self-report with no merge counts, so read it as a design and incident log rather than evidence of output.
