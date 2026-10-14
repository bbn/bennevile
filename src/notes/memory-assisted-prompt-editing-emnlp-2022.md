---
title: Memory-assisted prompt editing after deployment
description: "EMNLP 2022: grow a memory of misunderstandings plus user clarifications, then edit prompts for similar future queries—no retraining."
kind: paper
date: 2022-12-01
source:
  title: Memory-assisted prompt editing to improve GPT-3 after deployment
  url: https://aclanthology.org/2022.emnlp-main.183/
project: steward
---
Madaan et al. treat post-deployment mistakes as first-class data. Pair the model with a growing memory of cases where it misunderstood intent, plus the user’s clarification, then retrieve similar cases to edit prompts for new queries—without retraining GPT-3.

It is an early, clean statement of the feedback-memory loop: record the correction, retrieve it, change behavior. Simulated-user experiments show large accuracy lifts on queries that used to trigger systematic misunderstandings.

## Why it matters for code review

A good review comment is a clarification of intent or contract. If you store those clarifications and retrieve them on similar diffs, you get a lightweight “never make that mistake twice” system without waiting for fine-tunes. This paper is the pre-agentic ancestor of that pattern.
