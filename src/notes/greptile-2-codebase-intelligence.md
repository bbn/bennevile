---
title: "Greptile 2.0: full-codebase graph review, not just diff chat"
description: "October 2024 rewrite pitch: Greptile indexes a codegraph and reviews PRs with whole-repo context on GitHub and GitLab."
kind: field-note
date: 2024-10-08
source:
  title: Introducing Greptile 2.0 — Greptile
  url: https://www.greptile.com/blog/greptile-2
project: steward
---
Greptile 2.0 is an early, clear statement of the “full codebase context” thesis for AI review: build a codegraph, then review PRs against how functions and modules actually connect—not only against the hunk.

## Why it matters for code review

Diff-only reviewers miss cross-file invariants. Anything claiming senior-engineer review quality should explain how it retrieves and budgets that context, and what it does when the graph is stale.
