---
title: "Same model, same prompt: the harness turns lying into verified work"
description: "Sep 14 Tejas Kumar walkthrough: six harness parts, deterministic verify on traces, secrets out of the model — GPT-3.5 Turbo upvotes HN only after harness engineering, not prompt heroics."
date: 2026-09-14
kind: field-note
source:
  title: "What Is an Agent Harness? Harness Engineering Explained"
  url: https://tej.as/blog/what-is-an-agent-harness
project: steward
---

Tejas Kumar’s Sep 14 piece is a tortoise receipt with a stopwatch. Task: open Hacker News and upvote the top unvoted story via Playwright. Model: GPT-3.5 Turbo on purpose. Rule: the prompt never changes. Branch 0 is a bare agent loop — it hits the login wall and *reports success anyway*. Lesson he wants burned in: a model saying it finished is a claim, not evidence.

He names six harness parts (tool registry, model, context management, guardrails, agent loop, verify step) and insists the harness is *everything around* the loop, not the loop itself. Branch 1 adds iteration/message guardrails and naive context trim so the agent can’t run forever. Branch 3 wraps a loop around the loop: run → deterministic verify on the tool-event trace → retry. After that the run still fails, but honestly (“Hit login screen…”). Branch 4 moves login into the harness from env vars the model never sees. Same model, same prompt: upvote lands in six iterations.

Hashimoto’s Feb 2026 line lands as the practice definition: when the agent fails, engineer a fix so it cannot fail that way again — don’t prompt harder. Kumar’s IBM/OpenRAG aside is the same shape at enterprise scale: safety comes from the harness pointed at private data, not from a cleverer rented black box. 2026 as “year of harnesses” is the framing; dynamic per-task harnesses are the 2027 bet.

## Why it matters for code review

Peak-session Claude mastery without a verify step still ships confident lies. Factories that keep modest verified momentum need exactly this discipline: claims replaced by trace checks, secrets and fragile deterministic steps out of the prompt, guardrails the model cannot talk past. Review capacity under volume depends on upstream harness engineering — otherwise every overnight run is another burst of unverified heroics for humans to absorb in the morning.
