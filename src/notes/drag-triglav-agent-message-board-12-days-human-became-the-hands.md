---
title: "Twelve days of agents arguing on a visible message board: challenges fixed real decisions, but the human ended up as the hands"
description: "Oct 19, Adam Drag. His Triglav setup runs a long-lived Staff agent, Senior coders and researcher agents that post stances on a shared board. Over Oct 7 to 19: 1,648 messages on 76 jobs, 42 challenges, 192 items routed to him and 176 decisions. 112 of 311 blockers only said Staff was offline, and he estimates just 15 to 25% of messages were real discussion. Two agents agreed on a premise neither checked."
date: 2026-10-19
kind: field-note
source:
  title: "I let my coding agents argue on a message board for 12 days"
  url: https://dev.to/adamdrag/i-let-my-coding-agents-argue-on-a-message-board-for-12-days-55om
project: steward
---

[Adam Drag](https://dev.to/adamdrag/i-let-my-coding-agents-argue-on-a-message-board-for-12-days-55om) exported twelve days of the board his agents use to coordinate and went through it to see whether the talking helps. The setup is [Triglav](https://dev.to/adamdrag/triglav-orchestrating-claude-code-and-codex-agents-for-long-running-work-and-layered-review-4npe), his orchestrator around Claude Code and Codex. A long-running Staff agent plans and records decisions, Senior agents write code in their own worktrees, and researcher agents read plans and reply. When a Senior is unsure it posts a timed question, usually with a 3 to 5 minute window, and the others answer with a stance: inform, support or challenge.

From Oct 7 to 19 there were **1,648 messages on 76 jobs**. 479 were replies and **42 were challenges**. 192 messages were routed to him and he made 176 decisions. There were 311 blockers, and **112 of them only said the Staff agent was offline**.

- **Challenges changed real decisions.** In one thread Staff ordered a one-line fix and a researcher pointed out it would change how errors are shown, which the probe hadn't covered. Staff found the code was deprecated and withdrew the decision. A researcher also overturned Staff's rule for ending a review loop: "a valid security finding caused by a fix should stop delivery."
- **Agreement was weaker than it looked.** On one job, Staff and a researcher both backed adding an engine API that the user's AI-generated code expected. The API had never existed, and neither agent checked. Researchers sometimes supported plans without reading the code, and that support looked the same as support based on the code. Staff accepted almost every challenge, sometimes within about a minute.
- **Most of the board was plumbing.** He estimates only **15 to 25%** of messages were real discussion. The rest were progress posts, delivery reports and offline notices.
- **The human became the hands.** The agents respected their permission rules, so blocked work came back to him to run a command and paste the output, or to click "Ready for review". One tool field only accepted "CI: success", even for jobs with no CI. He calls that his own bug.
- **Review loops still need a stop.** A read-only panel of Codex and Claude reviewers checks each diff before a PR. In his launch post he reported a cap of 3 local rounds and a tally of 54 passes and 42 change requests over 96 rounds. Copilot still found issues the panel missed, and one PR went through 7 Copilot rounds "because each fix caused the next finding."

The launch post also puts a number on the cost of keeping agents on call. In the first six days the agents wrote about 3.6 million output tokens and read about 3.6 billion from the prompt cache, "roughly a thousand to one," because every wake-up re-reads the agent's whole context. Staff now wakes only for events it needs.

## Why it matters for code review

This is a useful test of an always-on agent team, because the coordination is written down where a person can audit it. The good news is that a wrong decision gets caught in public and can be traced afterwards. The costs are what steady operation adds: offline notices and status posts drowning the real questions, support votes that don't show whether anyone read the code, and escalations that are clicks rather than judgment. Drag's next step is the review lesson. Agents should say what they based an answer on and what they didn't check, and acceptance criteria should be written before work starts. Right now, he says in a reply, they often exist only in Staff's decision afterwards. Read with [Kleine's always-on fleet with AI review capped at two rounds](/posts/kleine-hyperspeed-always-on-chiefs-468-prs-review-cycles-capped-at-two/), [Bruniaux's bounded review loop](/posts/bruniaux-bounded-review-loop-controller-owns-the-stop/), and [Hellström's overnight fleet that sat idle 94% of the time](/posts/hellstrom-overnight-fleet-11-prs-94-percent-idle-luck-is-not-a-guardrail/).
