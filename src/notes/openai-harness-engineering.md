---
title: "OpenAI harness engineering: humans steer, agents execute"
description: "Ryan Lopopolo’s report: ~1M lines, ~1,500 PRs, zero manually written code—environment design, legibility, and agent-to-agent review as the job."
kind: field-note
date: 2026-02-11
source:
  title: "Harness engineering: leveraging Codex in an agent-first world"
  url: https://openai.com/index/harness-engineering/
project: steward
---
Constraint experiment: empty repo, no manually written code, small team driving Codex. Outcome on the order of a million lines and ~1,500 merged PRs; estimate ~10× faster than hand-writing. Early slowness was underspecified environment, not model inability.

Engineering work became depth-first capability building: make UI, logs, metrics, and docs legible to agents; bootable per worktree; Chrome DevTools skills; ephemeral observability stacks. Giant monolithic `AGENTS.md` failed—map, not manual. Architecture/taste enforced mechanically; entropy collected by background refactor agents.

PR completion loop: local self-review, additional agent reviews, respond to feedback until reviewers satisfied. Humans may review but aren’t required; scarce resource is human attention.

## Why it matters for code review

Shows agent-to-agent review as a deliberate throughput strategy—and the prerequisite legibility work that makes those reviews meaningful instead of correlated applause.
