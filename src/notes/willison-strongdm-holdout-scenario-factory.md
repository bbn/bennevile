---
title: "StrongDM via Willison: holdout scenarios so agents cannot review their own homework"
description: "Feb 7 Simon Willison on StrongDM’s dark factory: no human-written or human-reviewed code; scenarios as holdout sets; Digital Twin Universe clones of Okta/Jira/Slack for high-volume satisfaction scoring."
date: 2026-02-07
kind: field-note
source:
  title: "How StrongDM’s AI team build serious software without even looking at the code"
  url: https://simonwillison.net/2026/feb/7/software-factory/
project: steward
---

Simon Willison’s Feb 7 write-up of StrongDM’s AI lab is the clearest public unpacking of a **dark factory**: specs and scenarios drive agents that write code, run harnesses, and converge under the rules “code must not be written by humans” and — the harder one — “code must not be reviewed by humans.” The team’s mantra includes a spend check ($1,000/day/engineer on tokens as a signal the factory is actually running). Willison’s useful skepticism on that cost still leaves the quality architecture intact.

The core move is treating **scenarios as holdout sets**. End-to-end user stories live *outside* the coding agents’ visibility (like a train/test split). Agents cannot `assert true` their way through because they never see the acceptance corpus. Validation shifts from boolean green suites to probabilistic **satisfaction**: of observed trajectories through scenarios, what fraction likely satisfy the user? To run that volume — including on security-adjacent permission software — they built a **Digital Twin Universe**: agent-built behavioral clones of Okta, Jira, Slack, Google Docs/Drive/Sheets, aimed at SDK-client compatibility so thousands of scenarios/hour can run without rate limits or production blast radius. Gene transfusion, semports, and pyramid summaries name other factory techniques; Attractor ships as specs-you-feed-to-your-agent rather than a binary.

## Why it matters for code review

Always-on generation without an independent judge is theater. StrongDM’s holdout wall relocates review into a separate evaluation surface — continuous, high-volume, and invisible to the builder — so sustained overnight momentum can compound without turning morning humans into rubber stamps for self-graded diffs. The productive complication Willison flags is cost and clone fidelity: bursts of supervised Claude can still win when you cannot afford swarm QA or when twins drift. The portable lesson for agentic SDLC is the isolation itself: if the implementer can see the exam, your verification tax is fake.
