---
title: "E2E-SWE: whole-repo generation is measurable when tasks are actually solvable"
description: "Sep 29 Ding et al. (Meta): 186 empty-workspace tasks × 11 languages; pass@1 11.7–67.7% across 13 models; iterative static+rollout audits flip only 2.2% of outcomes; front-loaded planning peaks in first ~4–12 turns."
date: 2026-09-29
kind: paper
source:
  title: "E2E-SWE: Benchmarking LLMs on Building Working Codebases from Scratch"
  url: https://arxiv.org/abs/2609.38335
project: steward
---

Hantian Ding, Chloe Bi, Jiacheng Zhu, John Yang, Matt Deitke, Pengcheng Yin, Zijian Wang, and Rui Hou (Meta Superintelligence Labs) ask whether coding agents can build **complete, installable repositories from a natural-language specification and an empty workspace**—not patch an existing tree. **E2E-SWE** ships **186** tasks across **11** languages, each with independently authored hidden tests and a test-driven specification, graded only when every test passes after a fresh offline install. Median reference repos sit near **7.4K** LOC; agents get a 4-hour budget under a simple ReAct scaffold.

The headline is that full-resolution rates are no longer stuck near zero when solvability is a first-class design goal. Across **13** frontier models, pass@1 spans **11.7%–67.7%** (Claude Opus 5 highest), with clear separation instead of the compressed ~10% cluster the authors see on NL2Repo-Bench. A post-hoc LLM audit of **744** attempts attributes outcome-changing failures to task defects in only **2.2%** of cases. Trajectory analysis shows long, **front-loaded** reasoning: for most models the longest reasoning turn lands in the first **~4–12** agent turns, consistent with planning the whole system before implementing. Claude families show higher 12-gram containment against references on some tasks, but high overlap does **not** guarantee resolve.

## Why it matters for code review

Overnight factories that “build the product while you sleep” need a grading contract as careful as the worker harness. Review always-on greenfield lanes for the E2E-SWE discipline: tests that assert user-facing behavior without freezing private structure, specs that state every tested obligation, and rollout audits that distinguish model failure from underspecification. Continuous verified momentum compounds when whole-repo acceptance is binary and fair; FOMO for more overnight scaffolding without solvability checks just measures how rigid the hidden tests are. Pair with [Yang’s Zero2Repo sealed acceptance](/posts/yang-zero2repo-sealed-acceptance-from-scratch/) and [Hu’s NanoHarness component ablations](/posts/hu-demystifying-harness-effects-nanoharness/) when sizing greenfield factory budgets.
