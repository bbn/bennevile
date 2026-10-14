---
title: "EffectMatch: approve the call, then match the persistent outcome before continuation"
description: "Sep 28 Zhang et al.: Effect Commit Contract — bind approval to one occurrence, compare actual persistent changes to approved multiset, EXACT/DIVERGED/INDETERMINATE; 0 incorrect commits across 39 task–fault cases ×3."
date: 2026-09-28
kind: paper
source:
  title: "Beyond Approved Actions: Runtime Validation of Persistent Outcomes in Agent Workflows"
  url: https://arxiv.org/abs/2609.31301
project: steward
---

Haoran Zhang, Hengtong Zhang, Zhiyu Liang, Yu Yan, Decheng Zuo, and Hongzhi Wang’s Sep 28 paper names the gap continuous agent workflows keep rediscovering: **an approved, successful call can still leave an unapproved persistent outcome**. A database trigger inserts a notification the app never blessed; approval goes stale after a vendor is blocklisted; a remote payment may have landed while the response is lost — and later steps treat “success” as license to continue. Call-level allowlists and ordinary transactions do not close that loop.

**EffectMatch** implements an *Effect Commit Contract*. Before execution the application states the approved outcome multiset; the runtime binds that approval to source, current task/plan revision, and **one occurrence**; it certifies that reachable persistence/dispatch outlets are observed or blocked; then it stages or mediates the operation, builds the observed outcome from backend evidence, and classifies **EXACT / DIVERGED / INDETERMINATE**. Only EXACT with current one-use approval propagates as success; divergent or indeterminate results persist in a terminal journal that blocks dependents across process restarts. Capability classes (PROMOTABLE held transactions, MEDIATED gateways, OPAQUE readback) decide whether mismatch can roll back or only halt continuation. Receipts: on twelve independently approved business tasks, all clean runs commit and all **39** task–fault combinations ×3 incorrect commits are rejected; on **206** clean-reference tasks, **0** incorrect commits under omit/duplicate faults while preserving all clean outcomes; ablations that remove comparison, occurrence binding, durable terminals, or candidate permits each re-admit the corresponding failures.

## Why it matters for code review

Always-on factories that bless a tool call and move on are measuring the wrong surface. Review overnight inventory the way EffectMatch reviews a commit: demand the approved outcome beside the observed one, fail closed when observation is incomplete, and refuse to release merge-train dependents on a stale or divergent terminal — so continuous verified momentum compounds on matched effects, not on green API returns.
