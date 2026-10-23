---
title: "Gargeya Sharma: 15% of agent PRs used 59% of AI reviews, so the loop got a four-round cap that survives a failed poll"
description: "Across 197 merged PRs and 444 Codex reviews in two weeks, the median PR needed one review but 30 PRs took 261. Sharma capped the review-fix loop at four rounds, moved the bar after round two, and the reviewer then found a bug in the cap itself."
date: 2026-10-17
kind: field-note
source:
  title: "Why 15% of Pull Requests Used 59% of Our AI Review Budget"
  url: https://www.sgargeya.com/journal/capping-ai-code-review-rounds
project: steward
---

In **Gargeya Sharma**'s repository, every pull request gets an automatic Codex review, and the agent that wrote the PR reads the findings, fixes them, pushes, and asks again. It is a good loop with [no exit condition](https://www.sgargeya.com/journal/capping-ai-code-review-rounds). One PR in early October went through **25 review rounds and 46 commits** before it merged.

Sharma pulled every merged PR from October 2 to 16: **197 PRs and 444 reviews**. The median PR used one review. But **30 PRs (15%) went past four rounds and consumed 261 reviews, 59% of the total**, and ten went to ten rounds or more. Reading the long threads turned up three patterns: the agent fixes the one flagged line and the same fault reappears two files away; each fix adds a new guard or branch to review; and round 12 is judged like round 1, so style notes keep the loop alive after the real bugs are gone.

The rule that followed is **a hard cap plus a moving bar**. At most four rounds, where a round is one review of one pushed head commit. In rounds one and two the agent fixes every finding and the same fault everywhere else in the change. From round three it fixes defects only, meaning wrong behaviour, crashes, broken builds, data loss, security or privacy holes, or docs the code contradicts; everything else gets a reply or an issue link. After round four comes one last push, no new review request, and a merge when CI is green. The cap lives in a hook as well as in the agent's review skill, and Sharma notes that **the hook is the part that cannot be argued with**.

Then the PR that added the cap went through the cap. Round four, the last one allowed, **found a real bug in the cap**: the hook polled GitHub every two minutes, and if one poll saw round four and the next failed with a network error, it forgot and told the agent to request a fifth review. The fix is a sticky flag plus an end-to-end test that fakes GitHub returning HTTP 502. The counts come from the GitHub API for one repository over two weeks.

## Why it matters for code review

An always-on review loop has a cost curve with a long tail, and the median hides it. The useful lessons here are that a limit on an unattended loop has to hold through the failures that happen at 3 a.m., and that the code governing review deserves review too. Read beside [Tessl's finding that 8.5% of PRs ate 47.4% of review-loop spend](/posts/tessl-75-percent-prs-merge-without-human-review-loop-spend/) and [the Claude Code team's three-round cap after a fifty-round overnight loop](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
