---
title: "JAZ invoke: a minimal agent loop that beats specialized memory and self-improvement harnesses"
description: "Sep 22 Li et al.: invoke makes prompts, tools, and REPL history first-class REPL variables—StuLife far-recall 69.9% vs Letta 61.8% at ~half cost; AppWorld TGC 74.2% vs ACE 69.9% with lower meta spend."
date: 2026-09-22
kind: paper
source:
  title: "Harness as a Language: A Minimalist Agent Framework With Maximal Expressivity"
  url: https://arxiv.org/abs/2609.26891
project: steward
---

Zhening Li, Joshua Liu, and collaborators ask how much of “harness engineering” is really **missing expressivity in the agent loop**. **JAZ** centers on **`invoke`**: a language primitive whose body is written by the LLM at call time, with recursive `invoke` as the default subagent, and—crucially—**every input plus the REPL `__history__` available as variables** the model can pass by reference. Hooks add budgets, validation, and observability without baking memory or ACE-style playbooks into the runtime.

Prompt-only head-to-heads are the point. On StuLife’s far-recall subset (207 tasks needing facts from >50 tasks earlier), GPT-5.4 nano **JAZ invoke** reaches **69.9%** pass / **73.6%** score versus Letta (MemGPT) **61.8% / 67.0%** at roughly half the cost ($18.3 vs $42.1), and far above CodeAct+subagents (**32.0%**). Tail-recursive delegation keeps prior `__history__` by reference across dozens of context-window handoffs. On AppWorld test-challenge continual self-improvement, a GPT-5.4 meta-`invoke` over GPT-5.4 nano solvers hits **74.2%** TGC versus ACE on CodeAct at **69.9%**, with lower total and meta cost—because the meta-agent batches, selectively reads traces, and can optimize tools as well as prompts, not only a rigid reflector→curator playbook.

## Why it matters for code review

Always-on factories often grow specialized memory/self-improve layers that encode brittle assumptions. JAZ’s productive complication: sometimes the scarce asset is a **minimal, maximally expressive control plane** plus reviewable hooks—not another external harness module. Review overnight systems for whether subagents can return lossless history by reference, whether meta-agents can change tools as well as prompts, and whether “specialized” components are still earning their rigidity. Pair with [Li’s Grow the Harness, Not the Context](/posts/li-grow-the-harness-not-the-context/) and [Self-Harness’s held-out promotion rule](/posts/zhang-self-harness-held-out-regression-gate/).
