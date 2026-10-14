---
title: "What the agentic SDLC looks like when the typing is cheap"
description: "Oct 5 Luke Chadwick (Far Horizons): always-on Mac mini with ~eight tmux sessions, multi-model plan review before build, a verification gauntlet the agent can't talk past, and scheduled Pulse/Hygiene skills that re-check 'done' and open tickets for drift. Spec and verification absorb the time writing used to."
date: 2026-10-05
kind: field-note
source:
  title: "What the agentic SDLC actually looks like"
  url: https://farhorizons.io/writing/agentic-sdlc
project: steward
---

[Luke Chadwick's Oct 5 field guide](https://farhorizons.io/writing/agentic-sdlc) is the full loop behind the overnight merge story he published earlier: discovery, pre-build review, build, verification, deploy, and maintenance, with coding agents doing most of the typing. Writing has stopped being the expensive part. Time moves into the spec at the front and verification at the back.

## Plan hard, build on a standing machine

Most of his time is planning: research, reading the existing code, batching clarifying questions, answering by voice so the context is rich. Recorded meeting transcripts go into the spec. Before any code, the plan runs through multi-model reviews (CEO, engineering, design, developer experience on both Claude and Codex via gstack), plus office-hours and all-hands persona skills that ask whether the work should exist. Twenty rounds is normal. The build itself is the part he spends the least time on: an always-on Mac mini with about eight tmux sessions, each plan in its own worktree with its own code name. "I've moved from being a developer to managing a team of developers… The difference is that the developer never gets tired and has no idea of consequences, so the environment has to supply the judgment it doesn't have."

## Gauntlet, deploy, then keep watching

The agent does an 80% job and says it is done. His response was to stop being polite about wait times and make the gauntlet as hard as he could — long tests, multi-model review, hooks that redirect when the agent reaches for the wrong thing — because "an agent is somebody new every session," and team agreements do not survive that. Shipped means deployed: work is not done until the deploy on the merge commit is green with acceptance checks, which is what makes an evening batch show up deployed in the morning. Maintenance is the phase most guides skip. A daily Hygiene skill audits for what linting misses and opens tickets; Pulse goes back over everything marked done and checks that it actually is, "because agents over-claim."

## How it fits

This is a practical picture of modest, verified momentum across the whole day: standing sessions, enforced verification, and scheduled re-checks so overnight work compounds instead of creating morning cleanup. It pairs with his earlier note that [shipped means the deploy is green, not that the PR opened](/posts/chadwick-farhorizons-mean-gauntlet-shipped-means-deployed/) and with [Margheim's push to put continuous attention on running systems, not only on generating more code](/posts/margheim-software-foreman-attention-not-generation/). The soft sell at the end is Far Horizons enablement; the durable claim is the shape of the loop.
