---
title: "Harness-only: Terminal Bench 52.8 → 66.5 without touching the model"
description: "Feb 17 Trivedy (LangChain): deepagents-cli hill-climbs via traces, PreCompletionChecklist self-verify, loop detection, and reasoning sandwich — same gpt-5.2-codex throughout."
date: 2026-02-17
kind: field-note
source:
  title: "Improving Deep Agents with harness engineering"
  url: https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering
project: steward
---

Vivek Trivedy’s Feb 17 LangChain post is a clean receipt that **the harness is the product**: deepagents-cli moved from **52.8 → 66.5** on Terminal Bench 2.0 (**+13.7**, into the Top 5) while keeping the model fixed at `gpt-5.2-codex`. No weights swapped — system prompt, tools, and middleware (hooks around model and tool calls) did the climbing.

The improvement loop is itself agentic. A Trace Analyzer skill pulls LangSmith experiment traces, spawns parallel error-analysis agents, synthesizes failure modes, and proposes harness patches — boosting on yesterday’s mistakes rather than re-reading vibes. The dominant failure they saw: the agent writes a plausible solution, re-reads its own code, declares victory, and stops. The fix is structural, not polite. Prompting forces a plan → build-with-tests → verify-against-spec → fix cycle; a **`PreCompletionChecklistMiddleware`** intercepts exit and re-injects a verification pass against the task spec (Ralph-Wiggum-shaped: the harness refuses “done” until the checklist runs). **`LocalContextMiddleware`** injects cwd maps and available tooling so the agent wastes fewer turns rediscovering the environment. **`LoopDetectionMiddleware`** counts per-file edits and nudges a rethink after N edits to the same file — a short-horizon patch for today’s doom loops that should dissolve as models improve. Reasoning spend is budgeted as an **xhigh–high–xhigh sandwich** (plan and verify expensive; mid-run cheaper); all-`xhigh` scored worse (**53.9%**) on timeouts than a tuned split (**66.5%**).

They are explicit that Claude Opus 4.6 on an earlier harness landed **59.6%** — competitive, but worse than Codex because they did not re-run the same improvement loop for that model. Harnesses are model-specific surfaces; verification and context prep generalize, but the hill-climb must be re-run.

## Why it matters for code review

Overnight and always-on factories compound only when “done” is a harness decision, not a narrator mood. This note’s measured claim is the week’s thesis in numbers: modest verified momentum — traces in, checklist gates, loop breaks — beats peak-session mastery of a bare chat window on the same model. FOMO when nothing ran overnight is often missing middleware, not missing genius.
