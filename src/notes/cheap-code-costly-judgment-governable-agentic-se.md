---
title: "Cheap code, costly judgment: making agentic SE governable"
description: A 12-week case study and middle-range theory of “governance conversion”—turning agentic failure modes into durable controls.
kind: paper
date: 2026-07-01
source:
  title: "Cheap Code, Costly Judgment: A Case Study on Governable Agentic Software Engineering"
  url: https://arxiv.org/abs/2607.01087
project: steward
---
Davis et al. sit inside a 12-week agentic build (document accessibility remediation): 88 field notes, 420 KLOC of production code, and over a million lines of tests, lints, docs, and agent tooling. The claim is not that AI can write code—it is that abundant cheap code relocates the scarce resource to judgment.

They propose “governance conversion”: agentic velocity surfaces recurring structural failure classes; engineering judgment converts those failures into durable governance mechanisms. Controls are discovered from failures that only become visible during high-velocity agentic work—not derived from a pre-written obligation list.

## Why it matters for code review

Review is the conversion step. When agents ship volume, the review system has to mint new gates from real failure patterns (boot checks, invariant tests, critic roles) rather than hoping an old checklist still fits. This paper gives vocabulary for that shift without pretending governance is free.
