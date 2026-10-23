---
title: "Jared Smith: a revert rate measures noticing, not correctness, so a small team needs checks an agent can't talk into a pass before an AI reviewer"
description: "Responding to the Claude Code team's review post, Smith argues revert-rate guardrails depend on huge volume, internal users and fast rollback, and that small teams should first add contract tests, post-deploy outcome checks and branch protection. His own merge gate once merged a failing PR because of a shell pipe."
date: 2026-10-22
kind: field-note
source:
  title: "Before You Add an AI Reviewer, Add These Checks"
  url: https://sublimecoding.com/blog/deterministic-checks-before-ai-reviewer
project: steward
---

**Jared Smith**, founding engineer at EnergyConnect, read the [Claude Code team's code review post](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/) and [pushes back on one part of it](https://sublimecoding.com/blog/deterministic-checks-before-ai-reviewer): the guardrail. Anthropic's goal is that most PRs merge with at most one human in the loop, with **revert and incident rates** as the check. Smith thinks the model is right for them, and that a team of **five to twenty engineers** copying the reviewer and the revert-rate guardrail will be measuring the wrong thing.

His reason: **a revert only happens when someone sees the bug.** A crash or a 500 gets reverted. A report that adds up to the wrong total, a migration writing bad data into a column nobody queries, or a permissions check that lets the wrong role through does not, so the revert rate can fall while those go up. Anthropic has volume, internal users who run each build first, flags and staged releases that, in its words, "undo most mistakes in minutes." A small team usually lacks the audience and the merge count. He adds that an AI reviewer can be persuaded by a PR description that says the edge case is handled; a schema test doesn't read the description.

So before the reviewer he builds three deterministic layers, in order: **contract and schema tests** on anything that crosses a boundary; **post-deploy outcome checks** that assert a known result against production data (a known order produces a known invoice total), which he calls a small team's substitute for Anthropic's internal users; and **branch protection with required CI** that nobody, human or agent, can push around, with a person required on CI workflow, auth and billing changes.

His own pipeline supplies the warning. On September 30 a merge ran as `gh pr checks N --watch | tail -1 && gh pr merge N`. CI had failed; **the PR merged anyway**, because `&&` tested the exit code of `tail`. A homepage change with a formatting diff went to main, which deploys his site. "The check ran, failed and said so, and the pipe threw the answer away." His rule: for any gate you build for agents, break something on purpose and watch the merge get refused.

Only then add the reviewer, taking Anthropic's habits: cap the rounds (one of their PRs went through more than fifty review-and-fix rounds overnight; after three, their reviewer asks the author to rethink), re-review only the new diff, and turn incidents into evals. That last one depends on detection, so the outcome checks are also what fill the eval set.

## Why it matters for code review

As agents run longer without a person watching, the metrics that say the loop is healthy have to see the failures that nobody notices. Smith's point is that reverts and incidents only count what a large audience trips over, and that a gate is only a gate if it has been tested by making it fail.
