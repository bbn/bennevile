---
title: "Overnight agents: \"don't merge\" is an instruction, branch protection is a boundary"
description: "Oct 12 Paperclip guide to unattended overnight runs: sort work into proceed-to-review, prepare-then-decide, and wait lanes, and put each limit in the layer that can actually enforce it."
date: 2026-10-12
kind: field-note
source:
  title: "How to Run AI Agents Unattended Overnight"
  url: https://paperclip.ing/blog/run-ai-agents-unattended-overnight/
project: steward
---

**Paperclip's** guide to leaving agents running overnight turns on one distinction: a line in the prompt saying "don't merge" is an **instruction**; a review stage the task cannot close without, or a repository rule the agent's identity cannot satisfy, is a **boundary**. Over eight unattended hours an agent can build on an early misreading (deleting a failing test instead of fixing the code) and nothing inside the loop looks wrong, so only enforced limits count.

The guide sorts the night into three lanes. Drafts, branches, research and test runs **proceed up to a review** and stop. Merges, publishing, external messages, data changes and purchases are **prepared overnight and decided in the morning**, held by a control the agent cannot get past. Open-ended goals ("improve the onboarding flow") **wait**, because nothing tells the agent when it is done. Each limit lives in exactly one layer: the coding runtime governs commands and file edits, connector permissions govern tool calls, the work manager governs ownership, budgets and review stages, and the repository governs merges. No layer covers another's job.

The vendor is candid about its own gaps. By default its Claude Code adapter passes `--dangerously-skip-permissions`, so nobody is asked anything at 3 a.m. unless you change it or sandbox the agent. Its task approval records a decision but does not stop an agent from running `gh pr merge` in its shell; what actually kept the illustrated docs agent from merging was branch protection requiring a human review. Budgets stop the next run, not the current call.

## Why it matters for code review

This is the plain-language version of keeping always-on agents trustworthy: overnight momentum is worth having only up to the review line, and the morning review is fast because the agent left a branch, a diff and a recorded decision trail. Two details carry over to any agent factory. When an agent implementer and an agent reviewer keep bouncing work, the **third consecutive agent request for changes goes to the responsible human** instead of looping. And the morning checklist treats "a done task without a review decision as a claim", and says to look at the actual diff because a clean status is not proof the run took acceptable steps. Compare [Hellström's overnight fleet, where luck was the only guardrail](/posts/hellstrom-overnight-fleet-11-prs-94-percent-idle-luck-is-not-a-guardrail/), and [Orbit's Nightshift: enforcement, not prompts](/posts/orbit-nightshift-enforcement-not-prompts/).
