---
title: "Fabro: a dark factory as version-controlled workflow graphs"
description: "Mar 2026 Helmkamp/Fabro: Graphviz workflows with human gates, multi-model routing, cloud sandboxes, git checkpoints, and verification fix-loops — walk away while the line keeps running."
date: 2026-03-17
kind: field-note
source:
  title: "Fabro — The Dark Software Factory"
  url: https://fabro.sh/
project: steward
---

[Fabro](https://fabro.sh/) (Bryan Helmkamp / fabro-sh; MIT; open [fabro-sh/fabro](https://github.com/fabro-sh/fabro), ~1.6k★) is the open-source answer to babysitting a fleet of Claude Code / Codex tabs: encode the process as a **Graphviz workflow graph**, let agents, shell commands, and human hexagon gates execute it, and intervene only where the graph says so. The pitch is explicit about the continuous-factory problem always-on teams keep hitting — “extend average time between disengagements,” run agents **24/7** via an API server that queues while the laptop sleeps, and treat **builds and tests as gates, not suggestions**, with failures triggering automatic fix-loops.

The harness pieces are structural, not prompt poetry. Nodes are agent sessions, commands, conditionals, or human approvals; CSS-like stylesheets route cheap breadth to Haiku-class models and coding stages to frontier ones, with cross-provider critique. Every stage **git-checkpoints** code plus execution metadata onto branches so you can resume, revert, or audit. Cloud sandboxes (Daytona) isolate network and filesystem; `fabro sandbox ssh` and preview links keep the laptop out of the blast radius. Runs emit retros (cost, duration, files touched, LLM narrative) and a unified event stream you can query — the continuous-improvement loop the docs say broke when every sub-process boundary lost its data. A single Rust binary, no Node/Python/Docker required for the engine itself.

Honest packaging: Fabro is a factory *framework*, not a measured throughput claim — the receipts are the workflow graphs, the verification-first marketing, and an active nightly release train (still pushing mid-September). It sits beside NearForm Last Light and StrongDM-style attractors as “own the toolchain” rather than rent another REPL.

## Why it matters for code review

Always-on capacity only beats bursty Claude Code mastery when “done” is a graph edge through a gate, and when human attention sits on approval hexagons instead of every intermediate diff. Fabro’s review surface is the morning queue of checkpointed, verification-gated stages — FOMO that nothing useful ran overnight is often missing a durable workflow, not missing another peak-session prompt.
