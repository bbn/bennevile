---
title: "A month of an overnight Claude Code loop: 20 real runs, a three-PR review cap, and verification that took twice as long as the code"
description: "Sep 28, Matt Adams: a mini PC works his GitHub backlog from midnight to 7am on weekdays. 83% of 189 implementation slots never started the agent because nothing was eligible or three PRs already awaited review. Median implementation ran 17 minutes; browser verification about 39."
date: 2026-09-28
kind: field-note
source:
  title: "A month of letting Claude Code work my GitHub backlog overnight"
  url: https://www.matt-adams.co.uk/ai/security/2026/09/28/agent-github-backlog-overnight.html
project: steward
---

Matt Adams runs a loop on a mini PC in his study. Hourly cron slots between midnight and 7am on UK weekdays pick an issue labelled `ready-for-agent`, run Claude Code on it in a disposable microVM with no GitHub access, gate the result, and open a draft pull request. A separate verification pass, offset half an hour, starts the app in headless Chrome, checks each acceptance criterion, and only then takes the PR out of draft. "Nothing merges until I've reviewed it." By September 28 one repository had 19 agent PRs, all merged; a second, added on the 19th, had six: two merged, two waiting, two closed.

The useful part is the logs. Of **189 implementation runs, 157 (83%) never started the agent**: 93 found nothing eligible, and **64 stopped because the repo already had three open agent PRs**, the cap Adams set because "it's how many unreviewed changes I can realistically get through." Only 20 runs worked an issue and passed the gates. Among runs over five minutes, implementation had a median of **17 minutes and verification about 39**, with five verification passes hitting the one-hour timeout.

- **Verification earned its place.** One PR's unit checks were green, but the browser console warnings it was meant to remove were still there, and four of six browser tests it added failed when run. That PR is why the browser pass exists.
- **A verdict is tied to a commit.** The verifier records evidence per criterion against the exact SHA it checked. A later push voids the old evidence, and a timed-out pass resumes from evidence already posted if the commit hasn't changed.
- **Gate failures are parked, not retried.** Feeding a failure straight back to the agent "could optimise for getting past the gate."
- **Silence is a failure.** A dead-man's switch alerts when an expected heartbeat doesn't arrive, so an expired login or a stalled cron job can't look healthy.

## Why it matters for code review

This is what modest, verified, always-on throughput looks like in practice: about 20 real units of work in a month, paced by the issues Adams wrote and the PRs he could review, not by how often the loop ran. "Increasing the schedule's frequency would fill that queue sooner, but the loop would still wait for me to make room." His next step is the honest one: keep the review cap and write better issues before asking for more output, and plan around verification, which is now the slowest stage. Read beside [Vanhee's nightly loop that opened 61 PRs and merged none](/posts/vanhee-nightly-ralph-loop-61-prs-52-merged-never-merges/), [Hellström's overnight fleet that sat 94% idle](/posts/hellstrom-overnight-fleet-11-prs-94-percent-idle-luck-is-not-a-guardrail/), and [Holt's overnight PR whose eleven green tests never ran the real path](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/).
