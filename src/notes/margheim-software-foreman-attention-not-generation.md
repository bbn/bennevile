---
title: "I don't need a software factory. I need a software foreman."
description: "Oct 8 Stephen Margheim (ZAR): seven engineers already generate plenty of code with Claude Code. The pain is attention — rare-but-widespread production failures sit until a human trips over them. He wants always-on agents watching unified telemetry, investigating anomalies, and opening PRs — a foreman walking the floor, not another generation pipeline."
date: 2026-10-08
kind: field-note
source:
  title: "I Don't Need a Software Factory. I Need a Software Foreman."
  url: https://x.com/fractaledmind/status/2108276872304107838
project: steward
---

[Stephen Margheim](https://x.com/fractaledmind/status/2108276872304107838) tells a small production story that frames the rest of the piece. A rare but widespread link failure sat until a friend of a colleague hit it. Once pointed at the problem, Claude sampled recent links, curled them, found unused accounts returning 503, and helped hand the provider evidence within the hour. The debugging was easy. Finding out was not. "A rare but widespread failure sat in production until a friend of a colleague happened to hit it and happened to mention it."

## Generation is not his bottleneck

His team at ZAR is seven engineers, each already generating plenty of code in Claude Code sessions. He does not wish they could write more. A pipeline that lets agents spawn sessions, PR, and ship "solves a pain that I don't feel." The pain is attention: logs, exceptions, app events, and business records that basically nobody watches. He wants a software foreman — "someone walking the floor all day, watching everything the factory runs, and noticing what's off before it becomes a problem" — not another factory that optimizes generation.

## Attention that investigates, not just watches

A one-off agent for the 503 pattern would only catch failures he already knows about. What he wants is closer to a good engineer on a dashboard: learn what healthy looks like across the product surface, notice when something looks different, form a hypothesis, run checks, and either drop it or come back with "I think something's up here, and here's what I found." Sometimes that ends in code — a PR that names the anomaly, the cause, and the fix — which he can review in ten minutes. The missing piece is pointing that debugger at everything, all the time. Scattered observability makes that hard, so they are building a unified data lake any human or agent session can query. He accepts early noise: "Even a noisy agent that watches our logs… is better than nothing," because silence is how rare failures survive.

## How it fits

This productively complicates the continuous-factory story. Always-on agents still matter, but the scarce resource here is continuous *attention* to running systems, not continuous *generation* of patches. Pair it with [Adapt's always-on janitor that opens one small cleanup PR at a time](/posts/adapt-code-janitor-always-on-cleanup-prs/) and [Chadwick's daily hygiene and Pulse skills that re-check work marked done](/posts/chadwick-agentic-sdlc-always-on-mac-mini-pulse-hygiene/). The generation factory and the foreman are complementary floors of the same building — one ships change, the other notices when the shipped system drifts.
