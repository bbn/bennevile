---
title: "Greptile: review as a slice of automated validation"
description: Greptile argues PR review is one surface of a larger goal—codebase knowledge bases that catch second-order bugs beyond the diff.
kind: field-note
date: 2026-07-10
source:
  title: Automating Code Validation
  url: https://www.greptile.com/blog/automating-code-validation
project: steward
---
Greptile reframes itself: PR review is one slice of automating code validation—the swamp that makes daytime shipping feel unlike nighttime vibe coding. Validation = user-contract safety, future propensity to break (scale/maintainability), and fidelity to author intent. North-star provocation: a regulated bank merging flow-of-funds with only Greptile approval.

Plan: holistic validation instead of a zoo of single-purpose AI tools. Maintain a living codebase knowledge base; measure blast radius across call/data flow; spend frontier tokens on hard judgment while open models do grep/trace grunt work; run the app with browser/API simulation; hybrid security (scanners + AI); learn from later bugfix PRs as risk memory.

Explicitly rejects “humans will just review AI code forever” as dystopian—automate validation so humans keep creativity.

## Why it matters for code review

Diff comments without blast-radius analysis and runtime checks won’t clear production bars. This is the vendor thesis for why review bots must become validators.
