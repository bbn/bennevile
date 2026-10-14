---
title: "JET: evolve the judge on labeled source, freeze it to steer target harness search"
description: "Sep 28 Teng, Cai & An: executable judge transfer lifts cold-start WebShop mean reward ~13% over fixed-rubric guidance (exact success +36% relative); better final selection alone closes only ~10% of the gap."
date: 2026-09-28
kind: paper
source:
  title: "JET: Judge-Guided Evolution at Test Time for Agent Programs"
  url: https://arxiv.org/abs/2609.34126
project: steward
---

Teng, Cai, and An put the **evaluation program** — not the task model — on the evolution path. **JET** (Judge-Guided Evolution at Test Time) evolves an executable judge on labeled source trajectories (evidence extraction, LLM assessment, score adjustment), freezes it, then uses its scores and diagnostics to promote agent-program rewrites on target tasks whose environment evaluator stays withheld. Model weights never move; the harness program does.

On clothing→non-clothing WebShop transfer across five campaigns, evolved-judge guidance beats a fixed-rubric judge by roughly **13%** mean reward from a cold (unevolved) start and **4%** from a warm start, with a **36%** relative lift in cold-start exact success. Held-out target sessions preserve the ordering. A PushT exact-judge control (coverage reconstructed from visible geometry) isolates search from judge error: evolved guidance still leads, and zero selection regret still leaves mean coverage below one — generating better policies remains the bottleneck. Ablations matter: executable judge evolution beats prompt-only optimization; textual diagnostics and numerical score adjustments each help; better final selection among fixed-rubric candidates recovers only about **10%** of the cold-start gap — most of the win is in the programs search generates under better guidance.

Read next to growing/self-editing harnesses and evidentiary-record work: JET’s claim is that **continuous factories need a transferable judge**, not just overnight program edits scored by a static rubric. Caveats the authors own — evaluator-preserving shifts only, limited campaign replication, inference cost of repeated generate–execute–judge loops.

## Why it matters for code review

Always-on harness loops fail quietly when the thing deciding “keep this rewrite” systematically undervalues partial progress. Treat the judge as reviewable software: evolve it where labels exist, freeze it for target search, and refuse to merge harness diffs that only look good under a hand-wavy rubric. That is how modest verified momentum compounds — the overnight factory improves both the worker program and the gate that admits it.
