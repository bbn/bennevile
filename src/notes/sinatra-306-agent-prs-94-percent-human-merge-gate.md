---
title: "Sinatra: 306 agent PRs since April, 289 merged — 94%, and the human gate did the work"
description: "Sep 16 from Sinatra: nineteen weeks on two production repos, 306 agent-opened PRs, 289 merged (94%), 14 closed unmerged, 3 still open as of Sep 9. No auto-merge; every merge is a human button. Tickets written for agents, sandbox tests before ready-for-review, and agent self-review before a person looks."
date: 2026-09-16
kind: field-note
source:
  title: "A coding agent opened 306 PRs on our repos since April. 289 merged."
  url: https://www.sinatra.dev/blog/coding-agent-pr-merge-rate
project: steward
---

Sinatra published nineteen weeks of pull-request outcomes from its own background coding agent on two production codebases, counted through **September 9, 2026**. The headline is easy to misread: **306 opened, 289 merged, 14 closed without merging, 3 still open** — **94%** of everything the agent ever opened landed in main. The product monorepo alone saw 250 opened and 237 merged; a founder side business (hellomarshy) added 56 opened and 52 merged. The window starts April 27. Both repos are private, so the post publishes the counting method (`gh pr list` filtered to the GitHub App authors) instead of a public link.

The honest section is why the rate is high. It is not “the model is good.” A merge rate measures the whole loop:

- **A human reviews every PR, and the agent cannot merge.** There is no auto-merge path. 289 merges means a human read 289 diffs and pressed the button. If the agent could merge its own work, the number would be meaningless.
- **Tickets are written for an agent** — acceptance criteria, reproduction steps, file pointers. Vague tickets produce vague PRs; most of the merge rate is determined before the agent starts.
- **Tests run in the sandbox**, and failures come back as revisions. The agent opens a draft while it works; the configured test command must pass before the PR is marked ready for review. A failing run shows up as more work on the same branch, not as a broken PR in the queue.
- **The agent reviews its own diff first** and posts findings before a human looks, so reviewers start from a list. That is a large part of why reviewing about 20 agent PRs a week is tolerable.

The 14 closed-without-merge cases are the interesting failures. They fall into rejected-in-review (worked, wrong approach), superseded (two takes on the same ticket), and stale (ticket stopped mattering). Notably absent: PRs closed because the code was broken garbage. Bad diffs mostly get caught earlier in the sandbox or self-review and come back as revisions rather than as doomed PRs in a human’s queue.

Expectations for other teams are lower at first, and that is not a dodge. This dataset has every advantage: the people writing the tickets built the agent. Well-specified bug fixes and contained features merge near these rates; vague tickets, large refactors, and architecture taste need revision or a human takeover. The usual failure is not broken code — it is a clean PR that solves the wrong problem because the ticket underspecified the right one. And the number nobody publishes: **review time**. A 94% merge rate on PRs nobody has time to review is worth nothing; ticket size is the lever they found, because a tight issue comes back as a diff one person can read in minutes.

## Why it matters for code review

This is sustained background throughput with the merge button still human. The harness (tickets, sandbox, self-review, no auto-merge) is what makes the always-on agent’s volume reviewable rather than a queue of almost-right diffs. Put it beside [Donchev’s quality walls under 3.3x merges](/posts/donchev-quality-walls-review-capacity-is-production-capacity/), [Lamplit’s five gates and zero unattended agent merges](/posts/lamplit-five-gates-412-agent-prs-human-reviews-last/), and [Curry’s rule that machines block and humans approve](/posts/curry-reviewing-agent-prs-machine-blocks-human-approves/).
