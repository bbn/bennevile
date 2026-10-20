---
title: "Repeat reviewers approve more agent PRs and comment less, while the PRs wait longer"
description: "Haoran Yu and co-authors follow 400 repeat reviewers through 11,429 reviews of agent PRs in the AIDev dataset. Approval rises from 27.9% to 42.4% between a reviewer's first and latest tenth of reviews, inline comments fall 22%, and median wait grows from 3.9 to 13.5 hours. PR size stays flat, and approval of human PRs in the same repos falls over the same months."
date: 2026-06-21
kind: paper
source:
  title: "Habituation at the Gate: Rising Approval and Declining Scrutiny in Human Review of AI Agent Code (arXiv 2606.22721)"
  url: https://arxiv.org/abs/2606.22721
project: steward
---

[Haoran Yu and six co-authors](https://arxiv.org/abs/2606.22721) ask whether people who review a lot of agent pull requests get easier on them over time. They take the 400 reviewers in the AIDev dataset who each reviewed at least ten agent PRs (11,429 reviews in all) and compare each reviewer's early reviews with their later ones.

## More approvals, fewer comments, longer waits

Split at each reviewer's midpoint, approval rises from [30.1% to 36.8%](https://arxiv.org/abs/2606.22721), and the change-request rate halves from 11.2% to 5.6%. Pooled by experience, approval climbs from [27.9% in a reviewer's first tenth of reviews to 42.4% in their last](https://arxiv.org/abs/2606.22721). About half of reviewers (52%) became more approving and 28% less.

Effort moves the other way. Inline comments per review fall [from 1.01 to 0.79](https://arxiv.org/abs/2606.22721), and words per review fall from 18.6 to 13.5. Reviewers whose approval rate rose most are the ones whose commenting dropped most (Spearman ρ = −0.556). Meanwhile the median time to a review grows [from 3.9 hours to 13.5](https://arxiv.org/abs/2606.22721). The authors read that as more time in the queue and less time actually inspecting.

The controls rule out the easy explanations. Median PR size is flat, so later agent PRs aren't simpler. Experience predicts approval and calendar date barely does. In the same repositories, approval of human-written PRs [declines over the same months](https://arxiv.org/abs/2606.22721), so this isn't reviewers getting lenient in general.

## What it can't separate

The authors say plainly that they [cannot establish causality](https://arxiv.org/abs/2606.22721): every agent in the sample shipped updates during 2025, so some of the rising approval may be earned trust. Their argument against that reading is the comment drop. If reviewers were rationally raising trust, they would approve more but keep looking as hard. The data cover public repos with over 100 stars and at most 207 days. Their suggested fixes are rotation so no one person absorbs most agent reviews, audits of long approval streaks, and dashboards that show each reviewer their approval trend next to downstream defects.

For anyone running agents around the clock, this is the hidden cost of volume: the human gate doesn't fail loudly, it gets quieter. Compare [Xinwei Xiong's account of review fatigue that looked like continued work](/posts/xiong-ten-overnight-prs-review-fatigue-is-silent/), [the Harvard firm study where review time grew 49%](/posts/chen-stratton-agents-more-code-not-more-software-review-absorbs-it/), and [the Claude Code team measuring human time instead of human reads](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
