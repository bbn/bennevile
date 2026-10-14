---
title: "Pizza Bot: an inbox for agents that work while you are not watching"
description: "Sep 15 The Register (AWS OSS last week): Pizza Bot — local-first email-style inbox for background agents; Unread vs Action threads, LangGraph checkpoints, always-on host; FOMO UI for overnight work."
date: 2026-09-15
kind: field-note
source:
  title: "Your AI agents' reports and questions have a new inbox, courtesy of AWS"
  url: https://www.theregister.com/ai-and-ml/2026/09/15/your-ai-agents-reports-and-questions-have-a-new-inbox-courtesy-of-aws/5296661
project: steward
---

Brandon Vigliarolo’s Sep 15 Register piece covers AWS engineers open-sourcing **Pizza Bot** — a local-first, email-shaped inbox for long-running agents (GitHub: `pizza-bot-app/pizza-bot`, built on DeepAgents/LangGraph). The design brief is the thesis in UI form: chat assumes both parties are present; overnight and scheduled work break that assumption. Finished jobs land in **Unread** with writeups; anything needing a human decision lands in **Action**. The maintainers’ line: *“The interface assumes you are not watching.”* A thread is a unit of work you return to, not a session you attend — the same social contract as emailing a colleague who went off to do the job.

Mechanically it is ambient-agent infrastructure, not a coding IDE. Threads and LangGraph checkpoints persist in local SQLite/files so a run can pause for approval, survive a closed laptop, and resume from another device if the server sits on an always-on host or container. Model choice is yours (Anthropic, Bedrock, Gemini, OpenAI, OpenRouter, or Ollama); MCP servers and Agent Skills plug in (Playwright browser skill bundled). It grew inside Amazon to **2,000+ internal users** before the Amazon-specific skills were stripped for the community Apache-2.0 release — explicitly **not** an AWS-supported product. For agentic SDLC the useful cut is morning triage: overnight coding agents (or factories that open PRs and ask for merge judgment) need a surface that collects receipts and escalation asks without forcing a live chat vigil.

## Why it matters for code review

FOMO that agents aren’t working on your behalf is half psychology, half missing inbox. Continuous overnight factories only help review if completed work and approval requests arrive as triageable threads with persistent state — not as logs you had to stare at. Pizza Bot is the UI half of harnessed always-on motion: keep agents running while you sleep, then open Unread/Action in the morning the way you open a PR queue — and still demand independent verification before merge, or the inbox just becomes a prettier backlog of review debt.
