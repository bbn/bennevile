---
title: "How many coding agents to run? About as many as your reviewers can check"
description: "Sep 29 (revised Oct 1) Tom Baldwin, Polymorphism: a sizing model for agent fleets built on contention, coordination and rework. Rule of thumb: up to five agents per product and no more than reviewers can check. In a first trial, even a 21-second model reviewer became the bottleneck at ten agents."
date: 2026-09-29
kind: paper
source:
  title: "The Heat Death of the Codebase? On Paying Maxwell's Demon a Day Rate"
  url: https://www.poly.io/writing/heat-death-of-the-codebase/
project: steward
---

Tom Baldwin's working paper asks the question every always-on factory eventually hits: if agents cost only tokens, how many should you run? His answer is "not as many as you can afford." Every change still needs someone's judgement, and every change makes some waste in the form of conflicts, regressions and fixes that need fixing. As the fleet grows, that waste grows faster than the output.

The model combines three old effects: steps that happen one at a time (merge queue, CI, a human approving), coordination cost that grows with every pair of agents, and rework that compounds because fixes need fixes too. Finished work is then capped at what reviewers can check. The rule of thumb that falls out is **up to five agents per product, and no more than your reviewers can check**. A careful reviewer keeps up with about one agent, two if tools do half the checking, three or four if tools do most of it. In 20,000 simulated single-codebase teams, that rule came within 10% of the best output for 84%.

## The trial

A rehearsal run put Claude Haiku 4.5 workers against 220 small, tested tasks, with one Claude Opus model reviewing every change and hidden tests checking what it approved. The reviewer took about **21 seconds a change, roughly 170 reviews an hour**, and still became the limit. With ten agents it was busy 88% of the time and its queue grew from nothing to 29 changes waiting. It sent 39% of changes back, and 2 of the 71 it approved, about 3%, failed hidden tests it never saw.

## Why it matters for code review

This complicates the case for running a bigger fleet around the clock. Adding agents doesn't raise finished work once review binds. What raises it is better verification: tests, types and automated checks that cut how much comes back. An agent reviewer lifts the ceiling, but it changes the question from "who has time to read this?" to "who checks what the reviewer let through?" Baldwin also models the reviewer who speeds up instead of letting a queue form, and finds the trade turns bad once an escaped defect costs more than about 20 changes' worth of later work at a 3% escape rate. It's a model with thin defaults and one afternoon of trial data; the full experiment is still to run. It sits well beside [review demand measured in minutes](/posts/lawzava-review-queue-real-agent-limit-review-minutes/), [a hard cap on open reviews](/posts/legendev-build-engine-max-open-review-human-rate-limiter/), and [PR size as a predictor of review findings](/posts/zest-866-agent-prs-size-predicts-review-findings/).
