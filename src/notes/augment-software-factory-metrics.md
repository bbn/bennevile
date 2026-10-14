---
title: "Factory metrics: generation vs review bandwidth"
description: "Augment’s metrics guide treats the agent fleet plus human reviewers as one production unit — Faros/LinearB receipts show PR volume up while review waits explode, and DORA’s verification tax names the spend."
date: 2026-08-23
kind: field-note
source:
  title: "Software Factory Metrics: Measuring Throughput When Agents Do the Work"
  url: https://www.augmentcode.com/guides/software-factory-metrics
project: steward
---
Per-engineer commit dashboards lie once one person directs a fleet. Augment’s metrics guide pushes system-level measurement: throughput of *merged, production-bound* changes by submitter type, predictability (commitment reliability, forecast error), say/do ratio, agent fleet capacity against review bandwidth, and variance (percentile spreads that actually break forecasts).

The binding-constraint receipts are the keepers. Faros telemetry (~10k developers, 1,255 teams): 98% more merged PRs alongside 91% longer review times, with no org-level outcome correlation from AI adoption alone. LinearB’s 2026 bands: agentic PRs wait ~5.3× longer than unassisted before pickup; among top-decile orgs, agent-opened PR yield (merge within 30 days) sits at 79% vs 92% for human-only. Duma et al. (EASE 2026) on AI-generated PRs often getting no human review at all — or mostly AI review — splits latency from non-review as different failure modes. The NBER attenuation curve and DORA’s March 2026 line (“time saved writing is often re-spent auditing”) close the loop: writing and shipping are different instruments.

## Why it matters for code review

Tag PRs by submitter type, put reviewer queue depth beside agent output, and ask which constraint you are buying more of. If generation is cheap and verification is not instrumented, every new agent is a longer queue dressed as productivity.
