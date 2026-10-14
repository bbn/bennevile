---
title: "From fear of missing agent time to fear of unused capacity: the bottleneck moves to planning"
description: "May 11 (edited Jul 28) Teemu Piirainen: once agents ran ten-hour sessions without asking questions, the anxiety didn't go away. It moved from answering agents fast enough to preparing enough work for the night, and mistakes started surfacing in morning review as the right execution of the wrong spec."
date: 2026-05-11
kind: field-note
source:
  title: "FOMO, FOMAT, FOMUT, and the Bottleneck That Turned Out to Be Me"
  url: https://dev.to/teppana88/fomat-fomut-and-the-bottleneck-that-turned-out-to-be-me-32g4
project: steward
---

A year earlier, Teemu Piirainen's agents stopped every few minutes to ask a question. He answered faster, kept the laptop open and turned on notifications, and ended up as "air traffic control for AI agents instead of doing deep work". He calls that feeling FOMAT, the fear of missing agent time: the guilt of closing the laptop knowing the agents stop.

The fix was the system around the agents, not the agents. Questions moved upfront into a one-to-two-hour alignment session with an orchestrator agent whose only job is to surface unknowns. **"Every question the agent might have asked at 2am on a Sunday night gets asked at 10am on Saturday morning instead."** Agents got a three-state rule: act if you know, pick the simpler option and write down why if you have enough context, and ask only when genuinely blocked. A separate validator agent that never saw the implementer's reasoning reviews every PR. Now he writes specs in the day, launches agents in the evening, and reviews pull requests in the morning, with 8-plus-hour runs that don't stop to ask anything.

## The pressure moved

He expected the stress to go away. It changed shape. **"I have twenty hours of agent capacity available tonight and I only prepared six hours of work."** The constraint shifted from his response time to his planning throughput, and his scoreboard changed with it: "A good day is one where agents ran at full capacity while I slept." The failure mode shifted too. Now it's "the agent doing the wrong thing, but doing it correctly", and it shows up in review rather than mid-run.

## Why it matters for code review

This is the human side of keeping agents running overnight. Moving questions out of the night is what makes long unattended runs possible, and it's the same discipline that makes the morning review tractable: the spec, the acceptance criteria and the decisions the agent wrote down are what the reviewer checks against. But the scoreboard he describes is the risky part. Capacity used is easy to count. Accepted work is what matters, and when the spec was the mistake, a busier night just means more of the wrong thing to review in the morning. Compare [agent anxiety as a new kind of interruption](/posts/driventodevelop-agent-anxiety-idle-fleet-attention/) and [deciding in daylight which task classes may run overnight](/posts/jaskolski-overnight-lane-task-class-one-working-day-review/).
