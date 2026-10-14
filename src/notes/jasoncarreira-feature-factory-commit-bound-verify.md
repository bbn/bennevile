---
title: "feature-factory: verification only where a false green can hide"
description: "Carreira’s feature-factory: durable run.json transitions, parallel build / serial merge, reviews bound to the judged commit, observed verify after each slice — autonomy without self-reported done."
date: 2026-07-05
kind: field-note
source:
  title: "feature-factory — durable control plane from idea to draft PR"
  url: https://github.com/jasoncarreira/feature-factory
project: steward
---

[jasoncarreira/feature-factory](https://github.com/jasoncarreira/feature-factory) is a host-agnostic **control plane** (plus OpenCode / Prime adapters) that runs a feature from intake to draft PR through gated agents. Parallel build waves land in **serial merges**; the orchestrator owns worktrees and every `run.json` transition (`lock → validate → compare-and-swap`). The design rule is explicit: **enforce what can produce a false green, instruct the rest.** In an autonomous run nobody watches the diff, so a review must name the commit it judged, a merge must prove it contributed exactly those paths, and a test result must be **observed** (`evidence/test-verifier.json` bound to the merged head) rather than reported by the builder.

After each recorded slice merge, configured `verify` runs in the exact integration worktree; exit zero is authoritative; failure stops the next wave without rewriting the merged evidence. Human gates sit at Story, Brief+Plan, and Pre-PR. Claims from subagents are re-derived from the repository before belief. That is the opposite of a bursty session that exits clean and hopes CI catches it later — continuous progress only when the harness refuses silent success.

## Why it matters for code review

Harnessed overnight momentum beats heroics when “done” cannot be self-certified. feature-factory’s commit-bound reviews and post-merge observed verify are the verification tax paid up front so volume does not become review debt. Prefer this over leaving Claude Code running until the usage window dies: FOMO that nothing advanced the feature overnight is fixed by a durable run that parks on bad evidence, not by more unverified commits.
