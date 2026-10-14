---
title: "A round-the-clock agent factory: the ceiling is usage limits, not rules"
description: "Cabinlytech (Oct 2) runs a standing team of Claude Code builders plus one advisor agent that merges and deploys, all day and night. Each ticket carries its own failing and passing commits, a red ticket is dropped from the release train rather than debugged inside it, and the advisor reads the running commit back from the server before closing anything. Their verdict: more rules do not make it faster; model usage limits and disk do."
date: 2026-10-02
kind: field-note
source:
  title: "Running a 24/7 AI software factory: builders and one advisor (Cabinlytech)"
  url: https://cabinlytech.com/blog/running-a-24-7-ai-software-factory/
project: steward
---

[Cabinlytech's write-up](https://cabinlytech.com/blog/running-a-24-7-ai-software-factory/) starts from a backlog of several hundred tickets, a fixed deadline, and a bar for proof that could not be lowered. One long agent session fails that in a predictable way: it forgets what it promised, it waits when it is blocked, and when it crashes the plan goes with it. So they built a small company out of agents that runs around the clock: several builders, one advisor, one human owner.

## Evidence belongs to the ticket, not the batch

Builders never push. Each one works test-first in its own area of the codebase: a failing test, a passing test, then a deliberate break to prove the test actually catches it. Finished tickets ride together in a release train, one pull request with required checks. The rule that matters for review is that "the train passed" is never proof for a ticket; each ticket keeps its own commits and tests. A red ticket is dropped to the next train instead of holding the train to debug it. The advisor merges only when every check is green, and it does not trust a green deploy job either: it reads the server's health endpoint until it reports the merged commit.

## What broke

The failures are the useful part. A usage limit froze every agent at once, and killed sessions came back under new names; work survived only because all state lived in plain files. A shared commit lock behaved as a race that later arrivals kept winning until it became a first-in, first-out queue. Dropping one ticket also removed safety checks it had added. And the advisor was wrong with confidence, twice, which became a written rule: measure before ruling, and change position only on new measured facts.

## How it fits

This is a clean case of steady, verified throughput over heroic sessions: the factory closes dozens of tickets a day because it keeps moving while sessions die, not because any one session is brilliant. Their conclusion also complicates the idea that more process means more safety at speed. More rules did not make it faster; the levers were more parallel trains and more model capacity, and they now spread builders across separate accounts so one limit pauses one builder rather than the whole factory. Pair it with [counting accepted work instead of commits](/posts/jeong-software-factory-queue-not-commit-counter/) and [a harness that owns the commit while the builder only proposes](/posts/benikigai-nightshift-evaluator-owns-commit/). Note that the post ends by pitching the authors' own factory-setup service.
