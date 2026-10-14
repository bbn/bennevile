---
title: "ABCA: fire-and-forget background agents that open PRs on AWS"
description: "Mar 31 aws-samples ABCA: submit via Slack/Linear/Jira/CLI/webhook → MicroVM agent clones, tests, opens PR; blueprint mixes deterministic + agentic steps; memory from PR feedback; budgets and blast-radius limits for 24/7 runs."
date: 2026-03-31
kind: field-note
source:
  title: "Autonomous Background Coding Agents on AWS (ABCA)"
  url: https://github.com/aws-samples/sample-autonomous-cloud-coding-agents
project: steward
---

[aws-samples/sample-autonomous-cloud-coding-agents](https://github.com/aws-samples/sample-autonomous-cloud-coding-agents) (ABCA, created Mar 31; still maintained with a V2 direction signaled) is AWS’s reference shape for **self-hosted background coding agents**: submit a task (Slack, Linear, Jira, CLI, webhook), walk away, come back to a ready-to-review PR. Each task runs a **blueprint** — deterministic steps (admission, context hydration, pre-flight, finalization) mixed with agentic steps — inside an isolated MicroVM. Pre-flight is fail-closed (`GITHUB_UNREACHABLE`, `REPO_NOT_FOUND_OR_NO_ACCESS`) so doomed work dies before burning runtime. The agent clones, branches, edits, commits, runs lint/tests; the orchestrator polls without holding compute. Finalization infers PR-or-not, optional validation, extracts learnings into a **memory** store keyed by repo, and updates status.

Design invariants match continuous factories more than chat mastery: ephemeral environments (no in-process state across tasks), asynchronous (no live conversation during the run), repository-scoped, outcome-measurable (merged / revised / rejected), fire-and-forget. Cost and blast radius are first-class — per-task budgets, concurrency limits, blast-radius enforcement. A Claude Code plugin ships guided setup/deploy/onboard/submit/troubleshoot skills so the sample is operable, not just diagrammed. Honest framing: experimental/educational sample, not a drop-in production SaaS; current tree is maintenance-mode while V2 is designed from customer feedback.

## Why it matters for code review

Always-on harnessed throughput needs a cloud queue with gates, not a laptop left open. ABCA’s receipt is the blueprint: admission and pre-flight before tokens, lint/tests in the MicroVM, memory from prior PR feedback into the next context hydration, and a human reviewing the PR rather than babysitting the session. If nothing ran overnight, you skipped 24/7 cycle time that does not queue behind a calendar — bursts still win for greenfield judgment; continuous factories win when fire-and-forget tasks accumulate verified PRs while you sleep.
