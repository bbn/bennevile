---
title: "Teamscale: the bottleneck moved from writing code to trusting it, and deterministic checks pay the verification tax"
description: "Teamscale's Sven Amann cites Faros data showing review time up 441.5% as AI adoption rose. A plausible-but-wrong agent investigation on a 2.2M-line codebase was settled by system tests run against the real implementation, not by closer reading or a second model."
date: 2026-10-04
kind: field-note
source:
  title: "The bottleneck moved: from writing code to trusting it"
  url: https://teamscale.com/blog/agentic-engineering-the-bottleneck-moved
project: steward
---

**Sven Amann** at Teamscale opens a series on keeping quality up when agents write the code. He cites Faros telemetry from 22,000 developers: once most of a team used AI tools weekly, **average PR size rose 51.3%** and **files touched per developer per month rose 149.9%**, while **median time to first review rose 156.6%** and **median time in review rose 441.5%**. Generation sped up. Assurance slowed down.

The core problem is that **agents' bad code and good code look the same**. DORA calls the cost of checking it a *verification tax*. On Teamscale's roughly 2.2 million lines, developer Mattis Kämmerer asked an agent how duplicate uploads of findings, metrics, and coverage are handled. It gave a confident theory for each, and **all three were wrong**. The agent assumed one consistent rule. In reality coverage is merged, the later upload wins for findings, and the metrics behavior was arbitrary, which turned out to be a real bug. What settled it was having the agent **write system tests and run them against the real implementation**, "like an oracle where I can ask the implementation: how do you actually behave?" Closer reading didn't settle it, and neither did a second model's opinion.

Amann's conclusion: **every question a deterministic harness settles is one that no longer costs human attention**. That means checks for whether a change is tested, respects the architecture, repeats a known defect pattern, or duplicates existing code, all running at the rate code arrives.

## Why it matters for code review

This is the case for always-on verification in plain numbers. Throughput only holds up if the checks scale with it, and the checks that scale are the ones that return the same answer however convincing the agent sounds. It's a vendor's post, and the figures come from Faros, JetBrains, and DORA rather than Teamscale's own data. Read beside [the verification tax as the real agent bill](/posts/bluelupin-verification-tax-real-agent-bill/) and [Faros on five layers of harness engineering](/posts/faros-harness-engineering-five-layers/).
