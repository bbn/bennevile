---
title: "468 merged PRs in 23 days from an always-on agent fleet: the validation stack is the boss, and AI review is capped at two rounds"
description: "Aug 25, Maurice Kleine. He used to be the message bus between 4 to 10 agent tabs and felt stressed whenever his laptop lid was closed. He moved the fleet to a €100/month server with supervisor agents that route tickets around the clock. 468 PRs merged and 537 tickets completed in 23 days. His first AI review setup nearly froze the fleet, so review cycles are now capped at two before a ticket blocks and comes to him."
date: 2026-08-25
kind: field-note
source:
  title: "My agents merged 468 PRs in 23 days. I didn't read a single one of them."
  url: https://www.mauricekleine.com/essays/my-agents-merged-468-prs
project: steward
---

[Maurice Kleine](https://www.mauricekleine.com/essays/my-agents-merged-468-prs) describes the before and after of moving from bursts of hands-on agent sessions to a fleet that runs all the time. Before, he had 4 to 10 Claude and Codex sessions open across a few projects and was "still the message bus": switching tabs, retyping "keep going please" after a subscription limit, and remembering to stop his laptop from sleeping. "I was walking back to my office one day feeling stressed because my MacBook lid was closed. Nothing was running."

His fix was Hyperspeed, a setup on a dedicated server costing about €100 a month. Small tickets, each with scope, acceptance criteria and the commands that prove it done, go into a queue. Supervisor agents he calls chiefs wake every few minutes, pick the next ticket whose dependencies are done, choose an account and model, and start a coding agent in an isolated checkout. Green CI triggers a focused AI review, and a clean review merges. Over 23 days that produced **468 merged PRs** and **537 completed tickets**, using 36.2 billion tokens.

- **Planning moved to the front.** A serious planning session takes him about four hours. One run went from a committed plan at 16:26 to five dependent PRs, each passing its first review, merged by 23:33, with zero questions asked of him.
- **The validation stack does the judging.** "An agent cannot know whether its implementation works if your repository cannot tell it." Linters, unit, integration, browser and visual tests, previews and post-deploy checks each remove something the agent would otherwise guess at.
- **AI review needed a stopping rule.** His first review setup nearly froze the fleet: tickets bounced between Ready and Review and accounts burned through limits arguing about findings. Now machine checks go first, the review prompt asks only for material defects, and cycles are capped at two. If the second review still finds a real problem, the ticket blocks and comes to him. "Without a stopping rule, your agents will spend the entire night polishing each other's belt buckles."
- **Discovered work waits for approval.** Anything the agents find mid-ticket goes to an inbox for him to approve instead of growing the current PR.

He's candid about the costs. He works mostly on greenfield projects and says legacy code needs its own rules. Merges are sequential, CI is slow, and UI still needs a person's eye. "I am the most productive I have ever been. I am also working harder than ever."

## Why it matters for code review

This is the strongest account yet of the anxiety that pushes people toward always-on agents: the closed laptop as lost output. His answer is to make the steady part structural (a queue, supervisors that never sleep, and checks that decide) so his own attention goes to planning and to the exceptions. The review lesson is the two-round cap. Unbounded AI-on-AI review turned into the bottleneck it was meant to remove, and the cap is what lets work move overnight. Not reading any of the 468 PRs is a bet on his test suite that most teams can't yet make. Read with [the two always-on maintainers that invented their own work](/posts/cavalcante-pi-durable-maintainers-693-prs-invented-their-own-work/), [Sieg on agent FOMO and weaker review](/posts/sieg-agentic-coding-fomo-idle-sessions-weaker-review/), and [Anthropic's Claude Code team on risk-tiered review](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
