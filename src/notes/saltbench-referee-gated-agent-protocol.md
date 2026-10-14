---
title: "SaltBench: measure what the machine referee does to the agent"
description: "Sep 10: a referee-gated protocol (proof kernel, verifier, or withheld tests) walls the agent off, probe-tests isolation, freezes predictions, and treats budget stop as halt — so method effects on coding agents are measurable, not narrated."
date: 2026-09-10
kind: paper
source:
  title: "SaltBench: A Referee-Gated Protocol for Measuring Method Effects in Machine-Checked Software Work"
  url: https://arxiv.org/abs/2609.11076
project: steward
---

Most agent “evals” still let the subject narrate its own success. SaltBench asks a narrower question: *how does a machine referee change the way a coding agent works?* The referee — a proof kernel, a program verifier, or a withheld test suite — decides what the work is worth, and the agent cannot argue with it.

The protocol is the contribution as much as any score. Outcomes are decided outside the agent’s toolchain. The agent is walled off from the network, reference solutions, and the harness itself, and that wall is *probe-tested* before scored runs so isolation is observed rather than assumed. Every run is authorized by a dated freeze with predictions registered. A budget stop is a halt, never a failure. The subject is a “seat”: an agent session in its standard harness. The reported study authors five Rust systems components under a pinned Verus toolchain with a withheld test suite as referee, comparing arms that vary how the seat is method-scaffolded (plain agent versus referee-aware variants).

## Why it matters for code review

Review gates and PR bots are machine referees whether we admit it or not. If your eval of a review agent can be gamed by reading the harness, talking to the network, or redefining a timeout as a soft fail, you are measuring theater. Borrow SaltBench’s posture: independent pass/fail, probed isolation, registered predictions — then compare review *methods* (adversarial disagreement, withheld tests, capability ceilings) as first-class treatments, not vibes in the changelog.
