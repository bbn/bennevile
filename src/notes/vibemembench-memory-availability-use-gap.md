---
title: "VibeMemBench: useful repo history exists — memory systems mostly don't deliver it"
description: "Sep 20 Fan et al.: 111 SWE-rebench targets, 3,634 trajectories — frozen verified experience lifts 4/5 solvers +1.1–4.5 pp and cuts steps; 11/12 Mem0/SimpleMem/MemoryOS/A-MEM pairings stay at or below memory-off."
date: 2026-09-20
kind: paper
source:
  title: "VibeMemBench: Evaluating Memory Systems for Coding Agents on Real Repository Coding Tasks"
  url: https://arxiv.org/abs/2609.23570
project: steward
---

[Fan, Shi, Li, Sun, Chen, Xu, Wei, Ni, Yang, Ye](https://arxiv.org/abs/2609.23570) (SIAT / Alibaba / SUAT, Sep 20) close a measurement hole continuous factories keep bumping into: memory benchmarks score recall without executable coding outcomes, while SWE-style benches score patches without isolating a memory intervention. **VibeMemBench** keeps agent, tools, sandbox, and budget fixed and toggles only the declared memory condition across **111** targets from **90** SWE-rebench V2 repos, backed by **3,634** completed history trajectories. Construction (SIEVE) retains a target only when an injected prior experience shows execution-verified uplift in a reference setting, so every released target carries a known-useful frozen record — then that record is transferred to held-out solvers, and separately four production memory systems (Mem0, SimpleMem, MemoryOS, A-MEM) must *construct and retrieve* experience from the same history.

The receipt that survives vendor demos: freezing and injecting the verified experience raises observed resolve on **four of five** transfer solvers by **1.1–4.5 pp**, shortens agent steps on all five, and beats an irrelevant-text control. When the same history is handed to existing memory systems for retrieval, **eleven of twelve** solver×system pairings stay at or below the matched memory-off baseline; failure attribution puts ~**69%** of failing pairings on **form degradation** (raw transcript volume, instruction pollution, buried fix patterns) rather than ranking misses. Solver headroom matters: the same record can help a weak memory-off solver and harm a strong one already at ceiling. Availability of useful history is not the same as a harness that can serve it under continuous load.

## Why it matters for code review

Overnight factories that “remember last night” still wake to the same class of bad fix unless memory is a gated, compressed, fix-anchored record — not a transcript dump re-injected into every PR. VibeMemBench productively complicates FOMO for always-on agents with RAG: history can hold transferable experience, and today's memory stacks mostly fail to convert it into verified resolve. Review the memory path the way this bench does — memory-on vs memory-off under executable tests — before treating persistent context as free compounding.
