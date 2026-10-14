---
title: "IdeaAMBIG: the hard part of agent coding is finding what the spec omitted"
description: "Sep 9 benchmark: 660 evidence-grounded gaps in research-method specs — defect localization is the bottleneck; gold clarification lifts codification-ready rate from 14% to 98%."
date: 2026-09-09
kind: paper
source:
  title: "IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications"
  url: https://arxiv.org/abs/2609.10539
project: steward
---

A research idea can be novel and coherent and still be *uncodable* — the method text never states the choices a competent implementer (or coding agent) needs. Ma, Zhao, Wu, Patwardhan, and Cohan call that *codification readiness*, and build IdeaAMBIG: 660 evidence-grounded instances (163 real gaps from reproducibility reports and GitHub issues; 497 controlled synthetic gaps) scored on three jobs: readiness assessment, defect localization, and clarification-action generation.

The cut that matters for factories: across 13 LLMs, the best model’s Macro Defect Recovery Rate on real-world instances is 9.6% — localization is the bottleneck. Hand it the annotated defect and Macro Clarification Action Success Rate jumps to 80.6%. In an oracle study, supplying the gold resolution lifts the downstream codification-ready rate from 14% to 98%. Clarification isn’t hard once you know what’s missing; *seeing* the gap is.

## Why it matters for code review

Agent PR floods often start from underspecified tickets and half-written plans. Reviewing the generated code is the wrong first gate when the failure was “implementation-critical omission” upstream. Score the spec for codification readiness — and treat “what did this leave for the agent to invent?” as a first-class review finding — before you burn merge capacity on a faithful implementation of an incomplete method.
