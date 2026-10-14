---
title: "Silent failures: the patch is green and still insecure"
description: "Jun 25 paper: across 1,030 agent repair traces, 170 confirmed silent failures (omit / introduce / inadequate defenses); test-pass gates and LLM reviewer roles did not catch them."
date: 2026-06-25
kind: paper
source:
  title: "When Passing Tests Hides Vulnerabilities: An Empirical Study of Silent Failures in Agentic Systems"
  url: https://arxiv.org/abs/2609.10548
project: steward
---

Bai, Waseem, Rasheed, Peltonen, and Abrahamsson study the patch class factories keep shipping: syntactically and functionally verified repairs that still retain or introduce security bugs. Seven agent frameworks with GPT-4o-mini across SecurityEval and CVEfixes yielded 1,030 valid traces; three rounds of qualitative coding plus manual confirmation produced 170 silent failures.

Three categories, ten fine-grained codes. **Omission** (48.2%) drops required security controls. **Introduction** (30.6%) adds new vulnerabilities while “fixing.” **Inadequacy** (21.2%) applies incomplete defenses that look like progress in the diff. Similar insecure solutions recur across frameworks — shared model, prompt, or task effects — while single-agent and multi-agent setups show different failure profiles. The load-bearing negative result: current test-passing evaluation *and* LLM-based reviewer roles were insufficient to expose or intercept the confirmed cases. Functional green is not a security verdict, and a reviewer agent that pattern-matches the same model family as the repairer is not an independent referee.

## Why it matters for code review

“Tests passed, ship it” and “the review bot said LGTM” are the same failure mode with different costumes. If your factory’s merge gate is functional CI plus a same-family LLM commenter, you are measuring internal consistency, not security compliance. Treat silent failures as a first-class review object: separate security verification from repair, refuse to let the author model grade its own patch, and score review methods on whether they catch omission / introduction / inadequacy — not on whether the suite stayed green.
