---
title: "Nightwatch: Captain plans by day, fleet ships overnight"
description: "Aug 11 Conveo: /nightwatch skill — Helm plans, remote Field Orchestrator spawns worktree workers, cheap per-ticket verify loops, one green master PR after 7.5h on 3 agents."
date: 2026-08-11
kind: field-note
source:
  title: "Nightwatch: how to get your agents to keep working while you sleep"
  url: https://engineering.conveo.ai/posts/nightwatch
project: steward
---

Vincent Vankrunkelsven’s Aug 11 Conveo post is the tortoise overnight factory written as an operating skill, not a demo session. Afternoon: a human **Captain** plans with a laptop-side **Helm** agent that fans out for codebase context, drafts a spec, and lands a Linear project with an explicit dependency graph. Night: the Helm hands the plan to a persistent remote **Field Orchestrator** on an always-on EC2 box; that orchestrator self-plans build order and spawns **workers** — one ticket each, own `git worktree`, isolated app instance — while the Captain sleeps. Morning: one master PR, auto-generated test plan, and an in-app reviewer spun up on the laptop for UX QA. Their template-preview example: **7.5 hours, 3 agents, one neat PR** driven green with screenshots.

The verification contract is the reusable part. Every ticket must define the *cheapest closed verification loop the worker can run itself* — functional (unit test or purpose-built script, no human) plus non-functional (CI + specialized AI reviewers on the PR). Bake both into acceptance criteria: “build X; verify with `pnpm tsx scripts/verify-x.ts` showing Y” beats “build X.” Worker PRs run until validation passes; the orchestrator merges them into a single master PR and drives that green too. Roles are explicit so overnight authority does not stall: Captain owns scope/merge; Helm co-authorizes then goes dormant; Field Orchestrator is persistent and co-equal; workers listen to both.

Keeping it alive is the other half of the receipt. Durable **agent mesh** (Redis Streams, not pub/sub) so mail waits for sleeping agents; monitors that wake Claude for one turn per inbound message; a 15-minute orchestrator tick that checks *commits and file activity*, not just chat — because a worker that acks “got it” and sleeps forever never emits the event that would timeout it. Hard-won overnight failure modes: first-run trust prompts that stall headless agents; workspaces silently branching from `main` when the remote never fetched the base; respawning into a *fresh* workspace and wiping the old agent’s files; Node heap / `io_uring` defaults that kill sessions silently. They treat first morning UX as usually rough on purpose, then feed night logs back into the skill.

## Why it matters for code review

This is continuous harnessed throughput, not peak Claude Code mastery. Review relocates into per-ticket verify scripts + PR validation agents *during* the night, with the human morning pass scoped to UX and judgment — not reading 8k lines of generated React. FOMO that agents aren’t working while you sleep is answered with a fleet *and* a mesh clock; without both you get ack-and-nap workers and a false sense of overnight progress. Pair with dual-LLM stop-at-merge patterns (Night Shift) when the factory’s “done” still needs an independent reviewer that cannot be skipped by compaction.
