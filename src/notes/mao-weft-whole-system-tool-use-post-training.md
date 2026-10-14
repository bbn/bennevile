---
title: "WEFT: scale the whole agentic system—environment, task, harness, and evaluator"
description: "Sep 29 Mao/He/Wang et al.: execution-driven self-evolution + prefix-preserving sampling + MegaMCP; WEFT-14B beats Agent-World-14B by +6.41/+2.23/+12.27pp on BFCL V4 / τ²-Bench / Claw-Eval."
date: 2026-09-29
kind: paper
source:
  title: "WEFT: Scaling Tool-Use Post-Training for General-Purpose Agents"
  url: https://arxiv.org/abs/2609.36887
project: steward
---

Bo Mao, Hang He, Linting Wang, Lizhi Lin, Maosen Zhou, and collaborators (ECNU / Fudan / Shanghai Innovation Institute / Qiji Zhifeng) argue that scaling **executable environments** alone does not yield reliable tool-use post-training: learning signals come from a full **agentic interaction system**—environment, task, **agent harness**, and evaluator. Faulty tools, infeasible tasks, or verifier bugs can look like policy failures and poison gradients. **WEFT** (Whole-system Evolution For Tool-use Post-training) couples scalable system construction, execution-driven self-evolution, and stable training.

Construction synthesizes stateful environments and cross-MCP workflows, then diversifies rollouts across task-disclosure views and native harnesses (ReAct, OpenClaw, Hermes) with objectives held fixed. Self-evolution attributes failures from traces and state evidence to the responsible component, revises it, and **revalidates with fresh rollouts**. Training stabilizers include **prefix-preserving rejection sampling** (keep verified atomic progress; resample only the failed segment), task filtering by verifier reliability, atomic-turn credit assignment, and **MegaMCP** shared tool serving with per-rollout isolated, snapshot-recoverable state.

Post-training Qwen3-8B/14B and Qwen3.5-35B-A3B, WEFT-8B/14B beat matched-size environment-scaling baselines on BFCL V4, τ²-Bench, and Claw-Eval aggregates—WEFT-14B improves over Agent-World-14B by **+6.41 / +2.23 / +12.27** percentage points. WEFT-35B-A3B reaches **45.99%** Toolathlon-Verified and **26.50%** AutomationBench. With task set and rollout budget fixed, three self-evolution rounds cut tool-call error rates in selected training data; multi-view/multi-harness rollouts add mean gains of **13.58 / 12.83 / 2.71** points on Toolathlon-Verified / AutomationBench / Claw-Eval under benchmark-native harnesses.

## Why it matters for code review

Factories that only grow overnight sandboxes while freezing the harness and grader are optimizing the wrong surface. WEFT’s receipt: treat harness and evaluator as first-class evolvable components, keep verified prefixes when resampling, and refuse to credit policy when the task or verifier is broken. Continuous verified momentum compounds when post-training loops close over the **whole** interaction system—FOMO for more environment breadth without harness/evaluator co-evolution just scales misleading learning signals into the next model checkpoint.
