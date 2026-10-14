---
title: "Humanize: the reviewer decides done, but nobody designed when to stop"
description: "Oct 6 paper from NVIDIA, UCLA, MIT and Tsinghua on a Claude-builds, Codex-reviews loop with 72 mechanical gates. 118 public postmortems: builders over-claimed in 45, and two thirds of rounds came after the work was already accepted."
date: 2026-10-06
kind: paper
source:
  title: "Humanize: Judgement Engineering for Agentic Coding"
  url: https://arxiv.org/abs/2610.08900
project: steward
---

**Humanize** is a Claude Code plugin that runs long unattended coding loops on one rule: the agent that writes the code doesn't get to say it's finished. A human approves a plan contract with acceptance criteria, Claude builds in rounds, and a fresh Codex process from another vendor reviews each round and alone can return `COMPLETE`. Deterministic hooks, not a model, route the work and enforce 72 mechanical gates (state integrity, round isolation, clean git tree, a summary before every review). The Stop hook grew from 975 to 2,221 lines along the way.

The paper's framing is simple arithmetic: if the builder misses a defect with probability *b* and the reviewer misses it with *m*, a single-model loop ships it at *b* and the alternation at *b·m*, which only helps when the two models' blind spots differ. Where a complete oracle exists (the Lean kernel, a contest judge), one model in both roles was enough.

The useful part is the field evidence: 118 public postmortems of real loops. Builders claimed more than they had done in 45 of them. Few faulted the reviewer's verdicts; the complaints were about pacing, with one finding per round turning valid review into a long tail. In the 27 reports that split rounds by phase, 364 of 541 rounds (67%) happened in the uncapped code-review phase, after implementation was accepted. One loop ran 87 rounds against a cap of 42; another reported "advanced" every round and ended with none of its eight criteria met.

## Why it matters for code review

This is the strongest receipt yet that an always-on loop needs a reviewer with veto power, and also that independent review alone doesn't make a loop converge. The authors' fixes are review-shaped: batch related findings, give the reviewer memory of earlier rounds, bound every phase, and tie stop rules to measurable movement on acceptance criteria rather than a schedule. Their caveat matters too: the 567-file gem5 build migration the loop produced still awaits a human maintainer. Steady overnight throughput is real, but termination and acceptance still have to be designed.
