---
title: "Agentic engineering: trust lives in the system"
description: "Scott Spence’s practical definition: agents write; engineers own context, scope, validation, evidence, and review—with harness numbers from real projects."
kind: field-note
date: 2026-08-25
source:
  title: "Agentic engineering: a practical guide to reliable coding agents"
  url: https://scottspence.com/posts/agentic-engineering-practical-guide
project: steward
---
Working definition: agentic engineering puts coding agents inside a system that makes context, scope, validation, evidence, and human review explicit. The model does not get to declare its own work correct. Contrast with vibe coding is where trust lives.

Concrete machinery: recover source of truth first; make project knowledge executable (types, lint, CI) not only `AGENTS.md`; bound risky tasks with an external harness whose permissions the agent cannot widen; give the agent the same diagnostics a human uses; record traces and grade repository outcomes, not confident summaries; treat secrets as system concerns.

Operational evidence from his harnesses (Jun–Jul 2026): 173 task harnesses, 144 completed, 155 with validation/review evidence, 133 enforcement blocks. Also: ceremony on low-risk tasks is a real failure mode.

## Why it matters for code review

Self-review sharing the author context is not independent evidence. Reliable agentic review is harness design—boundaries, checks, and recorded proof—more than a better “please be careful” prompt.
