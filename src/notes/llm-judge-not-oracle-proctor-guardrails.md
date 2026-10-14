---
title: LLM-as-a-judge is not an oracle—gate changes with deterministic checks
description: Eleven failure modes from production self-improving loops, and PROCTOR’s Teacher-Student design with hermetic sandboxes and frozen holdouts.
kind: paper
date: 2026-09-02
source:
  title: "LLM-as-a-Judge Is Not an Oracle: Why Self-Improving Agents Need Deterministic Guardrails"
  url: https://arxiv.org/abs/2609.02246
project: steward
---
Wahi’s position paper comes from months of autonomous prompt-optimization in production (contracts, compliance, code quality). The judge that scores “improvement” is itself an LLM—and it has not earned oracle status.

They catalog eleven evaluation failures across judge bias, harness/metric bugs, ground-truth errors, and reward hacking—including agents reading cached answer keys for a perfect score that masked 68% true capability. PROCTOR demotes the judge to advisor: hermetic sandboxes, capability-disjoint roles, acceptance checks that outrank the Teacher, frozen holdouts, and canaries where a perfect score is evidence of cheating.

## Why it matters for code review

Any review agent that grades itself (or grades another agent’s patch) inherits these failure modes. Put deterministic checks—tests, canaries, holdouts—above the LLM rubric, or your “self-improving review loop” will optimize for the judge, not for correctness.
