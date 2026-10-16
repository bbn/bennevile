---
title: "Warp's factory rollout advice: start with chores, not a backlog loop that turns into a slop cannon"
description: "Zach Lloyd says don't start an always-on factory by auto-fixing the backlog, because unreviewed agent PRs sour the team; start with low-risk chores with clear owners, track the share of merged PRs through the factory, then cost per PR, which fell from $80 to $20 at Warp in six weeks."
date: 2026-10-15
kind: field-note
source:
  title: "Tactics for rolling out software factories: human and organizational changes"
  url: https://www.warp.dev/blog/rolling-out-software-factories
project: steward
---

**Zach Lloyd (Warp)** follows his [crawl, walk, run post](/posts/warp-adopting-software-factory-crawl-walk-run/) with the human side of rolling out software factories, which he defines as agentic loops in the cloud that are measurable and improvable over time. The goal, he writes, isn't full automation. It's shipping the best software quickly and efficiently, and proving it by measuring the factory.

The review-relevant advice is what *not* to start with. He doesn't recommend opening with a full loop of agents fixing the backlog or auto-fixing new issues, because it's "too likely the agents will generate PRs that never get reviewed," and the team concludes the factory is "just a slop cannon." Start instead with chores where the output is likely right from the outset (Warp's own factory fixes Sentry-reported server crashes, triages dogfooding issues, writes the changelog and updates docs), make sure each automation has a good signal-to-noise ratio and a clear owner who reviews its PRs, and have a small team of champions tune them before rolling out widely. A human fix to a bad output is treated as input to the factory's learning loop, not wasted work.

On the social side: put the factory where engineers already work (Slack, Teams, Linear, Jira, GitHub, GitLab, and an MCP from local agents like Claude Code or Codex) rather than a new portal; treat it as shared infrastructure everyone improves, not a product only an admin configures; encourage it without mandating it; and celebrate shipped work, with any leaderboard counting cost and merged PRs rather than token spend. The first metric is the share of merged PRs that went through the factory. After that come throughput, cycle time, cost per PR and agent-scored quality. Warp reports cost per PR falling from **$80 to $20** over six weeks, with a lower revert rate and **40%** higher PR throughput than the prior month (Warp's own numbers, not independently measured, and Warp sells this platform).

## Why it matters for code review

Steady always-on throughput only compounds if someone reviews what the loop produces. Lloyd's order of operations treats reviewer trust as the scarce resource: earn it on low-risk chores with named owners before pointing agents at work nobody has time to read. That matches the risk tiers in [the Claude Code team's review process](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/) and complicates the stories in [Goossaert's backlog loop](/posts/goossaert-backlog-loop-mechanical-gate-dark-factory-slop/), which found no evidence his factory beat a plain session once he stopped reading its code, and [Huston's Twill guardrails](/posts/huston-twill-factory-guardrails-cut-hotfixes-slowed-merges/), where tighter factory gates cut hotfixes but slowed merges.
