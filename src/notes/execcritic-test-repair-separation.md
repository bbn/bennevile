---
title: "ExecCritic: same trajectory writing patch and test is a confidence trap"
description: "ExecCritic separates Test and Repair agents, freezes fail-closed tests, and shows test quality decides whether execution feedback helps — composing trained roles hits 72.6% on SWE-bench Verified."
kind: paper
date: 2026-09-08
source:
  title: "ExecCritic: Learn to Test, Test to Improve for Coding Agents"
  url: https://arxiv.org/abs/2609.09133
project: steward
---
Execution feedback only helps when the tests encode the behavior the issue actually asked for. When one trajectory writes both the patch *and* the tests, their errors can agree and you get a green that means nothing.

Tao et al.’s ExecCritic splits the roles. A Test agent independently generates repository-native tests; a fail-closed harness qualifies and freezes them; a Repair agent revises source from that execution feedback and cannot change the tests. Both roles start from Qwen-3.5-35B-A3B and are trained separately — Learn to Test so tests distinguish correct from incorrect patches; Test to Improve so repair learns direct resolution and feedback-guided revision.

The receipt that matters for factories: holding the base Repair agent fixed, tests from the base Test agent *hurt* (resolved rate 61.2% → 57.3%), while stronger tests raise it to 65.3%. Role-specific post-training lifts the Qwen Test agent’s Base-to-Gold from 22.2% to 62.2%; composing the two post-trained agents reaches 72.6% — an 11.4-point gain over the no-test baseline without stronger-model or Oracle feedback at eval time.

## Why it matters for code review

Same lesson as same-model review blind spots, one layer earlier. Disagreement and separation of concerns are not ceremony — they are how you stop the system from grading its own homework. If your agent loop lets the patch author mint the acceptance tests, “CI green” is not a review signal; it is correlated error with a checkmark.
