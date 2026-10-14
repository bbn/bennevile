---
title: "In an unattended review panel, a reviewer that couldn't see the code counts as a pass"
description: "Huiyan Wan's overnight-workflows plugins for Claude Code run multi-agent review panels on stacks of PRs while nobody is watching. One failure gets its own plugin: review subagents without a shell can't fetch the PR, return a BLOCKED report or review main instead, and by morning that empty report reads as clean. Re-dispatched with the diff on disk, one such reviewer found a data-loss bug that 179 green tests had missed."
date: 2026-05-29
kind: field-note
source:
  title: "overnight-review-panel-blocked-reviewer-reads-as-clean (wan-huiyan/overnight-workflows, GitHub)"
  url: https://github.com/wan-huiyan/overnight-workflows/tree/main/plugins/overnight-review-panel-blocked-reviewer-reads-as-clean
project: steward
---

Huiyan Wan's [overnight-workflows](https://github.com/wan-huiyan/overnight-workflows) is a set of Claude Code plugins for runs that are supposed to leave "a stack of reviewed PRs on your desk by morning," with a panel of review agents gating each change. One of its companion plugins exists for a single failure: [a blocked reviewer reads as a clean one](https://github.com/wan-huiyan/overnight-workflows/tree/main/plugins/overnight-review-panel-blocked-reviewer-reads-as-clean).

## How the gap opens

Several common code-review subagents are provisioned without a shell. The plugin lists one reviewer's toolset: it can read files, grep and fetch web pages, and it can even read a background shell's output, but it can't start a command. Told to run `gh pr diff` on a PR, it either returns a BLOCKED report with no findings, or it reads whatever branch is checked out, often `main`, which predates the work. On a private repo the web-fetch fallback returns 404. In a parallel panel the outcomes come back uneven: reviewers that happened to land in an existing worktree do real work, and the one that didn't reports nothing.

Someone at a keyboard would notice. In an unattended run, the plugin says, "a BLOCKED report that you skim at 8am reads as 'no findings = clean'."

## What the plugin does about it

The orchestrator, which does have a shell, does the git work. It checks out each PR branch into its own worktree, writes each PR's diff to a file against that PR's own base, and gives every reviewer explicit paths along with a note that it has no shell and shouldn't look in the main checkout. Anything a reviewer wants confirmed by running it comes back as a list of commands for the orchestrator to execute. In the morning summary, BLOCKED counts as not-clean: the reviewer is re-dispatched before its vote counts, and the summary separates "reviewed, clean" from "could not review."

An August revision tightened the diff step. A two-dot `git diff` compares tip to tip, so anything the base gained after the branch was cut shows up as deletions the PR seems to make, and reviewers dutifully report phantom findings. The plugin now diffs from the merge base, the same comparison GitHub's Files changed tab uses, refuses to dispatch when there's no shared history, and refuses to hand over an empty diff file. The plugin explains why both guards are there: "this skill's failure mode is silence."

## The example

In a stacked-PR review, the panel's correctness reviewer came back BLOCKED while two siblings found worktrees and reviewed normally. Re-dispatched with the diffs on disk, it found a P0: a transactional version check that broke on an SDK retry, a data-loss bug that 179 green tests had missed. The run in that example was supervised. Had it been unattended, the plugin says, the empty report would have counted as a passing reviewer and the bug would have shipped.

## How it fits

Running review overnight raises a question daytime review rarely has to ask: did the check actually run? A green CI job, an empty findings list and a blocked reviewer can look the same in a morning summary. The same pattern shows up in Casey Holt's [eleven green tests that never exercised the config production read](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/), in dsalathe's [guards that only proved anything once someone broke the code](/posts/dsalathe-greens-that-prove-nothing-drive-guards-red/), and in apsolut's [harness that refuses a "done" claim while checks are still red](/posts/apsolut-night-loop-claim-done-morning-receipt/). This repo has one star and one maintainer, so treat it as a practitioner's notes rather than a measured result. Still, the rule is cheap to copy: a reviewer that couldn't see the code hasn't passed it.
