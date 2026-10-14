---
title: "Agents wrote 30% more code across 700 firms. Finished features didn't move."
description: "Harvard study of Jellyfish data from 700+ software firms: coding agents raise lines, commits, and PRs, but issue and epic resolution stays flat while time from PR to merge grows 49%."
date: 2026-10-09
kind: paper
source:
  title: "AI coding agents generate more code, but not more software (Ars Technica)"
  url: https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/
project: steward
---

**Ars Technica** reports on a study by Harvard researchers Fiona Chen and James Stratton, built on Jellyfish engineering analytics: about 300 million work events from more than 700,000 employees at over 700 software firms, 2021 through March 2026. They compare firms before and after each one adopted coding assistants or agents.

Adopting agents brought about 30% more lines of code, 20% more commits, and 23% more pull requests. Resolution of Jira issues and epics, the closest proxy for shipped features, showed no statistically significant change, and the issues didn't get bigger or harder to explain it away. The gap sits in review: average time from PR opened to merged grew 49%, the share of PRs with changes requested nearly doubled, and comments per PR rose 35%. Firms put 14% more of their people on reviewing. AI review was nearly everywhere (80% of firms by March 2026) yet wrote only 23.3% of review comments.

## Why it matters for code review

This is the strongest large-sample complication yet for the idea that always-on agent throughput compounds by itself. More generation without more verification capacity just lengthens the queue, so the momentum that counts is merged, verified change, not PRs opened. The data ends in March 2026, before most teams built nightly harnesses with their own verification gates, so it measures agents bolted onto human review rather than factories that verify their own work. That's the open question the next study should answer.
