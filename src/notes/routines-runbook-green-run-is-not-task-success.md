---
title: "A green routine run means the session exited, not that the job got done"
description: "Oct 5 Routines Runbook: Anthropic's own docs say a green status on a Claude Code routine only means the session started and exited without an infrastructure error. Three ways unattended runs fail while reporting success, and an eight-point pass that makes an unreadable source look different from an empty one."
date: 2026-10-05
kind: field-note
source:
  title: "Why your Claude Code routine reported success and did nothing"
  url: https://runbook.scosovan.com/claude-code-routine-reported-success-did-nothing/
project: steward
---

The piece starts from one sentence in Anthropic's routines documentation: a green status in the run list means the session started and exited without an infrastructure error, and "it does not mean the task in your prompt succeeded." For work that runs with nobody watching, the run list is usually the only thing anyone looks at, so "it tells you the machine worked, not that the job got done."

## Three failures that all show green

**The source that couldn't be read.** A mail connector times out and the routine writes "no urgent messages." A failed calendar connector renders an empty schedule, which reads as a free day. No news and good news come out looking identical.

**The check that never ran.** A health check that can't reach its endpoint and says nothing about it reads exactly like a healthy system. The author points to a specific, catchable signature on the default cloud environment: a 403 with `x-deny-reason: host_not_allowed`. It's only useful if the prompt is written to catch it.

**The run that fired at the wrong time.** Jobs scheduled on the hour can start minutes late, and a missed local task can run as a catch-up at 11pm and still write "today" about a day that's nearly over.

## The fix worth stealing

Of the eight checks in the article, two do most of the work. The first is "honest when blind": every source records exactly one of two outcomes, `read: <count> items for <window>` or `unavailable: <exact error>`, so "a source that could not be read must never render as a source with nothing in it." The second is a verification step that re-opens the run's own output and checks it against what was read, and it has to be able to fail the run, because "a verification section that always passes is decoration." Runs get an explicit OK or PARTIAL status and a log line, so a job that has been quietly failing for two weeks shows up as a pattern instead of a silence.

The other checks cover idempotency (key state on the head commit SHA, not the PR number, since five pushes means five independent runs), stripping connectors down to least privilege before the first run, and reading the clock before reporting.

## Why it matters for code review

The case for always-on agents rests on modest, verified progress piling up while nobody is at the keyboard. This article is a reminder that the word doing the work is "verified." The platform's success signal is about infrastructure, so the job has to report on its own work, and a missing input has to look different from an empty one. Otherwise overnight momentum is just overnight green. Compare [an agent that exited cleanly, changed nothing, and reported success](/posts/wissemb-agent-exited-cleanly-noop-success/) and [a verification layer built for overnight runs](/posts/0xgosu-overnight-verification-layer/).
