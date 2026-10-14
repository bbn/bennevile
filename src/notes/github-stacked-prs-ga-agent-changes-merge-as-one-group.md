---
title: "GitHub ships stacked PRs to everyone: small reviewable pieces that land through the merge queue as one group"
description: "Oct 6 GitHub made stacked pull requests generally available on all plans. Stacks now enter the merge queue as a single group, auto-merge for whole stacks is rolling out, and the gh stack CLI supports worktrees. GitHub reports 9% more merged code in repos using stacks during the preview."
date: 2026-10-06
kind: field-note
source:
  title: "Stacked pull requests generally available"
  url: https://github.blog/changelog/2026-10-06-stacked-pull-requests-generally-available/
project: steward
---

GitHub made stacked pull requests generally available on every github.com plan. A stack splits one large change into a chain of small PRs, each reviewed on its own, that merge bottom-up. GitHub says repositories using stacks during the preview, which began July 30, merged 9% more code than comparable repos, and that more than two-thirds of the top 1% of repositories now use stacks and saw a 5% improvement in time to merge. Those are GitHub's own numbers on its own feature.

## What changed at GA

A stack now enters and lands through the merge queue as a single merge group instead of being split across groups. The [docs](https://docs.github.com/en/pull-requests/reference/stacked-pull-requests) say the queue will let a group run up to 50% over its configured size to keep a stack together, and will split a stack across consecutive groups only past that. If one PR is ejected from the queue, every PR above it comes out too. Auto-merge for whole stacks is rolling out over the next few weeks, so a group can land once every PR meets the repository's rules. Every PR in a stack has to meet the base branch's protections, including required reviews, status checks and code owner approvals, and so does everything below it.

For agents, the `gh stack` CLI extension now supports Git worktrees, the [docs](https://docs.github.com/en/pull-requests/get-started/about-stacked-prs) list a `gh-stack` skill, and merging a stack through the API requires the new asynchronous merge endpoint.

## Why it matters for review under agent volume

A coding agent can produce in minutes a PR nobody can read well in one sitting. Stacks give a team a way to make an agent hand over work in ordered, reviewable layers, such as schema, then API, then UI, and to spend the careful read on the risky layer. Worktree support matters because one-worktree-per-agent is how many unattended setups already isolate parallel work.

The part that cuts the other way is auto-merge for whole stacks. It makes it easier for a factory to land a large change as soon as the checks go green, which only works if the checks deserve the trust. Small PRs help a reviewer only if someone actually reads them. Compare [reviewing several agents' PRs in merge order](/posts/joxo-review-agent-prs-in-merge-order-run-fewer-agents/), [a five-minute CI cap that let agents merge 200 PRs a day](/posts/codeherder-five-minute-ci-budget-main-checked-on-a-clock/), [planning agent capacity in reviewer minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), and [a fleet-size limit set by review](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/).
