---
title: "Spotify Honk part 3: verification loops before the PR exists"
description: December 2025 post on deterministic verifiers + LLM-as-judge gates that block bad agent PRs from opening.
kind: field-note
date: 2025-12-09
source:
  title: "Background Coding Agents: Predictable Results Through Strong Feedback Loops (Honk, Part 3)"
  url: https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3
project: steward
---
The money post for review nerds: Spotify runs format/build/test verifiers and an LLM judge that can veto out-of-scope changes before a PR is even opened, with stop hooks on Claude Code.

## Why it matters for code review

Best “AI code review” sometimes never leaves a comment—it refuses to open the PR. Inner-loop verification is complementary to outer-loop PR bots; serious agent factories need both.
