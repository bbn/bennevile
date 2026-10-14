---
title: "Harness engineering: behavioral evals as the safety net"
description: "Google’s Sep 9 harness note: end-to-end benches won’t tell you why the score moved — unit-style behavioral assertions on tool use and intermediate steps let you iterate prompts and models without silent regressions."
date: 2026-09-09
kind: field-note
source:
  title: "The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents"
  url: https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/
project: steward
---

Taylor Mullen and Christian Gunderman (Google) name the trap: you tweak a harness, Terminal-Bench or DeepSWE moves a couple points, and you still don’t know whether the agent got overconfident on ambiguous prompts, skipped verifying the test suite, or hallucinated a CLI flag. End-to-end benches are the report card; they are a poor *iteration partner*.

Their alternative is **behavioral evaluations** — integration-test-shaped assertions on discrete, observable actions inside the harness: did the agent ask a clarifying question on an underspecified prompt? Did it run the local validator after touching a build file? Did it consult live search instead of answering weather from memory? Assert on tool calls and intermediate steps, not final prose.

Timing: dogfood first until the agent can work its own codebase; then use evals to guard forward progress. The suite’s job is not celebrating +2% — it is confidence that a prompt tweak, tool schema change, or model swap did not make the agent holistically worse. Practical loop: pick one recent failure mode → write flexible assertions (strict milestones for simple tasks; fuzzier outcome/LLM-judge checks when many correct paths exist) → batch aggregate pass rates so nondeterminism doesn’t freeze every PR. Macro benches stay for destination checks; micro behavioral evals are the CI for the harness itself — including loops where an LLM rewrites its own system prompt until a failing behavioral test passes without breaking the rest.

## Why it matters for code review

Software factories that trust agent PRs on “green end-to-end” are reading the report card, not the harness. If review capacity is scarce, the upstream guarantee has to be that harness changes don’t silently drop “run the tests / ask when unsure / ground claims in the repo.” Behavioral evals are how you keep that contract under non-stationary models — the same discipline you want before you widen auto-merge.
