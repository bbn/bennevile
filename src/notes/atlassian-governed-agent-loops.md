---
title: "Governed agent loops: backlog to PR with Standards and AI Review"
description: "Atlassian’s Sep 10 ship note: always-on Jira agent loops plus org Standards and a dedicated AI Review agent — humans keep the merge button, not the bottleneck before it."
date: 2026-09-10
kind: field-note
source:
  title: "We’re bringing governed agent loops to the AI-Native SDLC"
  url: https://www.atlassian.com/blog/jira/governed-agent-loops
project: steward
---

Taroon Mandhana’s framing for Atlassian’s Sep 10 drop: 94% of eng leaders use AI, 6% have systems to scale it across the lifecycle. The gap between demo and “I trust this across hundreds of engineers” is what they’re trying to close — not with more terminal windows, but with *governed agentic execution*.

Three product moves on the work surface:

1. **Code Context** (Teamwork Graph) plus **Agent Context Controls** — shared multi-repo intelligence with platform-team control over what agents can see and where they may operate. Cited DX cut: teams whose tools used the most Teamwork Graph context shipped ~64% more per developer.
2. **Agent loops in Jira** — continuously scan for well-defined unassigned work, delegate to Jira Coding Agent for execution/testing, open ready-to-review PRs in Jira.
3. **Standards** mapped once to repositories, plus **AI Review** as a dedicated agent on every PR checking those standards before a human.

The loop they want: humans define intent and guardrails → agents execute in parallel → humans/PMs approve what ships → agents write completed work back into shared context. Measurement side: DX for Agentic Development (throughput, quality, adoption, cost) and a Jira Agent Usage Dashboard. Agent loops / Standards / AI Review are private early access; Code Context is open beta for paid customers.

## Why it matters for code review

This is the control-plane bet: review and standards live *inside* the always-on loop, not as a chatbot bolted onto a PR flood. Humans keep the merge button; the scarce resource becomes defining guardrails and approving residual risk. If you adopt the loops without wiring Standards and AI Review, you buy throughput and inherit invisible verification debt.
