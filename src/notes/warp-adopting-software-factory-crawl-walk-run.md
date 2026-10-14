---
title: "Warp: crawl point automations, then walk a closed factory loop"
description: "Sep 15 Zach Lloyd: Trigger→Agent patches hit context/metrics/security limits; walk = cloud default + shared context + triage→spec→implement→review→verify→monitor — Warp’s marketing site ~75% factory-shipped."
date: 2026-09-15
kind: field-note
source:
  title: "Adopting the software factory model: crawl, walk, run"
  url: https://www.warp.dev/blog/adopting-the-software-factory-model-crawl-walk-run
project: steward
---

Zach Lloyd’s Sep 15 Warp post is an adoption map for teams that already have scattered cloud agents and still feel like they are shoulder-surfing Claude. **Crawl** is Trigger → Agent Activity: issue repro/triage, PR review comments, Sentry self-heal, CI repair, doc autoupdates, browser-use verification, simple bug fixes. Low risk, builds intuition — then the limits show up. Point automations do not share context (a better review skill does not improve triage), there is no global view of cost-per-PR / cycle time / automation percent, and each patch adds its own security surface and observability tax.

**Walk** is the decision to treat development as a cloud software factory by default: sandboxes over laptops, centralized governance and traces, optionality across models and harnesses, escape hatches into the human inner loop, a shared context layer across stages, and evals so improvements are measurable. Lloyd’s milestone is deliberately small: one end-to-end factory on a low-stakes surface (marketing site / internal app) before the monorepo. Target loop: triage → spec → implement → review → verify → monitor, with humans at intent and merge — not at every interrupt. Internally, Warp reports the walk factory automates about **75%** of changes to warp.dev (human describes the change; factory carries it to ship). That is continuous verified momentum on a bounded surface, not a claim that 65k-star native clients are lights-out.

**Run** is where overnight/always-on ambition meets industrial bottlenecks: remote envs on large projects, knowing whether factory config changes help or churn, cost as models stay longer on harder codebases, multi-player signoff, PR pile-up policy, and closing the loop on production quality. The stack he points at — factories-as-code, multi-model/multi-harness, owning factory data as improvement fuel — is the harness layer that has to outlast any single interactive session.

## Why it matters for code review

FOMO that agents aren’t clearing the queue overnight is usually a crawl-stage feeling: more triggers, still no shared verification or merge policy. Lloyd’s walk loop relocates review into an explicit stage with computer-use verification *before* human merge, so sustained throughput does not silently become skimmed diffs. Bursts of interactive Claude still win on ambiguous greenfield and on surfaces you have not factory-fitted — the productive complication — but once the closed loop exists, modest always-on motion compounds past peak-session heroics because the gates travel with the work.
