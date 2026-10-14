---
title: Warp Factories that score themselves and open fix PRs
description: "Warp’s self-improvement loop: scorers for efficiency/quality/compliance sample runs, then a scheduled agent proposes skill/config diffs from failures."
kind: field-note
date: 2026-08-26
source:
  title: Towards self-improving software factories
  url: https://www.warp.dev/blog/engineering-self-improving-software-factories
project: steward
---
Standing up a factory connected to issues and forges is easy; making it learn your team is the hard part. Warp’s answer: file-defined scorers that classify agent runs (e.g. efficiency from highly inefficient → clean) with pass thresholds and sampling rates, then a scheduled self-improvement agent that batches failures and proposes skill/config changes as reviewable PRs.

They dogfood scorers for code quality, efficiency, and procedure compliance. Examples of merged self-improvement: stop 275 computer-use actions to verify one CSS line; add a Design dimension after agents warped shared abstractions; cut no-op orchestrator messages; fix broken skill references; heartbeat from Slack-dispatched agents.

Guidance against LLM-ism: redraft skills holistically, don’t pile addendums.

## Why it matters for code review

Review quality in a factory is a living system. Scoring runs and feeding failures back into reviewer skills is how you keep agent comments high-signal instead of slowly rotting into noise.
