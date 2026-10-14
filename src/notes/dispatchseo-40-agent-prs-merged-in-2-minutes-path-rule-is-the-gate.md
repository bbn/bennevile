---
title: "40 agent PRs merged in a median 2.4 minutes. The path rule was the reviewer."
description: "DispatchSEO counts its own unattended agent pipeline: 40 merged PRs, nobody in the loop for the typical one, 4 held for a human by a path allowlist, and a review check that only reported on 15 of 40."
date: 2026-10-02
kind: field-note
source:
  title: "Claude Code security review: why an agent that merges its own PRs needs a gate (DispatchSEO)"
  url: https://dispatchseo.com/blog/claude-code-security-review
project: steward
---

**DispatchSEO** lets an agent open and merge its own guide PRs while nobody is watching, and published the numbers. Across 40 merged agent PRs (opened Aug 17 to Oct 1), the median time from open to merge was 2.4 minutes; the slowest took 332. Four of the 40 touched a file outside the allowed directories and were held for the owner. The gate is a workflow that checks three things: the label, that every changed file sits under an allowlisted path read from the default branch (so the PR can't widen it), and that every check is green. Zero checks reported means no merge.

The post is blunt about what Claude Code's own review tools are: `/security-review`, the security guidance plugin, and Code Review all produce findings, and none of them can refuse a merge. Only a required check or merge rule can.

## Why it matters for code review

This is what continuous, unattended merging looks like when the review step is mostly removed on purpose: the human is replaced by a narrow blast radius, not by a smarter reviewer. The weak spot they found is worth stealing as a check of your own: an AI review check appeared on only 15 of 40 PRs while the deploy check appeared on all 40. A green-checks gate is only as strong as the checks that actually show up, and a reviewer that runs intermittently quietly turns into no reviewer at volume.
