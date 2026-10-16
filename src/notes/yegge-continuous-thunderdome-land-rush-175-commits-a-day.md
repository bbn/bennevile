---
title: "Yegge's Land Rush: 40 agents, 175 commits a day, and a merge queue that stopped bisecting"
description: "Aug 2026, Steve Yegge: running 40-plus agents around the clock against a half-hour build, his bisecting merge queue grew past 100 requests and stalled. His fix is to land 120 to 150 commits on main at once and have agents repair whatever goes red."
date: 2026-08-03
kind: field-note
source:
  title: "The Shape of Things to Come, Part 1: The Continuous Thunderdome"
  url: https://yegge.ai/essays/the-shape-of-things-to-come/
project: steward
---

Steve Yegge is building Wyvern, his long-running online game, with a six-week-old harness he calls Wheelhouse. A "crew" of agents writes designs and breaks them into units of work in Beads, his issue tracker; a "fleet" implements them, with one model planning and reviewing what another writes. He keeps a deliberate backlog of **over 700 designed-but-unbuilt items** so the fleet can "work all night," because "you basically need to create a mountain of work."

The interesting part is what that steady load did to CI. Excluding orchestration noise, he reports averaging **about 175 "real" commits a day, some days 250**, against a build gate of **about half an hour**. A batched merge queue with bisection on failure is where Wheelhouse first landed, and it broke: "with 40+ agents around the clock, my MQ was growing without bound, shooting right past 100 MRs," caught "in bisection loops" where "nothing would make forward progress." The agent in charge of the queue kept tuning batch sizes while the queue kept growing.

- **The Land Rush.** When the queue reaches 100, Yegge stops bisecting and lands everything on main as one batch, then sends a swarm of agents to diagnose and fix whatever breaks, rolling forward. He reports clearing several batches of 120 to 150 commits over about a week, with a 166-deep queue as he wrote.
- **The argument is arithmetic.** "Once your commit rate outruns your build slots, one commit per green build becomes mathematically impossible." He points to game studios, where everyone commits to a main that "generally stayed red" and fixes land on release branches.
- **Human review is next.** He calls human review of every diff incompatible with agent speed, while advising teams to keep reviewing agent code for now and plan to replace it with "many, many rounds of agentic code review."

## Why it matters for code review

This is the clearest account yet of what always-on throughput does downstream: the agents never stop, so the bottleneck moves to the serial gate, and the gate has to change shape or the queue never drains. It is also one person's codebase (he says he has entered the "solo unicorn" contest), so a red main costs nobody else anything. [Julien Danjou's reply](/posts/danjou-yegge-deleted-the-wrong-thing-keep-attribution/) accepts the arithmetic and disputes the fix. Read beside [GitHub on merges contending for one ref at agent scale](/posts/github-git-infrastructure-agent-scale-merges-contend-one-ref/) and [Hellström's overnight fleet that sat 94% idle](/posts/hellstrom-overnight-fleet-11-prs-94-percent-idle-luck-is-not-a-guardrail/), the opposite failure: a loop with too little work rather than too much.
