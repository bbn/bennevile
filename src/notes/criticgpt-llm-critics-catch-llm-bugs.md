---
title: "CriticGPT: train critics to catch LLM bugs"
description: OpenAI’s LLM Critics Help Catch LLM Bugs—specialized critique models that find errors in LLM-generated code more reliably.
kind: paper
date: 2024-06-28
source:
  title: LLM Critics Help Catch LLM Bugs
  url: https://arxiv.org/abs/2407.00215
project: steward
---
CriticGPT (the paper’s public title is “LLM Critics Help Catch LLM Bugs”) trains critique models to find flaws in LLM-written code. The meta-point: generation and criticism are different skills, and you should train for criticism explicitly.

This work sits behind a lot of later “dedicated reviewer” thinking—including industrial verifier posts that cite CriticGPT as an ancestor not yet ready for repo-scale deployment.

## Why it matters for code review

Do not assume your best coder model is your best reviewer. CriticGPT is the clean research argument for a specialized critique objective—and for measuring review on its own terms (bugs caught, false alarms) rather than on coding Elo alone.
