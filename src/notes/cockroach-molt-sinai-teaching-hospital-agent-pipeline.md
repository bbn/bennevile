---
title: "CockroachDB's coding hospital: five months, a million lines, seven reverts"
description: "Oct 9 write-up from Cockroach Labs: a GitHub Actions agent pipeline modeled on a teaching hospital, where plan review, adversarial code review, and a discharge audit sit between always-on agents and main."
date: 2026-10-09
kind: field-note
source:
  title: "Five months treating bugs like patients and coding agents like a medical team"
  url: https://www.cockroachlabs.com/blog/experiment-running-hospital-code/
project: steward
---

**Adam Storm and Rafi Shamim** at Cockroach Labs ran their migration tooling through an agent pipeline they call MOLT Sinai, built on GitHub Actions and modeled on a teaching hospital. Issues are patients, merging is discharge, and the humans are Chiefs of Medicine. Between April and September it landed well over a million lines across 1,238 PRs with seven reverts, for about $135,000 in tokens, roughly $84 per issue. Db2 support, which took two days and $4,172, compares with nine months and about $160K of engineering time for Oracle support in 2024.

They say plainly that they optimized for quality, not throughput. The question was not "how many PRs per hour?" but how many of those PRs they would have been embarrassed to merge themselves. The gates do the work: no code before a reviewed plan; a Review Attending that is a different agent instance whose job is to find fault; tests that must fail with the change disabled; a 1,000-line ceiling that forces decomposition; and a Discharge Nurse that does not re-review code but audits that the review happened. Plan review rejects fewer than 10% of plans, and the authors call it the highest-value review in the system.

## Why it matters for code review

This is the strongest case yet for steady, harnessed momentum over bursts. The agents work overnight, humans review in the morning, and a day of meetings can still end with about ten high-quality merged PRs. It also shows the costs. Agents filed nearly half the issues, so research proposals had to be capped. One one-line fix took eleven rework rounds, which led to a circuit-breaker on non-converging review loops. The skill files grew 23% redundant, like legacy code. And the authors admit that juniors don't learn much from a pipeline that does the work for them. Continuous verification compounds, but someone still has to own the gates, the backlog, and how engineers develop.
