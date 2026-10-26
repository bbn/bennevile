---
title: "wgmesh: an autonomous merge bot counted any Copilot review as approval, so it merged exactly the PRs Copilot had the most to say about"
description: "May 9, the wgmesh project found its review-and-merge bot passed any review submission, including Copilot's COMMENTED findings. Three PRs merged with 4 to 13 open findings; the fix requires an explicit APPROVED from each reviewer's latest review, re-checked just before merge."
date: 2026-05-09
kind: field-note
source:
  title: "bot-pr-review-merge.yml treats Copilot 'COMMENTED' as approval — ships unverified code"
  url: https://github.com/atvirokodosprendimai/wgmesh/issues/595
project: steward
---

The wgmesh repository runs an autonomous loop where coding agents open PRs, Copilot reviews them, and a bot merges. In [issue #595](https://github.com/atvirokodosprendimai/wgmesh/issues/595), maintainer nycterent reported that the bot was merging PRs that still carried Copilot's inline findings.

**The gate counted reviews, not verdicts.** The bot's review check asked how many reviews existed. Any submission passed. Copilot posts its inline findings as a `COMMENTED` review and only uses `APPROVED` when it has nothing left to flag, so the bot, in the issue's words, shipped PRs "precisely when Copilot has the most to say." The other guardrails checked author, paths, size, security, and CI, but never review state.

**Three merges in about 48 hours.** One PR merged with 13 open findings and was reverted: its new integration tests were written but never wired into the test runner, so the tier they belonged to still tested nothing. Another merged with 5 findings that stayed on main, including validation that skipped required fields and a test that would break as soon as a second version shipped. A repair PR for those merged with 4 findings of its own.

**The fix.** [The merged change](https://github.com/atvirokodosprendimai/wgmesh/commit/b2422f4b26af59d128257145be481287c35149c7) reads each reviewer's latest review and passes only with at least one `APPROVED` and no `CHANGES_REQUESTED`. It escalates immediately when blocked, re-checks the verdict right before merging in case state changed, and posts a pre-merge comment naming each reviewer's state so the audit trail lives on the PR. Nine test scenarios cover the combinations, including a regression case for the three bad merges. The commit adds that the fix itself must be merged by a human, because until it lands the bot is still running the old rule.

## Why it matters for code review

An AI reviewer only protects an unattended line if the merge gate reads its verdict correctly. Here the reviewer did its job and the gate threw the result away, and the failure looked like fast, green throughput. When a bot does the merging, the exact review state it requires is part of the review policy and needs its own tests.
