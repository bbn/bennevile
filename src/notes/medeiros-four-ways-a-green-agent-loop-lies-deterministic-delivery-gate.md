---
title: "Samuel Medeiros: four ways a green agent loop lies, and a delivery gate that measures instead of asking"
description: "Oct 26, Samuel Medeiros on a run where the builder said done and the gate scored 55 with a token in the diff. His rule is builder, critic, and reviewer in separate contexts, with a fail-closed security gate, and he lists four ways a passing check can hide a failure."
date: 2026-10-26
kind: field-note
source:
  title: "Make your AI agent prove it: a deterministic delivery gate"
  url: https://dev.to/samuelfmedeiros/make-your-ai-agent-prove-it-a-deterministic-delivery-gate-5b8i
project: steward
---

[Samuel Medeiros](https://dev.to/samuelfmedeiros/make-your-ai-agent-prove-it-a-deterministic-delivery-gate-5b8i) opens with a run from this week. The builder agent reported `done`. The critic scored the work 55 and returned a gap list: two checks were failing, one of them a secret scan that had found a token in the diff. The report attached the raw output of every check, so nobody had to take an opinion on trust.

**Split the roles so the author can't grade itself.** The builder writes and has no say in the verdict. The critic runs every declared check against the real artifact and scores it without asking a model whether the work is good. A reviewer in a fresh context returns strict JSON. A security gate fails closed: a secret, a high-severity finding, or an injection issue blocks delivery even with a perfect score, and an inconclusive answer counts as blocked. Checks, commands, and weights are declared before any code is written, and rounds are capped at eight. If the loop never converges, he says the check set is wrong, not the code.

**Four ways a passing loop hides a failure.** First, piping hides the exit code: `pytest | tail` returns `tail`'s zero, so a failing test scores 100 unless every check sets `pipefail`. Second, a timeout shorter than the check reads as a silent zero with nothing to fix, and the loop spins. Third, a 200 from the wrong server: on a port collision the check hits a different app, so assert identity, not reachability. Fourth, regenerating a visual baseline to go green erases the regression the test was there to catch, so baselines should change only by an explicit, recorded decision.

## Why it matters for code review

In an unattended loop, the gate is the reviewer for most rounds, and each of these four bugs turns a real failure into a pass nobody looks at. The list is a cheap audit for any harness whose checks run while no one is watching. The post also promotes the author's packaged version and a paid setup service. The checks above don't depend on it.
