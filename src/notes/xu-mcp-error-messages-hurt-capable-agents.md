---
title: "MCP errors written for developers hurt the most capable agents most"
description: "Sep 29 Xu & Wu: of 3,001 MCP error messages in 150 servers, half of next-steps depend on caller capabilities agents lack; a terminal-auth hint drops recovery to 45% (6% on GPT-6 Astra); naming a server tool raises it to 84%."
date: 2026-09-29
kind: paper
source:
  title: "MCP Error Messages Written for Developers Hurt the Most Capable Agents Most"
  url: https://arxiv.org/abs/2609.35381
project: steward
---

Xu and Wu open a quiet hole in always-on tool use: many MCP servers wrap developer-facing APIs, so their error text tells the reader to run a command, edit config, open a page, or wait — actions a tool-only agent cannot take. In 150 widely used MCP servers they label 3,001 error messages; 949 include a next step, and **half** of those steps depend on something the server cannot see about the caller. On credential errors, 62 of 67 steps ask for a terminal command, config change, or web page; on rate limits, 20 of 30 say “wait and retry” without naming the call to repeat.

They then freeze BFCL multi-turn tasks at a failing call, swap error texts, and continue five OpenAI models that may act **only** through the task’s tools (168 scenarios × six texts × three samples). Agents do what the step says. On expired credentials, appending `Please run: reddit-mcp-buddy --auth` drops mean recovery from 82% (cause alone) to **45%**, and the loss grows with capability — 18 points for GPT-5.5 versus **69** for GPT-6 Astra, which often hands the repair back to the user despite a login tool in its list. On rate limits, bare “Wait before retrying.” leaves **6%** recovered; naming the call to repeat raises it to **88%**. Two remedies work: MCP authors rewrite the step as a **server tool** call (login / retry-named-tool → 84% / 88%); agent developers who cannot change third-party servers can strip next-step sentences with a one-line filter before the model reads them (82% on credentials).

## Why it matters for code review

Continuous factories spend more time in MCP recovery paths than in happy-path demos — and newer, more instruction-literal models punish developer-shaped errors hardest. Review MCP server and connector PRs for next-steps that name an in-tool repair (or omit the step and keep the cause), and treat “wait/retry” without a tool name as a merge blocker for unattended agents. Steady harnessed throughput compounds when FOMO for more overnight tool hours funds agent-legible error contracts rather than another burst that stalls on a credential hint written for a human with a terminal.
