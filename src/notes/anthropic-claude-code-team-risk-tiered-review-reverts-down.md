---
title: "Claude Code team doubled merged PRs while reverts fell 40% by measuring human time, not human reads"
description: "Anthropic's Claude Code team replaced 'did a human read it?' with risk tiers set by the change, caps agent-to-agent review at three rounds after one PR ran 50+ overnight, and turns every incident into a daily eval for the reviewer."
date: 2026-10-15
kind: field-note
source:
  title: "How the Claude Code team does code review"
  url: https://claude.dev/blog/solving-code-review-at-anthropic/
project: steward
---

**Addy Osmani, Morgan Westlee Lunt and Qing Wang** describe how the Claude Code team reviews a codebase Claude now writes about 90% of. The headline: from June to September, merged PRs to Claude Code **more than doubled** while the share that had to be reverted **fell by more than 40%**. They didn't remove review. They moved most of the reading to machines and started measuring the scarce thing directly.

The reframe is that "did a human read the code?" is an imprecise proxy for "what could go wrong with this change, and which check, automated or human, should catch it?" The goal is that most PRs merge with at most one human in the loop (who can be the author) with no rise in reverts or incidents. They track human approvals per PR (median and p95), human comments and time waiting on a person; revert and incident rates are the guardrail, because review time saved and then spent fixing breakage hasn't been saved at all.

Approval is tiered by the change, not the author. A classifier picks the tier: **low** (docs, copy, flagged additive changes) needs no human once automated and security review are green; **medium** (ordinary product changes, caching, the auto-updater, system prompts) needs one; **high** needs two. A second classifier can demand a person anyway, CI workflow files and owner-listed paths always need one, only trusted authors get the lighter paths, and an agent's approval never fills a human slot. Approvals are pinned to a commit, so an agent's later push needs a fresh one. Every open finding from the bug or security reviewer blocks merge until it's fixed or closed with a reason.

The overnight detail is the useful warning. An agent author and an agent reviewer can keep each other busy indefinitely: one CLI PR went through **more than fifty** review-and-fix rounds overnight before its author stopped it, and git blame showed about **59%** of what the reviewer kept flagging was code that predated its first pass. Noise costs more when the author is an agent, because a person waves off a nit while an agent commits a fix and triggers another round. The team now caps review at three rounds before asking the author to rethink, re-reviews only the new diff after the first passes, and tracks rounds-to-pass alongside recall. Past incidents and reverts form an eval set the reviewer runs against daily.

## Why it matters for code review

This is the clearest published version of continuous verification at volume: review moves upstream into the agent loop, humans keep direction, risky paths and owning the outcome, and the system gets better because every miss becomes a check. It also names what's missing. There are no circuit breakers yet that tighten approval when revert numbers move, and engineers want them before more code goes to zero-human merges. Read beside [Anthropic's Scion move to post-merge verification](/posts/anthropic-scion-30000-merges-post-merge-verification/), [the Soualhi study on agent PRs that edit their own CI](/posts/soualhi-agent-prs-touching-ci-merge-silently-or-stall/) and [Nemeth's 500-round loop](/posts/nemeth-500-rounds-autonomous-loop-checking-costs-more-than-writing/).
