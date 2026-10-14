---
title: "Reviewing agent PRs: declare the scope, list the behaviour changes, read the code before the tests"
description: "Jun 23 (cross-posted Oct 6) Ahmet Zeybek: after agent PRs passed half of one service's changes and a two-approval PR dropped a schema default in production, the team moved review into failing CI checks. Median time to first review fell from 5 hours to about 2, median PR size from 310 lines to 160, and reverts within a fortnight from 6 a quarter to 1."
date: 2026-06-23
kind: field-note
source:
  title: "How we review pull requests that an agent wrote"
  url: https://zeybek.dev/blog/how-we-review-pull-requests-that-an-agent-wrote
project: steward
---

Ahmet Zeybek's team watched a coding agent go from about a fifth of the pull requests on their main service in January to over half by May. Their review process rested on an assumption nobody had written down: **whoever opened the PR understood every line of it.** That stopped being true. Then an agent made a schema change correctly, it dropped a default nobody noticed, and the PR went to production with two approvals.

"Read more carefully" was the first suggestion, and they rejected it. Reviewers were already slower on agent PRs. The problem was where they looked. Agent PRs carry the requested change plus a halo of plausible small edits next to it: a renamed variable, a removed default, a null check that changes behaviour, a test updated to match the new behaviour. The tests are weak evidence too, because the agent wrote them from the same understanding as the code.

## What changed

They didn't write guidelines; they added CI checks that fail. The PR description must declare its scope as files or directories, and any change outside it fails with a list of the strays. Any observable behaviour change, such as a changed default, a new error or a migration, must be listed, and the reviewer's first job is to check that list against the diff. Review tooling collapses the tests so the reviewer reads the code, forms a view, then reads the tests as claims to check. Every modified test needs a one-line reason. PRs over 400 changed lines get a request to split, which takes the agent about five minutes.

They also stopped things. A green suite is the floor, not a verdict. Agent PRs get one named reviewer instead of two, because **"Two half reviews add up to one review where nobody quite feels responsible."** And the author still owns the diff: "If the answer to a review question is 'I'll ask the agent', the PR went up too early."

## Why it matters for code review

This is what continuous verification looks like once agents write most of the changes: the review moves into checks that run on every PR, day or night, and the failure messages are written for the agent as much as the human. After a month most PRs arrived with scope and behaviour list already filled in. "The process taught the tool." The numbers they report after the checks went in: **median time to first review from 5 hours to about 2, median PR size from 310 lines to 160, and reverts within a fortnight from 6 in a quarter to 1**, and that one was a human PR. The review that's left is the part that needs a person, including running the change by hand for anything touching persistence, queues or external calls, which Zeybek says is the rule the team disagrees on most. It sits beside [splitting advisory agent tests from human-owned blocking checks](/posts/datacpp-advisory-blocking-ci-lanes-agent-patch/) and [PR size as a predictor of review findings](/posts/zest-866-agent-prs-size-predicts-review-findings/).
