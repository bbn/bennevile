---
title: "Anthropic: every night without agents is progress left on the table"
description: "Mar 23: Discovery-team field guide — CLAUDE.md plan, CHANGELOG memory, CLASS test oracle, tmux detach, Ralph loop; FOMO framed as opportunity cost of idle agents."
date: 2026-03-23
kind: field-note
source:
  title: "Long-running Claude for scientific computing"
  url: https://www.anthropic.com/research/long-running-Claude
project: steward
---

Siddharth Mishra-Sharma’s Mar 23 Anthropic Discovery note is the tortoise thesis’s psychological half written as a lab procedure. Most scientists still keep agents on a tight conversational leash. As long-horizon models improved, a different mode became practical: specify a high-level objective with clear success criteria, then let a team of agents work for hours or days with only occasional oversight — reimplement a solver, convert legacy Fortran, debug against a reference. The worked example is deliberately outside his core domain: a differentiable cosmological Boltzmann solver in JAX aiming for ~0.1% agreement with CLASS (the same bar CLASS and CAMB typically share).

The reusable stack is the receipt, not the cosmology. **CLAUDE.md** holds the living plan and design decisions — Claude keeps it in context and is allowed to edit it as issues surface. **CHANGELOG.md** is portable long-term memory across sessions: status, completed work, *failed approaches and why*, accuracy tables, known limits — without failed approaches, successive sessions re-attempt the same dead ends. The **test oracle** is CLASS C as reference plus an expanding unit suite the agent must keep green. Git is coordination: commit and push after every meaningful unit; run `pytest` before every commit; never commit a break. Execution is detachable: iterate the plan locally, launch Claude Code inside **tmux** on a SLURM node, detach, and phone-check GitHub while waiting for coffee. When models get “agentically lazy” and declare victory early, a **Ralph loop** (`/ralph-loop`, max iterations + completion promise) kicks them back into context — same job as GSD-style patterns or Claude Code’s native `/loop`.

Results: over a few days the agent reached sub-percent agreement with CLASS on main CMB outputs from a non-domain expert — clunky trajectory, thin early parameter coverage, hours lost on gauge conventions a cosmologist would spot instantly — and still not production-grade in every regime. The compression claim is months-to-years of researcher time into days. Then the FOMO line that lands the week’s thesis: launching an experiment overnight used to be the idle-time opportunity cost; now “not running agents feels like it has a cost as well… every night you don't have agents working for you is potential progress left on the table.”

## Why it matters for code review

Peak Claude Code mastery is still a watched session. This is continuous harnessed motion: progress file + oracle + detachable runtime so review relocates to accuracy tables and morning git history, not babysitting every turn. FOMO that agents aren’t working on your behalf is a real signal — and only productive when the factory can prove progress without you in the chair.
