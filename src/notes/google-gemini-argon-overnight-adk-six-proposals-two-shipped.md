---
title: "Eleven unattended hours, six proposals, two shipped: the agent explores, the maintainer subtracts"
description: "Google ran Gemini 4 Argon overnight on the 205,000-line ADK Python repo with maintainer rules in .agents/skills and a pinned goal. It opened one review-ready PR with six optimizations; review kept two (about 40% less session-prep overhead in long sessions, 21% faster cold import) and cut four."
date: 2026-10-13
kind: field-note
source:
  title: "Optimizing a 200,000-line Python codebase overnight with Gemini 4 Argon"
  url: https://developers.googleblog.com/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/
project: steward
---

**George Weale, Bo Yang and Andrew Biernat (Google Cloud)** write up an overnight performance run on **google/adk-python**: roughly **205,000** lines, nearly **800** source files, about **17,000** unit tests. The interesting part is not the speedup. It is the difference between two runs with the same goal.

**Round one** got a one-paragraph outcome prompt and no repo instructions. It ran about two hours, wrote a benchmark seven minutes in, and spent 70 minutes measuring and reading before editing. It found real bottlenecks, but it broke maintainer conventions: a hook that subtly changed a public JSON schema, missed mock edge cases, only **216** nearby tests run, no numbers in the PR description.

**Round two** added two things: the team's maintainer guidelines as `.agents/skills` files (a short index pointing to focused references loaded on demand), and a goal pinned across context compactions, with an explicit ask for one unmerged PR "the ADK maintainers would approve," before-and-after numbers included. It started at 9:11 PM and ran **11 hours** unattended. It read 12 guideline files and ran a baseline across four workloads before touching source; three minutes before stopping on its own, it was still auditing its diff, caught a bug in its own multi-agent cache, and reran all **16,892** tests.

The morning PR proposed **six** optimizations across **32** files. Review shipped **two**: filtering in-memory session history before copying (about **40%** less pre-model overhead in long sessions; a 158-turn run dropped from 65.6s to 56.1s) and lazy-loading heavy packages (**21%** faster cold import). Even that second fix needed another pass: the open-source suite was green, yet **25** internal Google test targets failed because they patched the removed module attributes. Review cut the other four: a cache keyed on a weak reference that could serve stale data across sessions, a telemetry check reading a private OpenTelemetry attribute, a readability-costly rewrite that didn't move an independent holdout benchmark the agent never saw, and an index that only helped synthetic replay tests. The final 22-file change landed with the commit note "Argon generated these changes."

## Why it matters for code review

This is the overnight case at its most honest: the harness (written-down conventions, a goal that survives compaction, a holdout benchmark, "don't merge") turned two hours of plausible output into eleven hours of reviewable output. Still, two thirds of what came back was cut by a maintainer, and a green public suite still hid 25 internal failures. Unattended runs compound when review is a subtraction step with its own evidence, not a rubber stamp. Compare [the same model swinging 35 points on harness alone](/posts/8090-same-model-different-harness-35-point-swing/), [an overnight dual-model harness](/posts/night-shift-dual-llm-overnight-harness/), and [the Claude Code team's risk-tiered review](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
