---
title: Black Box’s PR gates — five reviewers before a human merge
description: Field note from Black Box via Codacy — ~8 coding agents in the loop, every PR through five independent reviewers, plus Verity’s markdown knowledge graph so later turns inherit what got rejected.
date: 2026-09-09
kind: field-note
source:
  title: "Agentic SDLC Loop Engineering: How Black Box Runs PR Review Gates at Scale (2026) — Codacy"
  url: https://blog.codacy.com/agentic-sdlc-loop-engineering-how-black-box-runs-pr-review-gates-at-scale-2027
project: steward
---
Erik Jost at Black Box is running roughly eight agents in the development loop. Every pull request still passes five independent reviewers before he merges by hand: cross-model Claude and Codex for logic and intent the writing model missed, plus Copilot, Codacy, and CodeRabbit, with GitHub’s “all conversations must be resolved” sitting on top as a hard gate.

The useful design choice is independence. Same-model review inherits the writer’s blind spots; cross-model and multi-tool review is how you buy coverage when PR volume is agent-driven. Humans stay on the merge button — the scarce resource is still judgment — but the stack in front of that button is engineered as parallel filters, not one vibes pass.

## Why it matters for code review

Codacy’s Verity piece of the story is the compounding layer: an in-loop adversarial review that pairs deterministic checks with an independent model, and writes decisions into a git-tracked markdown knowledge graph so later turns inherit what already got rejected. When agents raise the throughput, review stops being a single tool and becomes a gate architecture — independent filters, memory of past decisions, human at the end.
