---
title: "TextGrad: backprop for prompts, code, and compound systems"
description: Stanford’s TextGrad treats LLM feedback as textual gradients over a computation graph—including measurable gains on hard coding problems.
kind: paper
date: 2024-06-11
source:
  title: "TextGrad: Automatic \"Differentiation\" via Text"
  url: https://arxiv.org/abs/2406.07496
project: steward
---
TextGrad’s move is simple: treat natural-language critiques as gradients over a computation graph. Variables can be prompts, code snippets, or other structured artifacts; an LLM “loss” writes suggestions that edit those variables.

They keep the API close to PyTorch so you can wire multi-component systems without hand-tuning every prompt. On LeetCode-Hard they report about a 20% relative gain in solution quality, alongside QA and scientific design tasks.

## Why it matters for code review

A review comment is already a textual gradient—if you treat it that way. TextGrad formalizes the loop most teams do by hand: critic writes feedback, producer edits, evaluate, repeat. Useful when your “reviewer” is itself an LLM and you need a disciplined way to propagate critique into code, not just into chat.
