---
title: "Spotify's Emma Bostian: faster code isn't faster delivery, so the author owns the change before review"
description: "In an Oct 6 LeadDev essay, Spotify engineering manager Emma Bostian argues that AI moved the bottleneck from writing code to reviewing it, that reviewers end up reconstructing the author's reasoning, and that engineers who launch several agents and switch tasks pay for it in rebuilt context. Her fix is author responsibility, a defined bar before review, and measuring review time and rework next to output."
date: 2026-10-06
kind: field-note
source:
  title: "Faster code isn't faster delivery — Emma Bostian (LeadDev)"
  url: https://leaddev.com/software-quality/faster-code-isnt-faster-delivery
project: steward
---

Emma Bostian, an engineering manager at Spotify, opens her [LeadDev essay](https://leaddev.com/software-quality/faster-code-isnt-faster-delivery) with the question she says companies have switched to: not "how can AI help us" but "why hasn't AI made us faster?" Her answer is that the bottleneck moved rather than disappeared. "Pull requests accumulate faster than engineers have the capacity to understand, test, and approve."

## The cost lands on the reviewer, and on the person running agents

Two passages are worth pulling out for anyone running agents at volume. The first is about review as reconstruction: a reviewer who keeps hitting obvious errors "is not simply reviewing pull requests, they are reconstructing the author's logic," and over time that erodes trust between colleagues. She describes a loop where an author who doesn't understand a review comment feeds it back to an agent and pushes the fix, so the same reviewer sees the same class of problem again.

The second is about attention. "Engineers may begin one task, launch several agents, switch to another task, and return later to validate the output. Each switch requires them to rebuild context." Prompting, monitoring, correcting and refocusing, she writes, can leave engineers exhausted. She cites Harvard Business Review survey figures that each piece of low-quality AI work takes about an hour and 56 minutes to handle downstream, and that 42% of respondents saw colleagues who sent it as less trustworthy.

## What she asks for

The rule she puts first is that the person who started the change is responsible for it, AI-written or not, and should be able to explain it, test it and review it before asking a colleague. She wants teams to define what must be true before AI-assisted code can enter review (the author can explain it, relevant tests pass, security and privacy concerns are met), and to measure review time, rework and maintainability alongside how fast code appears. She also wants protected time for people to think together, such as mob programming or architecture discussions.

## How it fits

This is a manager's essay built on published surveys rather than her own team's numbers. Its use here is the human side of running agents continuously: more agent output only compounds if someone downstream can absorb it, and switching between agents carries its own tax. Law Zava makes the same point as arithmetic in [measuring agent capacity in review-minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), and Rangle describes [agents refilling the review queue overnight](/posts/rangle-sisyphus-predicament-senior-attention-overnight-queue/). Compare the attention cost in [agent anxiety over an idle fleet](/posts/driventodevelop-agent-anxiety-idle-fleet-attention/) and [weaker afternoon review after a day of parallel sessions](/posts/sieg-agentic-coding-fomo-idle-sessions-weaker-review/), and LinearB's finding that [ownership, not model skill, limits agent PR yield](/posts/linearb-agentic-pr-yield-ownership-gap/).
