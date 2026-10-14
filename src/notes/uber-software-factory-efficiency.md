---
title: Uber’s software factory is now mostly agents — and they are optimizing the cost equation
description: More than 70% of Uber PRs are attributed to agents. Their new post is a field manual for measuring and cutting agent spend without starving quality, including how they bench uReview for code review.
kind: field-note
date: 2026-08-27
source:
  title: "Running a Software Factory Efficiently at Uber Scale — Uber Engineering"
  url: https://www.uber.com/us/en/blog/efficient-software-factory/
project: steward
---
Uber’s engineering blog lays out how they run a software factory when agents are no longer a side tool. More than 70% of pull requests are attributed to local or cloud agents. They have over 3,600 agent skills and tens of thousands of skill executions per day. Managed agents already handle review, CI repair, end-to-end PRs, on-call triage, and maintenance with humans on escalations.

The useful part for everyone else is the cost frame. They decompose spend into adoption, engagement, and the middle terms where agents create extra work for themselves. Then they optimize those terms: Pareto model selection per managed agent, weaker defaults for subagents, prompt caching, tool schemas kept out of context until needed, and a live cost counter in the harness.

## Why it matters for code review

They treat review like the rest of the factory. uReview gets a real-PR benchmark with known bugs, then model choice is scored on precision, recall, F1, cost per review, and noise. Switching models improved F1 while cutting cost per PR. That is the same move as treating review quality as a managed outcome, not a vibes check on whichever frontier model is fashionable this week.
