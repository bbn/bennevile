---
title: "The agentic metaharness: a room above your coding harnesses"
description: "May 18 SoloTerm/Aaron Francis: models → harnesses → metaharness — shared process graph, scratchpads, todos, timers, and cross-harness spawn so agents coordinate without you babysitting every tab."
date: 2026-05-18
kind: field-note
source:
  title: "The agentic metaharness"
  url: https://soloterm.com/blog/the-agentic-metaharness
project: steward
---

[Aaron Francis](https://soloterm.com/blog/the-agentic-metaharness) (SoloTerm, May 18) names the missing layer once you run more than one coding agent for real: **a harness turns a model into a coding agent; a metaharness gives all of your harnesses a place to live**. Claude Code, Codex, OpenCode, Amp, Gemini CLI already own prompts, tools, permissions, and terminal behavior. The failure mode is not “pick a better model” — it is nine tabs of half-finished plans, duplicate `npm run dev`, and a lead agent that cannot wait on a reviewer without you pasting scrollback.

Solo’s claim is deliberately *not* another model-API orchestrator that rebuilds the agent loop. It sits above the binaries you already installed and shares the project workspace: a process graph (agents + servers + queues + logs), readable output/status, scratchpads that outlive a chat, todos/blockers/locks, timers/idle wakeups so a lead agent can spawn a second harness for review and resume when that process goes idle — without burning tokens on polling. Cross-harness spawn (Codex → Claude for a second opinion; continue after a rate limit) is the pattern; the terminals stay visible so coordination is not a black box.

## Why it matters for code review

Always-on factories stall when humans are the message bus between harnesses. A metaharness is infrastructure for modest continuous throughput: review agents can run while implementers work, shared state survives session resets, and the FOMO of idle overnight capacity becomes “did anything coordinate without me?” rather than “did one chat keep typing?” Productive complication: bursts still win when a single focused session owns the whole problem; the metaharness wins when the scarce resource is *orchestration and visibility*, not another peak-context heroics window.
