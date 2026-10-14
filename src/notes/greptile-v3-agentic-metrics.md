---
title: "Greptile v3: agentic review with published upvote and action-rate deltas"
description: November 2025 engineering write-up comparing v2 vs v3 on upvote ratio, action rate, and cache economics after reviewing over a billion lines.
kind: field-note
date: 2025-11-26
source:
  title: "Greptile v3: Agentic AI Code Review with 256% Better Results"
  url: https://www.greptile.com/blog/greptile-v3-agentic-code-review
project: steward
---
A rare vendor post that publishes before/after review-quality metrics (upvote ratio, action rate) for an agentic rewrite. Take the percentages with the usual self-report grain of salt, but the methodology—tool-using loops with a higher “sureness” bar—is the actual story.

## Why it matters for code review

Precision/noise is the product. If an agentic loop only increases comment volume, it fails. Greptile’s claim is the opposite: more recursion, fewer low-confidence nits. That is the axis to pressure-test on your own repos.
