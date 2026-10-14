---
title: "Mike Curry: reviewing agent PRs without becoming the bottleneck — machines block, humans approve"
description: "Oct 11 from Mike Curry: agent diffs are three times larger and arrive without a first human judgment, so reading harder fails. Push lint, types, coverage, and a second-agent first pass into the harness before anyone opens the PR; keep humans on intent, shape, edges, blast radius, and operability — and never let a machine approve a merge."
date: 2026-10-11
kind: field-note
source:
  title: "Reviewing agent-written pull requests without becoming the bottleneck"
  url: https://learn.curry.io/articles/reviewing-agent-written-pull-requests-without-becoming-the-bottleneck
project: steward
---

Mike Curry’s Oct 11 note starts from a familiar queue: the author is often an agent, the diff is about three times larger than it used to be, and four of them are waiting by lunch. The instinct is to read every line harder. That does not scale, and it is not what review was for. Human-written PRs arrived with a hidden property — the author had already spent judgment on whether the change belonged. An agent-written PR is syntactically clean, passes the tests it wrote, and still has not asked whether it should exist in this shape. Reviewers who hold the old standard either burn out or skim-and-approve, which is the appearance of review without the protection.

The useful move is to write down what a careful human on the team catches that no linter, type checker, or test would. Curry’s list is short and almost entirely about intent and context:

- **Problem fit.** The PR solves the ticket as written, not a nearby easier problem the agent substituted. Read the ticket before the diff.
- **Shape.** New code follows the repo’s conventions — same error handling, logging, module boundaries. One new pattern per PR is a smell.
- **Edges.** Empty, huge, duplicated, slow, concurrent. Pick the two most likely and trace them by hand.
- **Blast radius.** What else calls this? What else reads this table? The agent rarely looks.
- **Operability.** Can it be rolled back, flagged off, and debugged from logs by someone who did not write it?

Everything else goes into automation that runs **before a human opens the PR**: formatting, lint, types, coverage thresholds, dependency and secret scanning, diff size limits. Then the layer most teams skip: a second agent as the first reviewer, given the same checklist, asked to leave comments **not approvals**, preferably overnight so the human starts from a cleaner diff.

One rule keeps the split honest: **a machine can block a merge but never approve one.** The approval is the human’s signature that the intent is right. Size the PR to the review, not the task — put a size limit in the harness and split mechanical refactors from behavior changes from migrations. Demand a description with a required shape (what was asked, what changed, what was deliberately not changed, how to verify); if that cannot be filled in, the PR is not ready for a human. And protect judgment from atrophying: once a week rewrite one function by hand before reading the agent’s version, pick one edge case per review and run it, rotate who reviews what.

## Why it matters for code review

This is the review half of a continuous factory. Volume forces the harness to absorb mechanical checks; the human budget is spent on the few questions that decide whether a change is right. The same “block ≠ approve” line shows up in [Vázquez’s owner gate](/posts/vazquez-many-hands-one-yes-harness-owner-gate/) and in [Lamplit’s five gates with zero agent merges without a human](/posts/lamplit-five-gates-412-agent-prs-human-reviews-last/). Compare also [Swizec on starting easy and finishing hard](/posts/swizec-starting-got-easy-finishing-is-still-hard-linters-earn-auto-merge/).
