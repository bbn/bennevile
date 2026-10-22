---
title: "Selenios: half of every PR's CI minutes went to re-testing main, and agents kept clicking update"
description: "Oct 13, Jonathan Muszkat at Selenios: with agents writing much of the code, merges per month grew 3.3x and test cases 74x since January. Keeping branches up to date ate about half of each PR's CI minutes. A merge queue helped modestly in week one, and the bigger fix was telling the agents to stop updating branches."
date: 2026-10-13
kind: field-note
source:
  title: "The CI Tax Nobody Budgeted: Why We Moved to a Merge Queue Once AI Started Writing Our Code"
  url: https://me.jonymusky.com/blog/merge-queue-ai-ci-tax
project: steward
---

At Selenios, the main repository had the usual rule: a pull request merges only if its branch is up to date with `main` and CI passed on that exact state. Jonathan Muszkat writes that the rule did not change this year, but its cost did. With coding agents writing much of the code, **merges into main per month grew 3.3 times between January and September, and test cases grew 74 times**, partly from a deliberate coverage push in June and partly because agents write a reproducing test for every fix.

When the team measured it, **92% of pull requests were updated with main at least once, almost three times on average, and those updates were 51% of a pull request's CI minutes.** The share stayed near half whether a PR lived under four hours or more than a day. About four in ten preview deploys were triggered by an update rather than a code change. Muszkat's arithmetic is the useful part: more merges means each open PR falls behind more often, and there are more open PRs to fall behind, so update runs grow roughly with the square of the merge rate, and each run is longer because the suite keeps growing.

There was also an agent-specific cause. Agents follow instructions, and the repo's workflow said to bring the branch up to date before merging, so they did it "at three in the morning, for a branch that nobody is waiting on." `gh pr update-branch` was on the list of commands agents could run without asking.

Moving to GitHub's merge queue tests each entry once on top of `main` plus the entries ahead of it. The first-week numbers are deliberately modest: short PRs cost about the same (+6%), PRs open 4 to 24 hours spent 22% less, and 9% of queue entries failed and were ejected, which made flaky tests everyone's problem. About a third of new PRs were still being updated with main out of habit, by people and agents alike. So the agent instructions file now says plainly not to update branches just to keep up, and the command came off the auto-approved list.

## Why it matters for code review

Steady agent throughput does not only load human reviewers; it compounds verification cost in the pipeline, and the cost grows faster than the output. The fix here was half settings and half instructions: a queue that tests what will actually merge, plus agent rules that stop a diligent agent from re-running the whole suite all night for nothing. Compare [Iyer on CI becoming the bottleneck](/posts/iyer-ci-bottleneck-verify-system-not-repo/), [Anthropic's risk-tiered review with a merge queue at the end](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/), and [Trimm's 24-hour merge coordinator](/posts/trimmdev-merge-coordinator-24h-arm-lanes/).
