---
title: "Conor Bronsdon: when agents write most of the code, the test suite is the gate and people sign off at the boundary"
description: "Drawing on Graphite's Greg Foster and AMD's Anush Elangovan, a Chain of Thought explainer argues that review at agent volume moves from reading every line to rerunnable tests, small stacked diffs, and human sign-off on what enters and leaves the agents' working enclosure."
date: 2026-10-25
kind: field-note
source:
  title: "Review the boundary, not every line"
  url: https://dev.to/conorbronsdon/review-the-boundary-not-every-line-5h94
project: steward
---

Conor Bronsdon's [Review the boundary, not every line](https://dev.to/conorbronsdon/review-the-boundary-not-every-line-5h94), cross-posted from his Chain of Thought podcast, pulls two guests into one answer to the question of how to review code that agents write around the clock. His short version: a passing suite is the gate, the diff is the record of what shipped, and the human sits where a failure is expensive.

The volume side comes from Greg Foster, co-founder of Graphite. He describes merge load jumping from 20 changes a day to 50, or 100 once bots join, and notes that longer changes draw fewer comments per line: a 10-line PR gets something like five comments, while a 2,000-line one is where reviewers glaze over and type LGTM. He also drops the old assumption behind review, that a teammate wrote the change and you are taking a second look. Now, in his words, the reviewer may be the first person ever to read the code.

The gate side comes from Anush Elangovan, a corporate VP of AI software at AMD, who had just checked a week at 6.5 billion tokens. His issue agent watches one tracker, has to write a test for every fix before committing, and can ship if CI is green; he won't hold that for someone to read every line. When he disagrees with a result, **he doesn't argue the diff, he adds a requirement the suite can fail**, such as a 50-microsecond dispatch budget in his GPU simulator, and the agent goes back to refactor on its own. On one task he stopped an agent that wanted to implement everything, asked for 100 corner-case tests first, and read those instead of the implementation.

Two caveats keep this from being "stop reading code." Foster still wants a person on the input, in the form of a written design doc, and on the output, where security and codebase context get absorbed, and he leans on stacked diffs so review, CI, and the agent all work one small change at a time. Elangovan keeps jobs narrow and schedules focused agents rather than letting them spawn their own swarms, and he reviews what goes into and comes out of the rig they run in.

## Why it matters for code review

This is a concrete account of verification under sustained agent volume: put the effort into a suite that can say no, turn every objection into a check so it doesn't come back next run, and spend human attention on the plan, the tests, and the changes that cross a boundary where a mistake is costly to undo.
