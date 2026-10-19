---
title: "Spawning sub-agents mid-task costs 1.4–3.3× the tokens and rarely saves time; it pays on long-horizon work and independent checks"
description: "Oct 7 Li, Li, Jiang and Lou: 2,124 matched runs of Codex, Claude Code and Kimi Code with dynamic concurrency on or off. Runtime rose in 14 of 15 agent-benchmark cells, Claude Code fell from 83% to 59% on SWE-bench Verified, and gains showed up only on the longest tasks. Shared-file and merge problems were the largest failure category at 33.2%."
date: 2026-10-07
kind: paper
source:
  title: "When Sub-Agents Work in Parallel: The Promises and Pitfalls of Dynamic Concurrency in Long-Horizon Coding Tasks (arXiv 2610.10263)"
  url: https://arxiv.org/abs/2610.10263
project: steward
---

[Han Li, HanHaoNing Li, Ziqian Jiang and Yiling Lou](https://arxiv.org/abs/2610.10263) (Nanjing University, CUFE, UIUC) test the feature that turns one coding session into a burst: **dynamic concurrency**, where the main agent decides mid-run whether to spawn parallel sub-agents (Codex multi-agent, Claude Code dynamic workflows, Kimi Code AgentSwarm). They ran each agent on the same 354 tasks with the feature on and off, across one bounded benchmark (SWE-bench Verified) and four long-horizon ones (RepoZero, NL2Repo, ProgramBench, LoopsBench). That is **2,124 executions** and more than $20K of compute, and every concurrent trajectory was hand-annotated against its sequential twin.

The headline is that parallelism inside a session mostly buys cost, not speed:

- **Tokens** rose to **1.41–3.31×** the sequential level. Codex, the one agent with a small net gain in solved tasks, spent **24.12M tokens per solved task** concurrently versus **7.69M** sequentially.
- **Runtime** went *up* in **14 of 15** agent-benchmark cells. Claude Code took **27.8 minutes** per SWE-bench Verified task concurrently versus **17.5** sequentially, and its task pass rate fell from **83% to 59%**. Kimi Code fell from **77% to 59%**; Codex held at **71%**.
- **Gains** clustered on the longest work. On LoopsBench, concurrency lifted task pass rates by up to **14.3 points** (Claude Code **7.1% → 21.4%**), and Codex on NL2Repo went from **34.6% to 57.7%**. Meaningful speedups appeared on only **12.6%** of tasks both modes solved.

The failure taxonomy (4 categories, 13 subcategories, 28 patterns, 804 instances) looks like a merge queue in miniature. **Shared state and merge problems** are the largest category at **33.2%**, and **concurrent writes** alone are **26.5%** of all instances: a sub-agent replaces a file and `Cargo.toml` with a different layout while the main agent is still building against the old one. The rest are orchestration, governance of stalled or orphaned sub-agents, and lost global context. Where concurrency did help, it was in three situations: complementary pieces of work, alternative attempts at the same problem, and **independent validation**, where a sub-agent checks an assumption early enough for the main agent to fix its artifact.

## Why it matters for code review

This is a careful complication of the "more agents, faster" instinct. Fanning out inside one session made the bounded, review-sized tasks *worse* and slower, and the extra tokens bought results only on long, decomposable work. The authors' advice is to enable it selectively, not by default. The most reliable win was a second agent checking the first one's work, not a second agent writing more code. For teams running agents around the clock, the same lesson holds one level up. Steady, scoped work with a separate verifier beats a burst of parallel writers racing on shared files. Read with [Muku's case for scheduling scopes before agents start](/posts/muku-np-bench-parallel-agents-schedule-merges-not-warn/), [Nikolaev's pre-write admission for parallel agents](/posts/nikolaev-claim-plane-pre-write-admission-parallel-limits/), and [Mastra's factory, where full auto turned out bursty](/posts/mastra-factory-full-auto-was-bursty-stages-went-manual/).
