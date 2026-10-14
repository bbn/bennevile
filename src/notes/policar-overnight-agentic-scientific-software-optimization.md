---
title: "Overnight optimization: lock the verify harness, then let the agent grind for hours"
description: "Sep 30 Poličar/Špendl/Hočevar: humans set scope + correctness + verify; Claude Code overnight on openTSNE (4.4–7.7×), ssGSEA (136×), and a new graphlet algorithm (~160× vs Orca)."
date: 2026-09-30
kind: paper
source:
  title: "Is manual software optimization a thing of the past?"
  url: https://arxiv.org/abs/2609.37849
project: steward
---

Pavlin G. Poličar, Martin Špendl, and Tomaž Hočevar ask whether coding agents can still find real speedups on **mature scientific software**—not toy kernels—when humans only define scope, correctness, and a verification mechanism, then step away. Across three case studies with Claude Opus 5 in Claude Code, the answer is yes: constant-factor rewrites, mathematical reformulations, and even a new algorithm, with maintainers (including original openTSNE/Orca authors) reviewing the results.

**openTSNE.** Keep the public API, defaults, and accuracy of Barnes–Hut and FIt-SNE; run the project’s **174 unit tests** after each change and keep only measured runtime wins. After an overnight run (~60 ideas tried, **34** retained), speedups land at **4.4–7.7×** at 500k points—including a FIt-SNE stage simplification that cuts that stage ~25%. No asymptotic change; still a large constant-factor haul on already-hand-optimized CPU code.

**ssGSEA.** Build a new implementation whose scores **exactly match** existing libraries. Restructuring GSVA’s closed form as sparse matrix multiplication drops 2,000 gene sets × 1,000 samples from **5 minutes** (GSEApy) to **2.2 seconds** (**136×**).

**Graphlet/orbit counting.** Match Orca and brute-force counts exactly. After several autonomous hours, a new algorithm beats Orca on every tested network—about **160×** on a BioSNAP PPI graph (13 s vs 35 min) with roughly quadratic edge scaling versus Orca’s cubic.

## Why it matters for code review

This is the always-on factory pattern with the human role relocated: decide *what* to optimize and *how green is proven*, then leave the agent under that harness for hours. Peak-session Claude Code mastery still shows up—here the burst *is* the overnight grind—but only because verification is locked before autonomy starts. Score continuous harnessed throughput by red→green evidence under sustained load (tests after every edit; exact numerical match; maintainer audit), not by how many optimization ideas the night shift proposed. FOMO for idle agents without that verify contract just burns tokens rewriting folklore into production numerics—see also [Serge’s overnight GPU verify funnel](/posts/ziade-serge-huggingface-overnight-gpu-verify/) and [ReviveBench’s hidden-verifier audit](/posts/liu-revivebench-hidden-verifier-defect-audit/).
