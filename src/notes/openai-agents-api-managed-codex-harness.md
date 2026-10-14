---
title: "OpenAI Agents API: managed Codex harness for days-long runs"
description: "Sep 10 public beta: OpenAI hosts the Codex harness — durable sessions, compaction, subagents, sandboxes — so teams stop re-homing long-running agent infrastructure every model launch."
date: 2026-09-10
kind: field-note
source:
  title: "Introducing the Agents API"
  url: https://openai.com/index/introducing-the-agents-api/
project: steward
---

OpenAI’s Sep 10 Agents API public beta is the tortoise move packaged as product: the same Codex harness that keeps agents useful across long sessions is now an API surface, so applications hand off a *durable session* instead of babysitting a peak Claude/Codex window. The pitch is explicit about what they learned scaling Codex and ChatGPT for Work — useful agents need a harness that manages context, uses tools efficiently, and coordinates subagents, plus infrastructure that keeps them running reliably **for days**, with environments where they can work with files, run code, and save intermediate results.

What ships in the beta: OpenAI hosts and maintains the harness (orchestration, context compaction across windows, recovery, tool search / programmatic tool calling, MCP + custom tools, multi-agent fan-out with per-subagent context). You choose the compute: OpenAI-hosted sandbox, self-hosted, or partners (Blaxel, Cloudflare, Daytona, DigitalOcean, E2B, Modal, Oracle, Runloop, Vercel). The open-source Codex harness remains inspectable; OpenAI operates the managed loop so model upgrades do not force a harness rewrite each release. Customer receipts in the post lean continuous, not heroic: Ciridae eval 0.71→0.85 with 4× latency drop from subagents; SafetyKit ~60% cost-per-case cut; Hypha 86% fewer failed responses after separating harness from sandbox; Nash cites thousands of long-running logistics agents spanning hours/days; deepsense.ai notes the API handled “implementation, independent review, remediation, and real-browser validation” in an active repo.

## Why it matters for code review

Session mastery is the hare: a great afternoon with Claude Code. This API is the factory premise underneath overnight/always-on — compaction, resume, and parallel subagents so work compounds while nobody is watching the terminal. Review still has to land somewhere: if the harness can run for days, the merge gate needs the same continuous verification budget (tests, independent review, browser evidence) or you just multiply unverified PR volume. Treat the managed harness as throughput infrastructure; keep “done” as evidence outside the worker’s narration, not a model claim at end-of-session.
