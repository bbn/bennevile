---
title: "562 merged PRs in two weeks by reviewing the plan, not the code"
description: "Oct 4 Alexey Indeev, on his company's internal operations platform: one coordinator agent per goal, sub-agents doing the work, auto-merge behind tests, bots and a merge queue, and goals left running overnight for days. He reads progress reports instead of diffs, and the new limit is tokens."
date: 2026-10-04
kind: field-note
source:
  title: "I stopped reviewing my agents' code. Here's what I do instead."
  url: https://read.aindeev.com/p/i-stopped-reviewing-my-agents-code
project: steward
---

Alexey Indeev changed how he builds Sightline, the internal operations platform at Spare, and says he has merged 562 PRs in the two weeks since, "and honestly, I spent four of those nights hiking in the mountains." He is explicit that a couple of weeks earlier he would not have told anyone to work this way. What changed his mind was newer models plus two things he now treats as the real job: the right intent and "the right guardrails to make sure that intent is actually met."

## The loop

Every session starts with planning alongside the agent: how the work splits, the risks, often a preview of the UX. "I review the plan, not the code." Then one prompt, word for word every time: "Accomplish the plan. Ship code using auto-merge. You're the coordinator. Don't do work directly. Use sub-agents for everything, and parallelize when possible." The coordinator holds only the plan and the status, so its context stays clean. Every PR has to pass unit tests, end-to-end tests, CI, Bugbot, and Strix before Mergify lets it into the merge queue. Because the agent can merge, it ships in small, feature-flagged pieces and checks each one in staging or production before the next. "One big PR you're iterating on locally is probably riskier in the end than twenty small ones that each passed every check." He comes back to an HTML progress report listing what is done, what is next, and what it needs from him, and that report is what he reviews.

## Overnight, for days

"Let goals run overnight, for days if they need to." A custom-roles goal ran for over a day while he checked in, read the report, and nudged. He usually has two to four goals running at once on unrelated features so they do not collide. When something slips through, the rule is the blameless incident rule: do not blame the agent, ask which guardrail was missing and build it. The guardrails also improve themselves, with a review bot told to keep asking for more tests.

## Why it matters for code review

This is the strongest version of the claim that steady, gated, always-on work beats careful hands-on sessions: review moves up to the plan and down to the report, and the gates handle everything in between. Two things complicate it. The gate stack leans on AI checkers such as Bugbot, and AI passes stacked on AI-written code can [miss the same bug together](/posts/apushkinsky-review-credit-correlated-ai-passes/). And once the loop runs around the clock, the constraint moves again: "tokens become the bottleneck." He runs about five $200 accounts and a tool that switches between them as each nears its limit, which he admits wastes time. Compare [planning agent capacity in review-minutes rather than seats](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), [the fleet sizing math where review sets the ceiling](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/), and [a personal fleet that merged about 980 PRs](/posts/kesterson-kenbishi-fleet-980-prs-review-is-the-bottleneck/).
