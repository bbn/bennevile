---
title: "Anthropic's Scion: 2,500 merges a day became 30,000, so they left git and moved verification after merge"
description: "As agent volume pushed Anthropic past human-scale source control, a seven-person team replaced git with Scion in five months. Merge-queue locks failed; the durable answer was post-merge, pre-deploy testing plus humans who tell Claude no."
date: 2026-10-13
kind: field-note
source:
  title: "Redesigning source control at Anthropic"
  url: https://www.anthropic.com/engineering/redesigning-source-control
project: steward
---

**Nick G. and Anthropic's source control team** published how they rebuilt version control once Claude made coding stop being the bottleneck. In **May 2026** the monorepo merged about **2,500** changes a day; by **September** it was over **30,000**. History of main alone is nearly **100 GB**, a compressed working copy over **25 GB**, and CI alone checks out code on the order of **25 million** times a day — naively more than **600 PB** of git traffic. Hundreds of internal mirrors and snapshot seeds bought time, then stopped scaling.

**Scion** is the in-house answer: always-online clients, server-side changesets (no packfiles, no push), cheap lock-free commits, sparse and virtualized checkouts, and derived data (blame, path history, skip lists) computed from parents. A seven-person team also shipped **Antique** (code review), code search, IAM, and related systems, and finished the monorepo migration in **five months**. Reported wins: infrastructure footprint **200×** smaller in CPU and memory than the git mirrors, checkouts in seconds instead of minutes, and **25%** of CI CPU capacity returned. An early Mythos rewrite of the ingestion pipeline alone cut memory **20×** and ran **4×** faster.

The merge lesson lands harder than the RPC diagram. A global lock on the merge queue did not work at this rate, so Anthropic invested in **post-merge, pre-deploy** automated testing and lets Claude repair concurrent conflicts. Engineers still review every change — for **intent**, not every line — and "very often" their job is to tell Claude **no** when an agent would violate a core constraint. Adversarial review helps and can over-defend; Slack "superfans" watch single components for novel failure modes. An October 15 update credits Meta's Mononoke (Sapling's server) for techniques Scion inherits, especially the Bonsai data model.

## Why it matters for code review

Sustained agent throughput does not stop at the PR button. It relocates the scarce resource into source control, CI checkout, and the merge gate, and when the queue cannot lock the world, verification has to move **after** merge without pretending a green pre-merge gate still means exclusive ownership of main. Continuous factories that feel FOMO when agents sit idle should read this as a capacity curve, not a git tutorial: measure merge wait, checkout cost, and post-merge repair latency before you celebrate overnight volume. Read beside [Anthropic on agentic coding straining CI](/posts/anthropic-agentic-coding-straining-ci/) and [Osmani on back-pressure when verification overflows](/posts/osmani-agentic-code-quality-back-pressure-when-verification-overflows/).
