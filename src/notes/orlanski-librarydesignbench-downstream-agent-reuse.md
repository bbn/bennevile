---
title: "LibraryDesignBench: grade the library by what other agents write with it"
description: "Sep 29 Orlanski/Zhang/Trost et al.: 15 design tasks × 242 problems; score = correctness² × simplicity vs production-library references; Opus 5.5 48.9 vs production 46.6; 64% excess code from rigid/hard APIs, not missing features."
date: 2026-09-29
kind: paper
source:
  title: "Can Agents Design Libraries for Agents?"
  url: https://arxiv.org/abs/2609.36730
project: steward
---

Gabriel Orlanski, Alex L. Zhang, Avi Trost, and collaborators note that agents increasingly inherit code from other agents—and still **reimplement** what a library already offers. **LibraryDesignBench** grades a designer only through downstream use: design a full-featured library from a non-prescriptive capability brief, then score three weaker implementers from other model families on how **correct and simple** their programs are relative to expert references built on the real production library (clap, pydantic, pandas, …). Fifteen tasks, **242** expert-validated problems, four languages; score averages \(q^2\cdot\rho\) over problems and implementers, with \(\rho\) a capped mean of cyclomatic/cognitive/Halstead/SLOC ratios vs the reference.

Opus 5.5 leads at **48.9** (production library **46.6**, no library **34.4**); test-pass rates barely separate anyone (~84–87%), so the gap is almost all simplicity. On eleven of fifteen tasks, agent designers **reproduce** production abstractions (e.g. clap’s builder, not its shorter derive). An audit of 810 partially passing oversized solutions attributes **64%** of excess-code primary failures to **rigidity or verbose interfaces**, only **14%** to missing coverage. Even with the production library, implementers reach simplicity **61.5**—so part of the gap is use, not design. A more prescriptive agent-first prompt (consumer sketches first, runnable examples, test with subagents) lifts GPT-6 Astra by **+2.3** points via simpler programs and cuts exported-name overlap with production (**19.4%→13.4%**), still just shy of the human library.

## Why it matters for code review

Self-improving factories that only check “does the new package pass its own tests?” will ship APIs that overnight consumers rebuild by hand. LibraryDesignBench’s receipt: under sustained agent load, the merge criterion for shared harness code is whether **other** agents write thinner, green adapters—not whether the designer’s unit tests went green. That is the same verify-under-volume instinct as [is your project doing work overnight yet?](/posts/is-your-project-doing-work-overnight-yet/) and [unearned passes under benchmark maintenance](/posts/luo-unearned-passes-benchmark-integrity-maintenance/). FOMO for agents minting libraries while you sleep is misplaced unless morning review grades reuse by downstream agent programs, not by the author’s self-demo.
