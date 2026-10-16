---
title: "Danjou on Yegge's Land Rush: the batch was too slow, but attribution was the cheap part"
description: "Aug 18, Julien Danjou (who runs a merge-queue company) grants that one-commit-per-green-build can't survive agent commit rates, but argues that landing 150 commits on a red main throws away the link from each failure back to the agent and intent that caused it."
date: 2026-08-18
kind: field-note
source:
  title: "Steve Yegge Deleted the Wrong Thing"
  url: https://julien.danjou.info/blog/steve-yegge-deleted-the-wrong-thing/
project: steward
---

Julien Danjou opens with his conflict of interest: "I sell merge queues for a living. Discount me accordingly." Then he concedes the premise of [Steve Yegge's Land Rush](/posts/yegge-continuous-thunderdome-land-rush-175-commits-a-day/) without hedging. Forty agents, about 175 commits a day, a half-hour build: "If you can run two builds an hour and you receive ten changes an hour, no amount of clever ordering saves you. The serial queue was sized for humans opening four pull requests a day."

His objection is to what got removed. Before landing, a batch of 150 commits is 150 changes, "each with an agent that wrote it, each with a goal, a plan, and a reason." After landing, main is red and "the mapping from 'this test is failing' back to 'this agent was trying to do this' is gone," because those agents have finished and moved on.

- **Swarm diagnosis is still attribution.** "It's a parallel search for which change broke the build," run against the most expensive context possible: no author, no intent, no plan. "Bisection was never really about finding the guilty commit. It was about finding the guilty *intent*."
- **The queue he wants doesn't exist yet.** Keep main green, but when a batch fails, work out what broke and hand "one diff back to the one agent that owns it, with the failure attached." He says plainly that his company doesn't ship this.
- **Where he says he'd lose.** Some failures belong to no single change: "three agents each wrote something defensible and together they contradict." A green main is not a coherent one, and that part is "a review problem that nobody has answered." He adds that a red main costs a solo developer nothing; once a second team pulls from it, "the same sentence is an outage."

## Why it matters for code review

Danjou reframes the Land Rush as a budget trade: Yegge "had a throughput budget, and he balanced it by setting the quality bar to zero." Green main, fast landing, and CI cost can't all hold under sustained agent load, and today's tools only let teams pick a batch size, not state which goal gives. For always-on factories, the useful lesson is to keep each change tied to the agent and intent that produced it until it has been verified. Read beside [Funador's Claude Code merge queue](/posts/funador-claude-code-merge-queue/) and [Codeherder's five-minute CI budget](/posts/codeherder-five-minute-ci-budget-main-checked-on-a-clock/).
