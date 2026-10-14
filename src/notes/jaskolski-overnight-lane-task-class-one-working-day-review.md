---
title: "Overnight is a task class, not a ticket: an unreviewed run by the next working day counts as failed"
description: "Sep 26 Michał Jaskólski, AI Developer Toolkit: score every ticket on oracle, blast radius and reversibility, and only pre-approved task classes go overnight. Overnight output has to be reviewed within one working day or the run didn't count, dispatch is capped at the next day's review capacity, and the first escaped defect demotes the class."
date: 2026-09-26
kind: field-note
source:
  title: "Shaping a backlog for agents"
  url: https://developertoolkit.ai/en/teams/agent-ready-backlog/
project: steward
---

Michał Jaskólski's guide for tech leads opens with a weekend. On Friday afternoon a team hands three agents tickets from the top of the sprint board. On Monday there are three pull requests: a clean dependency bump, a "fix" for a flaky test that deletes its assertion, and a rewrite of half the billing module because the ticket said "clean up invoice rounding". **"The agents did what the tickets allowed."**

His answer is to decide supervision before dispatch. Every ticket is scored 0 to 2 on three questions. Is there an oracle, a check that fails now and passes when the work is done? What can the change reach? What does undoing it cost? The scores put each ticket in one of four lanes: human-only, interactive, background or overnight. Only a ticket that scores 2 on all three and belongs to a task class the team already approved goes overnight. **"Overnight is a task class, not a ticket."** You approve something like "bump a patch-level dependency and run the suite" once, give it an owner, and the nightly run checks each ticket against that list.

## The rules that keep the night honest

The overnight lane's review rule is blunt: **"Evidence review within one working day, or the run did not count."** The weekly shaping session counts background and overnight tickets against the next day's review capacity and moves the excess back to the queue. Any escaped production defect from an overnight PR sends that task class back to background. A companion page on [unattended agent runs](https://developertoolkit.ai/en/cto-scorecard-guide/tier3-overnight-runs/) adds the mechanics. A dispatch gate counts open PRs for the class, "so dispatch slows when review slows". Every run writes a report, stopped and failed runs included. Metrics count every run, "or the class will look cheaper and better than it is". And an alert fires when a scheduled class produces no report at all, because quiet failure is the usual way these jobs die.

## Why it matters for code review

This is the plainest version yet of how to keep agents working around the clock without burying the morning: decide in daylight what may run at night, size the night to the review that follows it, and score a run by whether its output gets accepted, not by whether it ran. It also complicates the urge to fill every idle hour. Jaskólski's answer to "why do overnight runs fail when the agent is capable?" is usually that the ticket wasn't eligible: no check could fail, the scope reached auth or money, or the morning queue couldn't absorb the output. **"The fix is in the backlog, not in the model."** It's a subscription guide rather than a field report, and it says its thresholds are policies to adopt, not research findings. Read it with [a dispatcher that idles when the review queue is full](/posts/legendev-build-engine-max-open-review-human-rate-limiter/) and [an unattended loop that can't approve its own done](/posts/excubitor-unattended-loop-cannot-bless-own-done/).
