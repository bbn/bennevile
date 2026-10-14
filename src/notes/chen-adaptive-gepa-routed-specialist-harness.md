---
title: "Adaptive-GEPA: evolve the router and the specialist programs together"
description: "Sep 30 Chen/Zhang/Wang et al.: reflective search jointly learns request division + specialist programs on a mixed workload—family-mean 52.6→70.6 vs 62.5 for single-program GEPA at ~18k scored calls."
date: 2026-09-30
kind: paper
source:
  title: "Adaptive-GEPA: Make Your Harness Fit Heterogeneous Requests"
  url: https://arxiv.org/abs/2609.38762
project: steward
---

Tianyu Chen, Yasi Zhang, Ruiyi Wang, Xinran Zhao, Taoran Li, and Mingyuan Zhou start from a familiar factory reality: one endpoint receives **heterogeneous requests**—retrieval, math, privacy rewrite, constrained writing—that want different tools, reasoning modes, and control flow. Optimizing **one shared program** leaves the division of work implicit in source search; optimizing **one program per known family** fixes the partition before you learn anything. Adaptive-GEPA does the third thing: under one search budget it evolves a **router** plus a **library of specialist programs**, each pairing a short human-readable responsibility description with editable executable code.

The merge rule matters as much as the edit rule. Specialists are aligned by the **validation requests they actually handled** (Jaccard footprints), then description–program pairs are inherited atomically so slot indices cannot silently swap roles across branches. On a fixed HotpotQA / AIME / PUPA / LiveBench-IF mixture with Qwen3-8B, the reported run grows four experts **without family labels** to the router or reflection model, matches the task partition on all **651** test requests, and lifts family-mean score (×100) from **52.6 → 70.6**—versus **62.5** for GEPA’s full-program adapter and **54.0** for GRPO at a nominal **18,000** scored calls (approaching a **73.0** label-routed per-family reference).

## Why it matters for code review

Continuous factories rarely ship one workflow; they ship a **queue of unlike jobs**. Adaptive-GEPA argues the harness should learn *both* the procedures and when each procedure runs—then keep that division explicit through edits and merges, not buried in a god-program’s `if` spaghetti. Under sustained heterogeneous load, review the router’s evidence (who handled what) and the specialist’s verify contract the same way you’d review a service mesh route plus its canary: wrong partition wastes the overnight grind even when each specialist is locally clever. Pair with [RRSI’s regularized harness self-improvement](/posts/xia-rrsi-regularized-harness-self-improvement/) and [HarnessEvolve’s reference-trajectory self-evolution](/posts/jiang-harnessevolve-reference-trajectory-self-evolution/).
