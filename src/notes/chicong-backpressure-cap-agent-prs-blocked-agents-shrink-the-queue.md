---
title: "Backpressure for agent fleets: cap open PRs per reviewer in the orchestrator, and put blocked agents to work shrinking the queue"
description: "Oct 13, Chi Cong models an agent pipeline as queues: twenty agents, 41 open PRs, one reviewer approving in 90 seconds, merges flat. The fix was a hard cap of three open agent PRs per reviewer, enforced in code, with blocked agents splitting diffs, adding tests and writing verification notes. Fewer PRs opened, more merged, regressions down; the cost was idle agents."
date: 2026-10-13
kind: field-note
source:
  title: "Backpressure (Day 23: Backpressure, and why your slowest consumer is a human)"
  url: https://chicong115.com/blog/backpressure-20261013
project: steward
---

[Chi Cong](https://chicong115.com/blog/backpressure-20261013) opens a lesson in his solution-architecture series with a familiar week. Twenty coding agents work a backlog. By Thursday afternoon there are 41 open agent PRs, CI is green on most of them, and one reviewer is getting through them at about 90 seconds each. Merged PRs per week are flat, the same number as when far fewer agents ran. Two weeks later a regression is traced to a PR merged that Thursday, and nobody remembers approving it.

His diagnosis is queueing theory. Put a rough service rate on every stage: planning takes seconds, agents scale with a config change, CI scales with runners, and a careful human review of a non-trivial agent PR takes most of an hour, about six a day per reviewer. Review is at least ten times slower than anything else, yet the team had dashboards for token spend, agent success rate and CI time, and nothing for review capacity. By Little's Law, 41 open PRs at six careful reviews a day is a wait of about seven working days, long enough for main to move and the agent's context to go stale.

People don't throw errors when overloaded. They skim, trust the agent's summary over the diff, approve in batches and stop requesting changes, because every revision adds another item to the queue. A human consumer keeps reporting success while doing less per item, which is worse than a dropped message because the approval says "reviewed."

What changed:

- **A bound in code, not in the prompt.** At most three open agent PRs per reviewer, enforced by the orchestrator. "A prompt is a request. A gate in the orchestrator is a control." The agent never gets offered the action of opening PR number four.
- **A signal upstream.** Hitting the cap increments a visible metric tagged by reviewer.
- **A defined response that speeds up the reviewer.** A blocked agent splits diffs over 400 lines, adds tests for changed paths, or writes a verification note mapping each acceptance criterion to where it was implemented, how it was tested and what couldn't be verified. Split PRs still count against the cap.

He reports results without figures: fewer PRs opened, more merged per week (fewer stale rebases, abandoned PRs and revision loops), review time per PR back up, and a lower regression rate. One thing got worse. In the first week the agents sat idle more than expected, because review-cost-reducing work had no backlog of its own, so the blocked path ended in idle. Idle agents look like waste on a cost dashboard, he warns, and someone will want to raise the cap. Measure review time per PR and the regression rate first.

## Why it matters for code review

The urge to keep every agent busy around the clock is the same urge that fills the queue in front of the one stage that can't scale. Chi Cong's version of continuous throughput is bounded: agents keep moving, but once the reviewer's queue is full their work goes into making that queue cheaper to drain rather than longer. Steady merged output comes from capping what reaches the reviewer, not from maximizing what agents open. The account comes from a teaching lesson and its outcomes have no numbers attached, so treat it as a design pattern with a plausible field story, not a measured result. Compare [Matt Adams's overnight loop, where a three-PR review cap kept the agent from starting most nights](/posts/adams-overnight-backlog-three-pr-review-cap-verification-twice-implementation/), [Pankaj Nakhat on extra agent load turning into silent approvals](/posts/nakhat-agents-doubled-prs-review-went-to-approve-buttons/), [Fabijan Bajo on planning CI and reviewers as queues](/posts/bajo-review-is-the-capacity-plan-spotify-honk-ci-and-people/), and [Charles Sieg on why idle agent sessions feel like a stopped factory floor](/posts/sieg-agentic-coding-fomo-idle-sessions-weaker-review/).
