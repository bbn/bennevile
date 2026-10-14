---
title: "Shipwright: Code Factory merges only with current-head evidence and a harness-gap loop"
description: "Shipwright Code Factory pattern: agents write 100% of code; risk-policy gate, SHA-tied evidence (API/CLI/DB/browser), automated remediation, and incident→harness-gap SLAs before merge."
date: 2026-02-17
kind: field-note
source:
  title: "Code Factory Pattern | Shipwright"
  url: https://sethdford.github.io/shipwright/guides/code-factory/
project: steward
---

[Shipwright’s Code Factory pattern](https://sethdford.github.io/shipwright/guides/code-factory/) is a control-plane recipe for repos where coding agents write the diffs and the repository — not the agent — decides merge. One machine-readable `config/policy.json` owns risk tiers, required checks, docs-drift rules, evidence collectors, and harness-gap SLAs. A cheap **risk-policy-gate** classifies every PR before expensive CI fans out; required checks and evidence types scale with tier (critical paths demand more than docs).

The load-bearing invariant is **current-head SHA discipline**: check runs, reviews, and approvals are validated against the PR head being merged — stale “clean” evidence from an older commit cannot bless a newer push. Review findings feed an automated remediation loop (patch → focused tests → push → SHA-deduped rerun); bot-only threads auto-resolve after a clean current-head rerun, while human threads stay open. Evidence is multi-surface — browser, API, database, CLI, webhook, custom — with freshness windows and a pre-PR capture+verify path. Production regressions close a **harness-gap loop**: every incident must produce a test case within P0/P1/P2 SLAs so the night’s factory coverage grows from real failures, not from more unscoped agent volume.

## Why it matters for code review

Always-on agent factories fail the moment merge trusts yesterday’s green check on today’s SHA — Shipwright makes evidence and risk policy the mergeable unit. Review factory PRs for a single policy contract, head-SHA binding on every required check, and whether incidents actually widen the harness. Continuous verified momentum compounds when FOMO for overnight agent throughput is spent on auditable, tiered gates and gap backfill rather than another burst that merges on stale CI.
