---
title: "Agentic software factory: history, then check the utilities"
description: "TrueFoundry’s field guide: factories aren’t new; agent-native ones need model supply, credentials, QC, telemetry, and spend metering—not just more agents."
kind: field-note
date: 2026-08-03
source:
  title: "The Agentic Software Factory, Explained: History, Architecture, and Enterprise Controls"
  url: https://www.truefoundry.com/blog/software-factory-agentic-enterprise-guide
project: steward
---
Useful taxonomy dump with citations: Bemer → SDC → Microsoft Software Factories → BMW-scale CI, then 2026’s agent-native revival (Factory.ai, BCG Platinion, Spotify Honk, OpenAI harness post). Distinguishes coding agent (worker) vs factory (production system) vs loop engineering (one verify-retry cycle) vs platform engineering (golden paths for humans).

The editorial hook: inspect utilities first—model gateway, credential custody, guardrails, traces, budgets. Agents increase blast radius; controls must sit on mediated boundaries agents can’t bypass. Checklist questions before scaling are the durable part.

Treats vendor productivity claims as heterogeneous anecdotes, not a benchmark set.

## Why it matters for code review

Enterprise review of agent output fails open if credentials, policy, and evidence aren’t in the path. “Add a review bot” without utilities is craftsman tooling dressed as a factory.
