---
title: Anthropic brings multi-agent Code Review to Claude Code
description: "March 2026 research preview: parallel find/verify/rank agents on GitHub PRs for Team/Enterprise, ~20 minutes and $15–25 per review."
kind: field-note
date: 2026-03-09
source:
  title: Bringing Code Review to Claude Code — Anthropic
  url: https://claude.com/blog/code-review/
project: steward
---
Anthropic’s managed Code Review is explicitly depth-over-speed: multi-agent find → verify → rank, ~20 minutes, token-billed around $15–25/review, research preview for Team/Enterprise. Internal stats claim more PRs get substantive comments and a very low marked-incorrect rate.

## Why it matters for code review

This is the expensive end of the spectrum. Useful when a PR is large or high-risk; absurd as a default on every typo fix. Compare against lighter Claude Code GitHub Action workflows before you turn it on org-wide.
