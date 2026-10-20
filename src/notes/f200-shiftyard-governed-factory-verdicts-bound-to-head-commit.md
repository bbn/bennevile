---
title: "Shiftyard: a governed agent factory where a turn cannot pass by editing the tests"
description: "Oct 7, F200.ai. A pre-release Apache-2.0 daemon runs unmodified Claude Code and Codex CLIs under a deterministic policy gate, fenced leases, stop-hook checks on a clean checkout with tests taken from base, a cap of 15 open factory PRs per repo, and a merge train bound to head commits. The team's own work has run on it since Oct 5, and the post says it has measured no productivity, cost or quality gain yet."
date: 2026-10-07
kind: field-note
source:
  title: "Inside Shiftyard: a governed software factory for coding agents on your own machines"
  url: https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents
project: steward
---

[F200.ai's Shiftyard](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents) is a daemon that runs unmodified coding-agent CLIs, Claude Code and Codex today, on machines the team owns, and wraps each one in a queue, leases, a policy gate, budgets, verification and a merge train. The post starts from [failures anyone running several agents at once will recognize](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#why-we-built-it): two agents claiming the same ticket, an agent that can run `git push --force` eventually running it at the wrong moment, and what it calls verification theatre, where an agent says the tests pass but nobody knows whether they ran or on which commit.

## Checks the agent cannot edit

A seat can end its turn [only once the repository's declared checks pass](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#verification-and-the-land-train). The check declaration is read from the daemon's own mirror at a base commit, the checks run in a fresh checkout, and tests, fixtures and CI configuration are taken from the base, so an agent cannot pass by editing the tests. After repeated failures a person decides. On the way to main, verdicts are bound to the exact head commit. A verdict survives a rebase only if the base, patch-id and changed files all match, CI results never carry over, unknown files are treated as infrastructure, and an infrastructure batch always lands alone. Every merge also needs a person-approved land batch.

## Pacing an always-on factory

Several rules are about sustained volume rather than bursts. Polling is banned: a seat waiting on CI [blocks its item on the external reference and ends its turn](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#the-work-queue), and the daemon wakes it when that reference changes, on the principle that a wake is not a result and the seat must re-read the evidence. Finishing work comes before starting it, and [new build claims wait while a repository already has 15 open pull requests from the factory](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#the-work-queue). [Usage limits](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#scheduling-capacity-routing-and-budgets) are handled the same way: a seat that hits one has its wakes held until the reset.

## Receipts and gaps

After a hard switch on [5 October 2026](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#running-our-own-work-on-it), the team's own engineering work runs on Shiftyard, and the post reports 366 merged pull requests in the repository, with the busiest day after the switch at 356 commits. It is unusually plain about [what it does not claim](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#what-we-do-not-claim-yet): nothing is installable yet, the verify step's isolation is recorded as weak, and it has measured no productivity, cost or quality improvement. Merged pull requests per day attributable to the factory and cost per merged pull request, the outcome it says matters most, are [not yet measured](https://f200.ai/blog/inside-shiftyard-governed-software-factory-for-coding-agents#testing-and-measurements).

Read with [Nightshift, where the evaluator owns the commit](/posts/benikigai-nightshift-evaluator-owns-commit/), [HAR's isolate-verify-hand-off harness](/posts/os-factory-har-open-verify-harness/), and [Chris Vella's work-in-progress cap per reviewer](/posts/vella-ten-agents-one-reviewer-wip-limit-accepted-change/).
