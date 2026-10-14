---
title: "Agent performance PRs merge less often, and half of 'validated' ones lack numbers"
description: "Peng, Calvo, Kalu and Davis (Purdue) study 1,130 agent and 1,130 human performance PRs through June 2026. Agentic PRs merge 54.4% vs 73.3% for humans, use similar optimization strategies, and report validation at comparable rates — but lean more on static reasoning than benchmarks, and about half of validated PRs in both groups report no quantitative performance metric."
date: 2026-10-02
kind: paper
source:
  title: "How Do Coding Agents Optimize Software and Report Performance Validation? (arXiv 2610.03969)"
  url: https://arxiv.org/abs/2610.03969
project: steward
---

[Huiyun Peng, Ricardo Calvo, Kelechi G. Kalu and James C. Davis](https://arxiv.org/abs/2610.03969) at Purdue extend their MSR 2026 Mining Challenge pilot into a balanced sample of 1,130 agentic and 1,130 human-authored performance pull requests collected through June 2026. The question is not only which optimizations agents propose, but whether the evidence in the PR would convince a careful reviewer.

## Same strategies, thinner proof

Agentic performance PRs merge less often than human ones (54.4% vs 73.3%), though when they do merge the median time is shorter. The optimization catalog looks almost the same across groups — memory/locality and algorithm-level changes dominate both — so the gap is not "agents invent weird optimizations." Validation is *reported* at similar rates (82.3% agentic vs 80.6% human). What differs is the form: agentic PRs lean more on static reasoning (51.4% vs 39.3%), humans more on benchmarks (57.2% vs 46.1%), with agentic benchmark use rising over the study window toward parity.

The sharper finding is what "validated" contains. Among PRs that report validation evidence, only about half include an extractable quantitative performance metric (50.9% agentic, 52.4% human). Latency leads when a number appears; most other dimensions stay rare. Caching and buffering PRs that claim a runtime win seldom also report the memory cost. Humans under-validate code-smell refactorings relative to resource-targeting changes; agents treat both alike — which is not the same as measuring either well.

## How it fits

This is the large-sample version of a reviewer's suspicion under agent volume: a PR can say it was validated and still give you nothing checkable. It motivates review criteria and CI that demand intended-effect measurements and trade-offs, not the presence of a validation paragraph. Read it beside [greens that prove nothing until driven red](/posts/dsalathe-greens-that-prove-nothing-drive-guards-red/) and [Sashiko's caveat that a clean agent pass is not a bug-free patch](/posts/sashiko-191k-kernel-reviews-clean-pass-not-bug-free/). For always-on factories optimizing in the background, the merge-rate gap and the missing numbers are the verification tax showing up in the archive.
