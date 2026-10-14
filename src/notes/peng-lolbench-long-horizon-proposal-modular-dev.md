---
title: "LoLBench: peak agents resolve 14% of proposal-to-PR work on million-LoC systems"
description: "Sep 30 Peng et al.: 100 enhancement-proposal tasks across 29 large systems (~2.4M LoC, ~5.5k-LoC PRs); best of 28 agents hits 14% resolved / 52.7% F2P; localization dominates; file-tree+API specs lift resolved +16–22pp."
date: 2026-09-30
kind: paper
source:
  title: "LoLBench: Evaluating Coding Agents with Long-Horizon Proposals on Large Software Systems"
  url: https://arxiv.org/abs/2609.37143
project: steward
---

Yun Peng, Zihan Wu, Zeyang Zhuang, Xin Zhou, Rui Shu, Xu Han, Chun Yong Chong, Yuan Wang, and Jiakun Liu introduce **LoLBench**: 100 modular-development tasks built from human enhancement proposals (EPs) across 29 large systems in five domains. Average proposal ≈5,000 words; average repo ≈2.4M source LoC; average implementation PR ≈5,500 LoC across ~65 files. Unlike issue-fix benchmarks that hand the agent a local bug, LoLBench starts from intent and high-level design—agents must *perceive* where the change belongs, then implement without regressing the rest of the system. Evaluation uses system-level Fail-to-Pass tests through public interfaces (structural divergence allowed) plus Pass-to-Pass regression guards, with mutant- and coverage-guided F2P augmentation.

Across six frontier models × five scaffolds (28 agents), the best resolved rate is **14%** (Opus 5 on Claude Code and mini-SWE-agent). Claude Code + Opus 5 leads completed sections at **26.3%** and F2P at **52.7%**—partial progress, not near-misses. Failure attribution and turn budgets both point at **incomplete cross-module localization** as the dominant bottleneck (~30% of solution-failure weight; localization is the largest phase for 26/28 agents). When three agents get reference-derived file trees and API specs appended to the EP, resolved rates jump **+16–22** pp (up to **34%**)—perception scaffolding moves the needle more than another burst of editing.

## Why it matters for code review

Always-on factories that measure overnight heroics on SWE-bench-shaped bugs are grading the wrong workload. LoLBench’s receipt: on real proposal-scale changes, peak-session mastery still bottoms out at teens-percent resolve, and most of the bill is finding the modules—not typing the patch. Continuous verified momentum needs harnesses that ground intent into an auditable localization contract before the implementer runs long, then score merge readiness by F2P/P2P evidence—not by how confidently the agent “finished.” FOMO for more Claude Code turns without perception gates just lengthens exploration that never covers the dependency cone.
