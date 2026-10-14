---
title: "GitHarness: version the requirement with the work, then branch the update"
description: "Sep 30 Yang/Jiang/Liu et al.: Git-style requirement↔work snapshots; Git Agent picks compatible historical state; +wins in 28/30 backbone–harness settings; Code tokens −73.6% vs native while resolved rate rises."
date: 2026-09-30
kind: paper
source:
  title: "GitHarness: Git Init Your Harness Working Memory for Perpetual User Requirements"
  url: https://arxiv.org/abs/2609.36789
project: steward
---

Zhibang Yang, Xinke Jiang, Yuxuan Liu, and collaborators at Peking University treat long-horizon agent collaboration under **perpetual requirements**—completion, elicitation, and shift—as a version-control problem rather than a context-stuffing problem. **GitHarness** pairs each effective requirement state with a recoverable harness work state in a branchable history. A trainable **Git Agent** (Inspect / Commit / Reuse) reconstructs the current requirement, selects a semantically compatible historical base, and hands an update hint to the underlying harness (TCRAG, StackPlanner, or OpenHands). Execution modes are ExactReuse, FreshSolve, or ReuseAndPatch; failed runs leave the graph unchanged. The Git Agent is trained with interface-level black-box RL while task executors stay frozen; MTAgentBench extends GSM8K, BIRD, BrowseComp-Plus, SWE-bench Verified, and DeepResearch Bench into seven-turn requirement-change trajectories.

Across two backbones and three harnesses (30 settings), training-free GitHarness beats native continuation everywhere and matches or exceeds the strongest competing baseline in **28/30** (27 strict wins). Under StackPlanner + DeepSeek-V4-Flash it reaches **74%** SWE-bench Verified resolved versus **67%** native, while cutting average Code tokens from **4.90M** to **1.29M** (**−73.6%**); Search tokens fall **54.5%** with large accuracy gains. Ablations show historical base selection and ReuseAndPatch drive both quality and cost: forcing latest-state resolution crashes Code resolved rate **74→44** while exploding tokens. Long-horizon interleaved sessions (up to 30 turns) keep GitHarness ahead with shallower degradation than restart or fold baselines.

## Why it matters for code review

Always-on factories that keep the full overnight transcript when a human revises one requirement will either pollute the next loop with stale work or burn the budget redoing everything. Treat requirement shifts the way GitHarness does: commit verified requirement↔work pairs, resume from a compatible base, and patch locally. Score continuous verified momentum by preserved valid work and verifier-backed outcomes under changing intent—not by uninterrupted context length. FOMO for “never lose the thread” without versioned maker≠checker just turns every clarification into a global rewrite.
