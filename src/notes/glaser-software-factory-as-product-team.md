---
title: "The factory is a product-team operating model, not a merge queue"
description: "Sep 15 Robert Glaser: encode judgment as backpressure and Outcome Grading; keep humans collaborating on intent; improve the factory while it builds — review FOMO is the wrong bottleneck."
date: 2026-09-15
kind: field-note
source:
  title: "How should we approach the software factory as a product team?"
  url: https://www.robert-glaser.de/approach-the-software-factory-as-a-product-team/
project: steward
---

Robert Glaser’s Sep 15 note is a productive complicate of overnight and always-on factories: **agents amplify the culture they arrive in**, including the neglect of product work. A team that used to spend a week building the wrong thing into one merge request now floods a 1,000-MR queue — and then treats clearing that queue as the hard problem. Responsibility for what ships still sits with people; the scarce work is making judgment usable by machines before humans stand at the line inspecting nonsense.

The practical move is early, cheap **backpressure** inside the agent’s working cycle: compiler errors, focused failing tests, architecture checks that flag forbidden dependencies, accessibility rules that reject a missing label. At the review gate, specialized agents attack from named angles — security, UX task completion, design-system conformance — with their own instructions and fresh context so they can challenge the builder independently. Humans still own product judgment that resists a green check: could someone actually make the intended decision? Does the interaction fit the situation? Has the agent answered a specific problem with a plausible generic?

He borrows HumanLayer’s context-efficient backpressure rule — **success is silent; only failures produce verbose output** — and names the product half **Outcome Grading**: rubrics, good/bad examples, realistic scenarios, and reasons for rejection that the team’s domain knowledge must shape. Specs help express intent, but finishing understanding before building does not; keep the messy human discussion as source material, let agents structure it, and treat building as part of specifying. Cheaper implementation should buy serious alternative approaches under real constraints, not just more merge candidates.

The factory itself is an **operating model** you reshape while working inside it: when agents keep guessing a domain rule, improve the context they can find; when the same failure class hits review again, catch it mid-run next time; when an evaluation accepts something useless, investigate the evaluator. Responsibility remains — for consequential changes the team should still explain the architectural decision, the assumptions that must hold, and the failure plan. He is careful about “self-improving factory” promises until evaluation-driven development is practiced; useful, inspectable recommendations across loops are already substantial progress. Metrics that punish exploratory direction changes as rework will teach teams to avoid discovery.

## Why it matters for code review

Continuous harnessed throughput compounds past peak-session mastery only when product and domain judgment become machine-usable signals *before* the morning review pile. FOMO that agents sit idle overnight is the wrong scarcity signal when the queue is full of plausible wrong product. Pair always-on factories with Outcome Grading, silent-success backpressure, and a factory backlog owned alongside features — or overnight volume just industrialsizes the product mistakes that used to arrive one MR at a time.
