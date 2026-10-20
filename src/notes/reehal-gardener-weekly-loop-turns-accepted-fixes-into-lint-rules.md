---
title: "A weekly gardener turns the fixes your team accepted into lint rules, so Monday's correction reaches Thursday's agent"
description: "Oct 19, Jag Reehal. Shepherd fixes a PR inside the coding agent, Stamp approves or refuses it in CI, and once a week a gardener reads the GitHub record and proposes one small change to skills or lint rules, as a PR with evidence a person merges. It counts only unreverted fixes, needs three accepted cases before proposing a rule, and its first run over fourteen PRs produced one edit."
date: 2026-10-19
kind: field-note
source:
  title: "Your coding agents need a gardener"
  url: https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/
project: steward
---

[Jag Reehal](https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/) starts from a familiar waste: "[You correct an agent on Monday. On Thursday a fresh session makes the same mistake, because nothing it reads has changed.](https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/)" His fix is a third loop on top of review. The number he optimises for is [how much of your attention the agents use](https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/).

## Three parts, each with one kind of authority

Shepherd runs in the coding agent, reviews a PR, and fixes what it can, including the build. Stamp runs in CI and [approves or refuses; it never changes code](https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/). The gardener runs once a week, reads the GitHub record (review threads, Shepherd's commits, reverts, statuses, round counts), and proposes changes to Shepherd's skills or the repo's lint rules as a PR that a person decides on.

The evidence bar is strict. A fix counts only when Shepherd named the rule in a commit trailer, nobody reverted the commit, and the PR came from someone who can push to the repository. A resolved thread [counts for nothing](https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/), because triage also resolves findings it judges mistaken. A lint rule needs the same finding fixed on at least three PRs and ships as a warning, with the cases it must flag and a counterexample it must leave alone. A regression that Stamp approved can justify a check from a single incident, because it comes with a reproducing test.

## Small power, small output

The agent that reads PR text has read-only tokens and writes to an outbox; a separate job on a fresh runner applies patches, [refuses changes to `.github` and `.git`](https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/), and opens the PR. Edits to Stamp's own rules go to a person. The first run, over fourteen PRs on his test repo, dropped most signals as already covered and proposed [one edit](https://arrangeactassert.com/posts/your-coding-agents-need-a-gardener/). He wanted a gardener that proposes little with evidence over one that rewrites prompts every week. What he hasn't built yet is a set of representative tasks to rerun against a revised skill.

This is the slow, compounding side of a factory: each week's accepted corrections become checks the next run can't skip, without anyone driving a session. Compare [Lauren Tan's gardener sampling merged work at 2,500 PRs a month](/posts/robson-pstack-gardener-sampling-merged-work/) and [yureki_lab's replay-gated rule loop for a 24/7 agent](/posts/yureki-post-mortem-loop-replay-gated-agent-rules/).
