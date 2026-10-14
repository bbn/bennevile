---
title: "kodo: overnight Claude Max with an architect that rejects the worker nine times"
description: "Feb 18 kodo: Gemini orchestrator drives Claude/Cursor/Codex workers overnight; independent architect+tester gates accept only after multi-round rejection — blackopt run: 3h, 9 verifier catches, 73 tests."
date: 2026-02-18
kind: field-note
source:
  title: "kodo — building while you sleep"
  url: https://github.com/ikamensh/kodo
project: steward
---

[ikamensh/kodo](https://github.com/ikamensh/kodo) (Feb 18; “Building while you sleep”) is the harness for people who already pay for Claude Code Max and hate watching that window go idle overnight. A cheap **API orchestrator** (Gemini Flash by default) delegates; subscription-covered workers implement; independent **architect** and **tester** agents accept or reject before the run moves on. Stages can run sequentially or in parallel git worktrees; `kodo --resume` reloads interrupted sessions.

The receipt they publish is concrete: on [blackopt](https://github.com/ikamen/blackopt), a three-hour unattended run adding four algorithms and an `autosolve()` API ended with **73 tests** green — but only after the architect verifier rejected the worker **nine times** for bugs the implementer was blind to (ProcessPool leak, class-variable contamination, time-slice state mutation, crossover edge cases). A single interactive Claude session, they note, would likely have shipped several of those. Role split is deliberate: API orchestrator stays in the coordinator lane; CLI coding tools as orchestrators tend to seize the keyboard and micromanage. Cost UI separates real API spend from “virtual” Max usage so overnight accounting stays honest. They also say when *not* to use it: learning, exploration, and tasks that need frequent human steering — just open Claude Code.

## Why it matters for code review

Harnessed overnight momentum is not “leave Claude running.” It is a loop where **done** means an independent verifier accepted after holding the worker accountable for claims tests alone missed. kodo’s nine-rejection blackopt trace is the anti-burst receipt: modest cycles with an architect gate compound past a heroic peak session that grades its own diff. Review the morning accept log the way you review a merge queue — promote what survived rejection rounds, and keep interactive Claude for the work that still needs a human on the stick.
