---
title: "Silent success: the release gate that passed on checks it never ran"
description: "Sep 23 Jeon: production gate green for ~2 weeks while one subgate ran 0/2 and another 6/8 — violation-count keys treat absent data as pass; add unable-to-determine that fails closed."
date: 2026-09-23
kind: paper
source:
  title: "Silent Success: A Release Gate That Passed on Checks It Never Ran, and Eight More"
  url: https://arxiv.org/abs/2609.30307
project: steward
---

Dong Hyeon Jeon’s Sep 23 paper is a receipt book for **false green under volume**: a blocking quality gate finished in 48 seconds and reported pass while one subgate executed **0 of 2** false-positive checks and consistency ran **6 of 8**. Both decision keys asked whether a violation had been *observed*, over a population already stripped of cases that failed to run — so absent data answered “no,” and a run that checked almost nothing scored perfectly for roughly **two weeks** of green builds.

The repair is typed, not vibey. Admit a third verdict — **pass / violate / unable to determine** — that fails closed; report evaluated vs expected population derived from case definitions (not a hardcoded constant); change the sentinel comparison from “is it false?” to “is it not true?”. The build went red on the same six-of-eight it had been passing. Jeon then catalogues **eight more** promotions of a weaker claim to a stronger one (intent→state, declaration→existence, configured→in-effect, release-performed→slot-freed), including LiteLLM’s unread Redis TTL and a vLLM encoder-cache counter that drifted **7,500** above capacity — seven of nine catchable by a single query, command, or comparison. Caveat owned hard: the author committed eleven recurrences of the same form while writing the paper, with tooling built to prevent it.

## Why it matters for code review

Always-on factories multiply the cost of **two-symbol gates**. Review overnight inventory the way Jeon audits a release key: demand the denominator beside the verdict, fail when the expected checks did not run, and treat “no violation observed” as unknown until coverage is proved. Steady harnessed throughput compounds only when morning merge trains cannot inherit a silent pass from skipped work — FOMO for idle agents is wasted if the night’s greens never examined what they claimed.
