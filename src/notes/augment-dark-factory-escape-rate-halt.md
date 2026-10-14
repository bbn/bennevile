---
title: "Dark factories: remove readers only after gates own escape rate and halt"
description: "Sep 17 Augment/Hingel: unattended merge needs owned gates, escape-rate telemetry, provenance, incident owners, drilled halt — vendors still keep humans in the merge path; dark ≠ unowned."
date: 2026-09-17
kind: field-note
source:
  title: "The Dark Factory: What Fully Autonomous Software Delivery Actually Requires"
  url: https://www.augmentcode.com/guides/dark-factory-autonomous-software-delivery
project: steward
---

[Paula Hingel at Augment](https://www.augmentcode.com/guides/dark-factory-autonomous-software-delivery) (September 17, updated Sep 18) defines a software dark factory as the end state where agents implement and verify through gates into merge **without a human reading every diff** — while humans still write intake intent and keep **gate policy plus halt authority**. Dark names what people stop reading, not what they stop owning. The cautionary sketch is an unattended pool of green merges where a connection-pool default change pages at dawn and nobody’s memory attaches to the diff.

The checklist that makes unsupervised shipping a controlled decision, not a mood: **standardized intake** (acceptance criteria and scope so failures are spec vs implementation); **station-level gates with named owners and escape-rate telemetry** (share of passes later reverted/hotfixed); **provenance at merge** (spec, agent/model, accepting gate — reconstructable without asking around); **incident ownership** that names a human, not the agent; and a **drilled halt path** timed in the last quarter. She maps loop positions (in / on / over / out) and argues dark factories put humans **over** the loop by design — the line runs until a gate or named halt stops it. Counter-pressure keeps most lines attended: SWE-bench gaps (~1 in 5 Verified, ~2 in 5 Pro unresolved on cited snapshots), vendor policies that still require pre-merge human review and ban self-merge, trust/attack surfaces on auto-approve, and regulatory independence rules (e.g. DORA change-approval separation). Assessment homework is concrete — last 20 agent merges, who read each; name beside every required check; escape rates; halt drill.

## Why it matters for code review

Continuous overnight factories beat burst heroics only when darkness is purchased with owned verification capacity, not with hope that green checks remember. Hingel’s escape-rate and halt receipts productively complicate the always-on pitch: remove readers after the gate can catch what top agents still miss — and keep a person who can stop the line without the agent’s cooperation.
