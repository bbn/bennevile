---
title: "Aharness: process drift dies when the workflow is a state machine"
description: "Jun 23 Alfredvc Show HN: Codex workflows as TypeScript FSMs — typed evidence, approval gates, repair paths, inspectable run logs; Codeflow slices roadmaps into verified commits."
date: 2026-06-23
kind: field-note
source:
  title: "Show HN: Aharness – Enforce coding-agent workflows as state machines on Codex"
  url: https://news.ycombinator.com/item?id=48643056
project: steward
---

[Alfredvc/aharness](https://github.com/Alfredvc/aharness) ([Show HN](https://news.ycombinator.com/item?id=48643056), Jun 23) argues the failure mode for long agent runs has shifted from "can't code" to **process drift**: skipping approval, forgetting recovery, claiming evidence that was never produced, continuing from stale context. Prompts and skills can *describe* a process; they cannot *enforce* it. Aharness turns the process into a runtime around Codex: TypeScript **finite state machines** define what the agent may do next, typed submissions prove what happened, and transitions only fire through validated exits. Approval is a real gate, not a hope in `AGENTS.md`. Repair paths, retry limits, and failure outcomes are explicit. Runs write state history, events, artifacts, and a loopback browser UI for owner input.

It plugs into the Codex setup you already have — `AGENTS.md`, skills, MCP, permissions — instead of a parallel agent ecosystem. Packaged **Codeflow** (`@aharness/codeflow`) turns a large implementation roadmap into reviewed, verified, committed slices via `recipe-driven-development`, with process skills for grilling specs and writing roadmaps first. Codex still does language and tools; aharness owns the workflow boundary. FAQ is blunt: for tiny one-shot edits, stay on vanilla Codex; reach for aharness when ordered phases and durable evidence matter.

## Why it matters for code review

Steady harnessed throughput needs a chassis the model cannot talk past — continuous factories fail when "follow the process" is only prose. Aharness relocates review into enforced states and typed evidence so overnight momentum does not skip the gates peak-session heroics sometimes remember. Burst mastery still wins on undefined intent; always-on runs need FSMs, not longer prompts.
