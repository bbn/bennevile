---
title: "At 2,500 PRs a month, Lauren Tan stops reviewing every dish and tends the kitchen instead"
description: "Oct 5 Barnaby Robson maps pstack's six mental models. The review-relevant one is the gardener: an agent queues smells without fixing them, she groups the queue every few days, samples merged PRs daily, and changes lint rules, types and skills when several agents take the same shortcut."
date: 2026-10-05
kind: field-note
source:
  title: "On pstack: the skills behind 2,500 PRs a month, and the mental models behind the skills"
  url: https://barnabyrobson.org/on-pstack/
project: steward
---

Barnaby Robson's long explainer of pstack, Lauren Tan's published set of agentic engineering skills, works through the six pictures she uses to describe her setup, built from her two guide essays and her October 3 interview with Matt Pocock. Tan prefers a **Michelin kitchen** to a "software factory": a factory suggests volume, while a kitchen keeps the volume and adds a standard someone tastes. Her account of the **trust ladder** ends at "full autopilot," where verifier agents fuzz each pull request before it lands and she reads the commit history in the morning, reverting or adding a lint rule where needed. The first night was "very scary." Now: "I'm sleeping so much better now."

The part that matters most for review is what replaces reading every diff. Robson says most of her 2,500 pull requests a month are **gardening**: refactors, new lint rules and new checks. The loop he lays out:

- **Watch.** An agent scans the code continuously for banned patterns, because smells appear faster than one person can read code.
- **Queue, don't fix.** Each finding goes into a document. Fixing bugs one at a time hides the pattern; a buffer shows it.
- **Group.** Every few days she reads the queue and finds many entries share one cause. In pure execution mode, "you sometimes miss the big picture."
- **Sample.** Each day she reads a sample of merged pull requests closely. At this volume she can't taste every dish.
- **Change the bed.** When several agents take the same shortcut, she changes the skills, constraints, lint rules or types. A one-off mistake gets no action.

## Why it matters for code review

This is review moved from the pull request to the environment that produces the pull requests. The human doesn't approve each change; she samples, notices repeats, and turns each repeat into a check that every later agent runs into. The steady overnight throughput is a side effect of that tending, not a substitute for it. Robson quotes Tan treating the verification skill, which gives an agent "hands and eyes" to run and use the real app, as critical infrastructure that could have its own on-call rotation, and he notes a recent upstream change adding an hourly autopilot tick.

He also records the limit plainly. The top rungs of the ladder depend on how far the work can be verified; software and some mathematics verify well, and Tan says she has no answer yet for work that is hard to verify or where a mistake can't be undone. People who get stuck low on the ladder end up micromanaging, which leaves no time to build the checks that would let them climb. Pair with [the pstack merge rule that needs fresh verifiers on the exact patch](/posts/tenten-pstack-fresh-verifier-swarm-exact-patch-merge/) and [Tan's earlier talk on verification as the system](/posts/everyhub-lauren-tan-verification-before-overnight/).
