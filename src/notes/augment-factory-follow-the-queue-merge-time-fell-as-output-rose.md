---
title: "Augment's factory grew output 4.5× by automating wherever work piled up, starting with review"
description: "Sep 11 Akshay Utture, Augment Code: across 17,200 merged PRs from November 2025 to July 2026, size-adjusted output per developer rose 4.5× while median merge time fell from 11.2 to 3.1 hours and 14-day reverts fell from 1.9% to 0.4%. Review was automated first because its backlog was growing, and a human still makes every merge call."
date: 2026-09-11
kind: field-note
source:
  title: "Beyond AI Coding Agents: How We Built Augment's Software Factory"
  url: https://www.augmentcode.com/blog/beyond-ai-coding-agents-how-we-built-augments-software-factory
project: steward
---

By November 2025, Akshay Utture writes, "AI was already writing nearly 100% of Augment's new code." The company then spent eight months building persistent agent workflows around that code, and measured the result on **17,200 merged pull requests** across all of engineering. Size-adjusted output per active developer went from 12.3 to 55.7, or **4.5×**. Raw PRs per developer rose 2.7×, so the gain is not just smaller PRs. Over the same period **median time to merge fell from 11.2 hours to 3.1**, and the share of PRs reverted within 14 days fell from **1.9% to 0.4%**.

## Review came first because that is where the queue was

The order of automation was not the order of the lifecycle. "We started with automating code review because our review backlog was growing rapidly in January." Feedback triage came later, only "when our Slack feedback channels started to consume too much developer time." The rule they settled on: "We came to treat accumulated work as inventory." A growing queue anywhere, whether tickets, PRs awaiting review, changes awaiting verification or feedback awaiting investigation, "showed us where the next investment belonged." The plain statement of the risk: "Increasing code production alone would have created a larger review queue."

## Fewer touches per PR, and the merge stays human

A typical PR used to need "roughly 10–15 human touchpoints": asking an agent to explain the change, prompting fixes for CI and review comments, setting up a test environment, exercising the feature by hand. By August that was three: read a design-and-architecture report, inspect a verifier's runtime evidence (screenshots, logs from end-to-end testing), and make the final merge decision. Low-risk PRs can be auto-approved by a risk analyzer; everything else ends with a person. "We did not design the factory for total autonomy." Agents gather evidence and fix mechanical feedback, while engineers "approve production risk, and remain accountable for the systems after deployment." Utture is careful about causality: this is "a longitudinal case study, not a controlled experiment," model upgrades and work mix changed along the way, and revert rate "is not a complete measure of quality."

## Why it matters for code review

This is the strongest numbers-backed case so far that steady, always-on agent throughput only compounds when review capacity grows with it. Output went up and merge time went down together, and the stated reason is that they kept automating whichever stage was backing up rather than generating more code. It is also a vendor writing about its own product, so read the figures as one company's internal measurement. Compare Augment's earlier note on [specializing the PR-to-merge loop](/posts/augment-optimizing-pr-to-merge-loop/), [a fleet of 980 PRs where review was the bottleneck](/posts/kesterson-kenbishi-fleet-980-prs-review-is-the-bottleneck/), [letting review set fleet size](/posts/baldwin-heat-death-codebase-review-sets-fleet-size/), and [a factory that went dark when its reader ran out of time](/posts/nuetzel-software-factory-went-dark-reader-ran-out-of-time/).
