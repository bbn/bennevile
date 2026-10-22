---
title: "A software factory is mostly waiting, so Cortex built engrams on a durable workflow engine"
description: "Oct 22 Unni on how Cortex's open-source engrams runs: every automation, including its two-agent PR reviewer, is one checkpointed workflow that can park for days on a reviewer, survive deploys mid-run, and perform each side effect once, down to a git clone inside a snapshotted VM."
date: 2026-10-22
kind: field-note
source:
  title: "A software factory is just a durable workflow"
  url: https://builders.cortex.io/blog/software-factory-automations/
project: steward
---

Nikhil Unni's [second post on Cortex's software factory](https://builders.cortex.io/blog/software-factory-automations/) starts from where the time goes in the smallest possible factory, a bug ticket shipped to production: a change goes up, then it **waits hours for a review**, takes change requests, waits again, and then waits on the rollout. A run that lives for days breaks the usual ways of running code. A request handler can't hold it open, a retried queue job starts over and re-posts the comment or re-opens the PR, cron plus a status column becomes a hand-built state machine, every deploy lands in the middle of hundreds of runs, and GitHub and Slack resend webhooks until they get an answer.

Cortex's answer in [engrams](/posts/cortex-engrams-open-source-cloud-software-factory/) is to treat each automation as one durable workflow (they use DBOS on the Postgres every install already has). Each step's result is saved as it completes, so after a crash or deploy the run resumes from its last finished step instead of starting over. A run waiting on a reviewer or a Slack reply is just a row in a table: **no socket, no lock, and no VM** held open, since idle agent VMs are snapshotted to storage.

The built-in PR reviewer is the template for everything else. A webhook starts a fresh VM where one agent reads the diff and writes findings; a **second, separate agent verifies each finding and drops what it can't confirm**; the result posts as one GitHub review, and a new push replaces the review in flight. Users can now compose their own automations from the same blocks, with cron, webhook, branch and loop steps added.

The hardest bug was a side effect inside the VM. A `git clone` was mid-run when a routine snapshot reset the VM's connections; the command finished but its result had nowhere to go. The fix was to give every command a fixed id, record its output inside the VM, and make a repeated call attach to the original command instead of starting a second one. The same pattern covers prompts to the agent, webhook-started runs and cron firings, so a retried run gets the original result and **every side effect happens effectively once**. A snapshot test pins the exact order of step names so an accidental change to a running workflow fails CI.

## Why it matters for code review

An always-on factory spends most of its life waiting on review, and the post treats that waiting as the main design problem rather than an inconvenience. The reliability work here is what lets a review loop run unattended for days without posting duplicate reviews or reopening PRs after a deploy, the kind of bookkeeping that went wrong when an [overnight run's agent reported a PR that didn't exist](/posts/developersdigest-12-tools-overnight-orchestration/). It is a vendor's engineering post, and it reports no throughput or quality numbers, so treat it as a design pattern rather than evidence that the factory's output is good.
