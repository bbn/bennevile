---
title: "Contra: ask only when two answers would change the program"
description: "Oct 1 Fang et al. (Peking): training-free selective clarification discovers candidates, filters relevance/resolution, then keeps questions only when programs under alternate answers disagree on shared inputs—beats harnesses and baselines on ClarifyCodeBench."
date: 2026-10-01
kind: paper
source:
  title: "CONTRA: Discovering and Qualifying Behavior-Changing Questions for Selective Clarification in LLM Code Generation"
  url: https://arxiv.org/abs/2610.01769
project: steward
---

Zheng Fang, Yongmin Li, Yichang Zhang, Dongming Jin, Haoyu Wang, Shuai Wang, Zhi Jin, and Ge Li (Peking / Wuhan) attack a quiet failure mode of coding agents: underspecified requirements get resolved by silent assumptions, then subsequent work hardens those assumptions into expensive rework. Asking everything interrupts developers; asking nothing ships the wrong behavior. **Contra** is training-free selective clarification in three stages. **Discovery** expands a broad candidate set of questions (each with two plausible requirement completions). **Qualification** drops questions unrelated to required behavior or already answered by the requirement text, then runs **behavioral verification**: generate programs under each completion, execute on a shared input set, and keep the question only when the two groups produce stable, differing outputs. **Adaptive selection** uses the interaction history to pick the next still-unresolved qualified question or stop within a five-question budget.

On ClarifyCodeBench (419 underspecified + 80 fully specified tasks), Contra posts the highest F1 and turn-discounted key-question rate for agents on GPT-5-mini, GPT-5.5, Grok 4.5, and Gemini 3.1 Pro—macro-average F1 **41.20%**, +13.88 points over the best baseline. Direct Prompting and Ask-or-Assume miss key questions; ClarifyGPT asks too many. Under the same Qwen3.8-27B protocol, Contra also beats Claude Code and OpenHands on clarification recall/F1 while matching Claude Code’s 5% false-positive rate on fully specified tasks. A Claude Code plugin surfaces unreported implementation decisions after the fact (independent review finds 44.3% of decisions absent from the agent’s own report) and can attach distinguishing tests that show an alternative policy behaves differently.

## Why it matters for code review

Always-on factories under volume FOMO silently fill gaps in the ticket, then overnight lanes inherit the wrong contract. Review agent intake for Contra-shaped gates: candidate clarification must survive relevance, “already answered,” and execution evidence that alternate answers change observable behavior—not vibes about uncertainty. Continuous verified momentum compounds when the harness refuses to commit until consequential ambiguities are explicit; peak-session mastery that assumes edge cases does not. Pair with [ECLoop’s evidence-conditioned premature-commitment hold](/posts/xu-ecloop-evidence-conditioned-premature-commitment/) and [Qualiteg’s completion gate](/posts/qualiteg-completion-gate-done-means-it-runs/) when the merge bar needs both pre-edit clarification and post-edit “it runs.”
