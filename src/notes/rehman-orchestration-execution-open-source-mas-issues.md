---
title: "Open-source MAS issues: orchestration fails before the model does"
description: "Oct 2 Rehman et al.: 944 filtered GitHub issues across 21 LLM multi-agent repos—Orchestration & Execution is 22%, Memory & State 14.7%; Workflow/Tool/Memory problems dominate causes; Optimize Workflow leads fixes."
date: 2026-10-02
kind: paper
source:
  title: "Understanding Issues, Causes and Solutions in Open-Source LLM-based Multi-Agent Systems"
  url: https://arxiv.org/abs/2610.00905
project: steward
---

Asad Ur Rehman, Syed Mohammad Kashif, Ruiyin Li, Peng Liang, Zengyang Li, and Arif Ali Khan (Wuhan / CCNU / Oulu) mine what practitioners actually file when LLM multi-agent systems leave the demo. From **21** starred MAS repos they pull **22,848** closed issues, filter to **944** true multi-agent reports, and taxonomize issue → cause → solution. The stack that always-on factories feel in the morning shows up in the counts: **Orchestration & Execution** is the largest issue class (**22.0%**)—handoffs, control-flow, infinite loops, premature stops, agent selection, context loss under concurrency—ahead of **Memory & State Management** (**14.7%**) and feature requests (**13.2%**). Tool, integration, role, and environment issues trail.

Causes (extracted for **57.2%** of issues, **540** cause instances) concentrate on **Workflow Problem** (**29.4%**), then **Tool Integration** (**11.7%**) and **Memory** (**11.1%**). Solutions skew to **Optimize Workflow** and configuration adjustments rather than “swap the frontier model.” The paper’s implication is blunt for harness builders: the bottleneck is coordination machinery—state propagation, handoff contracts, termination, tool registration—not raw generation quality. Orchestration failures map heavily to workflow causes; memory issues map to memory causes; tools map to tool-integration causes—so the fix taxonomy tracks the harness surface, not the chat transcript.

## Why it matters for code review

Continuous factories under sustained merge load will burn overnight budget on loops that never terminate, handoffs that drop context, and shared state that desyncs between agents—then look like “the model was bad.” Review agent platforms the way Rehman’s taxonomy reads: ask which orchestration and memory contracts are owned by the harness before asking for another peak interactive session. Pair with [Heng’s global coherence](/posts/heng-global-coherence-harness-owns-shared-state/) when locally green agents still break a team invariant, and with [Wiedmann’s agents-are-systems](/posts/wiedmann-agents-are-systems-not-models-configuration-axes/) when evaluation must score configuration axes, not only the base model.
