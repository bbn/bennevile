---
title: "When a second model helps: complementary coverage, not free F1"
description: "Oct 2 Song: 900 review sessions; CCR and top-tier cross-model review share Jaccard 41.2%; one CCR + one XMR matches 56.7% planted errors vs 42.7% for two CCR reviews; lightweight cross-model reviewers add nothing."
date: 2026-10-02
kind: paper
source:
  title: "When Does a Second Model Help? Cross-Model Review in LLM Verification"
  url: https://arxiv.org/abs/2610.01471
project: steward
---

Tae-Eun Song asks the independence question teams skip when they bolt a second model onto PR review: does a *different* reviewer find different defects, or just burn another call? Building on the author’s earlier single-model Cross-Context Review (CCR) work, this controlled study plants **150** errors across **30** artifacts (code, docs, scripts), runs **10** conditions × **900** sessions with three reviewer models from two developers, and audits provenance before analysis (one baseline run of uncertain provenance and 14 failed calls excluded; values with failures scored as zero are also reported).

Headline results are careful, not hype. Top-tier cross-model review (XMR-GPT) is **not** significantly different in F1 from same-model CCR in a fresh session (32.3% vs 28.6%; Holm-adjusted Wilcoxon against CCR does not separate them). What *does* move is coverage: CCR and XMR share Jaccard **41.2%**—mostly different blind spots. At two review calls, **one CCR + one XMR** matches **56.7%** of planted errors versus **42.7%** for two CCR reviews (Holm-adjusted *p*=.006); the gain over two top-tier XMR reviews is **not** significant, so model difference and reviewer capability stay confounded. A lightweight cross-model reviewer scores no higher than same-model review. Category split is the operational tell: CCR leads on **code** F1 (40.7%); XMR leads on **documents** (up to 42.1%). Information restriction helps lower tiers’ point estimates, not the top tier.

## Why it matters for code review

Always-on factories under FOMO for “just add another model check” confuse independence with accuracy. Review continuous verification lanes for Song-shaped contracts: pair a fresh same-model pass with a capable different-model pass when coverage matters more than single-call F1; do not treat a cheap second model as a free safety layer; bias same-model review toward code and cross-model toward docs/consistency. Steady harnessed throughput compounds when the night’s dual check buys complementary defects; peak-session mastery that runs the same model twice in one context does not. Pair with [the earlier Claude↔Codex asymmetry study](/posts/cross-model-llm-code-review-claude-codex/) and [Guo Groundability’s weak-reviewer audits](/posts/guo-groundability-weak-reviewers-strong-coding-agents/) when the merge bar is independent coverage under volume, not a second opinion from a weaker sibling.
