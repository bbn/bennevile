---
title: "Auto mode: 9× between interrupts, three PRs by morning"
description: "Aug 7 Anthropic: Nuro 10pm–5am hill-climb → 3 PRs; classifier vs permission fatigue; FOMO answered only when eval signal + deny rules + PR-as-boundary exist."
date: 2026-08-07
kind: field-note
source:
  title: "Running auto mode in production"
  url: https://claude.com/blog/auto-mode-in-production
project: steward
---

Molly Vorwerck’s Aug 7 Anthropic post is the permission-layer receipt for overnight / always-on agent work: Auto mode is now Claude Code’s default, routing routine approvals to a separate classifier instead of a human click. Across Claude Code usage, sessions work **9× longer between interruptions** than under the previous default. That is continuity, not a claim that every task is 9× faster or more correct — but continuity is what turns an interactive turn into a job you can leave overnight.

Nuro is the overnight case study. Staff engineer Kai Zhou already prototyped a small-model hook that auto-approved ~90% of actions and Slack-routed the rest; when Auto mode shipped he shelved it. The unlock that matters for FOMO: long-running research agents hill-climbing **measurable evaluation metrics** on the autonomous-driving stack. “The other day, I kicked off an agent at 10 p.m. and it kept running until 5 a.m.—and it gave me three PRs in the morning.” Same pattern for shrinking a binary’s memory footprint — the metric tells the agent whether it is improving. Guardrails stay outside the vibe: skills plus hard denies (recursive deletes), and interactive mode when Claude reviews a PR *on his behalf*.

Gusto and Garner Health fill in the daytime fleet half. Martin Emde’s ~2,425 sessions since December; cross-repo work no longer stalls on folder-access prompts; ~10% of mid-May+ transcripts show an Auto mode denial — evidence the classifier is doing work, not cosplay. Chad Kunsman prefers Auto mode for twenty-minute MCP bursts specifically *because* it is safer than bypass permissions under prompt-injection risk, and still drops to accept-edits for Terraform / live AWS. Garner rolled Claude Code to ~550 employees with a standardized SDLC plugin (explore → commit context → “antagonistic research” → implement); Evan Magnussen’s one hard rule mirrors Kai’s: do not auto-approve actions that communicate with other people.

## Why it matters for code review

Peak-session Claude mastery dies when the agent waits at 10:07pm for `npm test`. Auto mode removes that interrupt tax so harnessed overnight motion is *possible* — but Nuro’s three morning PRs only compound when the objective is an eval signal, dangerous commands are denied in settings, and delivery stops at a reviewable PR. FOMO that agents aren’t working while you sleep is answered by continuity *plus* a verify contract, not by skipping permissions. Pair with verify-first rejection-tax receipts: longer unattended loops without in-loop gates just mint more unmergeable diffs for the morning queue.
