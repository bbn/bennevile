---
title: "Overnight agents that open draft PRs: the harness is the product"
description: "May 20 Pickuma: ingest→plan→execute→verify→package; verify-loop with retry bound; draft PR + agent-generated label; morning review non-negotiable; thin tests = no safety."
date: 2026-05-20
kind: field-note
source:
  title: "How to Build an Autonomous AI Coding Agent That Opens GitHub PRs Overnight"
  url: https://dev.to/pickuma/how-to-build-an-autonomous-ai-coding-agent-that-opens-github-prs-overnight-1o0b
project: steward
---

[Pickuma](https://dev.to/pickuma/how-to-build-an-autonomous-ai-coding-agent-that-opens-github-prs-overnight-1o0b) (May 20; also pickuma.com) strips the overnight agent pitch to a state machine: **ingest → plan → execute → verify → package**. The anti-pattern is collapsing plan/execute/verify into one “here is the repo, output the diff” prompt — fine for three-line fixes, fatal for anything larger. Stage four is the product: feed failing test/typecheck/lint text back into the next edit, bound retries (three is their ceiling), and if still red **stop**, open a **draft** PR, and log the failure instead of burning tokens until morning.

GitHub wiring that kept them safe in real repos: one predictable branch per task (`agent/<issue>-…`) so reruns are idempotent; draft PR assigned to a human; `agent-generated` label as provenance; CI on the bot PR exactly as on a human’s; fine-grained PAT scoped to one repo; execute in a container, never the laptop; branch protection on `main` so the worst case is a bad PR. Trigger is cron or `agent-ready` issue label. Honest scope: mechanical migrations, coverage, codemods, config tidy — “done” objectively checkable. It stalls on ambiguous product judgment and on thin test suites, where confidence is not a gate. Two numbers decide keep-or-kill: cost per run (hard dollar/token ceiling) and PR acceptance rate without substantial rewrite.

## Why it matters for code review

FOMO that nothing moved overnight is cheaper than waking to rubber-stamped green. Continuous harnessed momentum beats bursty Claude mastery only when the night ends at a **reviewable draft** with a real verify loop — not a merge, not a self-declared success. Treat every overnight diff as untrusted until CI is green and a human has read it; the morning review is the merge criteria, and the agent is the night shift that handles only the boring, checkable parts.
