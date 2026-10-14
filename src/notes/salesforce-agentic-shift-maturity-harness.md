---
title: "Salesforce’s agentic shift: maturity curve, then a swappable harness"
description: "Sep 9 Part 2: scaling agentic coding across ~15k engineers — nine-stage maturity language for managers, token discipline as quality, and a model-independent harness so routing/skills/context survive provider churn."
date: 2026-09-09
kind: field-note
source:
  title: "Pioneering Salesforce Engineering’s Agentic Shift: Part 2"
  url: https://www.salesforce.com/news/stories/agentic-shift-for-salesforce-engineers/
project: steward
---

Muralidhar Krishnaprasad’s Sep 9 follow-up is the scale story after the May “what happened when we went agentic” note: ~15,000 engineers, production systems for hundreds of thousands of customers. Headline deltas (July YoY): work items per developer +90.5%, PRs merged per developer +88.1%, and Effective Output — an ML score that reviews commits the way a senior panel would — +200.3%. The operating claim is that those numbers are downstream of culture and control, not of a single tool win.

Playbook shape: a 30-day pilot (~44 teams / 10 clouds / 200+ engineers spanning greenfield and legacy, adopters and skeptics) whose job was organizational absorption — “can we trust this across our real complexity?” — not a demo that Claude Code works. After that, exponential 90-day targets as a diagnostic: teams that miss reveal cross-functional and approval bottlenecks the faster inner loop suddenly exposes. Bottom-up build-and-share (orchestration layers, multi-tool suites) plus top-down curation, not a mandated single IDE.

The load-bearing management object is the Agent Coding Maturity Curve — nine stages from basic generation to trusted autonomous operation, with a goal of moving the population to stage 6+ where individual gains show up as measured customer outcomes. Binary “are they using AI?” metrics collapse writing a function and orchestrating a multi-service migration. Managers coach to “where are you on the curve, and what moves you?” — context quality, task decomposition, willingness to delegate a full workflow. The cultural risk they name: engineers reading the curve as a permanent personal ranking rather than a shared map; fixing that was part of the work.

Cost discipline is treated as engineering discipline because over-contexting degrades quality, not just spend. Six levers: context hygiene (`/clear` / `/compact` / `/branch`), skill libraries, model selection (frontier as explicit choice), effort calibration, focused retrieval tools, and task decomposition via subagents. Auto-compaction alone cut all-engineering spend ~24.8% over three weeks; smart model defaults saved $864k in week one. The durable bet: build the *harness* (routing, skills, context practices) so the underlying model can swap as the market moves — diversification as first-class concern, not lock-in to one provider.

## Why it matters for code review

Review systems fail when “adoption” is a seat count and every agent session dumps unscoped context into a PR queue. A shared maturity language tells managers which behaviors (decomposition, verification ownership, workflow delegation) actually change what lands for review; a swappable harness keeps those behaviors when models churn. Token hygiene is review hygiene — diluted context produces confident diffs that burn human attention.
