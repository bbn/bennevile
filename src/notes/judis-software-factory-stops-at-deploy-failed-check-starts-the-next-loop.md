---
title: "Stefan Judis: your software factory stops at deploy, so let a failed production check start the next agent run"
description: "Oct 21, Checkly's Stefan Judis on the half of the factory loop most teams skip. Tests and review lower the cost of checking work; little lowers the cost of catching a failure after it ships. His setup: a failed synthetic check fires a webhook, an agent follows a runbook skill, and opens a draft PR that proves the fix against the preview."
date: 2026-10-21
kind: field-note
source:
  title: "Your software factory stops at deploy"
  url: https://www.checklyhq.com/blog/your-software-factory-stops-at-deploy/
project: steward
---

[Stefan Judis](https://www.checklyhq.com/blog/your-software-factory-stops-at-deploy/), who works in developer relations at Checkly, argues that most software factories only build half the loop. Agents write, review, test, and ship, and then the loop ends. He borrows Addy Osmani's framing that trust in unread code comes down to two costs: how expensive it is to check the work, and how cheaply you can catch and undo a failure after it ships. Tests, review, and CI all go after the first cost. The second gets little attention, so for most teams the production signal is still a customer ticket.

**Logs are a weak signal for an agent.** Many failures that passed review and ran green in CI only appear against production data, configuration, and third-party services, and some never throw at all, like a pay button that doesn't render. An agent handed an error-rate spike has to reconstruct what the user did, burning tokens on a low-confidence guess.

**His loop runs without anyone being woken.** A critical synthetic check fails and its webhook starts an agent run in the repo that owns the flow. The agent loads a runbook skill, pulls the failing step, screenshot, and trace, and classifies the failure: an app regression gets a draft PR, a check that's outdated because the app changed on purpose gets a check update, and a flake or upstream outage gets no PR. Before handing over, it reruns the failing check against the PR's preview deployment so the reviewer sees the broken flow pass. Judis built it with Claude Code routines and says any agent you can start from a webhook works.

**The runbook is the one your on-call team already has.** Read back, his skill looked like an incident runbook: triage, gather evidence, check what changed, then fix, roll back, or escalate. "Your engineers follow it when they get paged, and the agent follows it when they don't." How far the agent goes is a trust setting: some teams stop at an alert, some at a draft PR, a few let it merge or roll back and look in the morning. Judis stops at the draft PR, so "I review a diff, not an incident."

## Why it matters for code review

An always-running factory moves review's job from reading every change to deciding which evidence is enough. Judis's version makes the reviewer's input a reproduced production failure plus proof that it passes on preview. That is the second half of the trust equation that pre-merge review can't cover alone. The source is a vendor post about Checkly's own product, but the loop works with any check that can call a webhook.
