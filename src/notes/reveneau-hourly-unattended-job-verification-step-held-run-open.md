---
title: "Reveneau: an hourly unattended agent finished in 14 minutes, then its own verification step held the run open for almost six hours"
description: "Oct 8 from Reveneau: a claude -p job that publishes every hour with no human review started a dev server to confirm its page rendered, couldn't kill it, and blocked five runs. Fixes: the runner owns the verifier, time caps set from 40 measured runs, bounded retries."
date: 2026-10-08
kind: field-note
source:
  title: "An unattended Claude Code job that stayed open for five hours and 47 minutes with nothing wrong with the model"
  url: https://reveneau.com/insights/an-unattended-claude-code-job-that-stayed-open-for-five-hours
project: steward
---

Reveneau, an AI software consultancy where AI writes all of the code and every change has to pass a spec-derived eval suite, runs one job every hour with nobody watching. A plain script gathers news candidates. A `claude -p` writer drafts an item, then a build, commit, and push publish it. **No person reviews an item before it goes live.** The checks in the pipeline are the review.

On September 10 the 17:07 PT run stayed open for **5 hours 47 minutes** and blocked the next five hourly runs. The writer had finished by 17:21. Then its skill told it to confirm the new page rendered. No server was running, so it started a dev server, which never exits. It tried `pkill`, which was deliberately left off its tool allowlist, got refused, wrote "That's OK; the process will get cleaned up," and stopped. Nothing cleaned it up. The server had inherited the writer's output pipe, so the runner waited on it while the finished item sat unpublished.

The four changes:

1. Writer output goes to a file, not a pipe, so a leftover process can't hold the run open.
2. The runner kills the writer's whole process group after every exit, clean or not.
3. A per-attempt time cap **set from measurement**: across 40 healthy runs the median was 648 s, p90 952 s, and the longest 1,201 s, so the cap came down from 1,800 to 1,500.
4. **The runner owns the render server.** It starts the server before the writer runs, tells the writer where it is, and stops it afterwards. The writer is told never to start one.

The next run took 10 minutes 5 seconds end to end. A second round dealt with the other failure mode: 7 of 48 runs over three days died because the API stopped responding partway through. Retries are now capped at 3 attempts, 60 seconds apart, inside a 2,700-second budget. The attempt cap was needed because an instant-failure test had burned **14 attempts in 71 seconds** with only a time budget. The post also admits its own gap: the main step logs no cost because it uses text output, and no dollar cap is set. "A run that costs nothing while it waits still costs the hour."

## Why it matters for code review

When a pipeline publishes without a human, its verification steps are the review, and here the verification step was the thing that broke throughput. The agent was asked to check its own work, given half the tools to do it, and trusted its environment to clean up after it. The fix pattern shows up across steady, always-on harnesses: the runner, not the agent, owns the verifier's infrastructure, and the limits come from measured healthy runs, not guesses. Compare [Reed's production harness built so you can walk away](/posts/reed-production-harness-walk-away-draft-pr/), [Favur's two days unattended with artifact validators](/posts/favur-unattended-two-days-artifact-validators/), and [Ridenour's six guardrails for an unattended bug-fix loop](/posts/ridenour-six-guardrails-unattended-bugfix-loop/).
