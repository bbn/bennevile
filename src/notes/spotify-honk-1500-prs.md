---
title: "Spotify Honk: 1,500+ merged agent PRs on Fleet Management"
description: "Part 1 of Spotify’s background coding agent: prompt-defined fleet shifts, pluggable agent CLI, 60–90% migration time savings, and new validation needs."
kind: field-note
date: 2025-11-05
source:
  title: "1,500+ PRs Later: Spotify’s Journey with Our Background Coding Agent (Honk, Part 1)"
  url: https://engineering.atspotify.com/2025/11/spotifys-background-coding-agent-part-1
project: steward
---
Fleet Management already automated simple transformations at huge scale; complex migrations drowned in AST/regex expertise (one Maven updater >20k LOC). Honk replaces the transformation script with a prompt-driven agent while keeping targeting, PR, review, and merge infrastructure.

Internal CLI wraps agents with formatting, lint MCP, LLM-as-judge on diffs, tracing—swappable models without exposing guts. 1,500+ merged production PRs on real migrations (Java records, Scio upgrades, Backstage UI, schema-sensitive config). Also exposed via MCP from Slack/GitHub for ad hoc tasks.

Stated open problems: latency, unpredictability → need new validation; safety/sandboxing; cost at scale.

## Why it matters for code review

Shows the winning enterprise pattern: agents inside an existing PR machine with verification hooks, not a parallel shadow process. Review burden becomes the next bottleneck once generation works.
