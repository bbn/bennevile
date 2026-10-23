---
title: "Gearflow's four engineers went from about 39 merged PRs a week to about 388, and the merge grant decided what moved"
description: "Christian Koch describes a harness where support and sales staff start fixes, agents cleared a dependency backlog overnight with one human 'yes', an evening review session reads the day's agent sessions, and a bug under a human-merge requirement waited seven weeks."
date: 2026-10-12
kind: field-note
source:
  title: "Post-Scarcity Engineering"
  url: https://gearflow.com/blog/post-scarcity-engineering
project: steward
---

**Christian Koch** at Gearflow writes [a field report](https://gearflow.com/blog/post-scarcity-engineering) on what happened after the company's agent harness was opened to people outside engineering. Gearflow has **four engineers** (five until one left in August, not replaced). Before the harness they merged **about 39 pull requests a week**; over the last four weeks they averaged **about 388**. In the last 30 days, agents wrote **1,963 of 1,968** merged PRs. Koch calls PR counts a crude measure and points at the work behind them.

The overnight example is the cleanest. At 5:40 pm on a Monday an engineer asked an agent to clear the backlog of out-of-date dependencies. The agent filed about 40 issues under specific rules: **one dependency per PR, security fixes first, proof on every change**, with certain changes requiring approval. The engineer went home. By 8 the next morning agents had merged **29 PRs**, and the engineer's only overnight input was **one "yes"**. The board was clear that afternoon.

Most of the post is about who gets to start work. A support specialist's report of a broken "Approve Request" button was diagnosed in seven minutes and the fix merged **22 minutes** after the first message, with the specialist the only person involved. Fixes started by people outside engineering went from **about five a week to about 25**; two non-engineers drove 28 of 33 PRs in a shared test app in nine days. A production data correction ran as a dry run first, which caught that approving through the app would charge the card again.

Engineering's job is now the harness and the checks that let changes merge. **Every evening a review session reads the day's agent sessions for problems**; one night it found five sessions that had each researched the same partner API from scratch because the team's notes wrongly said a feature was missing. The correction merged four minutes after the issue was filed. Limits remain: people authorize production deploys, agents need approval to spend money, and a **merge grant** decides whether an agent can finish. One bug **waited seven weeks** under a human-merge requirement; a fix with a merge grant went from issue to merge in **41 minutes**. "You can buy the same models and keep the same queue."

## Why it matters for code review

Koch's numbers say the throughput came from permissions and rules rather than from a better session: one-PR-per-change, proof attached, an approval list, a nightly pass over the harness's own mistakes, and a decision about where a human merge is still required. The seven-weeks-versus-41-minutes contrast is the review queue showing up as the bottleneck once agents stop being one. The figures are the company's own GitHub and Linear data through October 8, and a merged fix still needs a production deploy to reach customers. Read beside [the Claude Code team's risk-tiered review](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
