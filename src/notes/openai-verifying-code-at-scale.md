---
title: "OpenAI: verifying code at scale needs repo tools and high precision"
description: Alignment blog on training/deploying an agentic code reviewer—precision over recall, repo-wide tools, and verification cheaper than generation.
kind: field-note
date: 2025-12-01
source:
  title: A Practical Approach to Verifying Code at Scale
  url: https://alignment.openai.com/scaling-code-verification/
project: steward
---
OpenAI’s alignment post is deployment-scarred advice: as generated code outruns human oversight, automated review becomes a practical output monitor. They optimize precision first (noise kills adoption), then push recall—and show repo-wide tools plus execution beat diff-only context.

They also separate training-time verifiers (ok to be over-sensitive) from human-facing reviewers (must earn trust). Internally, comments get addressed with code changes about half the time; verification can catch known issues at a fraction of generation token spend.

## Why it matters for code review

This is the industrial checklist: tool-bearing reviewers, precision-first thresholds, steerable policies via AGENTS.md-style instructions, and metrics on whether comments cause code changes. If your review bot cannot clear the adoption bar, its theoretical recall does not matter.
