---
title: "AutoAgent: overnight hill-climb that rewrites the harness, not just the prompt"
description: "Apr 2 Thirdlayer: meta-agent edits agent.py (tools, verification, context, orchestration) against Harbor evals; keep score gains, revert regressions; >24h runs hit 96.5% SpreadsheetBench and 55.1% TerminalBench (GPT-5) from a minimal baseline."
date: 2026-04-02
kind: field-note
source:
  title: "AutoAgent: Autonomous Harness Engineering"
  url: https://www.thirdlayer.inc/blog/autoagent
project: steward
---

[Kevin Gu / Thirdlayer’s AutoAgent](https://www.thirdlayer.inc/blog/autoagent) ([repo](https://github.com/thirdlayerinc/autoagent), Apr 2) makes the overnight factory **self-improving at the harness layer**. A task agent solves Harbor-format evals from a single editable `agent.py`. A separate meta-agent, directed by human-edited `program.md`, runs the loop you would run by hand: evaluate → read trajectories and verifier output → change tools / prompts / turn budgets / verification / subagents / handoffs → keep improvements, revert regressions. Constraint that matters: changes must generalize beyond the task that motivated them, or the optimizer overfits the leaderboard.

The search space is deliberately wider than prompt tuning. Across long runs the meta-agent independently rediscovered patterns strong human harnesses already use — specialized tools where shell fails, reserved verification turns, self-generated intermediate tests, parking large intermediates in files, and subagent handoffs when decomposition helps. Trajectories are load-bearing: score-only feedback produced weaker harnesses than score-plus-behavioral evidence. After **more than 24 hours** of unattended optimization from a minimal GPT-5 + shell baseline, they report **96.5% on SpreadsheetBench** and **55.1% on TerminalBench (GPT-5)** — first on those leaderboards at publish time. Same-model meta/task pairings often beat cross-model ones (“model empathy”), which is a useful complication for teams that assumed a stronger reviewer model is always better.

## Why it matters for code review

Continuous verified momentum compounds when the *factory itself* improves overnight — not only when workers chew tickets. AutoAgent’s review surface is the retained harness diffs and the eval ledger: which failure modes justified a tool or verify-loop change, and whether that change still holds if the motivating task disappears. Burst mastery still wins when you lack a task distribution and a score you trust; once you have both, leaving the meta-agent on is how harness quality outruns a single peak Claude Code session. Treat the morning PR as a harness review, not a model bake-off.
