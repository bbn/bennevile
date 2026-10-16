---
title: "Tessl says 75% of its 1,200 agent PRs a week now merge without a human, and 8.5% of PRs eat half the review bill"
description: "Tessl's factory team swapped a generic AI reviewer for one that checks its own written standards. Real-defect rate rose from 68% to 91%, but the sharper number is that PRs stuck past five review rounds used 47.4% of review-loop spend."
date: 2026-10-16
kind: field-note
source:
  title: "75% of Tessl's PRs now merge without human review"
  url: https://tessl.io/blog/75-of-tessls-prs-now-merge-without-human-review
project: steward
---

**Simon Rendon Arango and Colin Hallett** report on Tessl's own software factory: one monorepo, **more than 1,200 agent-written PRs a week**, from engineers running agents locally and from the always-on factory. Review was holding everything up, and it had become the biggest variable cost: PRs that never merged plus review-and-fix rounds made up **over half** of their agent spend.

Their previous AI reviewer didn't help much because nobody trusted it. About a third of its findings weren't real defects, so engineers ended up reviewing the reviewer. They replaced it with a reviewer that checks each PR against the standards the team already writes for its agents (coding conventions, design system, an AI code review policy). In a side-by-side week of more than 600 PRs and roughly 1,850 findings, **91%** of the new reviewer's findings were real defects against **68%** for the old one, about **435** fewer false positives a week to dismiss. On a neutral external benchmark the two reviewers tied, which is their evidence that the gain came from the team's own standards, not a better model. Since the switch, about **75%** of PRs have merged without a human correcting the agent or discussing the engineering.

The number worth stealing is about loops, not accuracy. **8.5%** of PRs went through more than five review rounds, and those PRs used **47.4%** of review-loop spend. About one in seven of their rounds was triggered by a merge conflict, and two-thirds of those reruns found nothing new. When a reviewer flags the same pattern repeatedly, the team turns it into a pass-or-fail verifier that runs on every change.

Read the figures with care. This is a vendor writing about its own product, and the published "How we measured" section still carries bracketed placeholders asking to confirm the measurement dates, the weekly PR figure and the start date for the 75% claim.

## Why it matters for code review

At sustained factory volume, the cost of verification sits in a long tail of PRs that bounce between agent author and agent reviewer, not in the average PR. That matches the [Claude Code team's three-round cap after one PR ran fifty-plus rounds overnight](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/), and it suggests a cheap metric for any always-on pipeline: track rounds-to-merge, and treat repeat findings as checks to write rather than comments to answer. Compare [Clipboard's approve-or-skip bot](/posts/clipboard-preflight-bot-approves-28-percent-low-risk-prs/) and [Tessl's earlier launch of standards-as-review-lenses](/posts/tessl-code-review-standards-as-skills/).
