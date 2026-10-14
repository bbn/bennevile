---
title: "Loop engineering: design the system that prompts the agent"
description: "Jun 8 Addy Osmani: automations, worktrees, skills, connectors, maker/checker sub-agents, plus disk memory — /goal stops on a separate model’s done-check, not the implementer’s optimism."
date: 2026-06-08
kind: field-note
source:
  title: "Loop Engineering"
  url: https://addyo.substack.com/p/loop-engineering
project: steward
---

Addy Osmani’s Jun 8 essay names the floor above the harness: **loop engineering** is replacing yourself as the person who prompts the agent. Steinberger and Cherny’s line — design loops that prompt Claude/Codex — becomes a portable anatomy once both products ship the same five pieces.

1. **Automations** as heartbeat (Codex Automations / Claude `/loop`, cron, hooks, Actions) so discovery and triage fire without a human in the chair.
2. **Worktrees** so parallel agents cannot collide on the same checkout.
3. **Skills** so project intent compounds on disk instead of being re-guessed every session.
4. **Plugins/connectors (MCP)** so the loop opens PRs and updates tickets instead of narrating what it would do.
5. **Sub-agents** that keep the maker away from the checker — explorer / implementer / verifier, sometimes different models.

The sixth piece is boring and load-bearing: **memory outside the conversation** (markdown, Linear, anything durable). Models forget between runs; the repo does not. The in-session primitive that matches the thesis is `/goal` in both tools: keep going until a **verifiable** condition holds, with a **fresh small model** grading done so the writer is not the stop condition. Automations surface work; worktrees isolate it; skills and connectors make it act in your real environment; sub-agents and `/goal` make “done” mean something you can walk away from.

Osmani’s caution is the productively complicating half. Loops sharpen three debts: unattended mistakes, **comprehension debt** as unread code grows, and **cognitive surrender** — taking whatever the loop ships because it is comfortable. Two people can build the same loop; one uses it to move faster on work they understand, the other to avoid understanding. The loop cannot tell which. Direct prompting still works; the leverage point moved, the engineer did not disappear.

## Why it matters for code review

Continuous overnight momentum is this stack — schedule, isolate, verify with an independent checker, persist state — not a longer peak Claude Code session. Review bandwidth remains the ceiling on how many worktrees you can actually run; FOMO about idle agents is the wrong scarcity if the loop has no external done-check or the human has stopped reading what it merges.
