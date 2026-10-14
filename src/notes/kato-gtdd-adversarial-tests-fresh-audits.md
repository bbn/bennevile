---
title: "Generative TDD: a separate tester writes new inputs after each candidate is fixed"
description: "Oct 2 Kato: coding agents fit the tests they see, so GTDD has a separate tester generate fresh inputs after each committed candidate, a trusted evaluator return reduced counterexamples as regression tests, and fresh random audits decide acceptance."
date: 2026-10-02
kind: paper
source:
  title: "GTDD: Generative Test-Driven Development for AI Coding Agents with Adversarial Testing"
  url: https://arxiv.org/abs/2610.02952
project: steward
---

Masahiro Kato starts from a familiar failure: test-driven development gives coding agents executable requirements, but agents adapt to the examples they observe, so **passing a fixed test set can leave much of the intended behavior unimplemented** (or invite special-casing and test edits). **Generative Test-Driven Development (GTDD)** splits the roles. After each candidate implementation is committed, a separate testing agent generates new inputs from a human-specified behavioral contract plus feedback from earlier rounds. A trusted evaluator checks those inputs against a reference, returns **reduced counterexamples** to the coder, and saves every one as a regression test. Acceptance is a separate decision: **fresh random audits drawn after the candidate is committed**, from a population fixed before development, with private audit scenarios. The formulation specifies what each agent may read.

The theory gives a finite-population bound on accepting a candidate whose failure rate exceeds a tolerance, showing how test visibility and repeated feedback erode evidence — and that post-commitment audits keep false acceptance controlled across rounds. The experiment is small and honest: a single-client, Redis-like in-memory key-value store, one model as both coder and tester, four coding rounds. Both policies that regenerated tests during repair ended with lower mean failure rates than tests generated once by the same model; giving the tester the candidate’s source added nothing detectable; a property-based generator drawn from the evaluation distribution was as strong as the dynamic policies; and substantial errors remained after four rounds. The extra conditions could not pin the gain on any single feature.

## Why it matters for code review

Tests the coding agent has seen are development feedback, not acceptance evidence. For always-on factories that grind through repair loops overnight, the gate needs a checker that writes inputs after the candidate is fixed, counterexamples that accumulate as regression tests, and an audit the maker never trained against. That is maker≠checker stated as a statistical property instead of an org chart. It also cools the hype: a strong property-based generator may already buy most of the gain. Pair with [Prusik’s independent prove step](/posts/prusik-independent-prove-execution-evidence/) and [Guo on when weaker reviewers can still audit stronger agents](/posts/guo-groundability-weak-reviewers-strong-coding-agents/).
