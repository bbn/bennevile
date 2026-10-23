---
title: "Cutting an agent's review loop short can double the bugs that escape"
description: "A worked guide to the coding-agent and AI-reviewer loop argues that the long tail of overnight review rounds was doing hidden work. In its simulation, stopping at one clean pass let 24.4% of bugs through, against 13.1% for the noisy loop; requiring two clean passes kept escapes flat with half the fix rounds."
date: 2026-10-20
kind: field-note
source:
  title: "How to Stop a Coding Agent and an AI Reviewer From Looping on One Pull Request"
  url: https://theaicommit.com/2026-10-20-how-to-stop-a-coding-agent-and-an-ai-reviewer-from-looping/
project: steward
---

[The AI Commit wrote up the loop](https://theaicommit.com/2026-10-20-how-to-stop-a-coding-agent-and-an-ai-reviewer-from-looping/) that forms when a coding agent answers an AI reviewer on its own. The reviewer leaves comments, the agent treats every comment as an instruction, each fix is a new commit, and the reviewer runs again. The loop ends at the first review with nothing to fix. The starting numbers come from [the Claude Code team's account of its own review process](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/): before they changed their rules, 8.9% of internal pull requests needed five or more review rounds, one ran more than fifty rounds overnight, and about 59% of what later rounds flagged was code that was there before the change.

The comparison it draws is a flaky test suite with a retry-until-green rule. Builds get slower, and a real failure that shows up half the time slips through on one lucky run. A single clean review is the same kind of weak evidence when the reviewer catches each real bug only about half the time on any one pass.

**The obvious fixes lose bugs.** Capping rounds or filtering out nits both shorten the loop. But in the piece's simulation, with a reviewer that catches each real bug half the time, cutting the noise and stopping at one clean pass let 24.4% of bugs escape. The noisy loop let 13.1% escape, because its extra rounds were accidental second looks. The proposed gate blocks only findings that are new, tagged important, and on a line the pull request changed. Repeats are matched on file, line, and rule and dropped. The gate passes only after two clean reviews in a row, and hands the pull request to a person after three fix rounds. In the same simulation, fix rounds fell from 2.07 to 1.01 per pull request, no pull request needed five rounds, escapes stayed at 13.1%, and 13.4% of pull requests went to a person.

The limits are stated in the piece. The headline escape numbers come from a simulation, not a production repository. A second clean pass only counts if it can miss different things than the first, so a reviewer run with the same prompt and settings twice proves little. And a gate that sends one pull request in eight to a person needs someone who actually reads them.

## Why it matters for code review

An agent that keeps working unattended will run as many review rounds as the stop rule allows, so the stop rule is where quality gets decided. The useful point here is that the wasteful-looking rounds were also catching bugs. Making the loop cheaper by trimming it trades CI time for escapes nobody sees. The suggested baseline is cheap to collect: rounds per pull request, the share needing five or more, and reverts within a week of merge, before changing anything.
