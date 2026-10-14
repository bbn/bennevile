---
title: "Seventeen PRs, thirty-two corrections, zero production bugs"
description: "Sep 10 field report: design-first + adversarial plan review + parallel subagent diff review + browser gates — including an IDOR caught by another instance of the same model — before a human merge decision."
date: 2026-09-10
kind: field-note
source:
  title: "I Shipped 17 PRs Without Writing Code"
  url: https://www.ninetwothree.co/blog/shipping-ai-written-code-safely
project: steward
---

A counted run, not a vibe: seventeen PRs across two repos, ~50 files, thirty-two post-implementation corrections, none shipped. The headline catch was an IDOR — any user could write to any chat by swapping a UUID — found by a review subagent that was the same model that wrote the bug. The pipeline that made that possible looks like DevOps more than chat: pull the monday.com task and Figma node over MCP (no summarized memory), plan in read-only mode, tear the plan apart with architecture/security and TypeScript reviewers *before* code exists (twelve issues killed on one redesign), implement with TypeScript after every file, then parallel subagent diff review for multiple rounds, then a headless browser vote on empty/send/mobile/DB states a diff cannot prove.

The human still breaks ties the agents miss. Both reviewers endorsed gating copy behind `readOnly` with like/dislike; copy is a local read, reactions are a write — wrong abstraction, two lines once someone saw the question was wrong. Every correction becomes a durable rule (`feedback_*.md`); the one that mattered most forbids commit/push/PR without explicit user instruction after the agent did it twice unasked. Across the ML streaming feature alone, reviewers surfaced six production-bug-class issues beside the IDOR (disconnect save, SSE whitespace, hung `done` paths, type assertions).

## Why it matters for code review

[Adversarial Review](https://arxiv.org/abs/2608.18167)’s disagreement protocol ([our note](/posts/adversarial-review-false-consensus/)), written as a working factory day: plan gates before diffs, fixed-job reviewers that report findings verbatim, browser evidence after green CI, and a human who decides which finding is real. Tear out the review layer and you ship first drafts; keep it and the same weights that introduce an IDOR can catch one. The switch between poor quality and good is still the person at the gates.
