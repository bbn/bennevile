---
title: "Beyond generation: Verification Tax and Production-Qualified Change"
description: "Bhati’s Sep 2026 synthesis names the attenuation curve from agent commits to releases, and reframes output as PQC — changes that cleared review, test, security, and ops gates."
kind: paper
date: 2026-09-04
source:
  title: "Beyond Code Generation: Reliability, Verification, and Cost Economics in the Agentic Software Development Lifecycle"
  url: https://arxiv.org/abs/2609.04681
project: steward
---
Happy Bhati’s systems synthesis (Northeastern) is not a new model paper. It stitches field experiments, industrial reports, and cost evidence into four named constructs for running agents as a production system: the Agentic SDLC Throughput Paradox, Production-Qualified Change (PQC), the Verification Tax, and an Agentic SDLC Control Plane.

The receipt that sticks is Demirer et al.’s attenuation curve, which Bhati puts front and center: autonomous-agent coding activity up ~180% at the commit layer, ~50% at projects, ~30% at releases. Local generation accelerates; the weak-link stages — review, integration, security, deploy, ops — do not. Google’s ~60 minutes of active author shepherding per change between send-for-review and submit is treated as evidence that review cost is already a first-class runtime, not a polite ceremony after the “real work.”

PQC is the useful unit swap. A PR or patch is not finished output. Credit lands only after the change clears the relevant review, test, security, deployment, and operational gates. The Verification Tax makes the rest of the bill explicit: CI minutes, reviewer attention, security scans, rework, escaped failures — not just tokens. The proposed control plane then allocates models, retries, tests, and human review against risk, reliability evidence, and budget.

## Why it matters for code review

If your dashboard celebrates commits and agent task completion, you are measuring the cheap layer. Review capacity, harness quality, and assurance cost are where generation gains get eaten. Measure PQC and the Verification Tax, or you will keep buying upstream speed that never reaches production.
