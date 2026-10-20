---
title: "Ten-hour agent runs: the human work moves to before and after, and the checks decide how long it lasts"
description: "Oct 7, Nikolas Barwicki. More than 100 tickets across three projects with no human in the implementation loop, the longest run about 10 hours. His setup is deliberately boring: one source of truth, questions answered in advance, a cold plan review by another provider's model, and checks the agent can run itself. One screen still went blank while every test stayed green."
date: 2026-10-07
kind: field-note
source:
  title: "How I let coding agents run for 10 hours: the setup"
  url: https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/
project: steward
---

[Nikolas Barwicki](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/) reports more than 100 tickets across three projects (a native iOS port, a rewritten TypeScript backend on Cloudflare Workers, and an internal CRM) with no human in the implementation loop. The longest run lasted [about 10 hours](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/), and one project ended with about 26,000 lines. His summary of where people fit: "[If a run needs you in the middle, you probably left a decision for later.](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/)"

## Checks decide whether a run lasts ten minutes or ten hours

He calls the setup [boring](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/): a prompt, a few markdown files, and checks the agent can run itself. Before the run come one written source of truth, every open question answered with a recommendation, a plan reviewed cold by a model from a different provider (it replied "[I would not approve the plan for autonomous implementation yet](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/)" and was right), a ticket graph, and a list of what only he can do. During the run the agent gets an executable spec replayed from the old code, tests against a real local database instead of mocks, eyes on the running app, an architecture checker, [one command that means done](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/), and two read-only fresh reviewers that "found real defects the tests missed."

The other half is removing whatever makes the agent wait. He drops approval prompts for local work and records deferrable questions instead of asking them. He also stops waiting on merges: his [first prompt asked for PRs, and the agent stopped after one ticket](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/) to wait for him. State lives in `progress.md` so a fresh agent can resume after compaction, and `TODO.md` holds the things only he can do.

## Where it stops holding

His [limits](https://nbarwicki.com/blog/29-how-i-let-coding-agents-run-for-10-hours/) are specific. Every project had a written definition of correct, and without one "you're back in the loop." Parallel agents in one folder collided. His own review is light by design. And the checks missed one thing: during a restyle, one screen went blank while every test stayed green, because the app has no UI tests yet.

This is the case for steady, harnessed runs in its plainest form: the throughput comes from front-loaded decisions and self-runnable verification, not from how cleverly someone drives a session. Compare [Mouse's requirements for overnight agents](/posts/mouse-overnight-code-agents-house-rules/), [Drydock's script-acts rule](/posts/mujahid-drydock-model-thinks-script-acts-overnight/), and [Chris Vella on capping work in progress per reviewer](/posts/vella-ten-agents-one-reviewer-wip-limit-accepted-change/).
