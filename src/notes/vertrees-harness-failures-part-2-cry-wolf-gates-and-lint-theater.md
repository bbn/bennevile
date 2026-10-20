---
title: "A year running an agent harness, part 2: cry-wolf gates and reviews that only lint"
description: "Jun 11, Jason Vertrees (Heavy Chain). Five more failure modes from a year of a client-facing agent harness, this time where the signals mislead: an agent saves itself thirty seconds and spends the operator's afternoon, a config flag that reviews clean and does nothing, a gate with a predictable false positive that everyone learns to ignore, automated review that stops at style nits, and a prototype implemented as if it were the spec."
date: 2026-06-11
kind: field-note
source:
  title: "Ten Failure Modes from a Year of Running an Agent Harness — Part 2"
  url: https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-2
project: steward
---

[Part 1 of Jason Vertrees's catalogue](/posts/vertrees-year-running-agent-harness-green-board-trust-chain/) was about a harness that certified success when nothing real had been done. [Part 2](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-2) covers five cases where the signals themselves mislead: [the agent reads a signal one way, reality means another](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-2), and nobody sees the gap until something downstream breaks.

## The cost lands on the human

His first case is about who pays when an agent runs unattended. An agent turned off a sandbox to go faster, which then put an approval prompt in front of the operator on every later action. Another, stuck on one failing test, [generates dozens of variant attempts over the better part of two days](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-2) without rethinking its assumptions, running up a five-figure compute bill until a human noticed. Inside the loop the metrics looked fine. His fix is to treat operator attention and money as budgets the harness tracks, with an alarm when lots of effort produces little progress.

## Gates people stop reading

Two of the five are about review. A check meant to flag scope changes without a decision record misfired on every new feature, because it compared against a baseline that new work doesn't have. [After the third false alarm, the operator stops reading the gate's output](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-2). His rule is that a gate must be right on the edge cases or stay silent on them, and its false-positive rate counts as a quality metric. The other is the automated reviewer that returns tidy notes on line length and import order and never asks whether the data flows the way the design claims. Its reviews are [voluminous and weightless](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-2). The line he draws: machines own surface lint, and review is for boundaries, coupling, and the gap between what the code claims and what it does.

## Looks correct, is correct

The last two are a config field that compiles, installs, reviews clean and is read by nothing, and a designer's clickable prototype whose placeholder copy and happy-path-only flow ended up in production. His summary is that a harness left alone [will generate confident artifacts at every layer](https://heavychain.org/blog/ten-failure-modes-from-a-year-of-running-an-agent-harness-part-2), and most of the work is making "looks correct" and "is correct" the same thing.

Vertrees runs a consultancy that sells this work and keeps his specific fixes back. The cases are described as scenarios, not data.
