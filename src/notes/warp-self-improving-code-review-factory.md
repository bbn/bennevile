---
title: Warp on self-improving code review inside the factory
description: "Companion Warp engineering note: how cloud software factories close the loop specifically on review quality and agent compliance."
kind: field-note
date: 2026-07-15
source:
  title: How to build a cloud software factory - self-improving code review
  url: https://www.warp.dev/blog/how-to-build-a-cloud-software-factory-self-improving-code-review
project: steward
---
Third post in Warp’s DIY cloud factory series: after triage and spec agents, build a review skill that takes PR description, diff, and optional specs and emits structured `review.json`. A GitHub Action launches a cloud agent with that skill; the Action—not the agent—posts comments, keeping the agent read-only to reduce prompt-injection blast radius.

Because the reviewer is a full coding agent, it can search the repo, build, and test hypotheses before suggesting fixes. Team-specific conventions are intentionally left out of the initial skill. Instead an outer-loop agent runs daily over PRs, synthesizes human corrections/validations, and opens a PR to update the review skill—learning style preferences and gotchas over time.

Demo feedback examples: prefer structural changes over comment bandaids; keep suggesting HTTP timeouts. Metrics/evals for cost and correction rate are flagged as follow-on work.

## Why it matters for code review

Shows a concrete self-improving review station: structured findings, deterministic posting, and a learning loop driven by real human reactions—not a static prompt forever.
