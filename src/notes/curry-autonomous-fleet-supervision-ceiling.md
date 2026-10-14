---
title: "Fleet size is 1/f_H — supervise what you can verify"
description: "Sep 8 Brian Curry: six-layer fleet architecture; review-queue bifurcation; sustainable agents scale as the reciprocal of the human-routed fraction — gates, not headcount, buy overnight capacity."
date: 2026-09-08
kind: field-note
source:
  title: "Building an Autonomous Coding Fleet That Actually Scales"
  url: https://brianjamescurry.substack.com/p/building-an-autonomous-coding-fleet
project: steward
---

Brian James Curry’s Sep 8 Vector1 note reframes the continuous-factory question from “how many agents can we afford to run?” to **how many can we afford to supervise**. Tooling for worktrees, sandboxes, and parallel long-running sessions is already off the shelf. The binding constraint is the review queue — and the math is unforgiving once agents produce changes faster than humans can absorb them.

He strips fleets to six layers: task admission, isolation, deterministic orchestration (no model in the coordinator), verification, merge control, and **supervision** (capacity measurement + admission throttle). Layers one through five are crowded with products; the sixth barely exists, and without it the first five run beautifully until they don’t.

Sizing starts as a reviewer-hour ceiling: sustainable agents ≈ available reviewer-hours / (changes-per-agent-day × mean review hours). With rough public calibrations (~3 reviewable changes per agent-day, ~3 real review hours per senior, ~0.4h mean review cost) you get ~2.5 agents per reviewer — and cheaper inference that raises change volume *lowers* the ceiling. Delay is convex in load; variance in review cost (the “almost right” agent PR) fills queues faster than mean effort suggests.

The qualitative break is skip behavior under load. Faros telemetry (22k developers) showed more unreviewed merges alongside ballooning time-in-review and PR size. Modeling the probability of waving changes through as rising with utilization produces a **saddle-node bifurcation**: remediation of escaped defects eats the same senior capacity that reviews, so above a critical fleet size there is no stable queue state — review effectively stops. Across his sweep the critical point lands at roughly **0.37–0.62 of the arithmetic ceiling**, often while the reviewer still looks ~40% idle. Staffing-to-70% heuristics read as green one agent before collapse.

The escape hatch is routing. Let **f_H** be the fraction of changes that still need a human. Sustainable fleet size then scales as **1/f_H**. Same models, same orchestrator, same budget: humans on everything with weak gates sustains ~1 agent; routing ~15% to humans with decent gates sustains ~13. Only after gates drive f_H down without driving escape rate up does hiring another reviewer actually buy capacity. Design target: engineer f_H for the fleet you want, with a bifurcation safety factor — not “spin up more overnight workers and hope morning review keeps up.”

## Why it matters for code review

Overnight and always-on factories beat bursty peak-session mastery only if merge-rate under sustained load stays inside a supervised basin. FOMO that agents sit idle overnight is the wrong scarcity signal when f_H is still ~1: adding agents without widening machine gates just advances the bifurcation. Pair continuous harnessed throughput with an explicit supervision controller — measure human-routed fraction, throttle admission, and treat verification coverage as the capacity that buys fleet size.
