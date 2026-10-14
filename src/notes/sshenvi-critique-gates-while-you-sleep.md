---
title: "Five hours of agent work only holds up behind critique gates"
description: "Aug 1 Sudarshan Shenvi: testable requirements, a separate critic that refuses partial passes, always-on sandbox with permissions off — review the output, not the babysitting."
date: 2026-08-01
kind: field-note
source:
  title: "Set It and Ship It: How I Let AI Agents Build My Java Services While I Sleep"
  url: https://dev.to/sshenvi/set-it-and-ship-it-how-i-let-ai-agents-build-my-java-services-while-i-sleep-1jhj
project: steward
---

Sudarshan Shenvi’s Aug 1 field note is blunt about the capability cliff: today’s agents can run for hours and build real services — **only if** requirements are machine-gradable and a separate critic refuses anything short of a full pass. Loose prompts produce five hours of confident drift. Hard gates move the ceiling to how clearly you can specify, not how long the model can type.

His non-negotiables:

1. Write the requirements before the agent starts — even when the task “feels obvious.”
2. Treat every requirement as a gate, not a suggestion.
3. A different agent judges; the builder does not get a vote.
4. Demand pass on *all* items — not “mostly done.”
5. Run always-on with permission pop-ups off (sandbox, scoped creds, isolated branch, spend cap still on).

The worked example is a Spring Boot `PaymentReconciliation` service. Morning work is a fifteen-line `requirements.md` (endpoint contract, mismatch rule, p95, coverage, Bean Validation, package layout, `mvn verify`, OpenAPI, README). The launch prompt’s last line is the cord: separate critique agents must confirm 100% pass and green verify before anything returns. While Mithun is in standup, the builder scaffolds; the critic fails latency (no benchmark) and checkstyle layout; the builder fixes; fifteen of fifteen come back green. Afternoon: two more requirement lists kicked in parallel to run into the evening. Bottleneck relocates from typing to writing contracts.

Failure modes he names map cleanly to review pain: vague requirements, self-review, partial passes, leftover permission babysitting, and a laptop that sleeps at hour two. Token burn is first-class — builder-plus-critique loops retry the whole surface; set hard budgets before scaling.

## Why it matters for code review

Always-on factories compound only when morning inventory is *already judged* against an independent checklist. Shenvi’s pattern is the verification half of continuous momentum: testable contracts upstream, adversarial critic in the loop, human review on approach and taste after the gates — not Allow-clicking through a five-hour session.
