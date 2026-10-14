---
title: "Agents made CI the bottleneck, but a faster pipeline still checks the wrong thing"
description: "Oct 4 Arjun Iyer (Signadot): Anthropic's CI jobs grew 25x in six months and Linear's suite nearly quadrupled, yet faster CI still verifies a repo, not the distributed system. He argues verification moved from a human gate to an automated one without anyone asking what the gate checks."
date: 2026-10-04
kind: field-note
source:
  title: "Agents have made CI the bottleneck. Faster pipelines are the wrong fix."
  url: https://thenewstack.io/ci-bottleneck-agent-verification/
project: steward
---

Arjun Iyer reads three September posts together. Anthropic reported that its **CI job volume grew 25x in six months** and fixed it with test impact analysis. Linear said its **test suite nearly quadrupled since January**, with agents now writing most of its tests, and reworked its pipeline end to end. Depot's CEO wrote that CI's future is giving agents a way to validate code as they work. Iyer's verdict is that all three are right about the problem, and two are fixing the wrong layer.

He says agents broke CI's arithmetic in two ways. The first is **volume**: when one engineer runs several agents in parallel, PR count rises "by a multiple, not a percentage," and Blacksmith, which sells CI runners, says its job count grows **5% to 10% week over week**. The second is **placement**: CI runs after the PR exists, so an agent that waits 20 minutes for a red check has lost its working context by the time the result arrives. "The agent is fast, and the loop around it is slow."

His central claim: **"CI got slow because verification moved from a human gate to an automated one without anyone asking what the automated gate checks."** For a service that is one of forty, a green pipeline means the change passed against mocks of everything else. The failures that hurt live in the seams: a renamed response field, a tightened timeout that cascades into retries elsewhere, a schema change that locks a table in staging. He cites DORA's finding that higher AI adoption goes with more delivery throughput *and* more instability. His proposed fix is to verify against the real system **inside the agent's loop, before the PR**. Lightweight per-change environments share one stable cluster, and platform teams write governed verification steps once for agents to call. The output is a record of which requests were sent, which services were touched, and which contracts held, so CI becomes a confirmation step. Iyer's company, Signadot, sells that layer, so read the prescription with that in mind.

## Why it matters for code review

This is the verification tax of always-on agents seen from the pipeline side. More agent hours do not compound if every round trip loses context and the gate checks a narrower question than the one reviewers care about. The useful idea for review is the evidence record: a reviewer or merge gate can read that a change was exercised against live dependencies, rather than inferring it from a green check on a repo. It also adds a caution for anyone scaling overnight output. Speeding up a gate that checks the wrong thing just ships breakage faster. Pair with [Anthropic's own account of agentic coding straining CI](/posts/anthropic-agentic-coding-straining-ci/) and [Goossaert on mechanical gates that the model cannot talk past](/posts/goossaert-backlog-loop-mechanical-gate-dark-factory-slop/).
