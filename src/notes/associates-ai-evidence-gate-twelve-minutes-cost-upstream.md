---
title: "An evidence gate where the PR merges in twelve minutes because the review already happened"
description: "Oct 3 Associates AI: every AI-written PR must bring a numbered spec, a test seen failing then passing, a fresh-context review, green checks on the head commit, and a stated blast radius and rollback. One fix took twenty hours from issue to merge but twelve minutes from opening the PR. The gate still leaks, and the post lists where, including a health metric that stayed green while an agent answered nothing for days."
date: 2026-10-03
kind: field-note
source:
  title: "How we verify AI-written pull requests before they merge: our evidence gate"
  url: https://associatesai.team/blog/how-we-verify-ai-written-pull-requests-before-they-merge
project: steward
---

Mike Harrison of Associates AI, a managed agent-hosting company, starts from a familiar line: AI-written code is "usually almost right, which is the expensive kind of wrong." Because "almost right" reads fine in a diff, they stopped asking reviewers to be more careful and started asking every pull request to bring evidence.

## What every PR has to carry

The gate assumes the author, often an agent, can be confidently wrong. Each PR needs a spec with numbered acceptance criteria, a new test observed failing against the broken state and then passing, and a review by a reader that never saw the authoring conversation. Every finding from that review gets fixed, not only the blocking ones. Checks must be green on the exact head commit, read by someone rather than assumed from a branch rule. The description pastes real command output and states the blast radius and the way back. Infrastructure changes then go to staging, then to one canary instance alone, with a read-only suite that checks whether a real agent turn completed. They never run two production changes at once.

That last check exists because of incidents the old gate passed. In one, an agent answered nothing for days while its health metric stayed green, because the metric never made a real model call. In another, a bad image boot-looped every instance because nobody had booted it before promoting it.

## Where the time goes

The numbers are honest about being uneven. A deploy-tool fix took about twenty hours from issue to merged PR, but only about twelve minutes from opening the PR to merging it, "because the review and the failing-then-passing test had already happened before it opened." The cost sits upstream, in writing the spec and watching the test fail. They haven't measured cost per change, so they don't claim one.

## Why it matters for code review

This is what continuous verification looks like when it's moved before the PR rather than piled onto it. The post's list of leaks is the useful part: a failing test proves the test can fail, not that the suite covers what matters; some evidence, like the first production run, only arrives after merge; and one change that widened a model list passed the gate and merged, but measuring the runtime later showed it did nothing. They added a build check for it. Compare [a green run that only means the session exited](/posts/routines-runbook-green-run-is-not-task-success/), [evidence bound to the head commit](/posts/shipwright-code-factory-sha-evidence-harness-gap/), and [an unattended loop that can't bless its own done](/posts/excubitor-unattended-loop-cannot-bless-own-done/).
