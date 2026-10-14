---
title: "SWE-Proof: a quarter of test-passing patches still admit counterexamples"
description: "Sep 18 Ma/Mikek/Li et al.: Benchproofer → SWE-Proof (500 Verified issues + formal oracles); audit overturns 26.8% of test-green patches; ground-truth formal spec lifts Opus 4.8 85%→~95%; self-written specs mostly fail faithfulness."
date: 2026-09-18
kind: paper
source:
  title: "SWE-Proof: Can Language Models Resolve Real-World Issues with Machine-Checked Proofs?"
  url: https://arxiv.org/abs/2609.21190
project: steward
---

George Ma, Benjamin Mikek, Haoyu Li, Ferhat Erata, and collaborators (UC Berkeley / Georgia Tech / UIUC / AWS AI Labs) attack the correctness bottleneck for agentic issue resolution: held-out test suites are incomplete and increasingly memorizable, while formal verification has stayed on standalone tasks with specs handed in. **Benchproofer** turns a task with a known correct patch into a formally verified twin—synthesize a specification, axiomatize unchanged callees, admit an instance only after mechanical gates (verify, discriminate, mutate, hygiene) and adversarial LLM audits agree. Applied to SWE-bench Verified it yields **SWE-Proof**: **500** real issues with Nagini / Velvet / Lean oracles (and **242/266** Python SWE-bench Pro tasks green under all backends). Claim: if the backend implementation verifies against the spec under the axioms, an equivalent repo patch resolves the issue under the official harness.

Evaluating Claude Opus 4.8 across the full 500: an unaided baseline resolves **85.0%**, but an adversarial audit that hunts inputs distinguishing agent patches from gold overturns **26.8%** of those test-green patches (**58.2%** survive). Structured natural-language EARS “specs” do not close the gap; formal ground-truth specs do—resolution rises to **96.2% / 94.0% / 95.2%** (Nagini / Velvet / Lean) when the spec is provided, and verified-from-spec stays near **95% / 94% / 93.6%**. Self-constructed specs help almost nothing end-to-end (best backend **+0.6** pp). Spec synthesis is the bottleneck: only **46–61%** of agent-written specs pass a five-property audit; **faithfulness** dominates failures (**37–52%**)—models constrain some functions correctly and leave the rest of the issue unconstrained. Specs from unresolved instances fail the audit **~92%** of the time vs **~51%** on resolved ones.

## Why it matters for code review

Always-on factories that grade overnight agents on hidden-test green are still accepting superficial fixes. SWE-Proof’s receipt: the verification tax under volume is not optional—tests alone miss roughly a quarter of defects a formal oracle catches, and “ask the agent to write its own spec” does not buy you that oracle. Continuous verified momentum compounds when maker≠checker includes a faithful specification surface outside the proposer’s word; FOMO for more merge-ready agent PRs without a stronger correctness gate just scales incomplete suites into main.
