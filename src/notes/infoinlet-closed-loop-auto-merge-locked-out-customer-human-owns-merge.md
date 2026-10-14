---
title: "Nine days of agents merging their own PRs, then a 2am lockout: keep the human on the merge, not the diff"
description: "An Oct 7 DEV post by Info Inlet: a pipeline of author agent, review agent, tests, staging and auto-merge ran fully closed for about nine days until a write path that acknowledged before persisting locked a paying customer out at 2am. The fix kept agent review and moved the one human to owning each production merge, plus one added question on every write path: what happens if the client retries?"
date: 2026-10-07
kind: field-note
source:
  title: "I let my AI agents merge to production. Once. (DEV Community)"
  url: https://dev.to/infoinlet1/i-let-my-ai-agents-merge-to-production-once-35ji
project: steward
---

The author of this [DEV post](https://dev.to/infoinlet1/i-let-my-ai-agents-merge-to-production-once-35ji), who builds an agent platform, had automated most of the pipeline: an author agent drafts the change, a second agent reviews the diff, then tests, types, lint, a staging deploy and a smoke check run. Looking at a PR with four green checks and a clean agent review, they asked what their own click on merge was adding, and handed that step over too. "For about nine days it felt like the future."

## What got through

The change was a write path that sent the "got it" back to the client before the row was saved. The review agent approved it. The author credits that agent with catching two real things that sprint, but this bug "doesn't look like a bug. It looks like finished work." Tests covered the happy path, where the code is correct, and nobody retried a request at the wrong moment against staging. It auto-merged and auto-deployed, and when a retry hit in production at 2am, a paying customer was locked out of their account with nothing in the logs.

## The split they drew

The post separates two jobs that share the word review. Judging the code is a skill, and the author says the agent now does it better than a tired human on the four-hundredth diff. Owning the merge is accepting that a change is going to real users and that the consequence lands on you. Their observation is that teams tend to guard the wrong one: a mandatory human approval on the PR, which is the reversible step, and auto-merge on green into production, which is the irreversible one.

What changed afterward was narrow. Agents still write and review, and review got stricter. A human now owns every merge to production and nothing else, looking at blast radius rather than rereading lines. Every write path gets one human answer before it merges to the question "what does this do if the client retries?" Deploy stays automated; the decision to deploy has a name on it.

## How it fits

This is one incident, told by someone whose product stops for human approval before anything goes live, so the conclusion and the business line up. It still complicates the case for fully unattended merging: the loop ran fine until a bug that every automated check could honestly pass. Others draw the line elsewhere. Brett Ridenour's unattended bug-fix loop [opens draft PRs only and never pushes main](/posts/ridenour-six-guardrails-unattended-bugfix-loop/), nokto [never auto-merges at all](/posts/nokto-orchestrator-never-auto-merge/), and steezr [tiers auto-merge by risk surface and lets revert rate move the line](/posts/steezr-risk-tier-auto-merge-provenance-revert-rate/). Compare Ahmet Zeybek's team, where a [two-approval PR dropped a schema default](/posts/zeybek-agent-prs-declared-scope-behaviour-list-code-before-tests/) and the answer was a required list of behaviour changes.
