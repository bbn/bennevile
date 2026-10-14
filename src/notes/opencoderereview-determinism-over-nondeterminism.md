---
title: "OpenCodeReview: inject determinism into uncertain review agents"
description: Rule-guided dispatch, grounded file tools, and an asymmetric reflector that filters hallucinations—higher SEM-F1 at far lower token cost on AACR-Bench.
kind: paper
date: 2026-08-10
source:
  title: "OpenCodeReview: Determinism over Non-Determinism for Cost-Effective Agent-Based Code Review"
  url: https://arxiv.org/abs/2608.09290
project: steward
---
OpenCodeReview attacks two failure modes of free-roaming review agents: non-deterministic tool wander and context locality that never leaves the diff. Their fix is selective determinism: rule-guided file/criteria dispatch, a curated review tool set in a ReAct loop with parallel file subagents, and Independent Reflection.

The reflector is the interesting bit—it sees only the diff, not the explorer’s tool trail, so it can falsify hallucinated comments without self-reinforcing the explorer’s story. On AACR-Bench they report up to 2.17× higher SEM-F1 than Claude Code/Codex scaffolds with 5–15× fewer tokens.

## Why it matters for code review

“More agent freedom” is a cost center in review. OpenCodeReview is a practical blueprint: decide which steps must be deterministic (triage, reflection boundaries) and which can stay generative (local findings). Precision filters belong on an asymmetric critic, not on the same agent that just hunted for bugs.
