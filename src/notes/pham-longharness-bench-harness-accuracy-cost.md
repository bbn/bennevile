---
title: "LongHarness: same model, different harnesses—accuracy similar, cost 12× apart"
description: "Sep 29 Pham/Nguyen/Chen/Ye: four long-context tasks stress coding harnesses (OpenCode, mini-swe-agent, RLM, ReAct); best 68% macro; GPT-5.6-sol RLM vs mini-swe-agent on memos 92%/$7.23 vs 100%/$0.583."
date: 2026-09-29
kind: paper
source:
  title: "LongHarness Bench: Stress-Testing Language Model Harnesses for Long-Context Reasoning"
  url: https://arxiv.org/abs/2609.38137
project: steward
---

Quang Hieu Pham, Thuy Duong Nguyen, Jocelyn Qiaochu Chen, and Xi Ye (University of Alberta / Amii) argue that long-context evals are saturating: strong model–harness pairs look alike on accuracy while hiding huge cost gaps. **LongHarness** builds four deterministic suites—Constraint Solving Search, Equivalent Program Pair Search, Program Execution Tracing, Outlier Memo Detection—where evidence is semantically confusable, retrieval is step-dependent, and multiple strategies have different compute costs. Contexts land around 100K–128K tokens; grading is exact set/JSON match under a 3M cumulative-token budget.

They run direct inference plus four harnesses—**RLM**, **OpenCode**, **mini-swe-agent**, **ReAct**—across five models. Best configuration: GPT-5.6-sol + mini-swe-agent at **68%** macro-average (vs **60%** direct). No harness wins all four tasks. Efficiency is the story: on Outlier Memo Detection, GPT-5.6-sol **RLM** hits **92%** at **$7.23**/instance while **mini-swe-agent** hits **100%** at **$0.583** (**~12.4×** cheaper). On Program Execution Tracing, OpenCode nudges accuracy **94%→96%** while roughly doubling cost versus direct. For GPT-5.6-sol every harness helps somewhere and hurts somewhere; weaker models gain more from harnesses (Qwen3.8-27B **0%→38.5%**, GLM-5.3 **9.5%→42.5%**). Compared with OOLONG-Synth and LongBench-v2 subsets, LongHarness separates harnesses on both accuracy *and* dollars where those suites look flatter.

## Why it matters for code review

Always-on factories that score overnight agents on pass-rate alone will pick the wrong scaffold. LongHarness’s useful receipt: treat harness choice as a cost-and-strategy decision under sustained load—file/shell agents that build a reusable fact table can beat recursive decomposition that burns tokens re-reading the packet. Continuous verified momentum compounds when you measure **accuracy per dollar** (and per token) across harnesses on the same model, not just whether the PR turned green. FOMO for “more agent calls overnight” without an efficiency axis just scales expensive harnesses that don’t simplify the remaining work.
