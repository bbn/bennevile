---
title: "Claude Code Review goes GA: reviews in 6 to 10 minutes, depth set per repository, and it never approves or blocks"
description: "Anthropic's managed pull-request reviewer left research preview for Team and Enterprise. Reviews run about 3x faster than in preview, admins choose Quick, Standard, or Deep per repository, findings pass a verification step before posting, and the merge decision stays with the team."
date: 2026-10-15
kind: field-note
source:
  title: "Code Review is now generally available"
  url: https://claude.com/resources/articles/code-review-is-now-generally-available
project: steward
---

Anthropic's announcement starts from a plain premise: [coding agents keep increasing the pace at which teams write code, and the review bottleneck hasn't eased](https://claude.com/resources/articles/code-review-is-now-generally-available). Code Review is now [out of research preview for Claude Team and Enterprise organizations](https://claude.com/resources/articles/code-review-is-now-generally-available), a release [reported on Oct 15](https://aheadofthebot.com/news/2026-10-15-anthropic-claude-code-review-ga/). The preview we covered in March [ran around 20 minutes a review](/posts/claude-code-review-research-preview/).

## What changed for general availability

Preview users said it caught real issues before a human looked, but [wanted reviews that were quieter, sized to each change, and faster](https://claude.com/resources/articles/code-review-is-now-generally-available). The answer on speed is that [most reviews now finish in about 6 to 10 minutes, down from about 20](https://claude.com/resources/articles/code-review-is-now-generally-available). On sizing, admins [choose Quick, Standard (the default), or Deep for each repository](https://claude.com/resources/articles/code-review-is-now-generally-available), so a routine codebase gets a light pass and a critical one gets a deep review; [a more thorough level costs more](https://code.claude.com/docs/en/code-review). On noise, findings are meant to [state the problem, what triggers it, and the fix in a few sentences](https://claude.com/resources/articles/code-review-is-now-generally-available). Anthropic also says it [runs Code Review on its own pull requests](https://claude.com/resources/articles/code-review-is-now-generally-available).

## The shape of the reviewer

The documentation describes [four stages: several agents examine the diff and surrounding code in parallel, a verification step filters out false positives, the survivors are deduplicated and ranked by severity, then posted](https://code.claude.com/docs/en/code-review). By default it [focuses on correctness, bugs that would break production, not formatting or missing test coverage](https://code.claude.com/docs/en/code-review), and it [works from reading the diff and surrounding code, without building or running it](https://code.claude.com/docs/en/code-review). Two governance choices matter for teams running agents around the clock. The reviewer's instructions come from [`REVIEW.md` on the base or default branch, never from the pull request's own changes](https://code.claude.com/docs/en/code-review), so an agent-authored PR cannot rewrite its own grading rules. And [a review never approves or blocks the pull request, and its check run doesn't conclude as a failure](https://code.claude.com/docs/en/code-review). That makes it a fast first pass, not a merge gate: the docs warn that [a review with no findings doesn't mean the code is error-free or secure](https://code.claude.com/docs/en/code-review), so the acceptance decision, and the human capacity behind it, still sets the pace. Compare [CRBugBench on what review agents still miss](/posts/crbugbench-lights-off-software-factory-review-agents-miss-known-bugs/).
