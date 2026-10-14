---
title: "Recall is the metric now: AI review inverted precision culture"
description: Ben Nevile on why agent-side filtering flips review etiquette from “only raise sure things” to “raise everything potentially relevant.”
kind: field-note
date: 2026-06-01
source:
  title: "Recall is the metric now: What AI code review suddenly gets backwards"
  url: https://www.linkedin.com/pulse/recall-metric-now-what-ai-code-review-suddenly-gets-backwards-nevile-y6x5c/
project: steward
---
Classic review etiquette optimized precision because every comment cost scarce human author attention. With agents that can triage and auto-fix, the consumer-side filter gets cheap—so completeness (recall) becomes the thing to maximize.

Same inversion shows up outside PRs: people ask for more signal into agent-read inboxes, not less. Channels increasingly operated by agents reward “send the useful things” over “don’t bother humans.”

Reads as a metric realignment for anyone tuning AI reviewers: optimizing only for low false positives may be optimizing for yesterday’s bottleneck.

## Why it matters for code review

If an agent sits between findings and humans, missing a real issue is costlier than an extra candidate. Severity routing and auto-fix loops make high-recall first passes rational—then precision belongs in the judge/filter stage.
