---
title: "Verify-first: 46% of agent fix PRs never merge"
description: "Jul 22: AIDev shows 46.41% agent fix-PR rejection; instructions alone don’t lift merge rate — put rules/tests/human gates inside the harness before more tools."
date: 2026-07-22
kind: field-note
source:
  title: "Coding with Agents: The Verify-First Harness"
  url: https://www.theaioperator.net/p/coding-with-agents-the-verify-first
project: steward
---

Souriya Khaosanga’s Jul 22 AI Operator playbook is aimed at engineers shipping with agentic IDEs and SDK harnesses — not at leaderboard comparisons. Anthropic’s production loop is simple on paper: gather context → take action → verify work → repeat. Most “coding with agents” guides stop after tool access. Production fails when verify is a post-demo checklist: lint only in CI, human review after merge, and no replay of which `policy_version` authorized a bash call.

The cost shows up as rejection tax. In the AIDev dataset, **46.41%** of fix PRs from Copilot, Devin, Cursor, and Claude were rejected — wasted review, CI, and validation on patches that never merge. Instruction files are not a substitute gate: across **15,549** agentic PRs, merge rate rose ≥20% in some projects and *fell* in roughly as many after instructions were added (arXiv:2606.13468 / 2606.13449). Verify has to be executable and in-loop, not a markdown hope.

Their verify hierarchy matches the tortoise stack: (1) rules — lint, schema, policy — as the default; (2) visual / screenshot diffs when the surface is UI; (3) LLM-as-judge only as last resort where rules cannot encode the criterion and offline eval justifies cost. Pre-commit hooks, type-checkers, and contract tests belong *inside* the agent loop — the harness must not mark a task complete until they pass. Agent-authored test suites are candidates until a human or CI corpus accepts them; green tests still aren’t policy compliance (credentials hardcoded, injection paths that “go green”). Cap unstructured repeat loops; checkpoint; escalate when the same failure repeats.

Minimal checklist before expanding tool access: name every run with a stable `workflow_id`; version prompt + tool allowlist + rules under one `policy_version` (rollback = one revert); gather on a budget; `validate_pre` before writes with path gates on prod; verify in-loop including e2e smoke for user-facing work; one scoped feature left green for the next session; Decision Ledger fields for incident replay. 30/60/90: baseline merge/reject and correction rates → ship validate_pre/post on top workflows and freeze new MCP sprawl → promote autonomy only where rollback was drilled.

## Why it matters for code review

Continuous factories without in-loop verify just mint rejection tax at machine pace. Instructions-as-hope is hare cosplay; executable gates are what let modest overnight momentum compound past peak-session heroics without burning the review queue on patches that were never mergeable.
