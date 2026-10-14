---
title: "SWE-PRBench: grade AI review against real PR feedback"
description: Benchmark that scores AI code-review quality against pull-request feedback rather than only against generation/pass metrics.
kind: paper
date: 2026-03-27
source:
  title: "SWE-PRBench: Benchmarking AI Code Review Quality Against Pull Request Feedback"
  url: https://arxiv.org/abs/2603.26130
project: steward
---
Generation benchmarks ask whether a patch passes tests. SWE-PRBench asks a different question: does the AI reviewer’s feedback look like useful PR review? That shift matters because a model can ship a green patch and still be a terrible reviewer—or leave high-signal comments on a red patch.

The benchmark anchors evaluation in pull-request feedback, giving teams a way to compare review agents on the artifact humans actually consume: comments, not just resolve rate.

## Why it matters for code review

If you only track SWE-bench resolve rate, you are not measuring your review bot. SWE-PRBench is one of the clearer attempts to put review quality on its own leaderboard. Use it (or clone the idea) before declaring your PR agent “good.”
