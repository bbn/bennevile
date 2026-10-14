---
title: "Five agent PRs a day is a queue: review in merge order, and run fewer agents when it outgrows readers"
description: "Oct 6 Joxo: when several people's agents open PRs the same day, sort by dependency rather than arrival, review shared-file PRs together and rebase after each merge, let a fresh second agent check first, and keep the merge decision with a person. If the queue grows faster than people read, a reviewer agent won't fix it."
date: 2026-10-06
kind: field-note
source:
  title: "How to review pull requests from several coding agents"
  url: https://joxo.ai/blog/review-prs-from-several-agents
project: steward
---

The Joxo team, who sell a task board for coordinating agents across a team, start from a simple observation: "One agent's pull request is a normal review. Five from three people's agents in one day is a queue." A queue has its own questions: what lands first, what overlaps, and who reads whose.

## Every PR carries its own handoff

The reviewer wasn't in the conversation that produced the code, so the agent writes the PR description to a fixed shape: the task, what changed (including anything outside the task's area), how it was tested with the command and its last lines of output, which shared contracts changed (signatures, schemas, routes, config keys), and which agent made it for which person. The shared-contracts line matters most when several PRs are open, because it says which other branches may now be wrong. The testing line is the one to distrust: check the command ran after the last edit.

Five checks catch most agent mistakes: duplicate helpers, weakened tests, invented APIs, unrelated changes, and missing edge cases. Duplicate helpers are the easiest to approve, because the new code looks clean and nobody notices until the two copies disagree.

## Merge order, not arrival order

Contract changes go first, then the features that use them, then cosmetic sweeps. Before reading, list the files each open branch touches and flag any file in more than one. Two PRs that share a file are reviewed together by the same person and merged one after the other, then the rest are rebased and retested. "An approval given before the previous merge was given against a different main."

On a small team, the person whose agent wrote the change reads it first, because they know what they asked for, and a different person approves anything touching shared code. A second agent in a fresh session, ideally a different tool, reads first for the mechanical checks and reports findings without pushing fixes. "An agent's approval never counts as a person's."

## Why it matters for code review

This is the review side of steady agent throughput, and it comes with a limit that complicates the case for more always-on agents: "If the queue grows faster than people can read it, a reviewer agent will not fix it. Run fewer agents at once." PRs that take more than one sitting go back to be split, and anything touching sign-in, payments or permissions gets a line-by-line human read whatever the second agent said. It's practical guidance from a vendor, not measured results. Compare [why review capacity sets fleet size](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/), [overnight merges that need a fresh verifier's verdict on the exact patch](/posts/tenten-pstack-fresh-verifier-swarm-exact-patch-merge/), and [agents that reinvent existing code while tests stay green](/posts/ma-reporeuse-coding-agents-reinvent-wheel/).
