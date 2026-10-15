---
title: "Osmani: when agent output outruns verification, you get three levers and none of them is \"read faster\""
description: "Addy Osmani argues agent-era code quality lives in the constraints around the agent, not in reading every diff. When change volume exceeds what the checks can consume, a queue forms that moves at human speed, and the only moves are more verification capacity, slower generation, or a lower bar."
date: 2026-10-15
kind: field-note
source:
  title: "Agentic Code Quality"
  url: https://www.oreilly.com/radar/agentic-code-quality/
project: steward
---

**Addy Osmani**'s piece, republished by O'Reilly on **October 15**, starts from a plain admission: reading every change "doesn't scale well; there's just too much code for anyone to read." He still reviews code, but he is deliberate about where a constraint is allowed to stand in for his eyes. His test for skipping the read: every case where it is safe turns out to be a statement about low stakes. Once stakes rise, "if it isn't you on every diff then it has to be the constraints."

Those constraints are the usual quality gates, widened on purpose: unit, property, and acceptance tests, **mutation testing**, complexity and readability metrics, architecture rules a linter can enforce, and late security scans, each with its own job. He calls their combined effect **back-pressure**, meaning compilers rejecting code, tests failing, and CI declining to deploy, and he wants it "throughout the loop, not as a single review at the very end."

The useful paragraph is about overflow. If agents produce changes faster than the checks can consume them, "we end up building a queue and relying on a verification system that moves at human speed." He names three ways out: **scale verification**, **slow the rate at which agents generate changes**, or **lower the quality bar**. A team should be ready to use all three, and to loosen constraints where they serve neither throughput nor quality while tightening them where they serve both. Humans get pulled in only "when the automated guardrails for constraints break."

## Why it matters for code review

An always-on factory only compounds if its verification keeps pace. Run it past that point and the extra overnight output simply waits in line for a human. Osmani's second lever, slowing generation on purpose, is the uncomfortable one for anyone who feels behind when their agents are idle, but it is the honest answer when the checks are the scarce resource. Read beside [Osmani's earlier advice to start a factory with the harness and verification budget](/posts/osmani-factory-advice-start-with-harness-budget-verification/) and [Donchev on review capacity as production capacity](/posts/donchev-quality-walls-review-capacity-is-production-capacity/).
