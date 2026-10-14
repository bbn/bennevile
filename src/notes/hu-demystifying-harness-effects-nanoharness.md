---
title: "Beyond the model: harness gains shrink on SWE repair, amplify on open-ended repo work"
description: "Sep 26 Hu et al.: mini-SWE vs OpenCode across 10 Qwen/DeepSeek models × 3 benches; NanoHarness (+tools, task-specific subagents) recovers most product-harness lift — complex scaffolding is not free."
date: 2026-09-26
kind: paper
source:
  title: "Beyond the Model: Demystifying Harness Effects in Software Engineering Agents"
  url: https://arxiv.org/abs/2609.32459
project: steward
---

Hu, Zhang, Yu, Chen, Luo, Fang, Chen, and Xiao treat the coding-agent harness as a first-class experimental factor — not an afterthought bolted onto a leaderboard run. They hold models and tasks fixed while swapping harnesses: lightweight **mini-SWE-agent** versus product-level **OpenCode**, across ten open-weight Qwen and DeepSeek variants on SWE-bench Pro, ProgramBench, and GitTaskBench (60 matched configurations). Then they build **NanoHarness** by stacking five plug-in components on mini-SWE — tool registry, context compression, explicit planning, subagents, and lazy skills — so each mechanism can be ablated.

The headline productively complicates “more harness is always better.” On SWE-style issue repair, complex harnesses mainly **compensate weaker models**; as capability rises the OpenCode–mini-SWE gap narrows (Qwen: ~6 pp → ~2.7 pp; DeepSeek-V4-Pro nearly ties). On newer open-ended repository work (ProgramBench, GitTaskBench), the same complex harness behaves like a **capability amplifier** — only stronger models reliably exploit the extra workflow. Component ablations on full ProgramBench localize the win: structured tools and **task-specific** subagents give the steadiest lifts; context compression and generic SE subagents **hurt**. Full NanoHarness gains **+7.37 / +6.21** pp over mini-SWE on Qwen3.7-Max and DeepSeek-V4-Pro and closes most of the gap to OpenCode / Claude Code with controlled prompt growth — gains from regularized exploration, not burning more tokens.

## Why it matters for code review

Always-on factories that keep bolting planners, subagents, and compressors onto overnight agents need a joint model–harness–task review, not a default “more scaffolding.” Demand ablations that show which component moved the merge metric on *your* task shape — and reject context-compression or general-subagent PRs that buy token savings by deleting the requirements the verifier still needs. Continuous verified momentum compounds when FOMO for idle agents funds structured tool use and task-aligned specialists rather than another bursty Claude Code session wrapped in an unmeasured mega-harness.
