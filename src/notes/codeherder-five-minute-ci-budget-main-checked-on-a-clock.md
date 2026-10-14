---
title: "A five-minute cap on every CI job, main checked hourly, and agents merging 200 changes a day"
description: "Oct 6 CodeHerder: merges landed every two to five minutes while a full main pipeline took ten, so runs were cancelled before they finished. A per-job time cap, checks picked from the import graph, and hourly full suites whose failures become agent tasks took them from about 74 merges a day to over 200."
date: 2026-10-06
kind: field-note
source:
  title: "The five-minute CI budget: how we stopped CI being the bottleneck"
  url: https://codeherder.com/blog/the-five-minute-ci-budget/
project: steward
---

The CodeHerder team had already automated generation and review ("a second agent reads the diff and a rubric gates the merge") when the queue moved to CI. A one-line CI edit started about 50 jobs. One frontend job ran 26 minutes on every merge request, and blocking jobs waited 7 to 8 minutes just to start. On main, a full pipeline took about ten minutes while merges landed every two to five, so "new merges cancelled main runs before they finished. We paid for the compute and never got the answer." For a team of agents that's the ceiling: "an agent that waits half an hour for a verdict holds a slot, burns tokens on retries and blocks whatever depends on it."

## The rule and its enforcement

No merge-request job may run longer than five minutes. A guard test reads the CI config and fails any change that breaks the cap, exceptions need a written reason and an expiry date, and "our exception table is empty." Meeting the budget took ordinary work: shallow clones, a shared build cache, a prebuilt browser image, and test shards sized by measured weight. Each merge request runs only what the change can break, chosen from the import graph, and when the mapping isn't confident it runs everything. It reports every failure at once so an agent can fix them in one pass.

## Main gets checked on a schedule

Everything that misses the budget (the full suite, integration and slow race tests, architecture guards, the complete browser regression) moves to an hourly run on main. Pushes to main no longer trigger their own pipeline, so runs actually finish. Quarantined flaky tests stop blocking for 14 days, after which they're fixed or removed. The step they say most teams skip is closing the loop: each red scheduled job becomes a task with the failure lines, log tail, and a bisect that names the merge that broke it, and an agent picks it up "like any other work."

## What it bought, and the trade

The probe change went from 50 jobs to 6. They merged 249 changes to main on Sep 30 and 205 on Oct 1, beating a previous record of 201, and later 181 and 210 a day across two repos, compared with roughly 74 a day the week before. CodeHerder sells this way of working, and they report daily records rather than sustained averages. The cost is that the full proof now arrives up to an hour late, after other merges have built on top of a break, which is why the bisect-to-task step matters. It's the opposite trade from [a two-person factory that accepted slower merges for fewer hotfixes](/posts/huston-twill-factory-guardrails-cut-hotfixes-slowed-merges/). Compare [Anthropic's selector redesign under 25× CI load](/posts/anthropic-agentic-coding-straining-ci/), the warning that [a faster pipeline can still check the wrong thing](/posts/iyer-ci-bottleneck-verify-system-not-repo/), and [green unit suites that the release boundary still caught](/posts/stack-product-verification-expectations-outside-the-loop/).
