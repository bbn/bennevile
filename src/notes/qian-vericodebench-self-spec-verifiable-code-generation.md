---
title: "Self-spec verification: oracle contracts flatter overnight factories"
description: "Sep 30 Qian et al.: VeriCodeBench 400 self-spec problems (C/Java/Rust/Python); Direct joint success ~44% vs ~71% code validity; CodeNova lifts aggregate joint to ~49% (Claude Sonnet 5 65.5%); richer specs can cut validity while raising coverage."
date: 2026-09-30
kind: paper
source:
  title: "Self-Spec Verifiable Code Generation"
  url: https://arxiv.org/abs/2609.39568
project: steward
---

Jiaru Qian, Yihong Dong, Yongmin Li, Hao Zhu, Bin Gu, and Ge Li refuse the comforting eval where the model gets an oracle formal specification and only has to write the body. **VeriCodeBench** scores **self-spec** verifiable code generation: the LLM must invent the contract, implement against that exact contract, and pass a native verifier—Frama-C/WP, OpenJML, Verus, or Nagini—across **400** language-native problems (100 each in C, Java, Rust, Python). Joint success requires both full requirement coverage (Constraint Entailment Framework, no LLM judge) and verifier acceptance on the same instance.

The gap is the receipt for continuous factories. Across four models under Direct generation, code validity averages about **71%** while joint success sits near **44%**—Claude Sonnet 5 leads at **60.3%** joint Direct. **CodeNova** (constraint-guided specification + verifier-guided candidate repair) raises aggregate joint success to about **49%**, with Claude Sonnet 5 at **65.5%** across tracks. Constraint-guided specs lift mean coverage (**0.716 → 0.776**) but can make proofs harder: Kimi on Rust rises in coverage while valid implementations fall **91 → 60**. Oracle-spec diagnostics expose the optimism of stage-wise benchmarks—DeepSeek V3.2 on C jumps **34 → 69** validity when a curated contract replaces the model’s own.

## Why it matters for code review

Always-on verify lanes that treat “the checker said valid” as done are grading against whatever contract the overnight agent invented. Review self-spec pipelines the way VeriCodeBench scores them: freeze the generated obligation through repair, score requirement coverage separately from proof success, and refuse vacuous contracts that make verification easy by omitting behavior. FOMO that agents aren’t proving overnight is the wrong fear if they prove the wrong thing; continuous harnessed momentum compounds when maker≠checker includes the specification itself. Pair with [Chen’s reusable verification-failure kit](/posts/chen-verification-failures-reusable-guidance-coding-agents/) and [Tan’s HealGuard post-heal safety](/posts/tan-healbench-healguard-runtime-error-healing/) when promoting unattended proof loops.
