---
title: "More programs or more rolls? Harness diversity that only finds weaknesses"
description: "Sep 30 Xu et al.: on MATH-500, identical baseline copies already give 2.16pp oracle headroom; generated harnesses show persistent losses on 100 tasks vs 1 win; frozen selector +0.00pp; at 27 executions portfolio ties clones at 98.70%."
date: 2026-09-30
kind: paper
source:
  title: "More Programs or More Rolls? Separating Coverage from Specialization in LLM Harnesses"
  url: https://arxiv.org/abs/2609.35873
project: steward
---

Ziyang Xu, Haitian Zhong, Hao Zhou, Hao Qin, Chenhan Jin, Te Qi, Shengze Xu, and Tieyong Zeng ask a budget question factories keep dodging: when you have fixed inference spend, should you buy **more harness programs** or **more executions of one program**? Automated harness generation promises task specialization; pass@k-style coverage can look the same whether members differ or you just rolled the same code harder. Their control holds the solver fixed and compares eight generated harnesses plus baseline against nine **byte-identical** baseline copies, three executions each, on 386 MATH-500 tasks—separating answer coverage, repeat-stable advantages, and usable pre-execution selection.

Identical programs already yield **2.16** pp of repeat-averaged oracle headroom—so extra coverage alone does not prove specialization. Generated programs are more repeatable (residual correlation **0.789** vs **0.006** for clones), but the direction is bleak: persistent losses vs baseline on **100** tasks, persistent wins on **one** (and that win is answer-extraction sensitive). Clone-adjusted held-out selection gain is **−0.26** pp (insufficient evidence of complementarity at three repeats). A frozen task→harness selector gains **0.00** pp—always picks single-call. At **27** harness executions per task, the development-ranked portfolio and same-code sampling both hit **98.70%** oracle coverage. Supporting BIRD traces locate breaks where mechanisms are described but absent, present but never triggered, or executed but emit invalid output.

## Why it matters for code review

Overnight FOMO for “another harness in the panel” is not the same as verified throughput. This paper’s productive complication: under matched execution budgets, more programs that mostly encode *persistent weaknesses* do not beat more rolls of a fixed, boring baseline—and a selector that cannot see advantages before execution is theater. Review continuous factories the way the authors separate measures: demand advantages that persist across repeats, guide a usable admission decision, and beat additional fixed-program executions—not a larger zoo of prompts that only expands the morning discard pile.
