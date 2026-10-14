---
title: "Make the gauntlet slow on purpose: an agent that merges itself overnight, and why shipped means deployed"
description: "Sep 28 Luke Chadwick (Far Horizons): on a half-million-line portal the agent merges and deploys its own PRs. The trick is a build that takes up to two hours, strict AI reviewers that must be satisfied, hooks that redirect instead of block, and a rule that work isn't done until the deploy is green. A 1:15am brief became twenty merged PRs by nine."
date: 2026-09-28
kind: field-note
source:
  title: "How I let coding agents merge to production"
  url: https://farhorizons.io/writing/how-i-let-coding-agents-merge-to-production
project: steward
---

Luke Chadwick has run his own property portal with an agent that merges and deploys its own pull requests since January. It's about half a million lines built in six weeks, and he says the extra autonomy is deliberate: it's the project where he finds out where agents break, with more access than client work would ever get. His opening rule is the whole post in one line: "Anything I want enforced with coding agents is enforced by failing the build, not in PR review."

## A slow build is a feature when nobody is waiting

With human teams you keep builds short because people hate waiting. Chadwick noticed he was extending that courtesy to the agent, which doesn't care. "Now I make it very hard for it to merge. I want so many tests that getting through takes 30 minutes, an hour, two hours." The agent waits on each check in the background and goes around again when one fails, and some agents he doesn't touch for half a day. AI review sits inside the same gauntlet: a Codex reviewer strict enough to say no repeatedly while Claude fixed everything, and Greptile with the rule that nothing merges until every comment is resolved.

The other lessons are about the agent's habits. It writes tests that find nothing and pass anyway, and it tries to disown breaks it didn't cause. When it repeats a mistake, the fix is a Claude Code hook that blocks the command and says what to do instead, because a flat block gets worked around in unpredictable ways. A review of old sessions in March turned up more than 22 incidents across his projects, and the recurring ones became hooks and lint checks.

## Shipped means deployed

Auto-merge without a queue thrashed: ten jobs hit the merge point at once and burned GitHub Actions credit. He settled on a merge queue, fourteen required checks, and one instruction: shipped means deployed. In September a performance change merged with every deploy job green, then the end-of-deploy check measured cold search at nearly five seconds at p95 against a three-second budget, so the ticket stayed open. That is what makes the overnight batch work. He gave it a brief at 1:15am, and by about nine twenty PRs had merged through the queue with the last deploy green. The only item left open was a vision-doc rewrite, held for his sign-off as a founder decision.

## Why it matters for code review

This is the overnight case with the verification moved earlier and made heavier, not lighter. The agent's patience is the resource, and the cost of a two-hour gauntlet falls on nobody. Chadwick is clear about the limits: one environment to keep costs down, and on a team he'd add a production-like stage and score PRs by risk rather than auto-merge everything. Compare [merge only after the gauntlet](/posts/noctcore-nightcore-verification-gauntlet/), [eighteen of twenty tickets in one night with two human gates](/posts/pirxey-factory-night-run-two-human-gates-harness-fixes/), and [risk tiers where revert rate moves the line](/posts/steezr-risk-tier-auto-merge-provenance-revert-rate/).
