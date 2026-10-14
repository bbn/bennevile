---
title: "A-JIT: fill the hole at runtime, not in the PR queue"
description: "Sep 9 Marron & Barr: treat incomplete code as a first-class hole, synthesize from traces and typed IO pairs inside a harness+agent assembly — JIT for software construction."
date: 2026-09-09
kind: paper
source:
  title: "A-JIT: Agentic Just-In-Time Software Construction"
  url: https://arxiv.org/abs/2609.10248
project: steward
---

Static delivery assumes the binary is finished before it runs. Marron and Barr flip the compiler metaphor: just as a JIT specializes machine code to hot paths, *Agentic Just-In-Time Software Construction* (A-JIT) specializes logic, workflows, and tool interfaces from live usage. An application is code + runtime harness + an embedded agent that watches execution traces and fills what was left open.

The language move matters. Instead of TODO comments and `abort`, Bosque’s `?_` hole is a typed deferral with ensures-clauses, docs, and links to IO examples. At runtime, a partial implementation can return a concrete value (Tecton constrained decoding against types/invariants) or synthesize a complete body once enough IO pairs exist. Tactile BAPI values round-trip so humans or agents can author results mid-flight; branchable time-travel debugging explores ambiguous candidates. End-user mode: the same agent clusters operator traces, injects holes at divergence points, and synthesizes RPA-style workflow tools in shadow before promotion.

This is still a vision paper (SpecOps ’26 workshop; BosqueCore on GitHub) — receipts are the language/runtime affordances, not a SWE-bench leaderboard. The claim is architectural: synthesis belongs *inside* the ambient lifecycle, not only in the authoring session that opens a PR.

## Why it matters for code review

Factories currently push incompleteness into review (“ship the stub, file the ticket”). A-JIT makes incompleteness an executable contract with evidence (typed holes, IO pairs, traces). Merge gates that only see diffs miss the interesting artifact: whether the hole’s constraints and examples are enough for a later agent to fill safely. Review capacity shifts toward validating the *deferral surface*, not every eventual line.
