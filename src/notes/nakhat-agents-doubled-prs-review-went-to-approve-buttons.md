---
title: "Agents doubled the PRs, and the extra review load went into approve buttons"
description: "Oct 7 Pankaj Nakhat reads the CMU/Stanford study of an enterprise 2x mandate: PRs per developer hit 2.09x while reviewers grew 1.5x, human review coverage fell from 89% to 68%, substantive review from about 39% to 21%, and silent approvals roughly doubled per reviewer. His fix is lanes at PR creation, narrow bots as gates, agent-supplied evidence and a WIP cap."
date: 2026-10-07
kind: field-note
source:
  title: "Your Agents Doubled the PRs. Nobody Doubled the Reviewers. (Pankaj Nakhat)"
  url: https://pnakhat.com/writing/agent-pr-review-bottleneck.html
project: steward
---

[Pankaj Nakhat](https://pnakhat.com/writing/agent-pr-review-bottleneck.html), a director of quality engineering who runs an agent that turns production traces into pull requests several times a day, takes apart the headline number from a longitudinal Carnegie Mellon and Stanford study, [AI Writes Faster Than Humans Can Review](https://arxiv.org/abs/2607.01904). The study followed one mid-sized company, 802 developers and 196,212 pull requests, through a public goal to double engineering productivity measured as merged PRs per engineer per month. By April 2026 it had: PRs per developer stood at 2.09 times the early-2025 baseline.

## Where the extra work went

Company-wide PR volume grew 3.1 times while the pool of people reviewing grew 1.5 times, so load per reviewer roughly doubled. Merge and revert rates looked fine, which the authors call "coarse, short-horizon proxies" rather than "a clean bill of health." What changed was the shape of review. The share of PRs getting any human review fell from 89% to 68%. Substantive review, meaning a human-written comment, fell from about 39% to about 21%. AI review climbed from about 19% to about 84% of PRs. At the median, a reviewer's commented reviews stayed near three a month while their silent approvals roughly doubled. "The extra load didn't go into deeper review," Nakhat writes. "It went into approve buttons."

The queue for careful review never cleared. The 90th-percentile cycle time for PRs with a substantive human review peaked near 114 hours and was still around 73 hours in 2026, above its pre-ramp 63. Overall cycle time recovered only because fewer PRs went through that queue at all. In the study's words, the company "absorbed the queue by routing work around substantive human review, not by reviewing faster."

## Bots as a layer, not a replacement

Nakhat pulls in an MSR 2026 study of agent-authored PRs ([arXiv:2604.03196](https://arxiv.org/abs/2604.03196)): PRs reviewed only by bots merged 45.2% of the time against 68.4% for human-only review, and 12 of the 13 review bots averaged below 60% actionable comments. Another MSR paper on 33,707 agent PRs ([arXiv:2601.00753](https://arxiv.org/abs/2601.00753)) found that 28.3% merged almost instantly and the expensive tail was predictable when the PR opened, from patch size, file types and whether the description stated a plan. From that he builds a starting policy: fast, standard and deep lanes assigned at creation, bots that block or pass rather than comment, a plan and a risk claim required from the agent, a failing-on-base test for every bug fix, and a cap of ten open agent PRs per squad so the agents queue instead of the reviewers.

## How it fits

This is the best-documented case yet of what sustained agent volume does to a review stage that didn't scale. Throughput doubled on paper, and the organisation kept up by quietly reading less. It's the measured version of Law Zava's argument that [review minutes are the real limit on agent seats](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), and of the [WIP limits and accountability case](/posts/lezli01-agent-review-bottleneck-wip-accountability/) for agents that outrun review. It also complicates any always-on factory that reports merged PRs as its scoreboard: the number can go up because review went down. Nakhat's closing question is the one to bring to a quality review: if agents doubled your PRs this year, who read them?
