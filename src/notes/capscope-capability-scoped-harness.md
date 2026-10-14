---
title: "CapScope: authority lives in the harness, not the prompt"
description: "CapScope freezes a task-wide authority ceiling and per-agent typed capabilities outside the model — injected effects drop from ~33–47/75 to 3/75 without tanking repair success."
kind: paper
date: 2026-09-08
source:
  title: "Authority Is Not a String: A Capability-Scoped Harness for Prompt-Injection-Resistant Coding Agents"
  url: https://arxiv.org/abs/2609.08371
project: steward
---
Coding agents usually get ambient authority: if you can name a path or a tool, you can act on it. Indirect prompt injection in a README, skill file, or tool output just asks the agent to use that power.

Bouras, Dai, and Mechtaev’s CapScope move is boring and correct. Before the agent reads untrusted text, the harness derives a task-wide authority ceiling from trusted input, then hands each sub-agent its own typed capabilities stored *outside* the model context. Every tool call is checked against the capabilities of the agent that issued it. Permissions on one principal do not leak to another. An injection can make the model *want* something; it cannot mint permission the harness did not already grant.

They implement it on the Pi coding agent in a delegated repair workflow (orchestrator + sub-agents). Holding model and tasks fixed across 300 runs: injected effects fire in 33–47/75 under ambient-authority and global-policy baselines, versus 3/75 under CapScope, with repair completion basically unchanged (68/75 vs 68–72/75).

## Why it matters for code review

Software factories keep stacking specialist agents — implementer, tester, reviewer — and then hoping the model “spots” malicious instructions in the artifacts those agents read. CapScope is the other shape: don’t ask the model to be the gate. Make “what this agent may touch” a harness fact, then treat drift of that fact as a reviewable systems failure, not a prompt-engineering miss.
