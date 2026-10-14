---
title: "Overnight agents that never push: Magrathea’s read-only worktree factory"
description: "Jul 22 Magrathea field note: labeled-issue dispatcher, per-issue worktrees, test/build/cdk gates, and a hard no-push boundary—defer colliding work, report empty queues honestly, leave closeable bugs for humans."
date: 2026-07-22
kind: field-note
source:
  title: "Running an Overnight Team of AI Coding Agents: Real Logs (2026)"
  url: https://magratheasoftware.com/blog/overnight-autonomous-ai-dev-team.html
project: steward
---

Kyle Twogood (Magrathea Software, Jul 22) reports weeks of nightly batches against RotoAlpha’s GitHub issue queue—and insists the interesting part is the harness, not the model. At 02:00 a dispatcher lists only issues labeled `ready-for-agent`; each gets its own git worktree and branch; “done” requires the full test suite, a clean build, and `cdk synth` for infrastructure so CloudFormation can be diffed before anything touches an account. Labels walk `ready-for-agent` → `in-progress` → `ready-to-finish`. The binding rule: the overnight run **never pushes, never merges, and never deploys**. Branches stay under `.worktrees/` for a human to read, diff, and land in the morning.

The real logs show orchestration beating heroics. On an eight-green night the dispatcher deferred four issues *up front* because they collided with same-area branches that would not land until morning—optimizing for a clean merge queue, not issue-close count. Empty-queue nights produce three-line “nothing dispatched” reports on purpose: inventing work at 3 a.m. is worse than an honest no-op. When issue #238’s acceptance criterion was already true in production (render-time links healed after a content-quota reset), the agent gathered `curl` evidence and **refused to close the issue**—closing and label edits sit outside the overnight authority. A billing subagent that spawned its own background worker and returned early was corrected, re-verified, and flagged for extra morning review while the branch remained unmerged.

## Why it matters for code review

Continuous overnight factories beat bursty peak-session mastery when the harness owns scope, isolation, and the merge button. Review always-on lanes for Magrathea-shaped contracts: labeled intake only, worktree isolation, deterministic gates before “done,” collision-aware deferral, and a read-only boundary that turns misbehavior into a morning note instead of a production incident. Steady harnessed momentum compounds when empty queues and “closer look” flags are honest; FOMO that pushes and merges while you sleep does not. Pair with [Soulerou’s four-gate OvernightAgent](/posts/soulerou-overnightagent-four-gate-verify/) and [Himmel’s PR-gated overnight shift](/posts/himmel-overnight-shift-pr-gated-harness/) when the factory must stop at candidate branches humans still land.
