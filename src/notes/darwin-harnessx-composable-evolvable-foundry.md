---
title: "HarnessX: compose the harness, then evolve it under a seesaw gate"
description: "Jun 12 Darwin Agent Team: typed harness foundry + AEGIS Digester→Planner→Evolver→Critic — avg +14.5% (up to +44%) across five benches; variant isolation stops GAIA collapse; co-evolution +4.7% over harness-only."
date: 2026-06-12
kind: paper
source:
  title: "HarnessX: A Composable, Adaptive, and Evolvable Agent Harness Foundry"
  url: https://arxiv.org/abs/2606.14249
project: steward
---

The Darwin Agent Team argue that continuous factories stall when the harness is a hand-stitched blob: entangled prompts/tools/memory, no typed edit surface, and trajectories thrown away between releases. **HarnessX** makes the harness a first-class value — processors on eight lifecycle hooks, a nine-dimension taxonomy (context, tools, memory, control, observability, training bridge…), and a substitution algebra so edits insert/replace without rewriting the loop. On top sits **AEGIS**: Digester → Planner → Evolver → Critic, with a deterministic gate that enforces a **seesaw** constraint (no regressing previously solved tasks) and an operational mirror that maps reward hacking, catastrophic forgetting, and under-exploration onto concrete defenses.

Across ALFWorld, GAIA, WebShop, τ³-Bench, and SWE-bench Verified (three task-agent families, ≤15 rounds), harness evolution yields average **+14.5%** absolute (up to **+44.0%** on ALFWorld for the weakest base). Gains invert with baseline strength — the night’s harness work closes gaps weaker models cannot self-correct. Single-harness Global evolution on heterogeneous GAIA collapses after an early peak (**−24.3** peak-to-final); **variant isolation** (ensemble routing) restores non-degrading **+13.6%**. Closing the harness–model loop via shared-replay cross-harness GRPO adds another **~+4.7%** over harness-only. Case studies show the pathologies are real: verifier-format reward hacks, reminder-stack forgetting (−14% Telecom), prompt-neighborhood under-exploration.

Project: [darwin-agent.github.io/HarnessX](https://darwin-agent.github.io/HarnessX/).

## Why it matters for code review

Overnight harnessed momentum is not “keep mutating the agent” — it is typed components, trace-grounded manifests, and a merge gate that refuses regressions the way CI refuses red tests. Review continuous harness PRs for applicability scope (variant vs global), Critic/gate receipts rather than evolver enthusiasm, and whether the factory is optimizing prompts into a corner. FOMO for more evolution rounds is wasted if the morning’s “improved” harness silently forgot yesterday’s green tasks; bursts still win for inventing a new processor class, while the always-on loop should only ship under seesaw evidence.
