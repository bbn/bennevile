---
title: "Alpic set out to build a dark factory and ended up with a light one: twice as fast, human review kept, scheduled routines capped at five PRs"
description: "After four months of rebuilding its development cycle around coding agents, Alpic reports shipping about twice as fast with quality and uptime flat. Peer review moved from the PR to the spec, every agent PR has a named owner, and weekly codebase sweeps can't run again until their last batch of PRs is closed."
date: 2026-10-22
kind: field-note
source:
  title: "Seven lessons from building Alpic's software factory"
  url: https://alpic.ai/blog/software-factory-lessons
project: steward
---

**Alpic** spent four months trying to build a software factory where autonomous agents write every line of code. It [didn't get there](https://alpic.ai/blog/software-factory-lessons). What it built instead ships features and fixes **about twice as fast** as the old process, with **no drop in code quality or infrastructure uptime**, and keeps humans at "a handful of checkpoints we no longer believe can be removed."

The post frames the factory as **production cells and quality gates**. Every task handed to an agent makes more output, and every extra pull request lands on a gate. So Alpic spent its effort on the gates. Agentic reviewers run before any person looks, using **a different model for review than for implementation**. Review is split between two specialists, a general reviewer and a code-quality reviewer, each seeing the full codebase rather than only the diff. QA agents drive a browser against a preview environment for each PR. Once a week the team goes through the previous week's agent PRs looking for **review comments that keep recurring**, and each one becomes a candidate lint rule, written convention, or architecture gate.

Human code review stayed, for two reasons: agent code "works today and decays over months," and someone has to understand production when it breaks at 3 a.m. **Every agent-generated PR has a named engineer** who can take over the agent's cloud sandbox session. What moved was *where* the debate happens. **Peer review moved from the pull request to the spec**, which now settles schemas, modules, edge cases, and sometimes pseudo-code. Time spent on specs roughly tripled, and Alpic says each hour there saves several hours of steering later. One rule did more than any list of conventions: any implementation that departs from existing patterns **requires an architecture decision record**.

The most useful detail for always-on work is how Alpic keeps its scheduled agents from flooding review. Its weekly **routines** sweep the whole codebase for security, UI, and performance problems. Each run opens **at most five PRs**, only when the agent judges the change materially useful, and **the routine doesn't run again until every PR from its previous batch is closed**. Throughput is throttled by the team's capacity to close what came before, not by how fast agents can open more.

## Why it matters for code review

This is the steady, harnessed version of agent throughput in a concrete form. Continuous background agents are useful only up to the rate the gates can absorb, and Alpic encodes that limit directly into the schedule. It's also a useful check on the dark-factory pitch: the human checkpoints didn't disappear, they moved earlier, into the spec. The figures are Alpic's own and the post gives no PR counts or revert rates. Read beside [the Claude Code team's risk-tiered review with reverts down](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/) and [capping background agents per reviewer](/posts/csorba-background-agents-queue-is-the-spec-cap-per-reviewer/).
