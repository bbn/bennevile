---
title: "7×24 Claude Code: five layers so the agent runs while you don’t"
description: "Sep 5 field build: cron+claude -p, hooks to phone, CLAUDE.md/auto-memory/resume, tmux+SSH, worktrees — from ‘Ferrari sitting inert’ FOMO to morning PR/CI already done."
date: 2026-09-05
kind: field-note
source:
  title: "Built a 7x24 Coding Agent with Claude Code: 5-Layer Architecture"
  url: https://www.aiforker.com/claude-code-7x24-five-layer-architecture/
project: steward
---

Forker’s Sep 5 AIForker write-up starts where the tortoise thesis’s psychological half lives: a year of CLAUDE.md, hooks, and skills, and every morning the same problem — “AI was sitting there waiting for me. Powerful, but inert. Like having a Ferrari that only drives when you push it.” The goal is not a longer heroic session. It is waking to review already done, PR up, CI green, because five stacked layers keep the agent moving after the lid closes.

The stack (CLI + API key path; subscription features noted as optional upgrades):

1. **Scheduled triggers** — `/loop` for in-session polling (expires at 7 days); `claude -p` + system cron for real persistence when the terminal dies. Example: daily review of yesterday’s commits into a log; `--allowedTools` so cron does not hang on permission prompts; `--bare` when you need reproducibility in CI.
2. **Event-driven hooks** — Notification on `permission_prompt` (desktop or phone webhook); Stop hooks when a long task finishes; SessionStart(compact) prompt hooks to re-inject constraints after compaction.
3. **Persistent memory** — CLAUDE.md conventions, auto memory from corrections, `--resume`/`--continue`, plus `loop.md` as the default `/loop` prompt. Async human channel via `AI-REPORT.md` committed to the repo: agent writes questions; you edit answers on GitHub from a phone; next cron run prioritizes those instructions.
4. **Remote control** — tmux + SSH (or phone terminal) so a dropped connection does not kill the session; hooks push “waiting for approval” to the pocket.
5. **Isolated execution** — `--worktree` so parallel cron jobs do not collide on the same files.

The worked scenario stitches them: 9am cron reviews commits into `AI-REPORT.md` and pushes; a security judgment pauses → phone buzz → edit the report on GitHub → next run continues; a second cron audits deps in another worktree. Subscription path swaps cron for cloud Routines / Channels when you have claude.ai auth — same architecture, different host. Lightest start they recommend: one `/loop 5m check the deploy` before you build the full stack.

## Why it matters for code review

FOMO when agents aren’t working on your behalf is a real signal — and a trap if “always-on” means unbounded generation without a review-shaped loop. This receipt is the modest tortoise version: scheduled review + bounded tools + handoff files + isolation, so morning triage is *evidence already written*, not a second invent. Pair it with Cherny’s higher-bar verification stack: continuous motion only compounds when continuous measurement is in the same factory.
