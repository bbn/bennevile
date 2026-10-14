---
title: "I stopped reviewing code and started reviewing agents"
description: "Sep 9 field note: when agents flip the write/read ratio, the real review target becomes permissions, tools, and who sits between output and production — not every generated line."
date: 2026-09-09
kind: field-note
source:
  title: "I Stopped Reviewing Code And Started Reviewing Agents"
  url: https://dev.to/nazar-boyko/i-stopped-reviewing-code-and-started-reviewing-agents-2353
project: steward
---

Boyko’s incident was a green PR that still hurt — not because the diff was cleverly wrong, but because the team had never verified what the agent was *allowed* to do. The write/read ratio that made line-by-line review a control has flipped: agents emit a day’s diff in an hour; reading did not get faster. Review becomes skim of an agent-written description over agent-written tests, then approve. What got reviewed was the agent — instructions, tools, blast radius, and the human gate — whether anyone named that shift or not.

The sharp reframe: treat `.claude/settings.json` (allow/ask/deny), MCP tool lists, and system prompts as the code that decides next week’s PRs. They land as config and get skimmed like a Prettier file. Three Tuesday questions before trusting an agent PR: what can it call, what paths/branches/environments can it touch (including the script-bypass around file-tool denies), and who sits between it and production. OWASP’s excessive-agency line: put authorization in downstream systems, not in a prompt suggestion. Copilot’s optional path to count agent approvals toward required reviews only raises the stakes — once agents review agents, the last human review left is the setup.

## Why it matters for code review

Same move [CapScope](https://arxiv.org/abs/2609.08371) ([our note](/posts/capscope-capability-scoped-harness/)) and [harness-supply-chain](https://arxiv.org/abs/2609.07360) ([our note](/posts/scanning-the-harness-supply-chain/)) papers make from the other direction: authority and config are the merge-relevant artifacts. Spot-check the high-blast-radius files; put the slow read on permissions, tools, and gates. A permissions file bounds blast radius — it does not catch the off-by-one. Buy the leverage only if the guardrails are real controls, not prompt theater.
