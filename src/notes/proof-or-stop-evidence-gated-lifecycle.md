---
title: "Proof-or-Stop: lifecycle advances only on fresh evidence"
description: "Jul 16 Huang et al.: treat reviewed/tested/DONE as claims; admit transitions only with source-bound, mechanically verifiable receipts — zero false-DONE in 10/10; hidden-fail amplification 31→2 per 1,800."
date: 2026-07-16
kind: paper
source:
  title: "Proof-or-Stop: Don't Trust the Agent, Trust the Evidence — Loop Engineering for Verifiable Evidence-Gated Lifecycle Control"
  url: https://arxiv.org/abs/2607.14890
project: steward
---

Jek Huang, Jeffery Hsia, Jiayi Sun, Freddie Shi, Wei Huang, and Ian H. White’s Jul 16 arXiv paper is the control-theory version of “the harness never believes the agent.” Autonomous coding agents already execute multi-step work; what still fails is treating **reviewed / tested / DONE / ready-to-merge** as facts. Proof-or-Stop Lifecycle Control advances those states only when **fresh, tracked-source-state-bound, mechanically verifiable evidence** passes the gate. Agent text is a claim. “Proof” here means gate-admissible evidence under a stated trust model — not a semantic proof of program correctness.

The open-source unattended-loop engine is evaluated three ways. Mechanism tests: **10/10** scenarios with **zero false-DONE**; local-key receipt bundles rejected **18 tamper classes** with zero false accepts. A powered control-policy ablation (9,240 cells): pre-registered A4 vs A2′ cut visible-pass/hidden-fail amplification from **31/1,800** under a compute-budgeted naive loop to **2/1,800** under the gated loop (1.6pp lift in not-amplified rate, 95% CI [0.8, 2.5]). Near-compute A3 vs A4 (**14/1,800 vs 2/1,800**) argues the gain is from **enforcing review as a lifecycle gate**, not from merely adding another reviewer model. Self-application corpus: 565 stories, 1,007 review findings (94.8% resolved), plus a 68-row high/critical cross-vendor exhibit. Limits are stated plainly — one model family, 24 ablation tasks, self-hosted corpus — so the claim is a portable control layer, not a universal benchmark win.

Operationally the pattern matches what continuous factories keep rediscovering: stale or self-authored evidence must fail closed; receipts bind hashes, integrity, authorized producers, execution details, and accepted outcomes; lifecycle machines that accept “I tested it” without re-running a fixed command set industrialize false confidence at overnight pace.

## Why it matters for code review

Always-on merge volume without evidence-gated state is how green CI and chat claims become morning incident queues. Pair continuous harnessed throughput with Proof-or-Stop discipline: the factory may run 24/7, but DONE is not a vibe the implementer emits — it is a receipt the harness can re-verify. FOMO about idle agents is cheaper to fix than a lifecycle that advances on tampered or self-certified proof.
