---
title: "Zach Wills: ten PRs merged overnight, review became inspecting the proof, and then the RAM ran out"
description: "Jul 16, Zach Wills on a year of running agent fleets: an overnight run merged 10 PRs in dependency order, proof-carrying PRs pushed his review ceiling to about 40 a day, and the next wall was a 32GB machine with 27GB of swap."
date: 2026-07-16
kind: field-note
source:
  title: "Where the bottleneck goes when agents write the code"
  url: https://zachwills.net/where-the-bottleneck-goes-when-agents-write-the-code/
project: steward
---

Zach Wills has been running fleets of coding agents for about a year, and his post tracks where the queue went each time he cleared it: from writing the code, to reviewing it, to the machine on his desk, with the cloud and "knowing what to build" next in line.

The writing stage is a backlog of self-contained tickets with acceptance criteria and a `/backlog-clearing` skill that fans them out to subagents in separate worktrees; a typical run lands **5 to 15 PRs**. At the hands-off end, he gave an overnight run two instructions ("clear the backlog" and "merge them all") and by morning it had **merged 10 PRs in dependency order**. "Days end by queuing the backlog. Mornings start by interrogating what merged." The tracker holds it together: agents claim tickets and keep status true, and the overnight run's last line was "In Progress: zero, no ticket is lying about its state."

- **Review moved up a level.** "When you have 10+ PRs overnight, it's impossible to read every diff deeply." Every PR ships with proof of each acceptance criterion, so review became "inspect the proof" instead of "reproduce the work." His best day with that method was **roughly 40 PRs**, and his questions turned architectural: testing policy, new dependencies, how systems intersect.
- **Then the hardware gave out.** With 12 to 16 top-level agents across projects, each spawning browsers, Docker and subagents, his 32GB Mac mini lagged badly on the 40-PR day. An agent diagnosed **27GB of swap in use**, three orphaned workers holding about 2.5GB, and seven stale sandbox containers idle for 30 hours to 3 days.
- **Local for feedback, cloud for delegation.** Interactive exploration stays on the desk; well-specified work goes to cloud runners, where "the ceiling stops being physical."

## Why it matters for code review

This is a plain account of what steady overnight throughput asks of the reviewer: not more diff-reading but a contract that makes each PR carry its own evidence, so the human can clear a morning's output at fleet speed. Wills keeps one line he won't cross: "if someone asks me how it works and I have to go ask the agent, what am I doing?" Reading proofs, he says, is how he keeps that knowledge. Compare [Matt Adams capping his overnight loop at three PRs awaiting review](/posts/adams-overnight-backlog-three-pr-review-cap-verification-twice-implementation/) and [Peter Vanhee's nightly loop that is never allowed to merge](/posts/vanhee-nightly-ralph-loop-61-prs-52-merged-never-merges/); Wills goes further and lets the overnight run merge.
