---
title: "Authority at commit time: agents propose; only current admission effects"
description: "Sep 25 Salas: OCC for institutional agents — reject-and-rerun on stale deps/components; complete mediation + outbox; 18/18 mediated effects, 8 bypasses detected only with independent journal."
date: 2026-09-25
kind: paper
source:
  title: "Authority at Commit Time: Reject-and-Rerun Semantics for Governed Agentic Systems"
  url: https://arxiv.org/abs/2609.31490
project: steward
---

Jesus Salas’s Sep 25 paper states the invariant continuous factories keep rediscovering in distributed-systems language: **completion is not authority**. Agents may compute for seconds or hours from a snapshot of policy, facts, task state, models, tools, and verifiers that can change before the work lands. Treat them as **proposal producers**; a logically authoritative service alone compares declared dependencies and component manifests with current state, runs the current verifier, and either reserves an idempotent outbox effect or returns **reject-stale / reject-verify** for resynchronization and rerun. Unaffected work continues; lost acknowledgments resolve through canonical receipts, not a second dispatch.

The composition is optimistic concurrency control with an institutional read set — normative authority plus model/adapter/prompt/tool/verifier hashes — plus semantic verification and transactional outbox. Evidence layers: Matrix L4/L5 lifecycle fixtures (selective invalidation, 60/60 route assertions across three Phi-4 seeds); a local networked authority/outbox/reconciler (fully mediated: **18** authority commands → **18** external effects; direct-credential arms produced **eight** extra effects, all detected with independent journal reconciliation and **zero** false detections in the mediated control); and a delegated-gateway stress study that shows clock/lease/quorum costs when complete mediation is unavailable. Caveats owned: no claim of bypass prevention/reversal, WAN throughput, or verifier correctness — the architectural rule is the point.

## Why it matters for code review

Overnight agent fleets that auto-bless their own “done” are stale-effect machines. Review merge admission the way Salas reviews commit: dependency currency and current verification *before* the effect, reject-and-rerun instead of silently promoting last night’s snapshot, and complete mediation so a side-credentialed worker cannot land around the gate. Bursts still win on ambiguous intent; sustained verified momentum compounds when nothing becomes governed merely because an agent finished typing.
