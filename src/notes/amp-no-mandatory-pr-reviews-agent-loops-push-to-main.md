---
title: "Amp skips mandatory PRs: agent review loops, signed commits, and CI that blocks main"
description: "Amp’s documented way of working: core product engineers push to main without mandatory human PR stamps, run agents across the whole ship loop, and still pass SOC 2 with restricted access, signed commits, automated CI, and thread-linked audit trails."
date: 2026-10-16
kind: field-note
source:
  title: "The Amp Way"
  url: https://ampcode.com/docs/using-amp/how-we-work
project: steward
---

**Amp** (Sourcegraph’s coding-agent product) publishes how its own core team ships: many releases a day, **no mandatory pull-request reviews**, and agents that own more than the coding step. The stated reason is blunt. With strong models you can run many rounds of review in a loop; agents do not get tired or impatient the way a human stamp-queue does. Humans still share threads, orbs, and portals for feedback, and agents can ping teammates for input — but a second human staring at every diff is not the control.

The adjacent note that answers the compliance objection is Will Dollman’s [“That’s not SOC 2 compliant”](https://ampcode.com/notes/thats-not-soc-2-compliant) (Aug 13). Auditors asked what the change process was, not for a PR ritual. The controls they landed on are restricted push access to `main`, signed commits enforced on the branch, automated CI that blocks bad changes (tests, infrastructure, security), and an audit trail that links each commit to the Amp thread that produced it — often richer than a PR description. Code review by a second human is not on the control list. Amp is clear about scale: ~20 people, mostly engineers, high trust; they are not prescribing the same for a 2,000-person org. Today Thorsten Ball amplified the same stance on X: if PRs exist for bug-finding, spawn multiple frontier reviewers in a loop instead.

The rest of “The Amp Way” is the continuous-factory half. Agents work every handoff — bug report, code, push, CI, deploy, production checks, user follow-up — and a thread ends when the change has landed and is known to work, not when the code is written. Orbs keep agents waiting on humans rather than the reverse. Bugs skip the backlog: an orb starts on the report immediately. Feedback loops for the agent (end-to-end proof in the env and in production) outrank local coding speed.

## Why it matters for code review

This productively complicates the default “always keep a human PR gate” story without claiming lights-off for everyone. The scarce resource under agent volume is still verification; Amp’s answer is to move verification into always-on agent loops, signed authorship, and merge-blocking CI, then reserve human attention for judgment and feedback rather than ritual stamps. Compare [Curry’s rule that machines may block but never approve](/posts/curry-reviewing-agent-prs-machine-blocks-human-approves/), [CRBugBench’s warning that lights-off only fits narrow low-consequence changes](/posts/crbugbench-lights-off-software-factory-review-agents-miss-known-bugs/), and [Wieruch’s scored agentic review loop](/posts/wieruch-self-improving-agentic-code-review-loop/) — different teams, same pressure: continuous verification has to outrun the stamp queue.
