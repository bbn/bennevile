---
title: "Cursor Projects: coordinator that keeps working after the laptop closes"
description: "Sep 10 launch: cloud coordinator + shared context + subscriptions (Slack/PRs/schedule) so fleets keep shipping while you sleep — FOMO as product, review still the human gate."
date: 2026-09-10
kind: field-note
source:
  title: "Introducing Projects"
  url: https://cursor.com/blog/projects
project: steward
---

Alexi Robbins and Fredrika Lindh’s Sep 10 Cursor post ships the product form of Truell’s “third era” thesis: stop managing chat sessions; direct a persistent body of work. A Project runs on its own cloud computer. Closing the laptop does not stop it. The coordinator does not ordinarily write code — it plans, spins research/implement/test subagents (Cursor claims thousands in parallel), and brings finished work back for human check.

Three capabilities that matter for the tortoise case:

1. **Cloud by default, local when needed** — durable compute outlives the peak Claude Code session; local agents only when the machine under test must be yours.
2. **Shared context** — project files sync research, artifacts, and learned how-to (e.g. how to test a service) across every agent turn so the next session is not a cold brief.
3. **Subscriptions** — Slack channels, PR/CI signals, schedules. The coordinator acts on outside events without a fresh prompt. That is the FOMO half of the week’s thesis made purchasable: agents working on your behalf while you are away.

Internal recipes Cursor reports: feature Projects that research then parallel-implement; migrations across hundreds of PRs with review density falling as the approach holds; “gardening” Projects that never end — one design-system Project scans new PRs, extracts reusable components, and adds a lint rule after seeing the same mistake twice (on track for 20–100 PRs/day with an engineer checking in). Vendor productivity cut to treat carefully: new Projects users merge 30% more PRs; heavy Projects users merge 6× — cohort metrics, not a controlled causal study.

## Why it matters for code review

The unit under optimization moved from “finish this chat” to “keep a reviewed change stream alive overnight.” Persistence without an independent review gate is still bursty heroics with a longer battery. Cursor’s own examples keep humans on the merge/check step while the coordinator absorbs planning and CI gardening — which is exactly where harnessed throughput compounds past peak-session mastery.
