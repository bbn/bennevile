---
title: "YATFA: one overnight ticket failed audit, hit merge conflicts twice, and still merged by 3 a.m. with no human"
description: "Oct 7, the YATFA team traces a single ticket through a night of unattended work: two writing agents, three reviewing agents, two platform bounces on a branch that went stale, and a merge at 03:00 UTC. Their argument is that the queue, not any one agent session, is what carries work through failure."
date: 2026-10-07
kind: field-note
source:
  title: "Background coding agents: how unattended work ships reviewed PRs"
  url: https://yatfa.com/blog/background-coding-agents
project: steward
---

[The YATFA team](https://yatfa.com/blog/background-coding-agents) uses its own workspace to show what overnight agent work looks like when it goes badly and still finishes. Ticket YATFA-11142 asked for a table of contents on blog pages. It was filed at 21:41 UTC on October 6 and its pull request merged at 03:00 UTC on October 7. No person touched it in between.

**The night was mostly bounces.** The first submission, at 00:48, failed audit at 01:06 and a reviewing agent sent it back. A minute later the platform bounced it again because the default branch had moved while the work sat queued, leaving merge conflicts. A second agent resubmitted at 01:12 and passed audit and QA by 01:52, then hit fresh merge conflicts at 02:10. A third pass resolved them, passed audit and QA, and was approved at 03:00 under the project's autonomy settings. Two writing agents, three reviewing agents, and two conflict rejections went into one small feature.

**A single session would have stopped at the first bounce.** The post's point is that what carried the ticket was the machinery around the agents: a queue that re-dispatches on failure, review by an agent that didn't write the change, a check against a moving default branch, and escalation paths that went unused. Bounces are normal; a ticket that bounces forever is a scoping problem.

**What to watch is the queue, not the terminal.** The team names four numbers: what shipped recently, how often review sends work back, how long finished work waits for a human gate, and how often a ticket bounces without resolving. Autonomy is set per kind of work in server-side configuration, not in a prompt the agent can reinterpret: docs, tests, and small refactors run end to end, while features, migrations, and infrastructure stop for a person.

## Why it matters for code review

Under always-on load, a review rejection stops being an event someone reacts to and becomes a routine state the system recovers from. That moves the reviewer's job up a level, to the bounce rate and the parked queue. The source is a vendor describing its own product, and one ticket is an illustration rather than a measurement, but the stale-branch bounce is a cost of unattended throughput that most write-ups leave out.
