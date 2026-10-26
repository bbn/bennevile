---
title: "Takayuki Kawazoe: an always-on agent line merged nothing for three days because a safety check could no longer see standing approvals"
description: "Jul 1, Takayuki Kawazoe on Codens' round-the-clock agent pipeline: every PR approved and green, zero merges for three days, caused by a review freshness check that recovery re-armed past existing approvals. The fix was to read the effective review state, not new events."
date: 2026-07-01
kind: field-note
source:
  title: "Our AI autopilot merged nothing for 3 days — the culprit was a review 'freshness' check"
  url: https://dev.to/zoetaka38/our-ai-autopilot-merged-nothing-for-3-days-the-culprit-was-a-review-freshness-check-1240
project: steward
---

At Codens, [Takayuki Kawazoe writes](https://dev.to/zoetaka38/our-ai-autopilot-merged-nothing-for-3-days-the-culprit-was-a-review-freshness-check-1240), development runs on agents around the clock: a spec becomes tasks, agents open PRs, an AI reviewer approves, and approved PRs merge automatically. One morning the dashboard showed zero completed tasks for three days. Every component was healthy. Agents were opening PRs, the reviewer had approved them, CI was green. Nothing merged.

**A safeguard that ate its own approvals.** Each task moves through fixed steps, `implement → create_pr → wait_ci → wait_review → merge_pr`, and the team hard-codes the transitions because letting the model pick the next step made operations impossible to reason about. `wait_review` only trusted reviews newer than the moment it started waiting. That check existed for a real reason: an old approval had once been used to merge after a reviewer later requested changes.

The trouble was the recovery path. When a Spot instance was reclaimed or a process restarted, the engine re-entered the current step and reset the "started waiting" time to now, whether or not any new commit existed. If that happened after the reviewer had approved, the approval was suddenly "too old," no new review would ever come, and the task waited forever. Because it depended on timing, only some tasks froze, and they piled up for days.

**Found by counting where work was parked.** The done count only said everything was stuck. Grouping in-flight work by step showed 28 tasks parked at `wait_review`, all approved, green, and unmerged. The fix was to stop asking "did a new review arrive?" and instead compute each reviewer's latest state on every poll, the same rule GitHub's own review panel uses. A reviewer who requested changes still blocks, so the original incident stays fixed. The backlog dropped from 28 to 8, and 15 tasks completed in 25 minutes.

A second wave followed the next day: tasks downstream of ones marked failed during the bug sat bouncing between pending and blocked. The answer there was to mark descendants failed explicitly, so one retry of the failed parent clears the chain.

## Why it matters for code review

When review and merge run unattended, the merge gate is production infrastructure, and a gate that quietly stops passing anything is an outage of the whole line even with every health check green. Kawazoe's lessons are about the review step specifically: read approval state as a snapshot rather than a stream of events, only reset a review clock when new commits land, and watch how many items sit at each waiting point rather than just how many finished.
