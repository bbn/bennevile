---
title: "Postgres 19 reverts: LLM-assisted review raised the quality bar after the features were already committed"
description: "Oct 9, Peter Eisentraut. About 8 to 10 significant features were reverted from the PostgreSQL 19 branch after beta began. One of his reasons: LLM-assisted review now surfaces a long tail of edge-case defects at once, each with a fixed handling cost, and then you run out of time. The finding rate outran the fixing rate, and the code predates vibe coding."
date: 2026-10-09
kind: field-note
source:
  title: "The reverts will continue until morale improves"
  url: https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves
project: steward
---

PostgreSQL committer [Peter Eisentraut](https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves) writes that about 8 to 10 significant features were reverted from the PostgreSQL 19 branch after the beta period began, some of them late in beta, where one revert per cycle would be normal. He offers several overlapping causes and starts with the plain one: maybe some of the code was just not good enough. Some reverted features also had architectural defects that would have been hard to fix quickly during beta.

## The finding rate outran the fixing rate

The part that matters for review is the long tail. Edge-case bugs that once would have surfaced bit by bit over the five years after a release now arrive together: "[with LLM-assisted code review, these kinds of things can get found much faster, and then you're staring at a list of like forty defect reports](https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves)." Even at [about three lines per fix](https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves), each report carries a fixed overhead, and then you run out of time. Most of the affected features were written before LLM review was this useful, so in his words "the effective quality bar has been raised after the time the feature was written and committed." He is explicit that this is not a vibe-coding story: the code was written before that was possible.

Other causes compound it. Many senior developers spent [April to August](https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves) on security fixes, so the usual extra review during beta was thin and issues surfaced late. And in a system where "everything works with everything," he argues nobody can enumerate the feature-interaction cases by hand, while LLM-assisted fuzzing finds problems in them quickly, so it probably needs to become part of feature development. A way to commit features with experimental status and mature them in the main tree would have helped some of the reverted work.

## Schedule over the tail

Eisentraut says the community preferred to stick to the release schedule rather than delay for more fixes, though with about two more months he thinks the smaller issues could have been addressed. [The Register](https://www.theregister.com/databases/2026/10/16/postgres-19-delayed-after-ai-reviewers-find-more-bugs-than-humans-can-fix/5303471) reports PostgreSQL 19 is now expected around November 19 instead of late September or early October, with SQL property graph queries among the features pulled; Tom Lane had bet dinner that shipping it in v19 would bring post-release bugs unfixable until v20. Eisentraut expects many of the reverted features to come back in PostgreSQL 20.

This is review at volume seen from the receiving end: the review got cheaper and better, and the bottleneck moved to the people who have to triage and fix what it finds. Read with [IronBee's benchmark on review recall versus precision](/posts/ironbee-raw-llm-code-review-benchmark-thinking-buys-recall-costs-precision/), [Anthropic's account of merges outgrowing source control](/posts/anthropic-scion-30000-merges-post-merge-verification/), and [Chris Vella on capping work in progress per reviewer](/posts/vella-ten-agents-one-reviewer-wip-limit-accepted-change/).
