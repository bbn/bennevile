---
title: "Unattended loops don’t have a token problem — they have a feedback problem"
description: "Sep 16 Signadot: loop cost = iterations × cost-per-iteration; guardrails cap waste, only high-fidelity feedback reachable inside the session shrinks both; platform owns the verification surface."
date: 2026-09-16
kind: field-note
source:
  title: "Agent Loops Don't Have a Token Problem. They Have a Feedback Problem."
  url: https://dev.to/signadot/agent-loops-dont-have-a-token-problem-they-have-a-feedback-problem-8p1
project: steward
---

Signadot’s Sep 16 essay is the cost-economics half of always-on factories. “Write loops, not prompts” means a small program hands the agent a goal, runs checks, feeds failures back, and retries until pass or budget — unattended, long-running, often parallel. That is exactly the shape of a spend problem. Interactive sessions had a human who could close the laptop. A loop removes that person by design; whatever one hour of watched agent spend looked like, a dozen overnight loops can burn without anyone noticing.

Two identical loops against the same repo can still produce very different bills. The separator is not the loop code — it is **what the loop can observe**. Guardrails (iteration caps, no-progress detection, spend ceilings) are necessary and insufficient: they bound how much a wasteful loop can waste; they do not make it less wasteful. Total loop cost is a **product**, not a sum: iterations needed × cost per iteration. Halving both quarters the bill. A floor under either term is a floor under the total no cap can lift.

Feedback quality sets the iteration count. A bare fail forces guessing; structured error from the real system localizes and moves on. Where the loop closes sets price per iteration: CI after the change leaves the session buys minutes-to-hours of pipeline queue and leaves the agent iterating on partial signals in between; a runtime the agent can call inside the session lands in seconds. Pulling high-fidelity feedback into the **inner** loop is the only move that shrinks both terms at once.

Distributed systems push both numbers the wrong way. Local tests and mocks are fast and low fidelity; staging/CI are high fidelity and slow. Loops pay for both, so neither end of the tradeoff is good enough at agent concurrency. The platform-shaped answer is a verification surface the organization owns: a runtime reachable in seconds (ephemeral environments that deploy only touched services and route request-keyed traffic through a shared baseline), a declarative definition of done agents do not invent, feedback detailed enough to localize faults, and controls that make spend forecastable. Application developers state checkable goals; platform engineers own what every loop passes through — the same CI/CD transition, with the new requirement that it works **during authoring**, before a PR exists, at whatever concurrency the loops generate.

## Why it matters for code review

Harnessed overnight momentum is not “more tokens while you sleep.” It is a verification surface cheap and faithful enough that continuous loops stop thrashing. Review bandwidth under sustained load is better spent on diffs that already failed closed against production-like evidence — not on reconstructing what a self-scoring overnight agent believed was done.
