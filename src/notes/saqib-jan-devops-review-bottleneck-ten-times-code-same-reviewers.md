---
title: "DevOps.com: ten times the code, the same reviewers, and dashboards that only count generation"
description: "Oct 21, Saqib Jan on DevOps.com. Agent adoption moved the constraint to the review queue. Qodo's Itamar Friedman puts the arithmetic at two 100-line PRs a week becoming two to five 1,000-line PRs a day; the recommended fixes are capping generated PR size, review agents rewarded differently from coding agents, and putting review wait time and depth next to velocity."
date: 2026-10-21
kind: field-note
source:
  title: "Coding Agents Moved the Bottleneck From Writing to Reviewing PRs"
  url: https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs
project: steward
---

Saqib Jan's [DevOps.com piece](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs) restates the review-capacity problem with vendor voices from TestMu AI and Qodo, both of which sell review or testing agents, so read the prescriptions with that in mind. The framing is still useful for anyone running agents around the clock: coding agents multiplied pull requests, but [the number of people reviewing them has, for quite some time, been flat](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs).

## The arithmetic

Qodo CEO Itamar Friedman gives the order of magnitude. A developer used to open about two pull requests a week of roughly a hundred lines each; [the same developer may now open two to five pull requests a day with up to a thousand generated lines in each](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs). Even at equal defect density per line, [ten times the code would still put ten times the issues in front of the same reviewers](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs). Hiring does not close that gap, because [generation compounds while headcount grows one hire at a time](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs).

## The dashboard only counts one side

TestMu AI's Mayank Bhola argues that leaders see throughput gains but not [the compounding quality debt that accumulates when review capacity does not scale with generation capacity](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs). The first sign is usually [how long pull requests sit untouched and how thinly they get read](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs). His suggested starting point is to track time to first review alongside how much code each reviewer approves in a day, and to put [review wait time and review depth on the same dashboard as the velocity numbers](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs).

## Separate the reviewer from the writer

Two concrete moves. First, cap how much generated code one pull request can carry, since [a reviewer reads a hundred-line diff with far more care than a thousand-line one](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs). Second, build review agents on different terms: a coding agent is rewarded for code that compiles and meets requirements, while a review agent [has to be rewarded for catching what the coding agent missed without raising false alarms](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs), and one built on the same model [inherits the same blind spots](https://devops.com/coding-agents-moved-the-bottleneck-from-writing-to-reviewing-prs). The piece is light on first-party data, but it lines up with [Csorba's cap on work in progress per reviewer](/posts/csorba-background-agents-queue-is-the-spec-cap-per-reviewer/), [Fin grading its review agent on false positives](/posts/sonar-fin-shared-standards-independent-review-verifier-noise/), and [LinearB's agent PR yield gap](/posts/linearb-agentic-pr-yield-ownership-gap/).
