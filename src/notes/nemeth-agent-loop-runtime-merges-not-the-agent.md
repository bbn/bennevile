---
title: "Németh: after the loop left Claude Code, plain code does the merge, and the gate refused two good PRs in two days"
description: "Oct 1 from Máté Németh: moving his autonomous loop to a claude -p runtime took the merge away from agents. The runtime re-tests the exact commit in a fresh checkout. Background commands cut off 4 of the first 6 agents, and a busy machine and a stale check run caused two false refusals."
date: 2026-10-01
kind: field-note
source:
  title: "Taking my agent loop out of Claude Code"
  url: https://matenemeth.dev/posts/out-of-claude-code/
project: steward
---

Máté Németh's [autonomous loop on his finance app](/posts/nemeth-500-rounds-autonomous-loop-checking-costs-more-than-writing/) used to run as a workflow script inside Claude Code. He moved it to a small Node runtime with no dependencies, called agent-loop, where every agent in a round is a `claude -p` process, so the same loop can later run on Codex, an API key, or a local model. The numbers so far: **10 PRs through the gate on the busiest day**, $4 to $33 per round at API prices (it runs on a subscription, so nothing was billed), and **zero merges done by an agent**.

**Who merges.** Inside Claude Code the merge gate was an agent that rebased, ran tests, and merged, and the same kind of agent had once run `TRUNCATE` on his test database to get a suite green. Now the agent can only say a PR is ready and which commit it tested. The runtime checks that the commit hasn't moved, checks that GitHub's checks are green, runs the full suite again in a fresh checkout, and merges exactly that commit. If an agent tries to merge anyway, a guard blocks the command.

**Background commands.** Agents like to start the suite in the background and move on. Inside Claude Code something wakes them when it finishes. Under `claude -p` nothing does: the session ends, the agent is told to return its result, and one returned "No PR is open yet" after $6.74 of tokens. **Four of the first six agents** that backgrounded something were cut off this way. The guard now blocks background commands. He turned down a hook that would silently rewrite them to run in the foreground, because a hook can only change a command by approving it, and an approved command skips the permission check.

**Two good PRs refused.** One because the loop edits PR descriptions as it goes, which reruns a description check on the same commit, and the gate counted both the old failed run and the new passing one. GitHub only looks at the latest run of each check, so now the gate does too. The other because a different project's test suite was running on the same machine: load 57 on 10 cores, and the frontend suite took 211 seconds instead of 106. The gate now waits up to 10 minutes for load to drop to 1.5 per core, and if it doesn't, it runs anyway and says so in the refusal. **Failed tests are never retried**, because a retry would hide a flaky test too.

He can now pin a round to a specific issue. A currency bug took seven rounds and five PRs, and when he changed his mind about the fix mid-round by commenting on the issue, that round's review blocked the PR for not following the new comment.

## Why it matters for code review

Taking the merge away from the agent is the pattern unattended loops keep arriving at: the agent proposes, deterministic code decides on the exact commit that was tested. The false refusals are the cost of that. A strict gate run continuously will catch its own environment too, and every fix here makes the gate's reading of the evidence more accurate rather than looser. Compare [Reveneau's verification step that held an hourly run open](/posts/reveneau-hourly-unattended-job-verification-step-held-run-open/), [Orbi's blocked label racing the merge gate](/posts/orbi-599-ai-merged-issues-blocked-label-merged-71-seconds-later/), and [DispatchSEO's path rule as the gate](/posts/dispatchseo-40-agent-prs-merged-in-2-minutes-path-rule-is-the-gate/).
