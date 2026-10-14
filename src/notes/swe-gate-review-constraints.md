---
title: "SWE-Gate: green tests are not a merge gate"
description: "He et al. build a 303-instance benchmark where review constraints from real PR comments are tested separately from functional tests — and 221 of 644 functionally green repairs still fail the review bar."
kind: paper
date: 2026-09-03
source:
  title: "SWE-Gate: Passing Functional Tests Is Not Enough for Software Engineering Agents"
  url: https://arxiv.org/abs/2609.04167
project: steward
---
Most agent benchmarks stop at “does the patch pass the tests?” SWE-Gate treats that as half the acceptance criteria. The authors pull review constraints from real pull-request comments, synthesize repository-level repair instances around them, and give each instance separate functional tests and constraint tests — plus non-compliant and gold patches — so you can score issue resolution apart from review compliance.

The corpus is 303 instances across 75 open-source Python repos. Under a shared coding-agent scaffold with four LLM backends, the gap is blunt: among 644 repairs that pass the functional tests, 221 still fail the provided review constraints. Functional-only evaluation overestimates what would clear a real review bar.

## Why it matters for code review

This is the receipt for every factory that equates CI green with shippable. Review comments encode naming, structure, blast-radius, and house rules that tests never stated. If your agent harness only optimizes for SWE-bench-style pass rates, you are training past the gate that actually decides merge. Measure constraint compliance as its own instrument — or keep discovering that “it works” patches still bounce.
