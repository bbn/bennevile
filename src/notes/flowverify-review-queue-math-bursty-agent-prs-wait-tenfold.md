---
title: "Double the PRs, ten times the wait: the queueing math behind agent review delays"
description: "Oct 3 FlowVerify: agent PRs wait 17.6 hours at p75 for a first review against 3.4 for unassisted work, yet review itself is only modestly slower once started. A simple queue model shows why, and why bursty agent batches make it worse."
date: 2026-10-03
kind: field-note
source:
  title: "AI Pull Requests Wait 5x Longer for Review. Queueing Math Explains Why, and It Gets Worse."
  url: https://www.flowverify.co/blog/ai-pull-request-review-queue-math-2026
project: steward
---

FlowVerify's editorial team starts from LinearB's analysis of more than 8.1 million pull requests across about 4,800 teams. Agent-created PRs waited **17.6 hours at the 75th percentile** before a first review, against **3.4 hours** for unassisted work, a gap of about 5×. Once someone picked one up, the review took 6.4 hours against 4.2. Reviewers aren't refusing to read agent code, and a 2.6× difference in diff size can't explain a 5× difference in waiting on its own. The PRs are sitting in a line.

The piece explains the line with the simplest queue model (M/M/1), where average wait is review time multiplied by load over spare capacity. At 50% reviewer load the wait equals one review; at 90% it equals nine. A team at 45% load that takes on 98% more PRs lands near 89% load, and its average wait goes from about 0.8 reviews to about 8.2: **volume doubled, waiting grew roughly tenfold**. The authors are clear this is a teaching model, not a measurement. They also note that real arrivals are burstier than random, with Monday-morning agent batches and pre-release pushes, and burstier arrivals make the curve steeper. Their ranked levers put a work-in-progress cap per author or per agent instance first, then a size budget near 200 lines, risk-based lanes, an automated first pass, and adding reviewers last. What they'd measure: p75 queue age, weekly arrivals divided by weekly review hours, and the share of PRs closed unmerged after seven days.

## Why it matters for code review

This is the arithmetic case for steady, capped agent throughput over bursts. If review is a queue running near capacity, an overnight run that dumps forty PRs at 8 a.m. costs far more waiting than the same forty arriving at an even pace, and a few hours of peak-session output can push a team past the knee of the curve where PRs age for days and get closed unmerged. The fix it points to is the harness, not heroics: cap how many PRs each agent can have open, keep diffs small, and plan review hours the way an operations team plans servers. See also [Chi Cong's three-open-PRs-per-reviewer cap](/posts/chicong-backpressure-cap-agent-prs-blocked-agents-shrink-the-queue/) and [Fabijan Bajo on review as the capacity plan](/posts/bajo-review-is-the-capacity-plan-spotify-honk-ci-and-people/).
