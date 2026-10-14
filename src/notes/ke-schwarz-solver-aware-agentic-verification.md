---
title: "Schwarz: plausible specs are not enough—expose SMT-local repair"
description: "Aug 31 Ke/Wu/Li: agent proposes specs/lemmas; checker owns authority via SMT discharge + replay; 1367/1475 passes; local lemmas ablation −221 tasks; SV-COMP ReachSafety 91.5% vs CPAchecker 60.1%."
date: 2026-08-31
kind: paper
source:
  title: "Schwarz: Solver-Aware Agentic Program Verification"
  url: https://arxiv.org/abs/2608.30803
project: steward
---

Jingyu Ke, Ling-I Wu, and Guoqiang Li (Shanghai Jiao Tong University) target a failure mode that looks like progress: an agent writes a source-level specification that matches the intended safety argument, yet the SMT-backed verifier still returns timeout or `unknown`. The missing property is **solver dischargeability**—the fact must be expressed with the local context, decomposition, and theory encoding the configured backend can prove. **Schwarz** is the harness that turns that failure into obligation-local repair: program-point snapshots expose checked facts at a boundary, SMT-local lemmas let the agent propose missing intermediate steps that must themselves be proved, and theory-aware policies bias numeric / quantified / memory / floating-point formulations toward solver-friendly forms. The model owns search; the checker owns authority—regenerated obligations, configured solvers (cvc5 / Bitwuzla / Z3), and concrete replay for unsafe witnesses. Direct SMT edits are diagnostic only; accepted outcomes lift back through the trusted front end.

On **1,475** tasks (AutoRocq C/Rocq suites, KVerus-File Rust/Verus, and a curated **1,000**-task SV-COMP 2026 ReachSafety suite averaging **1,427** LOC), Schwarz records **1,367** direct passes (**92.7%**), including **95.2%** on the 475 recent agentic-verification benchmarks and **91.5%** on the SV-COMP suite versus **60.1%** for CPAchecker. Against a pure-agent baseline on the same 1,000 tasks, SV-COMP-style score rises from **72.5%** to **90.7%** with **zero** incorrect Schwarz-accepted verdicts (the baseline emits 17 wrong labels). Ablations locate the harness gain: strip SMT-local lemmas and aggregate passes fall **1,367→1,146** (−221); strip theory policies → **1,301**; strip both → **1,081** (**73.3%**). Remaining misses concentrate on frontend/library semantic gaps (e.g. `libm`, unions), not on “the model forgot to try.”

## Why it matters for code review

Always-on factories that only surface “verifier failed” to overnight agents are grading fluency against a black box. Schwarz’s useful receipt: make the verification tax *local and checkable*—obligation snapshots, proved lemmas before use, theory policies outside the model’s word—then accept only deterministic discharge or replay. Continuous verified momentum compounds when maker≠checker is enforced at the SMT boundary the way [VeriWeave](/posts/mohsenzadegan-veriweave-evidence-gated-runtime-governance/) enforces it at runtime authorization; FOMO for more autonomous proof rounds without solver-facing repair just burns budget on global rewrites that never become dischargeable.
