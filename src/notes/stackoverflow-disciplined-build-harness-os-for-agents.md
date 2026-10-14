---
title: "An operating system for coding agents: the disciplined build"
description: "Oct 7 Stack Overflow (series finale): agents are brilliant for an afternoon and mediocre for a quarter unless the harness supplies a constitution, autonomy boundary, tiered context, durable memory, multi-lens review panel, and post-edit hooks — then shared written state for fleets. The model is maybe a tenth of the outcome."
date: 2026-10-07
kind: field-note
source:
  title: "Part 6: An operating system for coding agents: the disciplined build"
  url: https://stackoverflow.blog/2026/10/07/part-6-an-operating-system-for-coding-agents-the-disciplined-build/
project: steward
---

[Stack Overflow's Oct 7 series finale](https://stackoverflow.blog/2026/10/07/part-6-an-operating-system-for-coding-agents-the-disciplined-build/) puts the claim in the first paragraph: coding agents are great for an afternoon and mediocre for a quarter. By the thirtieth session the agent re-discovers the same files, contradicts earlier decisions, guesses the test command, and quietly stops writing tests. The fix is not a smarter model. It is an operating system around the model — constitution, autonomy boundary, tiered context, durable memory, a review panel, and a post-edit hook.

## Harness first, then fleet coordination

The post defines the agent as model plus harness and argues the model may be a tenth of what decides whether you get working software over a quarter. Evidence cited: LangChain moved a Terminal-Bench 2.0 coding agent from outside the top 30 into the top 5 (52.8% → 66.5%) by changing only harness pieces — system prompt, tools, self-verification, loop detection — on the same model. Decay maps to four artifacts: a short always-loaded constitution for discipline; tiered `CONTEXT.md` files the agent maintains so context does not rot; per-fact memory plus a tiny knowledge graph; and a multi-lens review panel (product, architect, infra, security, test-eng) instead of one self-review. Autonomy is gated only on irreversible ops (push, deploy); reversible work runs free. A `PostToolUse` hook emits a checklist so context and decision logs update in the same reviewable diff.

Part II is the fleet problem: several agents on one repo collide unless they coordinate through shared written state rather than chat — ownership maps, claim/release, branch-per-task with human merges, and an append-only decision log wired into review so accepted decisions are binding and only superseded, never silently edited.

## How it fits

This is the continuous-verification argument as infrastructure: modest overnight momentum compounds only if the harness keeps agents honest across thousands of edits, not just peak sessions. Pair it with [Bob Odell's audit where zero of 14 autonomous-task failures traced to a model ceiling](/posts/odell-autonomous-agent-failures-are-harness-not-model/) and with [Liu & Han on harness swaps that move cost more than pass rate](/posts/liu-han-what-does-a-harness-buy-tokens-mostly/). The durable claim is cheap, compounding discipline around a fallible model — not waiting for the next backbone.
