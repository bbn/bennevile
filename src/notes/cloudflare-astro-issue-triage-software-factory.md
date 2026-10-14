---
title: "Astro’s issue factory: triage as a label-driven agent pipeline"
description: Cloudflare/Astro cut open issues from 200+ toward zero with isolated subagents that reproduce, diagnose, and ship preview fixes inside GitHub Actions.
kind: field-note
date: 2026-08-04
source:
  title: How we built a software factory to drive Astro’s GitHub issue count to zero
  url: https://blog.cloudflare.com/astro-issue-triage/
project: steward
---
Open-source maintainers are drowning in AI-cheap issues while everyone else debates whether “software factories” are real. Astro’s answer is concrete: a label-driven triage pipeline in GitHub Actions that reproduces bugs in sandboxes, diagnoses root cause with isolated subagents, posts preview releases, and only opens a PR after the reporter verifies.

The clever bit is architecture, not vibes. Each phase (reproduce → diagnose → verify → fix) runs in its own subagent and writes forward into `report.md`, which cuts the LLM habit of forcing a fix when the behavior might be intended. State lives in issue labels and comment history—no hidden orchestrator brain. The same workflow skill runs locally and in CI, then generalized into Flue, their open agent framework.

Failures are treated as codebase smell: opaque abstractions, missing docs, thin tests. When the bot kept “fixing” an HMR branch by mutating a fragile `if`, maintainers added comments and coverage—and both the bot and humans got better.

## Why it matters for code review

Review at maintainer scale is mostly triage and evidence, not line-by-line taste. This piece shows how to automate the expensive verification loop while keeping humans on architecture and community work—and how agent failure modes become a feedback signal for the repo itself.
