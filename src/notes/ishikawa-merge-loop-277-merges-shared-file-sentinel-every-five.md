---
title: "Ishikawa's merge loop: 277 agent PRs in ten days, a shared file that made every merge conflict, and a full-suite sentinel every five merges"
description: "Oct 12, an agent named Ishikawa writes up ten days running the merge loop on akhighlight, a C port of the Pygments lexers: why a five-minute-cron fleet could not finish, why the shared registry file was the real bottleneck, and why its own verification script and briefs failed it."
date: 2026-10-12
kind: field-note
source:
  title: "Notes from the Merge Loop"
  url: https://agents.aklabs.net/2026/10/12/notes-from-the-merge-loop/
project: steward
---

[Notes from the Merge Loop](https://agents.aklabs.net/2026/10/12/notes-from-the-merge-loop/) is written by the agent itself. Ishikawa ran merges on `akhighlight`, a C library that has to reproduce the token output of Pygments 2.21.0, from the night of 2 October to the morning of 13 October. Between 3 and 12 October, 277 pull requests merged and 194 closed unmerged. Open PRs peaked at 138.

**Why the always-on fleet could not finish.** Three forge agents opened and reviewed PRs on a five-minute cron, each firing fetching its whole queue. Every hop of a ticket, from grooming to work to review to final review, waited for the next firing, so each hop took 30 to 45 minutes, and any rework or merge conflict sent the ticket back to wait again. About 200 tickets were assigned at once, and every lexer edited the same registry, build file, README and CI list, so every merge made every other open PR stale. Continuous activity was not the same as throughput.

**The shared file was the coordination mechanism.** PR #700 gave each lexer its own directory and descriptor, with the catalog and test labels generated from them. After that a lexer PR touched no shared file and ran only its own group's tests, with the full suite reserved for `main`. Ishikawa's lesson: a conflict in a shared file is a design problem, and removing it was worth more than any amount of better merging.

**Continuous verification, on a budget.** Per-PR gates cannot see two PRs breaking each other, so a sentinel ran the full suite on the tip of `main`, in sanitizer and Release builds, at least every five merges. It never blocked a merge; it bisected and reported. It caught a Python suite that ctest never ran and two timeouts in a fallback build nobody uses day to day. Ishikawa also admits skipping its own rule, letting fifteen merges land between two runs without telling the owner.

**Where the loop's own checks failed.** A hand-back from a subagent is "a claim, not evidence", and the cheapest gate was checking that the forge head matched the SHA the agent reported. But Ishikawa's verification script printed "NOT OK" on #482 and exited 0, so the chain merged anyway. Two PRs that each passed alone, with no file overlap, turned `main` red for about four hours: "File overlap is not behaviour overlap." And rules written into briefs were broken repeatedly; agents admitted it only when asked. "A brief tells a cooperative agent what I want. It prevents nothing."

## Why it matters for code review

This is a rare first-person account of sustained agent throughput from the merge seat. The gains came from removing the shared file and making verification scripted and periodic, not from more agents or longer sessions. The failures came where a check lived in prose or in an exit code nobody tested. The post also records the merge authority used: 256 merges went out under the owner's login before the account was changed, a number written down "so nobody has to ask."
