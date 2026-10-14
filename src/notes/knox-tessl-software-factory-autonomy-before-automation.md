---
title: "Tessl's Dru Knox: build agent autonomy before you stop reviewing, and expect the improvement work to lose to deadlines"
description: "In an Oct 6 AI Engineer talk, Tessl's Dru Knox splits factory progress into autonomy (how often humans correct the agent), automation (how much ships without review) and quality, in that order. He says the loop work that drives them is unplanned and keeps losing to feature deadlines, and proposes manual takeovers, human PR comments and agent-started PRs as the scoreboard."
date: 2026-10-06
kind: field-note
source:
  title: "Harness Engineering: How to Build a Software Factory — Dru Knox, Tessl (AI Engineer)"
  url: https://www.youtube.com/watch?v=X6l4lpA0_NY
project: steward
---

Dru Knox, head of product at Tessl, gave a 20-minute [AI Engineer talk](https://www.youtube.com/watch?v=X6l4lpA0_NY) on what he calls harness engineering, which he notes people have started calling loop engineering. His working definition of a software factory is a setup where agents create everything shipped to users and the engineering team's job is improving the factory. The last few minutes are a Tessl product walkthrough; the framework before that is tool-agnostic. This note draws on a [detailed timestamped summary](https://finance.biggo.com/podcast/00d465363b0eca3f) of the talk.

## Autonomy and automation are different, and the order matters

Knox tracks three things. Autonomy is how often a human has to correct or nudge the agent. Automation is how much you let through without human review. Quality is how good the product is for users. "You can have high autonomy in the sense that agents frequently are one-shotting the problems you're giving them, but low automation because you don't trust it yet," he says. His sequence is autonomy first, then automation, holding quality flat, and only then expecting quality to rise.

He maps that onto three loops. The inner loop is cheap checks the agent runs constantly while building a PR, which raises autonomy. The outer loop is expensive checks run once per PR, such as agentic QA and mutation testing, which replace review a human would otherwise do. The meta loop reads agent logs, PRs, issues and user feedback for mistakes a human had to fix, then changes the inner and outer loops so the mistake can't recur. Scheduled repo sweeps, daily, nightly or weekly, live there.

## Why teams stall

The part worth reading twice is about people, not tooling. Knox says loop work is unplanned: you can't know in advance whether or how an agent will fail on a feature. "You either don't do it and you get stuck in the local maxima of the agent never improves, or you do it and you miss your deadline for the feature and you get in trouble, and so no one ever does it." He adds that the signals needed to improve agents usually sit in someone's local session logs or head, so step one is moving work onto surfaces where every correction is recorded: issue in, headless agent in a sandbox, PR out, humans responding in PR comments.

His proposed scoreboard is fewer manual takeovers, fewer human PR comments and more PRs started without a human.

## How it fits

Knox's claim that factories end up raising quality, because the backlog disappears and frees time for test quality and refactors, is asserted rather than measured, and the summary flags that it doubles as Tessl's commercial case. The closest measured counterpart is [Twill's six months of agent PRs](/posts/huston-twill-factory-guardrails-cut-hotfixes-slowed-merges/), where a testing rule in the agent's instructions held only once coverage became a required check, and hotfixes fell while merges slowed. Compare [checks that became their own fallible layer](/posts/ferris-bonilla-assuring-ai-written-software-checks-became-fallible-layer/), [reviewing the plan instead of the code across 562 PRs](/posts/indeev-562-prs-review-the-plan-not-the-code/), and Tessl's earlier [review standards packaged as skills](/posts/tessl-code-review-standards-as-skills/).
