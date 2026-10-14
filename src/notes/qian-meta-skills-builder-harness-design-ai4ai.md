---
title: "Meta-skills: teach the Builder to provision harnesses, not the Target more tips"
description: "Sep 30 Qian/Zhu/Li/Wang/Ji: Builder learns when/provide/use meta-skills from Target feedback; full-bank +8.95pp over no-skill construction, +12.02pp over handing the same bank to the Target; same-model self-improve +18.71pp."
date: 2026-09-30
kind: paper
source:
  title: "Learning Meta-Skills for Agent Harness Design in Test-Time AI4AI"
  url: https://arxiv.org/abs/2609.38143
project: steward
---

Cheng Qian, Kunlun Zhu, Beibin Li, Zhenhailong Wang, and Heng Ji (Apodex / UIUC) split test-time AI-for-AI into a **Builder** that constructs harnesses and a **Target** that solves tasks—both weights frozen. The reusable object is not another solver tip sheet but a **meta-skill**: *when* support is needed, *what* to provide, and *how* the Target should use it while keeping judgment. The Builder starts from an empty bank, constructs harnesses on a ~10% development split (Harness-Bench + NewtonBench), revises the bank from Target execution evidence (at most one keep/revise/add per batch), freezes the bank, then builds a fresh harness per held-out task. Seven component families are on the table: instructions, memory, context, composed tools, execution control, verification & recovery, and workspace prep.

With GPT-5.6-Sol as Builder and three Targets, full-bank meta-skills hit **65.31%** macro-average versus **56.36%** for a no-skill Builder (**+8.95** pp) and **53.29%** when the same bank is pasted straight to the Target (**+12.02** pp). Gains appear in every model–benchmark pair; NewtonBench benefits more on average than Harness-Bench, consistent with recurring coordination failures being scaffoldable. Same-model Builder=Target runs average **+18.71** pp over no-skill construction. Controllers matter in ablations (Gemini NewtonBench drops **13.36** pp without them). Outcome transitions show fewer invalid submissions and more completed loops—not just prettier prompts.

## Why it matters for code review

Always-on factories that keep dumping CLAUDE.md advice into the coding agent are optimizing the wrong role. Put experience into the Builder that provisions verification gates, memory, and controllers before the overnight Target runs; score the system by whether support is *enacted*, not whether the Target was shown a tip. Continuous verified momentum compounds when maker≠checker is designed into the harness, not hoped for in the prompt. FOMO for more Target skills without a Builder learning loop just fattens context while leaving the same execution gaps.
