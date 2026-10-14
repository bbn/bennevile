---
title: "Reflexion: agents that learn from linguistic critique"
description: A 2023 framework that stores verbal reflections from failed trials and reuses them—strong gains on coding benchmarks without weight updates.
kind: paper
date: 2023-03-20
source:
  title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
  url: https://arxiv.org/abs/2303.11366
project: steward
---
Most agent loops treat a failed run as a discarded transcript. Reflexion keeps the failure as text: the agent writes a short reflection, parks it in episodic memory, and conditions the next attempt on that critique.

The important bit for coding is that the feedback channel is linguistic, not a scalar reward. Compiler errors, test failures, and self-critiques all get folded into the same memory buffer. On HumanEval they report 91% pass@1 with this loop—better than then-SOTA GPT-4 one-shot—without fine-tuning.

## Why it matters for code review

Review is often the only place an agent receives durable critique. Reflexion is a reminder that the useful artifact is not “another pass,” it is a named failure mode that survives into the next attempt. If your review comments vanish after merge, you are throwing away the learning signal.
