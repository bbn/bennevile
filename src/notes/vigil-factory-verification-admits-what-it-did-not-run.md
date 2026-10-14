---
title: "A factory whose PRs admit what they did not run, and an agent that fixes the machine overnight"
description: "Sam Armstrong on the software factory behind Vigil SOC: every PR ends with what it ran, what it skipped, and what the sandbox blocked; a separate environment agent repairs those gaps each day; and a single job cap, freed only by a human merge, keeps the factory from outrunning review."
date: 2026-09-14
kind: field-note
source:
  title: "Yet another software factory (and why we built ours the way we did)"
  url: https://vigilsoc.org/blog/2026/09/14/yet-another-software-factory/
project: steward
---

Sam Armstrong describes the software factory the Vigil SOC team built to develop their own product: it grooms the backlog, opens PRs, reviews and verifies them, and "repairs its own build environment when it gets stuck." The team runs it on cloud agents and burned "several dozen open issues" down to zero in about a week. He is clear early on that review is not enough by itself: "A clean-looking diff does not guarantee the thing actually works as intended," so the factory needs verification, meaning something actually runs the change.

## Verification that admits what it skipped

The sharpest idea is about unattended work. "Verification matters a lot more with cloud agents than with a terminal session, because you are not watching." By hand you would notice an agent skipping tests because Postgres was not up; in the cloud you would not. So every factory PR ends with a Verification section in three parts: what it ran, what it did not run and why, and what the machine blocked it on, such as a missing tool or a service that was down.

That third list feeds a repair loop. A separate environment agent runs after the implementers each day, reads the factory's own PRs for checks the author could not run, and fixes the sandbox so the next implementer can. "If an agent could not verify its change because the sandbox was missing something, that is the factory's bug, not the reviewer's problem."

## One knob, and a human merge turns it

The other choices push against volume. A grooming agent with a written `principles.md` decides what gets built before anything is implemented, and a failed implementation retracts the groom. A separate simplify pass runs alongside implementation, and its PR is closed automatically unless it removes more lines than it adds. Throughput has a single limit: how many factory jobs can exist at once, counting open PRs still waiting on a human. When the limit is reached, the daily run opens nothing new. "Autonomy gets widened by raising one number, not by adding machinery. And a human merging or closing a PR is literally what frees the next slot."

## Why it matters for code review

This is the always-on factory built around the reviewer instead of past them. Overnight work only compounds if the morning reader can trust what a PR claims, so the factory makes each PR state its own verification gaps and treats those gaps as work for itself. And it ties the factory's pace to human merges rather than to how much the agents can produce, the same move as [capping work in progress against review minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/) and [a weekend cleanup loop that caps Monday's review load](/posts/faik-uber-factory-weekend-cleanup-caps-review-load/). Compare [a backlog loop with a mechanical gate against slop](/posts/goossaert-backlog-loop-mechanical-gate-dark-factory-slop/).
