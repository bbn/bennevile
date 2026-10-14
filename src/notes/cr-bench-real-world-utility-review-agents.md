---
title: "CR-Bench: do review agents help in the real workflow?"
description: Benchmark aimed at real-world utility of AI code review agents—not just comment similarity scores.
kind: paper
date: 2026-03-10
source:
  title: "CR-Bench: Evaluating the Real-World Utility of AI Code Review Agents"
  url: https://arxiv.org/abs/2603.11078
project: steward
---
CR-Bench targets utility: whether AI review agents help in realistic settings, beyond offline metrics that reward fluent but irrelevant comments. That framing matches how teams actually decide to keep or kill a review bot—actionable findings, noise rate, and workflow fit.

It sits in the same wave as AACR-Bench and SWE-PRBench: the field is finally separating “can generate review-like text” from “worth a human’s attention on a busy PR.”

## Why it matters for code review

Utility is the adoption metric. A bench that centers real-world usefulness pushes vendors and internal platform teams to optimize for precision and actionability, not for sounding like a senior engineer.
