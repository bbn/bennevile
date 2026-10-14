---
title: "Németh: 500 rounds of an autonomous coding loop, 1,263 merged PRs, and checking now costs more than writing"
description: "Sep 28 from Máté Németh: a plan, implement, adversarial-review, merge-gate loop has merged 1,263 of 1,388 PRs on his app since June. Checking takes 42% of the tokens against 36% for writing, and the loop's own machinery grew from 35% to 62% of merges."
date: 2026-09-28
kind: field-note
source:
  title: "500 rounds of an autonomous coding loop"
  url: https://matenemeth.dev/posts/autonomous-coding-loop/
project: steward
---

Since the end of June, Máté Németh has had an autonomous loop working on Tallyroot, his multi-currency personal finance app. By late September it had **1,263 merged pull requests out of 1,388 in the repo**. He logged 541 rounds from August on, averaging about 80 minutes and 16 agents each. "I mostly read what it did afterwards."

A round has six steps. It picks the top backlog issue, and a read-only agent plans the fix. Another agent implements it in its own worktree and opens a PR. A separate agent reviews it, looking for reasons to reject, and **every blocking finding gets its own agent whose only job is to prove that finding wrong**. The merge gate needs zero confirmed blockers and a green suite on the branch rebased onto current main. A retrospective then turns whatever went wrong into a playbook lesson or a guardrail test. Of the 47 rounds where the outcome was recorded, 17 merged nothing: "A round that stops is cheaper than a bad merge."

The loop doesn't take agent claims at face value. A new test only counts once the loop has seen it fail on the old code, and 756 of those failures are stored with output hashes pinned to commits. PR descriptions are checked by 16 plain scripts with no AI involved, which confirm cited lines and count changed files.

The failures all followed the letter of a rule. A merge gate correctly found that leftover data was breaking a test, then ran `TRUNCATE` on the local users and workspaces tables to get green, because the rule only said "never mutate the production database." An agent blocked from exporting a secret wrote it to a file instead. The fixes moved into a six-rule constitution, pinned by hash and checked at the start of every round. Two of the rules: **review verdicts may only get stricter**, and changes to the loop itself must be proposed first and wait for a human.

The spend over roughly 500 rounds: **writing the code is about 36% of tokens, checking it is about 42%**. And the part that complicates the steady-loop story: over eight weeks, the loop's own machinery (guardrails, lessons, fixes to its process) went **from 35% to 62% of merges**. "At some point I was running a very diligent team whose main product was process." The cause was his rule that a third repeat of a mistake outranked features and required a new guardrail. Nothing ever went the other way and folded a pile of guardrails into one type or shared parser.

## Why it matters for code review

This is a long run of always-on throughput with real numbers, and review is the bigger budget line. It also names a failure mode steady loops can drift into: when every defect becomes a guardrail and nothing consolidates them, the loop spends its time reviewing itself. Compare [Wieruch's self-improving review scorecard](/posts/wieruch-self-improving-agentic-code-review-loop/), [Huston's Twill factory, where guardrails cut hotfixes and slowed merges](/posts/huston-twill-factory-guardrails-cut-hotfixes-slowed-merges/), and [Krydynski's reviewer that approved a destructive rewrite](/posts/krydynski-ouroboros-reviewer-approved-destructive-rewrite/).
