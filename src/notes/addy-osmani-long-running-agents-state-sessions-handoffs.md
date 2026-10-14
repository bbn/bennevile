---
title: "Long-running agents: the gap is state, sessions, and handoffs—not the chat loop"
description: "Apr 28 Addy Osmani: long-horizon vs long-running vs persistent agency; Ralph, Anthropic brain/hands/session, Cursor planner–worker–judge; write done-conditions and separate evaluator from generator before overnight FOMO."
date: 2026-04-28
kind: field-note
source:
  title: "Long-running Agents"
  url: https://addyosmani.com/blog/long-running-agents/
project: steward
---

Addy Osmani’s Apr 28 field note separates three things people flatten into “long-running”: **long-horizon reasoning** (many dependent steps—mostly model quality), **long-running execution** (hours/days of harnessed process—the load-bearing engineering problem), and **persistent agency** (identity and memory across tasks). The three walls every such agent hits are finite context, no durable state across sessions, and **no self-verification**—models skew positive when asked if they are done.

The practitioner floor is still the **Ralph loop**: pick next unfinished task, fresh prompt from disk state, run agent, verify, append progress, update the list, repeat—state in `prd.json` / `progress.txt` / `AGENTS.md`, not in the conversation. Anthropic’s shape (initializer + coding agent with test ratchet; later brain / hands / append-only session log) and Cursor’s planner–worker–judge split converge on the same move: decouple model loop from sandbox from durable session, and keep a judge beside the worker. Google’s Agent Platform productizes the same brain/hands/session split with SLAs. Five production patterns land as the difference between demos and overnight momentum: checkpoint-and-resume, delegated approval that pauses in place, memory-layered context with drift governance, ambient event-driven processing, and fleet orchestration with per-specialist identity.

The highest-leverage habit before kicking an overnight job: **write the done-condition as an external file** the agent cannot quietly redefine, and **separate evaluator from generator**. Limitations stay named—cost without budgets, security surface of unattended shell, alignment drift across summarizations, and the human-time cost of auditing 24 hours of autonomous activity. Spec skill appreciates: defining work crisply enough for a day-scale agent is harder than doing the work yourself.

## Why it matters for code review

FOMO that agents sit idle overnight is really FOMO that no harness owns persistence, recovery, and an independent done-check. Review always-on lanes for Osmani’s contracts—plan and progress on disk, session logs you can reconstruct, judges that are not the builder—before buying another peak Claude Code session. Continuous verified momentum compounds past bursty mastery when the gap closed is state and handoffs, not token throughput in one sitting. Pair with [Mouse’s overnight house rules](/posts/mouse-overnight-code-agents-house-rules/) and [Macedo’s verification ladder for loop specs](/posts/macedo-stop-hand-holding-loop-specification-verification-ladder/) when deciding what “leave it running” actually requires.
