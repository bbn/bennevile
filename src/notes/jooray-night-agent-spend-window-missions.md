---
title: "Night Agent: spend the window before credits reset"
description: "Jul 2026 jooray/night-agent: reset-anchored unattended missions in an isolated worktree; separate verify+commit per fix; never pushes — FOMO operationalized as using the subscription before it evaporates."
date: 2026-07-17
kind: field-note
source:
  title: "Night Agent — bounded unattended OpenCode / Claude Code missions"
  url: https://github.com/jooray/night-agent
project: steward
---

[Night Agent](https://github.com/jooray/night-agent) (jooray, Jul 2026) is an unattended maintenance harness with an unusual clock. It runs OpenCode and/or Claude Code inside a persistent isolated worktree on a dedicated `night-agent` branch, keeps durable policy and findings in `.night-agent/NIGHT_AGENT.md`, requires **separate verification and a separate commit for every independent fix**, writes a morning TLDR, and **never pushes**. Continuity lives in the repo and the report — each backend session starts fresh.

The distinctive control is **reset-anchored spend windows**. Provider credits die on a cadence (Venice DIEM daily, a Claude subscription weekly). Night Agent opens a configured `leadHours` window before each asserted reset, clamps `--max-hours` to time left, and fires the most neglected recurring **mission** (audit, deps, compat, …), rotating models from a pool. A mission interrupted by budget exhaustion is pinned and resumed next window instead of dropped; persistent failures back off so a broken job cannot starve the queue. Custom `--gate-cmd` stops spend the harness cannot see. Deny-lists still block push, `gh`, deploy-like commands, and work outside the worktree — `dontAsk` is not “skip permissions.”

One-off `--task` nights still work; the recurring scheduler is the point. The harness treats “agents working on your behalf” as a budgeting problem: if the window closes unused, the overnight capacity is gone whether or not you intended to use it.

## Why it matters for code review

Always-on factories are not only verify gates — they are calendars that keep modest verified work moving when you are away. Night Agent’s spend-window missions turn FOMO into a schedule: credits get spent on neglect-weighted maintenance before they reset, each fix still arrives as a separately verified commit humans can cherry-pick, and nothing reaches `main` without a person. Continuous harnessed throughput compounds past peak-session heroics when the loop keeps running *and* refuses to merge itself.
