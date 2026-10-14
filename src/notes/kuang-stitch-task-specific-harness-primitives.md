---
title: "STITCH: don’t generate the harness at test time—select and compile validated primitives"
description: "Sep 29 Kuang et al.: Harness Primitives mined from failed trajectories + deterministic compilation—SWE-bench Verified Pass@1 73.0→80.5%; Terminal-Bench 2 60.0→72.2%; composition cost ~2.7% of an actor attempt (638× cheaper than codegen)."
date: 2026-09-29
kind: paper
source:
  title: "Composing Task-specific Agent Harnesses at Test Time with Reusable Primitives"
  url: https://arxiv.org/abs/2609.38912
project: steward
---

Peng Kuang and collaborators formalize why **one global harness is structurally suboptimal** on heterogeneous queues: a mechanism that helps inside its application scope taxes tasks outside it, so any fixed on/off choice leaves a mismatch gap. Generating fresh harness code per task looks like the fix—until independent mechanism-failure risk compounds and executability decays with more generated pieces. **STITCH** splits the problem: offline, mine failed trajectories into **Harness Primitives** with explicit scopes and composition contracts; at test time, a composer selects an intent and a **deterministic compiler** wires validated implementations into a task-specific control graph—no mechanism codegen, no repair loop in the hot path.

Empirically, that separation pays. On held-out SWE-bench Verified (GPT-5.6-Luna actor, Mini-SWE-agent seed), STITCH reaches **80.5%** Pass@1 versus 73.0% seed, 79.0% Codex CLI, and 73.5% MetaHarness; on Terminal-Bench 2 it jumps **60.0% → 72.2%**, beating every fixed single-primitive harness and the random composer. Success scales with library size; selected primitives activate at **100%** during actor runs; composition overhead is **2.7–4.3%** of one actor attempt—orders of magnitude below even an optimistic “emit valid harness code with no debug” lower bound. Primitives also transfer across out-of-domain actors and, with attenuated but still positive gains, across SWE↔Terminal domains.

## Why it matters for code review

Always-on factories under volume need **task-conditioned control without overnight codegen fragility**. STITCH’s review surface is the composition intent plus contracts—which primitive fired, why its scope matched, what the compiler wired—not a regenerated harness diff nobody wants to audit at 8am. Productive complication: the composer can keep the seed for roughly half of tasks; sparse activation is a feature if your merge gate scores verified outcomes, not harness novelty. Pair with [Turbo’s per-instance editor](/posts/zhang-turbo-harness-instance-adaptive-optimization/) and [Adaptive-GEPA’s routed specialists](/posts/chen-adaptive-gepa-routed-specialist-harness/).
