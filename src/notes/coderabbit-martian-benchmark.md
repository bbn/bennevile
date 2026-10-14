---
title: "Martian Code Review Bench: F1 from real developer behavior"
description: "CodeRabbit’s write-up of Martian’s independent bench (~300k PRs): recall and F1 leadership claimed from whether developers act on comments."
kind: field-note
date: 2026-03-03
source:
  title: CodeRabbit tops independent AI code review benchmark
  url: https://www.coderabbit.ai/blog/coderabbit-tops-martian-code-review-benchmark
project: steward
---
Martian’s public Code Review Bench scores tools using real developer behavior across a very large PR corpus rather than a static planted-bug list. CodeRabbit reports #1 F1 (~51%) and leading recall, with ~49% precision interpreted as roughly one in two comments driving a code change.

Read as a primary-source claim with vendor interest—but the methodology shift matters more than the crown: online behavioral labels beat lab F1 theater if you care about merge outcomes.

Pairs with their evaluation framework post: acceptance and recall in the wild are the interesting axes.

## Why it matters for code review

Gives a concrete external benchmark vocabulary (precision/recall/F1 on acted-upon findings) for comparing AI reviewers—and a reminder to demand methodology, not just winner graphics.
