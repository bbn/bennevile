---
title: "Csorba: for background agents the queue entry is the spec, and work is capped per reviewer"
description: "Oct 17 from Balázs Csorba, a practical guide to cloud coding agents that open PRs while you are away (Codex cloud, Copilot cloud agent, Claude Code cloud, Jules). The queue entry is the specification, every run is time-boxed and resumable, CI is the first reviewer, and work in progress is capped per human reviewer rather than per agent. The cost that counts is cost per merged PR, including review minutes."
date: 2026-10-17
kind: field-note
source:
  title: "Background coding agents that open PRs: a practical async workflow"
  url: https://balazscsorba.com/blog/background-agents-async-pr-workflow
project: steward
---

Balázs Csorba's guide to [background coding agents that open pull requests](https://balazscsorba.com/blog/background-agents-async-pr-workflow) starts from a simple observation: a synchronous agent's throughput is your attention, but an asynchronous one runs unattended and drops its work into the same review pipeline as a colleague's branch. That makes it [a change in the unit of work, not a convenience feature](https://balazscsorba.com/blog/background-agents-async-pr-workflow), and it exposes every weak point in a repository at machine speed: vague issues, slow CI, missing branch protection, an unreviewed backlog.

## The queue is the specification

An async agent can't ask what you meant, so Csorba treats [the queue entry as the spec](https://balazscsorba.com/blog/background-agents-async-pr-workflow): one testable goal, acceptance criteria, the command that proves it, allowed paths, a time limit, and a CI retry budget. The task id doubles as a dedupe key built from repository, issue, and base commit. That matters because duplicates are a large share of wasted agent work; he cites a coded sample of 600 rejected agent PRs in which [23% were closed because the work already existed](https://balazscsorba.com/blog/background-agents-async-pr-workflow). (We covered that study, [Ehsani et al. on failed agentic PRs](/posts/ehsani-agentic-pr-failures-abandonment-duplicates-ci/).)

His line on throughput is the one to keep: [a queue without a work-in-progress limit is a pull request generator](https://balazscsorba.com/blog/background-agents-async-pr-workflow), so he caps tasks per reviewer, not per agent.

## Built for interruption

Async does not mean unbounded. The hosted products all cut runs short in different ways: Copilot's cloud agent has a [59-minute session limit](https://balazscsorba.com/blog/background-agents-async-pr-workflow), and Claude Code reclaims idle cloud sessions. Csorba's answer is to commit checkpoints to the branch, write the plan into the repo, restart from the last green commit, and give the queue a lease longer than the longest run, a heartbeat, an acknowledgement only once the PR exists, and a dead-letter path. [A cron job without a lease](https://balazscsorba.com/blog/background-agents-async-pr-workflow) can't do that.

He is also blunt that a sandbox protects the host, not the repository. An agent that can edit `.github/workflows` can change what later runs with secrets, so [workflow approval, branch protection, and `CODEOWNERS` on CI and test files](https://balazscsorba.com/blog/background-agents-async-pr-workflow) are separate controls you need alongside isolation.

## Review is still the bottleneck

CI is the first reviewer, and a red pipeline compounds: in the same 33,596-PR study, [each extra failed check went with roughly 15% lower odds of merge](https://balazscsorba.com/blog/background-agents-async-pr-workflow). But the largest rejection category was reviewer abandonment at 38%, against 2% classified as agent-level problems. Csorba's reading, consistent with [Peralta et al.](/posts/peralta-agentic-pr-merge-reject-interaction-aware/), is that [merge outcomes measure the workflow as much as the model](https://balazscsorba.com/blog/background-agents-async-pr-workflow). His review rules: open as a draft with the task and test command attached, require green checks before ready, review the test diff before the production diff, and keep one accountable reviewer per task who is never the only approver if they also asked for the change.

The cost metric follows from that. Tokens, CI minutes, and sandbox time show up on invoices, but [human review is the scarcest and least instrumented meter](https://balazscsorba.com/blog/background-agents-async-pr-workflow), so he tracks cost per merged PR with review minutes included, and caps concurrency before tuning prompts.

For anyone running agents around the clock, this is the practical version of the argument: steady overnight work only compounds if the morning review can absorb it. His closing line puts it well: with flaky tests and no reviewer capacity, an async agent [manufactures a backlog with better commit messages](https://balazscsorba.com/blog/background-agents-async-pr-workflow). Compare the [Claude Code team's risk-tiered review](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/), and [Teemu Piirainen on the pressure to fill overnight capacity](/posts/piirainen-fomat-fomut-overnight-capacity-planning-bottleneck/).
