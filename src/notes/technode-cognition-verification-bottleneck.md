---
title: "Cognition: when agents outpace humans, verification is the bottleneck"
description: "Sep 15 TechNode: Cognition’s Kevin Lee — more agent sessions are async than human-triggered; 89% of eng commits via Devin; judge by first-pass verification, not PR volume."
date: 2026-09-15
kind: field-note
source:
  title: "Why AI code verification is becoming the new engineering bottleneck"
  url: https://technode.global/2026/09/15/enterprise-ai-code-verification-cognition-kevin-lee/
project: steward
---

Kevin Lee (Head of Deployed Engineering APJ at Cognition) marks a quiet crossover on TechNode: for the first time, more of Cognition’s AI agent sessions are triggered asynchronously — by events, automations, schedules, and other agents — than by a human sitting in front of them. Inside their own eng team, **89% of the code engineers commit is committed by Devin**. Generation stopped being scarce. The scarce work is verifying what comes back.

The seductive demo is familiar: an agent picks up a customer complaint, diagnoses the issue, and opens a fix PR before an engineer has seen the bug report. Extend that pattern and the volume arrives. Proactive agents mint a stream of pull requests; **the review queue becomes the new backlog**. A change that arrives without evidence that it works transfers effort from writing to checking — human reviewers become the constraint code generation used to be. That bite is sharper in banking, insurance, telecom, and government, where production sits behind tightly controlled pipelines that demand evidence before trust.

Lee’s answer is to put verification inside the agent workflow, not after it. The agent starts the app in a cloud environment, exercises the affected flow in a real browser, and returns labeled screenshots, recordings, and explicit pass/fail assertions. Three practices keep that from drifting: (1) write a test plan grounded in the actual source before testing begins; (2) record expected behavior immediately before each action so an unexpected result is harder to reinterpret as a pass; (3) move repeated setup (login, etc.) into deterministic scripts so the run focuses on the behavior under test.

The metric that matters is what passes verification, not how much was generated. Cognition cites OCBC in Singapore lifting first-pass system-integration-test rates from below 50% to more than 80% after deploying the platform (alongside up to ~30% gains in code and test-case generation) — and the first-pass number is the one that says whether work is ready to move. Globally, they also claim Itaú now fixes 70% of security vulnerabilities automatically under the same proof-before-handback principle.

## Why it matters for code review

Always-on and overnight agent motion only compounds when each unit of work returns with independent evidence — not when a peak-session hero dumps unverified diffs into a morning queue. Lee’s receipt reframes FOMO about agents that aren’t working while you sleep: the scary failure mode is not idle compute; it is an always-on factory that mints review debt faster than harnessed verification can retire it. Judge by first-pass proof, not PR volume, or continuous throughput just relocates the bottleneck onto the humans who still have to merge.
