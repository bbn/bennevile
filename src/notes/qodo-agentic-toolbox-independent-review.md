---
title: Independent review as a skill inside the coding agent
description: Qodo’s Agentic Toolbox (Sep 9) packages context, standards, and an independent review pass as skills coding agents can call before a PR exists — and again to resolve structured findings after.
date: 2026-09-09
kind: field-note
source:
  title: "Built for Agents, Better Outcomes for Humans: Introducing Qodo’s Agentic Toolbox"
  url: https://www.qodo.ai/blog/introducing-qodos-agentic-toolbox/
project: steward
---
The interesting shape is not another bot that comments on GitHub. It is review and org context as skills the coding agent invokes while it works: pull cross-repo history and live Git state before editing, load applicable rules before the first draft, run an independent review on local committed and uncommitted changes before opening a PR, then fetch structured findings back into the same session to fix what is safe.

That is a different timing than “PR opened → review bot arrives.” The authoring agent and the review engine stay separate systems, but the loop closes earlier — quality gates in the session, humans left for standards, risk boundaries, and escalations the agent cannot own.

## Why it matters for code review

If agents raise PR volume, shifting independent review left of the pull request is how you spend human attention on judgment instead of rediscovering missing idempotency keys in the web UI. The load-bearing design choice is independence of the reviewer from the writer, plus structured issues the implementer can re-enter without copy-paste.
