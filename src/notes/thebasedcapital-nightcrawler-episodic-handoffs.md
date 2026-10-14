---
title: "Overnight agents need episodes, not one immortal session"
description: "Feb 23 Nightcrawler: bounded Claude Code episodes, HANDOFF.md cross-checked against git, immutable tasks.json, eight stop conditions including diminishing returns."
date: 2026-02-23
kind: field-note
source:
  title: "Why Your Overnight AI Agent Fails (And How Episodic Execution Fixes It)"
  url: https://dev.to/thebasedcapital/why-your-overnight-ai-agent-fails-and-how-episodic-execution-fixes-it-2g50
project: steward
---

[thebasedcapital](https://dev.to/thebasedcapital/why-your-overnight-ai-agent-fails-and-how-episodic-execution-fixes-it-2g50)’s Nightcrawler write-up (Feb 23; [repo](https://github.com/thebasedcapital/nightcrawler)) treats long-running Claude Code as a reliability problem, not a prompting problem. The six failure modes are familiar to anyone who left `--dangerously-skip-permissions` running: context cliff, hallucinated “I finished tasks 1–5,” budget inferno, infinite retry between two broken states, silent crash at 2am, and mission drift into unasked features. A bare `while true; do claude -p …; done` (Ralph-style) assumes each turn can recover from the filesystem alone. That works for a short bugfix. It fails a twelve-hour mission.

Nightcrawler’s answer is **episodic execution**. Each episode is a fresh `claude -p` session that reads the mission, the previous `HANDOFF.md`, and live `git log` / `git diff`, then works one slice and writes a structured handoff. The orchestrator sits *between* episodes and decides continue or stop. Eight termination conditions fire before the next spawn: human `STOP` flag, agent-declared stop, episode and duration caps, total and per-episode budget, error and fatal thresholds, and **diminishing returns** (under half a task per episode for three episodes). Task cheat-proofing is blunt: checkboxes become `tasks.json` at start; the agent may flip `passes` false→true only — no delete, rename, or rewrite of the mission to match what it actually did. launchd (or equivalent) supplies crash restart and sleep/wake; a PID lockfile blocks double drivers.

## Why it matters for code review

Always-on throughput compounds only when overnight work is a chain of verified episodes, not one heroic session that grades itself. Morning review should ask for the completion report, the handoff trail, and whether git agrees with the agent’s story — not whether the chat still looked busy. Peak Claude mastery still wins a single well-scoped change inside one context window; continuous factories win the night when the stop conditions are outside the worker and “done” is cross-checked against the repo.
