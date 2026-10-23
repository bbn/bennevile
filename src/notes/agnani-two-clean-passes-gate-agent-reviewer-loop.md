---
title: "Mayur Agnani: stop the agent-reviewer loop after two clean passes, not one, and let only new important findings on changed lines block"
description: "Treating the agent and AI reviewer loop like retry-until-green on a flaky suite, Agnani simulates a 50%-recall reviewer: stopping at one clean pass let 24.4% of bugs escape versus 13.1% for the noisy loop, while a two-clean-pass gate kept 13.1% and halved fix rounds."
date: 2026-10-20
kind: field-note
source:
  title: "How to Stop a Coding Agent and an AI Reviewer From Looping on One Pull Request"
  url: https://dev.to/theaicommit/how-to-stop-a-coding-agent-and-an-ai-reviewer-from-looping-on-one-pull-request-2p1k
project: steward
---

**Mayur Agnani** (theaicommit.com) starts from a CI habit everyone has shipped: [retry a flaky suite until it goes green](https://dev.to/theaicommit/how-to-stop-a-coding-agent-and-an-ai-reviewer-from-looping-on-one-pull-request-2p1k). Builds get slower, and a real failure that shows up half the time slips through, because **the stop rule was "first green run" and noise decided when that came.** A coding agent answering an AI reviewer runs the same loop. To an agent every comment is an instruction, every fix is a commit, every commit triggers another review, and the loop ends at the first review with nothing to say.

He leans on the [Claude Code team's numbers](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/): before they changed their rules, 8.9% of internal PRs needed five or more rounds, one ran more than fifty rounds overnight, and about 59% of what the reviewer kept flagging in later rounds was code that predated the change. Three kinds of comment keep the loop alive: nits sampled fresh each pass, findings in old code that never goes away, and the same finding reworded.

The obvious fix, cap the rounds or re-review only the new lines, is where he pushes back. In his own simulation (a reviewer with **50% recall per pass**, so not field data), cutting the noise but stopping at one clean pass let **24.4% of bugs escape**. The noisy loop let **13.1%** escape, because its extra rounds were accidental second looks. His gate keeps the second look and drops the churn: only a finding that is new, tagged important, and on a line the PR changed starts a fix round; a repeat is matched on file, line and rule and dropped; **two clean passes in a row** are required to pass; after three fix rounds the PR goes to a person. In the simulation that cut fix rounds from **2.07 to 1.01** per PR, removed the five-round tail, held escapes at 13.1%, and sent **13.4% of PRs to a human.**

The caveats are the useful part. A second pass only counts if it can miss different things than the first, so a reviewer at temperature zero with the same prompt proves nothing twice; vary the model, the focus, or vote across parallel reviewers. And a gate that escalates one PR in eight needs someone reading the escalations, or those PRs just sit. His before-and-after test: fix rounds per PR, the share needing five or more rounds, and reverts within a week, over twenty PRs.

## Why it matters for code review

Round caps like [Gargeya Sharma's](/posts/sharma-review-round-cap-15-percent-of-prs-used-59-percent-of-reviews/) solve the cost problem of an always-on review loop. Agnani's point is that the stop rule is also a recall decision, and that a single clean pass from a noisy reviewer (see [Lal's replay variance](/posts/lal-replayed-ai-reviewer-45-human-found-bugs-same-prompt-seven-apart/)) is weak evidence. Decide what may block first, and change when the loop stops only together with that.
