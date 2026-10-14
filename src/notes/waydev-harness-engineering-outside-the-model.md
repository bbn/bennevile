---
title: "Harness engineering: the AI SDLC is won outside the model"
description: "Sep 10 Waydev: five of six links from capability to shipped value are harness work — verification is the new bottleneck, autonomy is a blast-radius grid, and flow metrics beat adoption dashboards."
date: 2026-09-10
kind: field-note
source:
  title: "Harness Engineering: The AI SDLC Is Won Outside the Model"
  url: https://waydev.co/harness-engineering-the-ai-sdlc-is-won-outside-the-model/
project: steward
---

Alex Circei’s Sep 10 Waydev essay is the plain-English case for continuous harnessed factories over model bake-offs. Teams argue about which frontier model writes the best code while the orgs actually shipping swap models three times a quarter and barely notice — because the model was never the hard part. Circei’s frame: the model is an engine; the harness is everything between engine and outcome (context assembly, memory, permissions, workflow, guardrails, evaluation, routing, observability, integrations). Two orgs can license the same model and differ by an order of magnitude; the entire delta lives in the harness.

The conversion chain makes the claim operational. Capability becomes value only through six links — intent→task, task→grounded prompt, prompt→candidate, candidate→verified change, verified→shipped, shipped→measured value — and **only one** of them moves when you upgrade the vendor. Skip verification and review queues absorb the generation gain; seniors become graders of plausible code written by nobody. Skip measurement and there is no second year of budget. Context assembly is the underrated layer: the window is a budget, not a bucket; recall broadly, rank by relevance/recency/ownership/blast radius, then fit — noise dilutes attention and spend. Autonomy is a **grid**, not a switch: docs/tests/tooling can run hot from day one; shared libraries gate harder; core/regulated systems keep a human in the decision. Promote one cell at a time when evidence from the cell below supports it.

The failure pattern that looks like success: adoption metrics climb, PR volume climbs, then review latency stretches, rework rises, and change failure rate moves the wrong way. Nothing “broke” — the bottleneck relocated. The response is not to slow generation; it is to make verification scale at the same rate (gating tests, in-loop static/security, agent-behavior evals, progressive delivery). Circei’s line worth keeping: an agent that verifies its own work before a human sees it is worth several that do not. Three early failure modes: the pilot that never scales (a few strong engineers *are* the harness personally), volume without verification, and the model treadmill as displacement activity.

## Why it matters for code review

Steady harnessed throughput compounds past peak-session heroics only when verification, permissions, and measurement sit in the same factory as generation. Waydev relocates the overnight FOMO argument: if agents can work while you sleep, your review latency and change-failure curves have to absorb the volume — or continuous motion just fills queues with ungraded diffs. Pair with Cognition’s verification-first framing and OpenAI’s agentic factory receipts: win the links outside the model, then let the model be a swappable engine.
