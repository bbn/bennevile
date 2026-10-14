---
title: "Factory Missions: multi-day multi-agent execution with scrutiny validators"
description: April 2026 architecture note on Missions—workers, validators, and generate/validate loops for long-horizon work.
kind: field-note
date: 2026-04-10
source:
  title: How Missions Work — Factory.ai
  url: https://factory.ai/news/missions-architecture
project: steward
---
Missions decompose multi-day work into worker agents plus scrutiny/user-testing validators that can reject and re-queue fixes—review as an internal control loop, not only a GitHub comment.

## Why it matters for code review

Closed-loop generate→validate→revise is the same pattern SWE-Review papers study. Factory’s post is a commercial instance of “reviewer agents” inside the factory, not only at PR time.
