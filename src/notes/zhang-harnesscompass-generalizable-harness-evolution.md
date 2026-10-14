---
title: "HarnessCompass: evolve the harness under a generalization gate"
description: "Aug 3 Zhang et al.: constrained + proactive-feedback + component-wise harness evolution — SWE-bench Verified 54%→66% Pass@1 in 5 turns; held-out 60.4% vs AHE 54.7%; frozen harness lifts Claude Sonnet 4.6."
date: 2026-08-03
kind: paper
source:
  title: "HarnessCompass: Guiding Automatic Harness Evolution toward Generalizable and Effective Agent Harnesses"
  url: https://arxiv.org/abs/2608.01918
project: steward
---

Zhang, Zhou, Song, Chen, Tian, Yang, Ma, Li, Feng, Li, Jin, and Xu treat automatic harness evolution as a **discipline** problem, not a search-budget problem. **HarnessCompass** answers three failure modes in prior loops (overfit to search tasks, trajectory-only evidence, joint edits that interfere) with three matched constraints: a **generalization gate** that admits only task-agnostic edits with applicability criteria; **proactive first-person feedback** (blind + hindsight, then trajectory-grounded) so the meta-agent hears harness friction the trace alone buries; and **component-wise tracks** (structural vs guidance) merged by an R³ revision–recombination–refinement step instead of winner-take-all.

The receipts are the held-out split. On SWE-bench Verified with GPT-5.4 (non-thinking), evolving on 50 tasks and scoring on 450 unseen ones, HarnessCompass reaches **66%** Pass@1 on the sample in **5** turns versus AHE’s **63%** after ~**20**, and **60.4%** held-out versus AHE’s **54.7%** (total **61.0%** vs **55.5%**; seed **51.8%**). Ablations show the gate alone jumps held-out to 58.4%; feedback without R³ lifts the sample but *hurts* transfer; R³ restores both. A harness frozen from GPT-5.4 still lifts Claude Sonnet 4.6 total Pass@1 from **70.0% → 73.8%**. Memory case study: ungated runs store instance recipes (`django__django-13158`…); gated runs store criteria (“when multiple consumers share a broken contract, patch the shared producer”).

Read next to evaluation critiques that say harness gains may be repeated sampling: Compass is the constructive reply — evolve, but gate for transfer. Caveats the authors own: one evolution model family for the main loop; some frozen-harness repo regressions on the stronger base.

## Why it matters for code review

Self-improving factories do not get free overnight harness growth — they need **merge gates for the control plane** that reject task-id hardcodes the way CI rejects failing tests. Review harness PRs for applicability criteria, first-person friction grounded in traces, and whether structural edits are deterministic mechanisms rather than advice smuggled into middleware. Continuous verified momentum compounds when the night’s harness diff still helps a repo the search set never saw — FOMO for more evolution turns is wasted if every edit is an answer key.
