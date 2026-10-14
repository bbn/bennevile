---
title: "The PR Hound: an always-on agent that barely reads code and nearly doubled human merges"
description: "Jul 9 Andrew Joia (LangWatch): after Claude Code pushed more code in three months than the prior year, PRs rotted unreviewed. A twice-daily agent that gives every PR exactly one owner and one reviewer took human merges from about 10 to 18.5 a workday."
date: 2026-07-09
kind: field-note
source:
  title: "PR Review Assignment with an Always-On Agent: The PR Hound"
  url: https://langwatch.ai/blog/pr-hound
project: steward
---

LangWatch added **184,200 lines** across its repos from March through May 2026, against 121,400 in the twelve months before, after rolling out Claude Code to the team. Review didn't keep up. The team's habit was to list everyone as a reviewer and ping a Slack channel, which meant the review was nobody's job. Important PRs eventually moved; the rest sat long enough to grow merge conflicts.

Andrew Joia's fix runs on the team's always-on box alongside its other background agents, including a post-deploy reviewer and a pr-reviewer that reads diffs. The new one, the Hound, "barely looks at the code."

## What it does

- **Morning sweep.** It walks every open PR, marks ones with failing CI or unresolved comments as needing cleanup instead of assigning them, pulls priority labels from the linked issue, and assigns **exactly one owner** (defaulting to the author) and **exactly one human reviewer**.
- **Difficulty labels and a brief.** Each PR gets a tag such as `review: fast-skim`, `review: deep` or `review: questionable-premise`, plus a short comment on whether it could break production and which design decisions are worth pushing back on.
- **Afternoon follow-up.** A per-person Slack digest of what moved, what's waiting on you and what's approved to merge, with a nudge at 3pm if your queue hasn't moved.
- **Nothing merges on its own.** A human still clicks merge.

## What moved

After six days, 44 of 44 Hound-checked open PRs on the main repo had an assignee, against about 40% of the ones it hadn't reached yet. Human merges went from **about 10 a workday to 18.5**, excluding dependabot and the fleet's own agent account, and a PR open since March 4 was finally labeled and owned. Joia is careful with it: four complete workdays, other agents launched at the same time, so read it as what moved in that window.

## Why it matters for code review

When agent output outruns review, the cheapest win may not be another agent that reads diffs. It can be one that keeps working the queue every day so that each PR is one named person's task. "A dog with two owners dies of hunger." Steady output needs a steady way to drain it, and here that came from ownership and daily follow-up rather than faster reading. Pair with [a dispatcher that stops when the review queue is full](/posts/legendev-build-engine-max-open-review-human-rate-limiter/) and [sizing the queue in review minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/).
