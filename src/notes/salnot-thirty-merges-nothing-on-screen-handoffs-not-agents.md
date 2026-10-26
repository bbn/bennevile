---
title: "Thomas Salnot: thirty overnight merges, all green, and no new screen in the app"
description: "Oct 13, Thomas Salnot on a night when six specialised agents merged 30 pull requests with CI green and shipped zero features. Three quarters of pull-request time went to stacks, review loops, and hourly handoffs. He switched to owners per product slice and counting screens that work."
date: 2026-10-13
kind: field-note
source:
  title: "Thirty merges and nothing on the screen"
  url: https://www.salnot.com/projects/bluecliff/thirty-merges-and-nothing-on-the-screen
project: steward
---

[Thomas Salnot](https://www.salnot.com/projects/bluecliff/thirty-merges-and-nothing-on-the-screen) opened his app's preview at 06:45 on day four of building it with agents. Overnight they had merged 30 pull requests, every deploy had run, and CI was green. Three of the merges were features. None added a screen. As the team grew from two sessions to six roles, daily merged pull requests went from 60 to 112 while features merged per day fell from 13 to 5 to 0.

**Where the hours went.** Across 237 hours of app pull requests from opening to merge, about 34% was waiting for the pull request below in a stack, 27% was review loops with a second model, and 18% was gaps between handoffs. The work itself was about 22%. Each screen passed through five roles (spec, design, tests, build, QA) that each woke once an hour, so every handoff could cost an hour and every review or QA finding sent the screen back down the line. One screen's pull request reached 247 commits and about 150 comments without merging, while 51 pull requests of tests waited for the one agent allowed to write code. A median test merged in 22 minutes; a median feature took 8 hours.

**Rules in a document didn't move the agents.** He had written "don't stop after one item" the evening before; every role still woke, did one item, and stopped. A guard hook meant to keep roles in their lanes blocked ordinary commands, and the DevOps agent spent most of the night fixing it. Agents followed what he typed and what failed in CI, not what sat in a doc.

**The reset.** Three owners, each holding one slice of the product with design, tests, and code in one pull request, plus QA running the whole flow once a day after merge. Progress is counted in screens that work in the app. He keeps separation of duties only where a change is judged, not at every step of building it.

## Why it matters for code review

This complicates the case for always-on agent throughput: a factory can run all night, pass every check, and ship nothing a person can see, because review loops and handoff waits ate the clock. Merge count is the number that lied here. The fix was fewer review stages with owners who carry work through merge, and a measure of output that is harder to fake.
