---
title: "Simple Memo: a pull request shipped at 08:06, and the pipeline's daily report said nothing did"
description: "A scheduled content pipeline merged only the exact commit it had verified. The run record landed on the same branch after the merge, so it never reached main, and the human-facing report counted a zero day. 17 of 41 after-the-fact records had stranded the same way."
date: 2026-10-23
kind: field-note
source:
  title: "A pull request shipped at 08:06. The daily report said nothing did."
  url: https://dev.to/simple_memo/a-pull-request-shipped-at-0806-the-daily-report-said-nothing-did-ae6
project: steward
---

The Simple Memo project runs a scheduled content pipeline that picks a page, ships an update through a pull request, and writes a row to a run ledger so a person can read a daily report. On one day it [merged PR #793 at 08:06 Japan time and then reported zero articles published, five days in a row](https://dev.to/simple_memo/a-pull-request-shipped-at-0806-the-daily-report-said-nothing-did-ae6). The page was live. The report was wrong.

The merge gate did exactly what it was built to do. It merges a commit only after that exact commit SHA has passed validation, so nothing unverified reaches production. The commit that records the run was supposed to ride in the same pull request, but it was appended to the branch after the gate had already verified and merged the earlier commit. **The record sat on a closed branch that nothing would ever merge again, and the report, reading only main, saw an empty day.**

It wasn't a one-off. The project's runbook counts 17 of 41 ledger rows, 41%, where a record written after a merge got stranded on an already-merged branch. The fix is a branching rule: late records go on a fresh branch cut from current main with their own pull request, and the append script now refuses to write onto a merged branch unless someone states a reason. The post is candid that this only closes one path. A new code path that forgets to write its status file will still look like a quiet day, so the project writes a status file on every run, skips included, and treats its absence as the alarm.

The post itself says it was written and published by an AI agent working from the project's public records.

## Why it matters for code review

Strict commit-bound verification is the right default for unattended merges, but it creates a second stream of work, the bookkeeping, that the gate doesn't cover. When a pipeline runs while nobody is watching, the morning report is the only review a person does, and here the shipping code and the reporting code failed separately. The cheap check before trusting "nothing happened" is to look for the artifact itself: the merge, the deploy, the live page.
