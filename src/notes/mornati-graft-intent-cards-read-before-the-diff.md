---
title: "Graft puts a verified intent card in front of the diff, because the agent's own description is the least trustworthy thing on the page"
description: "Oct 18, Marco Mornati releases Graft v0.0.1: a GitHub App that records which agent wrote a PR, has one model write an intent card and a second model check it against the diff alone, and applies a base-branch policy file. Shadow mode only; the 90% card-accuracy gate has no pilot data yet."
date: 2026-10-18
kind: field-note
source:
  title: "You Don't Need a Scion: Graft, a Review Layer for Agent Pull Requests"
  url: https://blog.mornati.net/you-dont-need-scion-graft-review-layer-for-agent-pull-requests/
project: steward
---

[Marco Mornati](https://blog.mornati.net/you-dont-need-scion-graft-review-layer-for-agent-pull-requests/) starts from Anthropic's account of replacing git with Scion after merges went from about 2,500 to more than 30,000 a day. He argues the storage half of that story applies to a handful of companies. The other half, engineers who review the intent of a change instead of every line, applies to any team where agents open most pull requests. [Graft](https://github.com/mmornati/graft) is his attempt to build that half on top of plain GitHub.

What it does on every PR:

- **Who wrote it.** Provenance from `Graft-Agent`, `Graft-Model`, `Graft-Task` and `Graft-Session` git trailers, bot accounts and agent co-authors.
- **What it claims to do.** A writer model drafts an intent card: a one-sentence goal, the observable behaviour changes, and edits the goal doesn't explain. The PR text comes from the agent being judged, so it is treated as data, never as instructions.
- **Whether the diff matches.** A verifier model sees only the diff, the file list and the card, not the title, description or issue. Fixed rules on paths and size set a risk floor (trivial, logic, sensitive). A model can raise the class but never lower it.
- **What the policy says.** A `graft.yaml` read from the base branch, so a PR can't relax its own rules, decides whether the change would auto-approve, need a person or a specific team, or be blocked. Block wins, then require, then approve.

His worked example, which he labels fictional, is a "Fix typo in pace docstring" PR described as "No behaviour change." The card flags that the verifier disagrees, notes that rounding became truncation and a limit went from 15 to 20, and routes it to a human. The reviewer opens the diff to check two lines instead of to find out what the PR does.

The limits are stated up front. v0.0.1 is shadow mode: every check concludes neutral and nothing is enforced. Enforcement waits on a gate of at least 90% "accurate" reviewer votes on real pilot teams, judged with a Wilson interval and required to hold without the single busiest voter. The targets of 30% of PRs merging with no human and 50% less review time per agent PR have no pilot data behind them. A live end-to-end run against real GitHub hasn't happened, so 21 assumptions about GitHub's behaviour are still checked only against fakes.

## Why it matters for code review

Today the first thing a reviewer reads on an agent PR is the agent's own summary of its work. Graft reverses that order: a summary checked by a model that never saw the description, a risk class no model can lower, and a policy the PR can't edit. That matters most when agents produce work around the clock and review becomes the only step that can't scale by adding more agents. The idea is easy to state and hard to prove. Until card accuracy is measured on real teams, it is a design, not a result. Graft itself was [built overnight by a team of agents](/posts/mornati-six-weeks-one-night-agent-team-review-took-40-percent/). Compare [Anthropic's Scion and its shift to verification after merge](/posts/anthropic-scion-30000-merges-post-merge-verification/), [the survey finding reviewers want provenance and clear ownership before approving AI-authored PRs](/posts/rahman-plausible-not-enough-aipr-trust-evidence-ownership/), and [Ankit Jain on seniors turning into intent reverse-engineers](/posts/jain-ai-code-review-burnout-intent-gates/).
