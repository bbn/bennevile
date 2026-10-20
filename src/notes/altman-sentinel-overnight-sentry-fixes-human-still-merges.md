---
title: "A bot that watches Sentry and fixes errors overnight: 29 fixes merged in a week, and a person still merges each one"
description: "Oct 18, Patrick Altman. Sentinel turns Sentry alerts into PRs as they arrive and picks two or three backlog issues each evening, so there are fresh fixes to review each morning. In one week 29 errors were fixed, reviewed, merged and released, with a median of 8.7 hours from alert to merge. Other agents review every PR first, then a human merges."
date: 2026-10-18
kind: field-note
source:
  title: "How a Bot Fixes Our Production Errors Overnight"
  url: https://wedgworth.dev/how-a-bot-fixes-our-production-errors-overnight/
project: steward
---

[Patrick Altman](https://wedgworth.dev/how-a-bot-fixes-our-production-errors-overnight/) describes the backlog every team with error monitoring knows: each Sentry alert forces a triage call, and the minor ones pile up as "[small, ugly cruft that's never worth the opportunity cost of dealing with it now](https://wedgworth.dev/how-a-bot-fixes-our-production-errors-overnight/)." He hands that pile to an always-on agent.

## Two queues, one morning review

Sentinel watches Sentry and opens PRs for new issues as they come in. Each evening it also [picks 2–3 issues from Sentry's unresolved backlog](https://wedgworth.dev/how-a-bot-fixes-our-production-errors-overnight/), so he has fresh PRs to review each morning. It runs against the whole codebase with the project's Docker Compose stack up in a cloud environment, captures before and after screenshots for any fix that touches the interface, and closes the matching Sentry issues once a release ships the fix. When it has a question about how a fix should go, the question reaches him in Slack.

The numbers are from a single week: a rare but critical alert fixed and on production in under four hours, and [29 errors auto-fixed, reviewed, merged, and released, with a median of 8.7 hours from alert to merge](https://wedgworth.dev/how-a-bot-fixes-our-production-errors-overnight/). The 8.7 hours is mostly the overnight wait for a person, not the agent's working time.

## Review stays, merging stays human

Sentinel can't merge. [Every PR gets a review pass from other agents first, then a human review](https://wedgworth.dev/how-a-bot-fixes-our-production-errors-overnight/). Altman says auto-merge may come later. The screenshots are what make the human pass quick; he names them as the thing that makes reviews much faster.

His larger claim is about thresholds. Once an error costs a few minutes of review in the morning instead of a slot in the next sprint, it becomes worth fixing, and [the backlog shrinks every night](https://wedgworth.dev/how-a-bot-fixes-our-production-errors-overnight/). The output here is modest and steady: a few small, verified PRs a night, not a burst of large ones. Compare his earlier account of [going from 8 to 24 merged PRs a week with a second model as reviewer](/posts/altman-24-prs-a-week-cross-model-review-time-value-paradox/).
