---
title: "Polter: one Claude session supervises the overnight fleet"
description: "Sep 15 Lugiax: Ghostty fork + MCP — supervisor tab reads screens, restarts quiet workers, group chat + task panel; won't answer permissions; overnight FOMO as unfinished runs."
date: 2026-09-15
kind: field-note
source:
  title: "I built a terminal where one AI CLI supervises the others, so overnight runs actually finish"
  url: https://dev.to/lugia123/i-built-a-terminal-where-one-ai-cli-supervises-the-others-so-overnight-runs-actually-finish-5e13
project: steward
---

[Lugiax](https://dev.to/lugia123/i-built-a-terminal-where-one-ai-cli-supervises-the-others-so-overnight-runs-actually-finish-5e13) (Sep 15; [Lugia123/polter](https://github.com/Lugia123/polter)) names the overnight failure mode that isn't "the model is weak": a coding CLI quits after an hour on a network blip, or decides it's done, and sub-agents fudge handoff reports. Existing multiplexers show many agents; none make **one agent responsible for the others**. Polter is a Ghostty fork with an MCP layer. Mark a Claude Code tab as **supervisor** and it can read **text** on other tabs' screens, type into them, open new tabs, run a group chat and shared task list, and get told when a screen has been still past a quiescence threshold. Workers are full sessions with on-disk transcripts you can `grep` in the morning — not ephemeral sub-agents. If the supervisor itself goes quiet, Polter pokes it.

Hard fences matter as much as the wake-ups: Polter **will not** answer a permission prompt for an agent, unlock a tab you locked, or bypass a CLI's own permissions — those stay human. It has no account and no API key of its own (one optional GitHub update check). Compared to Claude's Agent View, cmux, herdr, and Claude Squad, the load-bearing claim is built-in supervisor roles plus idle nudge on the supervisor, not only the workers. Honest gaps: only Claude Code is tested end-to-end as supervisor; Windows is still catching up on actions; it's a fork, so Ghostty merges lag.

## Why it matters for code review

Always-on factories die when the overnight fleet silently stops — FOMO becomes unfinished PRs, not unused quota. Continuous modest throughput needs an outer supervisor that treats stall as a signal and never self-certifies past permission gates. Peak-session Claude mastery still wins on ambiguous intent; Polter is the harness half that keeps many verified workers from clocking out while you sleep.
