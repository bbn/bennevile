---
title: "Verification surface: a tool only helps where its reach matches the failure"
description: "Controlled study of 1,116 agent-built web apps: boot probes, shells, and screenshots help only for the failure modes they can observe."
kind: paper
date: 2026-08-28
source:
  title: "The reach of a verification tool decides its value: A controlled study of verification surface, artifact quality, and cost in AI coding agents"
  url: https://arxiv.org/abs/2608.28795
project: steward
---
Mehta holds the agent fixed and varies only the verification surface—linters, boot probes, shells, screenshots—across 1,116 web apps and six models. A blind human grades every artifact; automatic probes stress API-observable behavior.

The punchline is reach, not vibes. Without tools, about one build in seven never launches; a cheap boot probe removes nearly all of those failures at roughly 35% of a full shell’s token cost. Screenshots help when failures are visual; they add nothing when the bug is measurable (smooth scrolling over 100k rows). More surface is not automatically more quality.

## Why it matters for code review

Review tooling is a verification surface. If your agent can comment but cannot boot, execute, or observe the failure mode you care about, you are buying tokens for theater. Design the reviewer’s tools around how the software actually fails.
