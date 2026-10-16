---
title: "Warp's Ben Holmes on closing the factory loop: bug-fix triggers, skill self-improvement, and agents that propose the next feature"
description: "Oct 15 follow-up to Warp's self-improving factory notes: always-on agents that open fix PRs from Sentry alerts, score past sessions and rewrite skills from failures, and turn customer interviews into roadmap candidates — still with a human merge gate."
date: 2026-10-15
kind: field-note
source:
  title: "The road to self-improving software"
  url: https://www.warp.dev/blog/self-improving-software-proactive-agents
project: steward
---

**Ben Holmes (Warp)** argues that the small loops teams already run — computer-use verification, auto-fixing CI, adversarial review — are necessary but unfinished. The goal of a software factory isn't only faster PRs; it's one large loop from task to shipped product, including agents that decide what to build next. He sketches three proactive patterns Warp has started deploying, each still ending in human review before merge.

**Proactive bug fixes.** Wire alerts (Sentry, Grafana) to an always-on agent that investigates and opens a fix PR, carrying the same verification and adversarial review stack used on ordinary factory work. Filing the fix no longer needs a human for the alert classes you trust; the merge gate still does.

**Proactive agent self-improvement.** Aggregate session traces, score them with LLM-as-judge rubrics (efficiency, quality, compliance), cluster low-scoring runs for common failure causes, then let an agent propose changes to the codebase, skills, or `AGENTS.md`. Holmes is careful to call this skill self-improvement rather than recursive self-improvement of the model: the payoffs are velocity, quality, and cost of the process behind the software, which is how you earn trust to merge with less line-by-line reading.

**Proactive product work.** Point agents at feature analytics, SEO/AEO, and customer-interview transcripts (Warp uses Grain via MCP), then surface roadmap candidates into Slack or Notion. Humans still accept or reject; the friction of getting the signal in front of engineers drops.

This is a Warp engineering post by someone who sells the platform. The useful frame is the large loop, not any particular product surface: keep modest verified momentum running on bugs and harness failures, and treat the backlog of "what next" as another feed the factory can propose into.

## Why it matters for code review

An always-on factory that only authors code still dumps verification on humans. Holmes's self-improvement loop aims the same continuous machinery at the harness and the reviewer skills, so failures become skill diffs instead of another round of comments. That extends [Warp's earlier self-improving factory notes](/posts/warp-self-improving-software-factories/) and pairs with [Zach Lloyd's rollout advice](/posts/warp-rolling-out-factories-cost-per-pr-80-to-20/) to start on low-risk chores with named owners before pointing agents at work nobody has time to read. It also productively complicates bursty mastery stories: the compounding asset is the scored session history and the skill PRs it produces, not a single peak coding session.
