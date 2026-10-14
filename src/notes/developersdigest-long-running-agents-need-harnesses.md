---
title: "Long-running agents need harnesses, not hope — eight parts before you sleep"
description: "May 2 Developers Digest: task contract, scoped workspace, tool policy, logs, checkpoints, verification gates, cost/time budgets, final receipt — without them an overnight run is a chat session with more failure modes."
date: 2026-05-02
kind: field-note
source:
  title: "Long-Running Agents Need Harnesses, Not Hope"
  url: https://www.developersdigest.tech/blog/long-running-agents-need-harnesses
project: steward
---

Developers Digest’s May 2 field guide (updated June 24) kills the dream version of overnight agents in the first paragraph: close the laptop, wake to a clean PR — then lists what actually happens (stuck env vars, hung tests, 40-minute retry loops, diffs nobody wants to review). The claim is operational, not model-marketing: long-running agents become useful only when the *environment around* the model queues tasks, checkpoints state, verifies behavior, caps cost, and recovers from failure.

They define a harness as the runtime that answers where the task comes from, which worktree/sandbox it gets, which tools need approval, where logs go, what “done” means, and how a human reviews the result. Minimum viable harness for coding work — eight parts: (1) task contract with acceptance criteria and verification commands; (2) scoped workspace/branch/worktree; (3) tool policy with deny/approve gates; (4) persistent logs of every command and decision; (5) checkpoints after plan/implement/test/review milestones; (6) verification gates that run real checks (tests, lint, typecheck, browser smoke, health probes); (7) cost and time budgets that stop stalls; (8) a final receipt naming what changed, what passed, what remains risky, and where to inspect the diff.

The reliability math is the FOMO antidote: ten steps at 90% each is ~35% end-to-end before retries and checkpoints; durable handoffs change the shape so a failure at step seven resumes from six instead of recreating the whole run from model memory. Verification is non-optional because agents declare victory; cost caps are reliability features, not FinOps theater; permissions change by phase (read-only plan → branch writes → test tools → deploy only with approval). Humans move to task interpretation, security-sensitive diffs, migrations, and failed verification — not babysitting installs and log collection.

## Why it matters for code review

Steady harnessed throughput compounds past bursty Claude mastery only when morning review starts from receipts, not narratives. If the overnight queue cannot show contract, logs, checkpoints, verification, budget, permissions, and a final receipt, you bought the fear of idle agents without the factory that makes continuous work reviewable. Pair with Mouse’s verify-outside-worker rule and OpenSearch’s harness-first loops: the merge button stays human; the harness is what makes the queue worth opening.
