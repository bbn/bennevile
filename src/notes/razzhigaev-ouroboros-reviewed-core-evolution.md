---
title: "Ouroboros: the harness evolves through reviewed commits—and Hope ran that loop for 161 days"
description: "Aug 8 Razzhigaev et al.: self-developing coding harness with free + experience-driven core evolution under a blocking diff gate; Opus 5 Terminal-Bench 2.1 86.74% audited; Hope—161 days, 1,085 self-mod commits, 63.5% recent review block rate."
date: 2026-08-08
kind: paper
source:
  title: "Ouroboros: A Self-Developing Frontier Coding Agent with Reviewed Core Evolution"
  url: https://arxiv.org/abs/2608.08311
project: steward
---

Anton Razzhigaev and collaborators treat long-horizon agents as **model–harness systems whose harness should not freeze after design**. **Ouroboros** keeps tools, context assembly, prompts, and core implementation in a versioned repo and admits changes only through a **reviewed commit path** that becomes the runtime for later work. Core evolution has two modes: **recursive free evolution** (improvement is itself a task; completion can schedule the next cycle) and **experience-driven core evolution** (ordinary work, review blockers, instrumentation, and social feedback expose durable error classes that become maintenance under the same gate).

The receipts are frontier and field. On Terminal-Bench 2.1, Opus 5 scores **86.97%** raw / **86.74%** after trajectory audit (387→386/445)—above Claude Code + Fable 5 at 83.8%. OSWorld-Verified hits **90.69%**; a five-rollout CL-Bench campaign reaches **0.2301**. SWE-bench Pro and GAIA land at model-matched parity with Codex / Claude Code after contamination filters. **Hope**, the longest publicly documented deployment, ran **161 days** across seven surfaces with $110.6K model spend, 79.7B tokens, 1,085 self-modification commits (**94.2%** agent-authored), and a recent review **block rate of 63.5%**—social signals are advisory; the agent decides which changes to pursue, and public channels cannot invoke commit/shell/identity tools.

## Why it matters for code review

Always-on factories that only mint feature diffs overnight under-invest in the control plane. Ouroboros makes the night’s product a **harness lineage with review receipts**: staged-diff fingerprints, multi-model quorum, constitution loaded on an untruncatable path, external spend caps, and `/panic` that terminates before agent handling. FOMO that agents aren’t working on your behalf is the wrong fear if they can rewrite model routing and governance without an authoritative gate—review self-mod PRs as promotions of the factory, not vibes. Pair with [Self-Harness’s held-out regression gate](/posts/zhang-self-harness-held-out-regression-gate/) and [Harness-of-Harness’s multi-day continual loops](/posts/harness-of-harness-continual-improvement/).
