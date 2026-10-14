---
title: "A million PRs later: agentic review is faster, not clearly better"
description: Study of 1.02M reviewed PRs across human, LLM-assisted, and agentic eras—efficiency gains without matching quality gains.
kind: paper
date: 2026-07-14
source:
  title: "From Human-Centric to Agentic Code Review: The Impact of Different Generations of Generative AI Technology on Review Quality"
  url: https://arxiv.org/abs/2607.13196
project: steward
---
This empirical study tracks 1.02 million reviewed PRs across 207 GitHub projects through three eras: human-centric, LLM-assisted, and agentic review. They model review discussions as interaction sequences among humans, LLM reviewers, and AI agents.

Agent-involved patterns correlate with faster decisions under gradual and rapid agent adoption. Those speed gains do not translate into better review quality. Once AI reviewers show up, human-AI collaboration patterns become the strongest explanatory factor for efficiency—activity and PR type still matter, but the interaction graph dominates.

## Why it matters for code review

Shipping an agent reviewer can optimize cycle time while quietly degrading the quality signal. Instrument both. If your dashboard only shows “time-to-approve,” you will celebrate the wrong success.
