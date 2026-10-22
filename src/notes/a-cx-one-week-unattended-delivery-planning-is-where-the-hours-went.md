---
title: "A-CX: one person, one week, 152 merged PRs, and the planning was where the hours went"
description: "Sep 3, Ilpo Niva at A-CX: unattended parallel agents closed 204 issues and merged 152 PRs in a week, but only against issues with an objective, design, checkable criteria, and dependency order. Worktrees, an atomic claim registry, and a fail-closed merge checkpoint keep it safe; about one in twenty machine findings is rejected on review."
date: 2026-09-03
kind: field-note
source:
  title: "One Person, One Week of Unattended AI Code Delivery — A-CX"
  url: https://www.a-cx.com/one-person-one-week-unattended-ai-code-delivery/
project: steward
---

In the seven days to 1 September, one person at A-CX **closed 204 issues and merged 152 pull requests** in a single repository, with agents picking planned work off the board, working it in parallel, and merging much of it while nobody was watching. Ilpo Niva is upfront that this was a heavy week, not a steady rate: several large parent issues closed at once. His argument is that the machinery behaves the same way on a quiet week, and the post describes that machinery rather than the number.

The engineer's hours went into **planning**. No issue is eligible for a run unless it carries an objective, a technical design, acceptance criteria a reviewer can check, and explicit dependencies. Niva's reason is blunt: an underspecified issue does not produce a slow result, it produces "a confident, well-tested implementation of the wrong thing," quickly, with green tests. Sequencing is a human judgment call too, because parallel agents given the wrong order hand back PRs that each pass alone and conflict with each other.

Parallelism needed its own plumbing. Agents sharing one clone staged each other's changes, overwrote run state, and drew the same decision-record number. The fixes were a git worktree per unit, an atomic claim registry so a second run on the same issue is refused, atomic counters for numbered artifacts, and a teardown that stops if it finds uncommitted work. The reviewable unit is the feature cluster, since one PR per task was churn and one PR per run was unreviewable.

Two human gates survive unattended running. Bugs a run discovers wait for a person to grant them priority, with one bounded exception: a run may self-grant up to fifteen units, each verified at arm's length by re-running the cited failing test and reading the quoted spec line. Any PR that closes self-granted work is review-sensitive, so a passing automated review is necessary but not sufficient, and the check fails closed when a linked issue cannot be read.

## Why it matters for code review

This is a clean account of what steady, mostly unattended throughput costs. The effort did not disappear; it moved earlier into specification and later into review, where Niva says one person becomes the bottleneck. A-CX watches its rejection rate on machine findings, about one in twenty, as evidence the review is doing something, and its checklist ends with a gate that can actually fail and a named machine identity for every autonomous commit. Compare [Sinatra's 306 agent PRs with a human merge gate](/posts/sinatra-306-agent-prs-94-percent-human-merge-gate/), [Indeev's 562 PRs behind auto-merge guardrails](/posts/indeev-spare-562-prs-goals-overnight-auto-merge/), and [Németh's 500 rounds, where checking cost more than writing](/posts/nemeth-500-rounds-autonomous-loop-checking-costs-more-than-writing/).
