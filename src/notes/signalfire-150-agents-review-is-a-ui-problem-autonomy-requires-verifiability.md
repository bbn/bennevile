---
title: "150 agents, 20 billion tokens a day, and auto-merge only where the tests can prove it"
description: "Oct 6 SignalFire, from a closed CTO show-and-tell: the teams running the biggest agent fleets built almost nothing to generate code faster. Their machinery feeds the agents and checks the output, auto-merge is allowed only when a failing regression test can prove the fix, and reviewing 40 parallel outputs is now an interface problem."
date: 2026-10-06
kind: field-note
source:
  title: "150 agents, 20B tokens a day. Here's how modern CTOs actually run AI agents at scale"
  url: https://www.signalfire.com/blog/how-modern-ctos-actually-run-ai-agents-at-scale
project: steward
---

SignalFire's writeup of a closed "AI CTO Show & Tell," co-hosted with cmux founder Austin Wang and written up with Plank founder Anusheel Bhushan, describes setups running at always-on scale: one team "pushing 20 billion tokens per day across 150+ agents, with 18 sessions running at once on a two-person team," and one person running "roughly 50 concurrent projects." The headline observation is that "almost none of the machinery they built is about generating code faster, as that's the cheap part now." Every sophisticated piece answers two questions: how fast you can feed the agents tasks and context, and "who or what checks the output to make sure it is correct?"

## Review moved to both ends of the run

Before any code, a plan goes into a GitHub issue and gets five or six rounds of adversarial review ("while Claude drafts, Codex attacks") until it stops changing, because "a bad plan executed at agentic speed produces a large, confident, coherent pile of wrong code." After the code, Claude, Codex, and DeepSeek critique each other for 10 to 12 rounds "before an engineer looks at anything." Agents also keep a "concept ledger" of every new abstraction, reviewed beside the diff; in one PR that review "removed 30 unnecessary concepts," the kind of structural bloat that ordinary diffs hide.

## Where the loop is allowed to close

Asked whether anyone had reached no human review at all, the room said yes, but only when the agent could reproduce the bug, write a failing regression test, make it pass, and "touch nothing involving UI, design system, or product taste." The list is not sorted by difficulty: a gnarly concurrency bug with a clean reproduction qualifies, a trivial button color change does not. The line worth keeping is "stop asking what our agents are smart enough to do and start asking what our test suite is strong enough to prove." Completion claims don't count until validated and recorded in PR comments, and when a merged PR causes a production bug, a meta agent proposes harness changes that would have caught it.

## Why it matters for code review

At this volume the scarce thing is a human making a responsible call, and the writeup says so directly: "once agents produce more PRs than any human can read, the interface for reviewing them becomes a major bottleneck," and tools for exercising judgment "over 40 parallel agent outputs" barely exist. One CTO prototyped swipeable cards and yes/no quizzes for PR review. Running agents around the clock only compounds if the verification and the reviewer's interface keep pace. Compare [review capacity setting fleet size](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/), [review minutes as the real agent limit](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), [reviewing the plan instead of the code across 562 PRs](/posts/indeev-562-prs-review-the-plan-not-the-code/), and [why agreeing adversarial reviewers can still be wrong](/posts/adversarial-review-false-consensus/).
