---
title: "Agent in a real repo: worktree isolation, full-suite done, PR not merge"
description: "Jun 30 2026 Ramón Chancay: each task gets a git worktree + branch; reproduce with a red test, require the whole suite and that the new test actually ran, ship a PR — never merge unsupervised."
date: 2026-06-30
kind: field-note
source:
  title: "The agent inside a real repo: isolating tasks with git worktree and shipping a PR"
  url: https://www.ramonchancay.me/blog/agent-in-a-real-repo
project: steward
---

[Ramón Chancay](https://www.ramonchancay.me/blog/agent-in-a-real-repo) writes the missing wrapper for putting a coding agent on a repo that matters: don’t run on your working copy. Each task gets `git worktree add -b agent/<id> …` so failed attempts are a branch you delete, parallel tasks don’t collide, and your open tree stays clean. Worktrees share `.git` objects (cheap) but not `node_modules` (each copy still installs) — still far lighter than a fresh clone per task.

The done contract is deliberately stricter than “my new test is green.” Bug flow is red→green→**full suite**: write the failing reproduction test first, fix until it passes, then run the whole suite so regressions surface. `isDone` requires both exit zero *and* that the new test name appears in the suite output — so the agent can’t satisfy the gate by deleting the test that was blocking it. Final output is a **pull request**, not a merge to `main`: green tests don’t prove the right problem was solved or that the change is safe; the PR is the human checkpoint, and isolation means rejecting it costs a branch delete. He flags the edges that still bite overnight factories: shared `.git` ops across concurrent worktrees, same-file merge conflicts postponed to the second PR, flaky suites poisoning the signal, and secrets copied into every worktree.

## Why it matters for code review

Harnessed overnight throughput is only worth the FOMO of idle agents when mistakes stay on disposable branches and “done” can’t be gamed by deleting evidence. Chancay’s asymmetry — total freedom to be wrong inside the worktree, zero ability to land on `main` — is the review contract continuous factories need before you leave the laptop closed.
