---
title: "VACE: co-evolve weights and harness—but reject harness edits that fail validation"
description: "Sep 29 Qi/He/Liu et al.: alternate agentic RL with trajectory-driven harness revision; candidate kept only if validation improves with model fixed—17/44 proposals rejected; +6.43/+9.09pp over weight-only RL on OfficeQA/AutomationBench."
date: 2026-09-29
kind: paper
source:
  title: "VACE: Validation-Gated Alternating Co-Evolution of Agent Models and Harnesses"
  url: https://arxiv.org/abs/2609.37105
project: steward
---

Jiexing Qi, Yu He, Jun Liu, Qichen Huang, Shaohua Hu, Zhan Dang, and collaborators note that agent improvement has two coupled knobs—**weight updates** and **harness refinement**—and that naively alternating them can poison the next RL stage with a worse scaffold. **VACE** (Validation-Gated Alternating Co-Evolution) makes the coupling explicit: run agentic RL, reuse the collected trajectories to propose a harness revision, then compare incumbent vs candidate with the **updated model held fixed**. The candidate becomes the training harness for the next round **only if** it improves validation performance; otherwise it is discarded before it can reshape further rollouts.

With Qwen3.5-9B, VACE reaches **45.26%** test accuracy on OfficeQA and a mean partial-credit score of **75.19%** on AutomationBench—**+6.43** and **+9.09** percentage points over weight-only RL, and **+4.59 / +6.95** pp over ungated alternation. The gate is not cosmetic: across **44** harness proposals, **17** reduce validation at the updated checkpoint and are rejected before subsequent RL. That is the operational claim—self-improving factories need a falsifiable admit/reject on harness edits, not a faith-based “the evolve agent said so.”

## Why it matters for code review

Always-on factories that let overnight RSI rewrite prompts, tools, and middleware without a held-out gate are compounding scaffold drift into the next training day. VACE’s useful receipt matches continuous verification under load: treat every harness edit as a predicted improvement that the next eval can falsify, keep weight learning and harness learning on alternating ticks, and refuse the edit when validation drops. Score self-improving loops by how many bad harness proposals they *reject*, not how many they ship. FOMO for unchecked harness evolution just accelerates overfitting to the development set.
