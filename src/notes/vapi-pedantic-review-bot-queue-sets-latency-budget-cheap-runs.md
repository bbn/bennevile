---
title: "When humans take days, a review bot can take 20 minutes: Vapi halves open-to-merge"
description: "Oct 12 Vapi: an in-house review bot that runs code before it objects cut average open-to-merge from 130 to 65 hours over 1,694 PRs a month. Three cheaper runs beat one maximum-effort run, and no single run found more than 10 of 32 real issues."
date: 2026-10-12
kind: field-note
source:
  title: "How an in-house review bot cut our PR merge time in half"
  url: https://vapi.ai/blog/ai-code-review-bot
project: steward
---

When Lat Ware started building Vapi's **Pedantic Review Bot**, a pull request took over **130 hours** on average from open to merged. That number became his budget: "I was competing with review times measured in days, so I could let the bot spend 20 minutes on a review." The bot now reviews every PR engineers open, and average open-to-merge has fallen to **65 hours**. Between 2 September and 2 October it reviewed **1,694 PRs** and raised **363 blocker findings** across 276 of them, more than half about builds, tests, CI or deployment, including a benchmark that reported success without running a test.

The design choices are about earning trust under volume. The bot does not report an objection until it has checked it: it traces callers, runs the tests it suspects will fail, or writes a reproduction. Analysis runs with Git credentials stripped and writes JSON; a separate job validates and posts comments and cannot approve or push. A second architecture bot, behind a complexity filter, produced 33 reports from 763 runs after a design flaw slipped past the line-level reviewer.

The experiments complicate any single-pass story. Across 101 versions of the opening instruction on one PR, findings grouped into 57 issues, 32 judged real, and **no single run found more than 10** of them. Once false positives were counted as a cost, the plain original prompt won. On a refactor with a known blocker, **three extra-high-effort runs beat one maximum-effort run** at the same cost or less, yet only **8 of 194** code-review runs caught the lint failure, and only the runs that executed the lint suite. Ware flags the limits: single PRs, an AI judge, and no tracking yet of which findings engineers acted on.

## Why it matters for code review

The queue is the latency budget: when human review waits days, a slow, careful, always-running reviewer is still an improvement, which is the same queueing logic as [FlowVerify's agent-PR wait math](/posts/flowverify-review-queue-math-bursty-agent-prs-wait-tenfold/). Steady repeated passes that run code beat one heroic expensive read, but each run still misses most of what is there, so continuous verification needs several independent passes and a reviewer that executes rather than reads.
