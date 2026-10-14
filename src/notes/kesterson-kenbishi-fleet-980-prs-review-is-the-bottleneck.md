---
title: "980 merged PRs in seven weeks from a personal agent fleet, and a warning to delete the phone app"
description: "Oct 5 Andrew Kesterson devlog: a self-hosted factory of six agent identities polls a Forgejo forge, grooms tickets until a checker script calls them ready, and works them while he sleeps. About 980 PRs merged across 38 repos since mid-August, with 73 times his earlier lines per week. His own read: the bottleneck moved from typing to reviewing, and the always-on loop was not entirely healthy for the human."
date: 2026-10-05
kind: field-note
source:
  title: "Devlog - 20261005"
  url: https://aklabs.net/2026/10/05/Devlog-20261005/
project: steward
---

Andrew Kesterson runs a small agent factory against his own self-hosted forge, and his October devlog is the two-month report. Since mid-August his account shows about 980 pull requests merged, about 800 issues closed, and 15 new repositories across 38 repos, and that counts only what he merged; six agent identities did the work. He says he did not type most of the software. He wrote tickets and rules, "reviewed what mattered," and said no a lot.

## What keeps it running without him

The rig is plain machinery. Each agent polls its forge notifications, sorts each one into a work type (groom, execute, review, or a request from another agent), and dispatches a worker whose permissions follow from that type. Tickets go through a checker script that mechanically decides whether they are ready to be worked, and agents groom them until they pass. He spent much of September arguing with the checker's rules, which an agent had written by studying how he reviewed tickets. Anything tagged design-decision has to come back to him before any agent can touch it. Workers get their own directory, a completion marker, a cap on retries, and a supervisor that notices when one is stuck on a prompt nobody can answer or an expired login. Other scripts rank every open issue into one queue and order open pull requests by their dependency graph.

## The numbers, with his caveats

Comparing commits since January, August and September ran at about 68,000 changed lines and 316 commits a week, against 929 lines and 10 commits a week from January to May. He calls that 73 times the lines, then discounts it: the earlier window includes nearly idle months, so against active weeks it is nearer 25, and "lines are lines." His conclusion is the one this site keeps collecting: the multiplier "means that 73 times more of the product got produced, and the bottleneck moved from typing to reviewing." On one project he has deliberately barely read the code, about 150 merged PRs, as an experiment in how long he can get away with it.

## Why it matters for code review

This is the always-on factory at hobby scale, and its controls sit at the front of the line: a readiness gate on tickets, a human-only lane for design decisions, and merges that still go through him. The human side is the part to keep. The agents worked "while I slept (sometimes - sometimes I did not sleep because I obsessively watched them work)," and he closes with: "Don't install the Claude or Codex apps on your phone. Turn that shit off. Walk away." A loop that runs overnight should let the person sleep; if it makes them watch instead, it has moved the bottleneck into their evenings. Compare [the factory that went dark because the reviewer ran out of time](/posts/nuetzel-software-factory-went-dark-reader-ran-out-of-time/), [agents refilling the review queue while reviewers sleep](/posts/rangle-sisyphus-predicament-senior-attention-overnight-queue/), [a label-driven harness that babysits issues to merge](/posts/berenddeboer-ready-for-agent-clanker-harness/), and [the psychological tax of AI in the eng org](/posts/psychological-costs-ai-adoption-se/).
