---
title: "Continuous Agent: a 24/7 queue that spawns workers and validates before the next goal"
description: "Jan 24 jackzhaojin/continuous-agent: PM2 executive loop picks prioritized goals, spawns multi-vendor workers into an isolated sandbox, runs deterministic verifiers, and only sleeps when the queue is empty."
date: 2026-01-24
kind: field-note
source:
  title: "Continuous Coding Agent"
  url: https://github.com/jackzhaojin/continuous-agent
project: steward
---

[jackzhaojin/continuous-agent](https://github.com/jackzhaojin/continuous-agent) (created Jan 24) flips the usual coding-agent posture: instead of waiting for a human prompt, a PM2-backed **executive loop** drains a prioritized goal queue around the clock. Each cycle is mechanical — check inbox, health-check, select highest-priority unblocked goal, spawn an isolated coding worker (Claude, Codex, or Kimi), validate with deterministic verifiers, update ledgers, continue — and it sleeps only when `ondeck/` is empty. Goals live as markdown bundles with YAML frontmatter; complex ones auto-break into steps and turn-budgeted contracts. Application code never lands in the agent repo: workers write only into a sibling `ai-sandbox/`, enforced by constitution.

v2.2 adds **Harness Mode** — dedicated plan-then-build pipelines (`generic`, `eds`, `study`) that run standalone via CLI or as `execution_pattern: harness` goals the executive already knows how to drive. Vendor-agnostic `runHarnessAgent()` plus a mock-provider suite (`npm run test:harness`) exercise the orchestrator without burning API calls; live Claude runs stay gated. Append-only JSONL ledgers and Discord/Gmail identity channels keep the asynchronous human interface out of the critical path.

## Why it matters for code review

Always-on factories need a queue and a gate, not a better peak-session prompt. Continuous Agent’s receipt is the loop contract: work selection and validation stay deterministic while model workers stay swappable, so overnight progress is a drained board with verifier receipts — not a chat that kept typing. If nothing ran while you slept, you skipped a cycle of prioritized builds that would have been waiting for morning review; bursts still win for novel intent, but merge-rate under load favors the shop that keeps picking the next goal without you.
