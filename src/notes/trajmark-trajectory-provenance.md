---
title: "Watermark the trajectory, not just the patch"
description: "Sep 9 TrajMark: ownership + segment-level tamper localization for coding-agent trajectories — because patch watermarks miss process provenance and local edits can keep a global ownership signal."
date: 2026-09-09
kind: paper
source:
  title: "TrajMark: Ownership Attribution and Segment-Level Tamper Localization for Coding-Agent Trajectories"
  url: https://arxiv.org/abs/2609.10416
project: steward
---

When a coding agent opens a PR, provenance usually means “who owns this patch?” TrajMark (Zeng et al.) argues that is the wrong object. Watermarking the final diff authenticates the artifact, not the visible process that produced it — and a locally edited trajectory can still carry a global ownership signal while hiding which protected region was tampered with.

Their fix is a training-free, symmetric-key, visible-only watermark on the *trajectory*. Two layers: a sparse *owner* layer that encodes a six-bit deployment ID by rewriting a keyed subset of natural READ actions into masked linear equations (no extra actions), and a *localization* layer that inserts linked seals over critical-action segments so a local edit breaks nearby commitments and exposes the affected protocol region. Across three coding-agent frameworks and three LLMs, clean batches recover the exact owner; eligible single-site attacks are detected 95.5–100% of the time; random single-action corruption localizes to an accepted protocol region 95.8% of the time. Matched Pass@1 stays essentially flat (26.9% vs 26.3% unwatermarked).

## Why it matters for code review

Software factories that accept agent PRs on “CI green + who signed the commit” are scoring the artifact, not the run. If review is supposed to absorb residual risk, you need process evidence that survives local scrubbing — which files were read, which tools ran, whether the trajectory was edited after the fact. TrajMark is an early receipt that trajectory integrity can be a first-class review input, not a log you hope nobody forged.
