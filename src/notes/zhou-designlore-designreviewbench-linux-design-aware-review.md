---
title: "DesignReviewBench: agents still struggle to catch design trade-offs Linux reviewers raise"
description: "Oct 15 preprint: 60% of sampled Linux mm review threads involve a design trade-off, yet the strongest baseline review agent reaches only F1 0.213. DesignLore reuses structured historical decisions and lifts that to 0.259."
date: 2026-10-15
kind: paper
source:
  title: "Benchmarking and Enhancing Design-Aware Code Review in the Linux Kernel"
  url: https://arxiv.org/abs/2610.21925
project: steward
---

**Zhenhao Zhou, Kai Yu, Ying Wang, Zhiqiang Yuan, Junhao Zeng, Yijian Wu, Chong Wang and Xin Peng** argue that automated review has been scoring the wrong half of the job. Defect and correctness benchmarks miss *design-aware* review: recognizing that a change is one of several viable solutions, comparing the trade-offs, and checking them against project-specific constraints. In Linux kernel mm, that is not niche. Across 600 sampled review threads (2021–2026), **60.29%** involve at least one design trade-off, and **33.91%** have a relevant historical precedent in an earlier, independent series.

They mine those discussions into structured *decision cases* (problem, code-pattern trigger, options with pros/cons/conditions, decision, rationale), organize them into an adaptive design taxonomy keyed to code patterns rather than email text, and at review time retrieve precedents as hypotheses to validate against the current tree. The resulting system, **DesignLore**, is evaluated on **DesignReviewBench**: 72 patch series and 79 reference design trade-offs built from real mm histories, with a temporal cut-off so the knowledge base only sees earlier mail.

Design-aware review is still hard for agents. The strongest specialized baseline (**Sashiko**, the Linux Foundation’s kernel reviewer) reaches F1 **0.213**. DesignLore reaches **0.259** — a **21.6%** relative gain — at about half Sashiko’s per-item cost, and the lift holds across OpenCode, Codex, and Claude Code and across four backbone models. Raw email RAG helps but does not close the gap; the planning-and-validation workflow contributes the largest ablation jump. Absolute performance remains low: even the best system is far from saturating the benchmark.

## Why it matters for code review

A continuous factory that only checks local correctness will miss the review work that compounds into long-lived systems — the “which alternative fits *this* project?” judgment humans still make. DesignLore’s bet is that the missing input is not a better model alone but *organized project memory*: decision cases recovered from past reviews, indexed so a new patch can find them, and treated as hypotheses rather than copy-paste answers. That is the same verification-tax story as [CRBugBench’s drop when project context is missing](/posts/crbugbench-lights-off-software-factory-review-agents-miss-known-bugs/) and [Farrag’s finding that reviewers keep pointing outside the diff](/posts/farrag-reviewing-beyond-change-repo-size-agent-human-prs/), aimed at design trade-offs instead of bugs.
