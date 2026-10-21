---
title: "Fin: one skill guides the coding agent and the review agent, and a verifier is graded on its noise"
description: "Oct 12, Sonar's write-up of Fin principal engineer Kesha Mykhailov on The Next Commit. Technical plans nearly vanished once agents made code cheap, so Fin made small PRs auto-approvable, harvested senior reviewers' comments into a React skill that both writes and reviews code, and learned that a cheaper review model with identical recall was far noisier."
date: 2026-10-12
kind: field-note
source:
  title: "When agents outpace the organization"
  url: https://www.sonarsource.com/blog/when-agents-outpace-the-organization/
project: steward
---

Sonar's write-up of [Kesha Mykhailov, principal engineer at Fin, on episode 5 of The Next Commit](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/) starts from a now-familiar claim: agents made implementation nearly free, and the hard work moved rather than disappeared. Code can now [move faster than the organization can think, verify, and learn](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/). Sonar sells code verification, so read the framing with that in mind; the useful part is the Fin detail.

## The plan disappeared first

Before agents, a significant change at Fin started with a conversation and a technical plan shared in a Slack channel. Mykhailov says the temptation now is to skip that step, and the plans [almost disappeared](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/). The consequence lands on review: reviewers [reconstruct intent from a large implementation instead of reviewing against a known plan](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/), and product teams sometimes learn about a change only after it merges.

## Make the safe path the fast path

Fin's response was to change the economics rather than lecture. A pull request [above a certain size can't be approved automatically, while a small, safe change can](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/), so developers split their own work because small changes merge sooner. Extra review layers cover security, logical correctness, and the quality of the problem statement, and sensitive changes still go to a human. Mykhailov is candid that this is imperfect: no amount of review [surfaces the unknown unknowns that only production can](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/).

## One source of judgment for both sides

During Fin's move from Ember.js to React, early agents produced large changes that ignored the team's chosen patterns for forms, validation, and API access, and [a small group of senior engineers became the final verification layer](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/) under an unsustainable volume of reviews. The team harvested their review comments into a React skill, and that same skill now [guides the coding agent when it writes and the review agent when it assesses the diff](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/). Separate copies of the standards drift; a shared one lets review feedback shape the next generation attempt.

## A verifier is graded on its noise too

Fin's developers made their review agent, Shrek, green before showing a change to a human, so the verifier's quality became an input to delivery. Reviews are expensive, so the team tried moving the logic-error check to a cheaper model and tested it against hundreds of labeled historical PRs. [Recall looked identical](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/), but the evaluation never counted wrong findings, and within a week developers asked whether Shrek had become "a lot more picky." Fin now tracks three signals from real PRs: thumbs up or down on comments, suggestions adopted silently in the final diff, and [merges that proceed with human approval despite an active agent flag](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/), which it treats as a reliable sign of a false positive.

For teams running agents continuously, this is the volume problem stated plainly: when code gets faster to write, [the rest of the process has to keep new code within what the team can verify](https://www.sonarsource.com/blog/when-agents-outpace-the-organization/), and a noisy automated reviewer quietly spends the human attention it was meant to save. Compare [Vertrees on gates that cry wolf](/posts/vertrees-harness-failures-part-2-cry-wolf-gates-and-lint-theater/) and [the Claude Code team's risk-tiered review](/posts/anthropic-claude-code-team-risk-tiered-review-reverts-down/).
