---
title: "Headless Decode on Modal: overnight cron → morning PR inventory"
description: "Sep 10 Decoding AI: Paul Iusztin ships Decode headless on Modal — CLI, webhook, or nightly cron; parallel attempts push decode/ branches so morning review starts from finished work, not five open terminals."
date: 2026-09-10
kind: field-note
source:
  title: "Deploy a Headless Coding Agent Harness to Modal"
  url: https://www.decodingai.com/p/coding-agents-in-remote-headless
project: steward
---

Paul Iusztin’s Sep 10 Decoding AI lesson is the overnight / always-on harness written as something you can deploy, not a vibes demo. After three hours babysitting five local coding agents he lost track of scope; the laptop-lid problem killed anything that needed the machine awake. Lesson 6 of Building a Coding Agent From Scratch takes Decode — the course harness — and makes it remote: drop the TUI for a headless CLI, run the same agent loop on Modal as serverless jobs, and fan out parallel attempts across projects.

Headless mode is `decode run "<goal>"`: same `build_agent()` loop as the interactive UI, but permissions default to bypass, `ask_user` is a no-op, stdout keeps only the final answer, and full traces go to Opik. A `--max-requests N` cap stops unattended doom loops that burn tokens without progress — the failure mode Anthropic’s long-running harness notes also flag. Modal sits between trigger and execution: zero idle cost, fire-and-forget containers. Three entry points hit the same `run_task` function — `decode remote run` / `attempts` from CLI or CI, an authenticated webhook (Slack/Discord/Telegram), and a nightly cron via `DECODE_NIGHTLY_CRON`. With `--sandbox-mode modal` each job clones the repo, implements the goal, and pushes a `decode/<…>` branch (and optionally a PR). `decode remote attempts "…" --attempts 3` spins three independent containers so another agent — or you — can compare and forward only the best.

The morning shape is the point. A cron or Linear/Notion webhook can pull tickets tagged for the agent; Modal spawns one container per ticket; you wake to reviewable PRs instead of five terminals. Iusztin cites Ramp’s production pattern: routing queue + session locks, review-ready PRs out, roughly half of merged PRs using that strategy. Orchestrator-plus-GPU-sandbox subagents extend the same idea for parallel fine-tunes. Serverless fits bursty overnight work (scale to zero when idle); always-on interactive TUIs may want different infrastructure. Cost still needs a ceiling — commenters flag that five agents × N attempts × nightly cron scales with ambition, not merged output, unless you name a monthly cap or cost-per-merged-PR.

## Why it matters for code review

Overnight agent motion only compounds when delivery stops at a reviewable inventory with independent traces — not when five local sessions demand your presence until the lid closes. Pair remote headless triggers (cron, webhook, CI) with attempt isolation and a morning pickup habit: continuous throughput without that boundary just relocates babysitting into the review queue. Pair with verify-first rejection-tax receipts and queue design for agent volume: remote harnesses mint PRs at machine pace; review capacity and live verification still decide what ships.
