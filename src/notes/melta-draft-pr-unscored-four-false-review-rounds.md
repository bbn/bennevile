---
title: "Melta: a draft PR the reviewer never scored sent its agent back to \"fix\" nothing, four times in a day"
description: "An agent pipeline merged at a 5/5 automated review score and looped the agent on anything less. Drafts were never scored, so \"no score\" fell into the retry branch. The fix is a third state: not there yet means wait."
date: 2026-10-21
kind: field-note
source:
  title: "A draft PR never gets reviewed: four false rounds in one day"
  url: https://getmelta.app/blog/draft-pr-never-gets-reviewed/
project: steward
---

Melta runs a pipeline that takes a task, has a coding agent build it on a branch, and opens a PR in a client's monorepo. An automated reviewer posts a confidence score out of 5. At 5/5 with required checks green, the pipeline merges; below that, it hands the findings back to the agent for another round, up to six. On October 21 it [sent the agent back to "fix" four pull requests that had nothing wrong with them](https://getmelta.app/blog/draft-pr-never-gets-reviewed/).

Two sensible defaults collided. The agent opened PRs with `gh pr create --draft` so nobody would merge half-done work, and the reviewer on that repo skipped drafts so it wouldn't spend effort on work in progress. **A draft was never scored, and the loop read "no score" the same as "below 5".** The code returned a score or `None`, checked only for 5, and the retry lived in the else branch. The prompt the agent received even said "scored not yet/5". The text knew the review was missing; the branch didn't.

The day's log shows the cost: PRs #229, #230, #231 and #232, an hour or so apart, each kicked into "pass 1 of 6" with no findings. Each false round burned a worker turn polling for a score that would never come, and a person had to notice and press "Ready for review" by hand. Once #231 was visible to the reviewer, the real loop worked: 3/5, then 4/5, then a merge at 22:36, twelve minutes after its false round began.

The rule Melta wrote down: every check has at least three states. Passed means move on. Failed means act on the stated reason. Not there yet means find out why (draft, stale review for an older commit, filtered by a path rule, still running), fix the cause if it's yours, and wait, with a time limit that flags a person rather than spending another agent round. As of the post, the rule is agreed but the pipeline change hasn't shipped, so PRs are still marked ready by hand.

## Why it matters for code review

A loop that runs all day turns every misread signal into repeated spend. Here the gap wasn't the model or the reviewer but the gate collapsing "absent" into "negative". Melta's own line is the warning: an agent asked to fix a problem it can't see will find something to change, which is worse than doing nothing. Continuous review loops need an explicit waiting state before they need a better reviewer.
