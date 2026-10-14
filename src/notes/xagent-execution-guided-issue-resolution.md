---
title: "Don’t localize from the issue text: execute, then diff the runs"
description: "Sep 9 XAgent: differential analysis of failing vs passing executions for localization, plus context-aware test augmentation so validation doesn’t overfit the ticket — 62% resolve / 72.8% function loc on SWE-bench-lite."
date: 2026-09-09
kind: paper
source:
  title: "XAgent: eXecution-guided Agentic AI for Effective Localization and Resolution of GitHub Issues"
  url: https://arxiv.org/abs/2609.09769
project: steward
---

Most issue-resolution agents still do keyword localization off the ticket, then invent validation tests from the same prose. Huynh, Thongtanunam, Fu, Le, and Tantithamthavorn name what breaks: noisy issue text steers you to the wrong functions, and ticket-shaped tests accept patches that overfit the description while leaving the underlying bug.

XAgent’s fix is *execution-guided*. After reproduction, it runs differential analysis (Zeller-style): compare failing vs passing executions and treat functions that appear only on the failing path as suspects, refined with tree edit distance on execution divergence. For validation, a context-aware test augmentor pulls related files/functions and generates edge-case and related-component tests so the gate isn’t the issue text restated. Pipeline stays the familiar reproduce → localize → patch → validate loop — the evidence source changes.

On SWE-bench-lite: 62.0% resolve rate (SOTA vs ExpeRepair ~60.3%), 72.8% function localization accuracy, ~$1.56/issue (~37% cheaper than prior SOTA). Ablation: execution-guided localization + context-aware augmentor together buy up to ~9% relative. Seven issues that ExpeRepair, Refact Agent, and SWE-Agent all missed get fixed.

## Why it matters for code review

Factories that greenlight agent PRs on “reproduction test + keyword hit” are reading the ticket twice. Review capacity is scarce; upstream localization and validation have to be grounded in *behavior divergence* and *broader context*, not synonym search over a noisy issue. If your merge gate can’t see what execution saw, you’re rubber-stamping description-overfit patches.
