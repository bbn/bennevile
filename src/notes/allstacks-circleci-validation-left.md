---
title: "Validation has to move left twice — not into a bigger PR"
description: "Sep 1 Allstacks / CircleCI field note: 28M workflows, main success 70.8%, merge efficiency 3.9→1.3; put checks in the agent loop and adversarial review in the spec."
date: 2026-09-01
kind: field-note
source:
  title: "AI Code Review Is Failing and What To Do About It"
  url: https://www.allstacks.com/blog/ai-code-review-is-failing-and-what-to-do-about-it
project: steward
---

Jeff Keyes interviews CircleCI CTO Rob Zuber against CircleCI’s 2026 delivery data: ~28M workflows, 22k orgs. Feature-branch throughput up while median main-branch throughput down 7%; main-branch success 70.8% (lowest in five years vs a 90% healthy bar); Merge Efficiency Ratio 3.9 runs per merge for the median team vs 1.3 for the top twenty. The PR, Zuber argues, was built to keep strangers at arm’s length when writing software was expensive. Agent volume made the form the bottleneck: a 5,000-line alphabetized file list is about an hour of agent output, and human “read the whole thing” was already theater.

The fix is not a louder review bot on the same artifact. Validation moves left **twice**. First into the agent’s inner loop: CI-equivalent environment and hard done-criteria so a linter failure never waits for a cloud build (CircleCI models ~$700k of a $900k annual delivery cost for a 50-dev team as reachable). Second into the spec: Thoughtworks’ contextual-misalignment failure — code that compiles, passes tests, and does exactly what it was told while being wrong about the system or the customer — is decided before implementation. Escalate four risky lines with reasons, not five thousand undifferentiated hunks.

## Why it matters for code review

Optimizing PR review is the wrong question once generation is cheap. A factory that only adds AI comments to alphabetized diffs buys noise on an artifact designed for distrust, not for agent throughput. Move mechanical checks into the agent loop, put adversarial scrutiny on the spec, and reserve human attention for named risk — or keep burning 3.9 builds per merge while main stays red.
