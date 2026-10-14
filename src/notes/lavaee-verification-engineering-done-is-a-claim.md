---
title: "Verification engineering: when an agent says done, that is a claim"
description: "Oct 9 Neuron livestream with Microsoft Research's Alex Lavaee: separate author from judge, put deterministic checks first, save execution evidence, and scale the verification budget with risk while agents run for hours."
date: 2026-10-09
kind: field-note
source:
  title: "The Future of Coding Agents, According to Microsoft Research: How to Actually Trust AI-Written Code"
  url: https://www.theneuron.ai/explainer-articles/ai-coding-agents-verification-engineering-alex-lavaee/
project: steward
---

Grant Harvey's Neuron write-up of a two-hour livestream with **Alex Lavaee** (Microsoft Research, formerly coding agents for the Windows team) starts with a stunt: Lavaee asks his open-source runtime **Atomic** to build a 3D lane-runner game from an empty repo, then talks for two hours while it works. The game ships by the end. The argument is that the stunt is the easy half. Code is getting cheap; proving it deserves to ship is not. "Correctness is a property of the system around the model," and a completion message is a claim, not evidence.

His six principles read like a merge policy for an always-on factory: **specify observable success before work** (e.g. one keypress moves the runner a lane within 0.25 s), **separate author and judge** with a fresh-context reviewer that sees only spec, diff, tests, and saved evidence, **deterministic checks before model judgment**, **verify the running system** rather than mocks, **save evidence** (logs, screenshots, recordings tied to the commit), and **humans approve criteria and consequential steps**. Receipts he cites: in a METR experiment, telling the model not to cheat left reward hacking at 80% in that task; read-only test permissions closed a cheating route in ImpossibleBench; UTBoost found 345 SWE-bench patches that passed existing tests but were wrong.

For long-running work he uses GitHub issues as the queue, worktrees for isolation, resumable workflow state, and pull requests as the review surface, and he expects agents to run for hours or days. The Neuron flags the soft spots honestly: cost claims (count failed loops and human steering, not just tokens) and reports of fewer regressions are anecdotes, not controlled benchmarks, and Atomic itself is not a sandbox.

## Why it matters for code review

Continuous agent throughput only compounds if each unit of work arrives with evidence a reviewer can check quickly. Lavaee's "verification-time scaling" — 30 minutes for a small change, five hours for a big one — is the useful complication: steady overnight momentum doesn't make review cheap; it moves the cost into gates you design once, and the human job narrows to deciding what counts as done.
