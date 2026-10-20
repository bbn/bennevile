---
title: "Will Larson's small-change: Imprint lets CI decide which agent-era PRs get a fast approve-or-ignore review"
description: "Oct 17, Will Larson. Imprint's engineers merge about 4x the PRs they did two years ago, and median review time rose from about 33 to 77 minutes. Its answer is a build-managed small-change check: under 1,000 lines, no serious findings from the AI review bot, an author with 10+ merged PRs in that service, and a narrow blast radius. A review skill can only approve or ignore, never comment. About 10% of changes qualify so far."
date: 2026-10-17
kind: field-note
source:
  title: "Speeding up code review with `small-change`"
  url: https://lethain.com/small-changes/
project: steward
---

[Will Larson](https://lethain.com/small-changes/) writes that the average engineer at Imprint now merges about 4x the pull requests they did two years ago, two teams are at 10x, and one engineer merges 25x the weekly PRs of the average engineer from two years back. He reports incidents down 42% and critical incidents down 78% half over half. The cost showed up in review: the median pull request review went from about 33 minutes to about 77, and he says the slope tracks merge volume closely.

His post starts by asking what review is for. He lists four jobs: knowledge sharing, catching errors, catching malicious changes, and compliance. He argues each now has a better home. Knowledge sharing moves to clusters of pull requests instead of single ones. Errors are better caught by CI and harness verification such as [pstack](https://github.com/cursor/plugins/tree/main/pstack). Abuse is better caught by fixed rules, auditing and log inspection. Compliance still requires independent human review in some repositories.

## How small-change works

When a pull request is marked ready, CI decides whether it is a small-change and reports that as a GitHub check that people cannot edit. A label exists for filtering, but [the check is what counts](https://lethain.com/small-changes/). A change qualifies only if all of these hold:

- It is under 1,000 lines.
- Imprint's AI code review bot raised no p1 or p2 findings.
- The author has 10 or more prior merged PRs in every service or application it touches.
- It touches fewer than N services (1 in the frontend monorepo, 3 in the backend one), and no shared libraries.
- A per-repository `.small_change` file can exclude paths, such as a service that moves money.

Two shared skills run in engineers' harnesses on top of that. `review-small-change` sweeps open small-changes and approves those whose checks all pass and that avoid sensitive topics like payments and security. It has only two moves, approve or ignore, and never comments. `review-pr-cluster` reviews batches of PRs to find recurring themes and suggest new verifications. The social rule is that any error from a small-change is a system failure, to be fixed in the AI review, the verifications, CI or the harness.

## Why it matters for code review

Larson names the failure mode the approve-or-ignore rule is meant to avoid, "meat proxy review," a term he links to [Simon Willison](https://simonwillison.net/2026/Aug/3/dont-be-a-meat-proxy/). A team overwhelmed by reviews has each reviewer run their local harness over the PR. The PR fills with comments the reviewer may not even agree with, the author's harness answers them, and the whole exchange becomes "an illusion that doesn't facilitate learning." His fix is to invest in one central review mechanism and the harness loop that addresses its feedback, then simply stamp approval. Imprint's other lever is fleet, a centrally orchestrated cloud harness he compares to [Stripe's Minions](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents), which decides how many independent reviewers each change needs, sometimes just one human.

He is candid that it is early. About 10% of changes qualify, the scheme took about two days of part-time work to roll out, and "folks have not been uniformly excited." He says it will succeed or fail on whether verification can grow fast enough to widen that 10%. Read with [Anthropic's risk-tiered review on the Claude Code team](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/), [Kleine's always-on fleet with AI review capped at two rounds](/posts/kleine-hyperspeed-always-on-chiefs-468-prs-review-cycles-capped-at-two/), and [Stripe's Minions harness](/posts/stripe-minions-unattended-blueprint-harness/).
