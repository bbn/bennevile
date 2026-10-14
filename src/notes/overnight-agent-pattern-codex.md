---
title: "Overnight agents: infrastructure, not a longer Claude session"
description: "Aug 4 field guide (updated Sep 14): task queue → worktree-isolated Codex exec/Goal Mode → watchdog → morning triage — atomic verifiable tasks, AGENTS.md constitution, and when not to go lights-off."
date: 2026-08-04
kind: field-note
source:
  title: "The Overnight Agent Pattern: Infrastructure for Continuous Autonomous Development with Codex CLI"
  url: https://codex.danielvaughan.com/2026/08/04/overnight-agent-pattern-codex-cli-autonomous-scheduled-development-infrastructure-vps-cron-exec/
project: steward
---

Daniel Vaughan’s Codex Knowledge Base piece (Aug 4, updated Sep 14) treats “wake to a stack of PRs” as an infrastructure pattern, not a model demo. The framing receipt: Greptile’s cut that fully autonomous agents rose from 0.86% of merged PRs (Feb 2025) to 27.6% (Apr 2026) — driven less by smarter models alone than by scheduling, isolation, monitoring, and safety.

Stack he documents:

- **Atomic unit:** `codex exec` headless with sandbox, JSONL events, semantic exit codes.
- **Long horizon:** Goal Mode (`/goal`) — plan/act/test/review until objective or token budget; server-side resume survives laptop shutdown.
- **Blast-radius control:** one git worktree per agent/task so the worst case is delete-a-branch, not restore-the-repo.
- **Four layers:** SQLite task queue with a “sleeping test” (can I verify output in under two minutes in the morning?) → orchestrator (van Zyl-style staggered cron on a VPS) → watchdog (context overflow / crash / stall) → morning triage (dashboard → quick-accept → deep review → cleanup; ~30–45 min for 8–12 developer-hours of overnight output).

Guardrails that are the real harness: `AGENTS.md` as overnight constitution (forbidden paths, no deps/CI edits, tests must pass), pre-commit hooks the agent cannot bypass, network-restricted sandbox, model routing by task tier, Goal Mode cost caps. Karpathy’s AutoResearch variant sharpens the loop further — numeric objective + automatic verify + rollback — while noting Codex’s “never stop” compliance gap versus Claude Code for open-ended runs.

Explicit anti-pattern list: do not overnight deploy, auth/payments, irreversible migrations, architecture calls, or anything without automated tests. Failure modes catalogued: retry loops, context exhaustion, rate-limit cascades, overlapping worktrees, confidently-wrong tests, runaway spend.

## Why it matters for code review

Continuous factories win when overnight work is *bounded and mechanically reviewable* — not when someone leaves a hero session running. Morning review is the productized verification tax: triage designed for volume, not a second full invent. If your overnight queue cannot pass the sleeping test, you are buying FOMO, not harnessed throughput.
