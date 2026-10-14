---
title: "562 PRs in two weeks: review the plan and the progress report, let guardrails own the merge"
description: "Oct 4 Alexey Indeev (Spare): coordinator-plus-sub-agent goals that run overnight and for days, auto-merge in small flagged pieces behind tests, Bugbot, Strix, and a Mergify queue — and tokens, not review, become the bottleneck."
date: 2026-10-04
kind: field-note
source:
  title: "I stopped reviewing my agents' code. Here's what I do instead."
  url: https://alexeyindeev.substack.com/p/i-stopped-reviewing-my-agents-code
project: steward
---

Alexey Indeev reports **562 merged PRs in two weeks** on Sightline, Spare’s internal operations platform, including four nights he spent hiking. The workflow fits in four lines: set the intent (plan with the agent until you agree on what and why), set guardrails the agent cannot get around, set a goal, and let it merge in small pieces.

The mechanism is specific. Every goal starts from the same prompt: accomplish the plan, ship with auto-merge, act as coordinator, delegate everything to sub-agents, parallelize. The coordinator holds only the plan and status, so its context stays clean while sub-agents come and go. Every PR passes unit tests, end-to-end tests, CI, Bugbot, and Strix, and **Mergify will not admit a PR to the merge queue until all of them pass**. Agents are asked to feature-flag everything, so they ship increments, check them in staging or production, then ship the next one. Indeev’s hot take: twenty small PRs that each cleared every check are probably safer than one big locally-iterated PR. Goals run overnight and for days (a custom-roles goal ran over a day), usually two to four at once on unrelated features. He reviews the plan up front and an agent-built HTML progress report afterward — not diffs. When an agent makes a mistake, the blameless question is which guardrail was missing; the code gets fixed and so does the guardrail, and Bugbot is asked to keep demanding more tests.

Honest limits, mostly his own: this is one power user on an internal platform; he credits a recent model jump for making it viable; and the binding constraint moved to **tokens** — about five ~$200 Claude accounts rotated by a usage-watching switcher, with real friction (re-logins, lost artifacts).

## Why it matters for code review

This is the plainest receipt yet for continuous harnessed throughput over peak-session heroics: the human’s review effort moves to intent (the plan) and evidence (the progress report), while the merge decision belongs to a queue that refuses red checks. The review question becomes whether the guardrail set is good enough to own “done” — and whether every escaped defect turns into a new gate. The FOMO also shifts shape: once goals run for days, idle time shows up as a token-quota problem rather than a review queue. Pair with [the dev.to case for reviewing agents instead of code](/posts/stopped-reviewing-code-started-reviewing-agents/) for the permissions side, and with [Uber’s cost-per-merged-PR factory](/posts/uber-software-factory-efficiency/) when the token bill needs a unit price.
