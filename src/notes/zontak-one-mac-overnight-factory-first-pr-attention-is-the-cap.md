---
title: "Zontak's one-Mac factory: a ticket became a reviewed PR overnight, and the limit he names is his own attention"
description: "Oct 25, Denis Zontak writes up one sleepless night building a small software factory on a Mac and a $200 subscription: plan, plan-check, sandboxed build, 1,100 tests, diff review, then his sign-off. The limits he lists are usage caps, review attention, and what the checks can test."
date: 2026-10-25
kind: field-note
source:
  title: "I Couldn't Sleep, So I Built a Factory"
  url: https://zontakllc.com/articles/i-couldnt-sleep-so-i-built-a-factory
project: steward
---

[I Couldn't Sleep, So I Built a Factory](https://zontakllc.com/articles/i-couldnt-sleep-so-i-built-a-factory) is part one of a four-part series by Denis Zontak, who also sells this setup as a service. At 2 a.m. he watched a GitHub ticket turn into a reviewed plan in two minutes with nobody touching it. By morning the same loop had written the code, run the project's eleven hundred tests, and produced its first pull request.

**The pipeline.** One small Node program and a SQLite file on one Mac, with a $200 a month subscription. One agent reads a ticket and plans; a second checks the plan; the factory then does the ticket alone, asks him, or skips it. The builder works in a sandbox, the full test suite runs, another agent reviews the actual diff, and Zontak signs off. In a planted test, a ticket telling the agent to steal his passwords got "Operation not permitted" thirteen times out of thirteen. Nothing merged until checks were green, and a 7:30 a.m. scorecard reports what shipped, what is waiting, what broke, and what it cost.

**The limits are not hardware.** Zontak lists three: the subscription's usage caps, so the factory has to pace itself; his attention, "because if it makes more than I can review, I just get a backlog"; and the checks, since "it can only ship what it can test by itself."

**What broke on the first night.** The repo's auto-delete of merged branches removed the `next` branch after a release merge, and the next build failed until the agent restored it and added a rule. A deploy job waited for monitoring that only watches the live site, so it looped thirteen times and blocked the queue. That one became a ticket for the factory to fix.

## Why it matters for code review

This is the small-scale version of always-on agent work: a modest loop that keeps going while its owner sleeps, gated by tests and a second-agent diff review, with a human yes at the plan and at the merge. The moment Zontak calls the win is reviewing PR 321 and thinking he would merge it. And the first cap he hits is not model quality but how much he can review in the morning.
