---
title: "Claim Plane: pre-write admission buys reliability—mostly by serializing"
description: "Aug 2 Nikolaev confirmatory: static Claim Plane lifts pair pass 23.3%→50% and integration 65.6%→96.7% on 30 CooperBench pairs—but serializes 96.7% of runs; dynamic scope fails closed on undeclared regions."
date: 2026-08-02
kind: paper
source:
  title: "Claim Plane: Reliability Gains and the Limits of Selective Concurrency for Parallel Coding Agents — A 30-Pair, Three-Seed Confirmatory Study of Deterministic Pre-Write Admission"
  url: https://arxiv.org/abs/2608.00947
project: steward
---

Maxim Nikolaev’s confirmatory follow-up to [Claim Plane](https://arxiv.org/abs/2607.21909) treats parallel coding agents as a **pre-write admission** problem, not a late merge-repair problem. Each worker declares a versioned **ChangeIntent** (exact base commit, typed resources, dependencies, committed vs contingent operations) before mutation; a deterministic control plane admits compatible intents, constrains same-file parallelism to declared regions, serializes unresolved overlap, and **fails closed** on ambiguous authority. Contingent mutations do not reserve write ownership until the first real edit triggers atomic scope promotion and re-admission.

On 30 frozen CooperBench feature pairs (15 conflict / 15 clean), three coder seeds, four coordination arms, and **360** completed executions—planner declarations frozen once, DeepSeek V4 Flash coding—**static** Claim Plane raised pair pass from **23.3%** under unconstrained parallel to **50.0%** (+26.7 pp; 95% bootstrap CI 9.6–60.0) and integration success from **65.6%** to **96.7%**. On conflict-labeled pairs, pair pass rose from **6.7%** to **60.0%**. The productive complicate: static admission **serialized 96.7%** of executions (including **93.3%** of clean cases), recovering reliability largely by collapsing toward serial work. **Dynamic** admission was more selective (66.7% of conflict / 13.3% of clean serialized) but **46/90** executions failed closed on undeclared scope (pair pass **22.2%**); 45 of those 46 blocks targeted files already named in the frozen declarations—region undercoverage and weak amendment handling, not wholly unknown paths. Provider calls were physically sequential; the study does not claim wall-clock parallel speedup. Artifacts and clustered bootstrap analysis are released.

## Why it matters for code review

Continuous factories under FOMO for more parallel workers still lose the night at integration when intents are soft and scope is inferred after the fact. Review multi-agent lanes for Claim-Plane-shaped contracts: versioned intents admitted before write, fail-closed ambiguous authority, and an honest accounting of how much “parallelism” is actually serialized admission. Steady harnessed throughput compounds when merge-rate under load is earned by declared scope; bursty heroics that fan out unchecked and hope the morning rebase holds do not. Pair with [Dan Mercede’s fail-closed merge admission](/posts/danmercede-failclosed-merge-admission/) and [Kitchen Loop’s drain/starvation gates](/posts/roy-kitchen-loop-spec-driven-self-evolving-codebase/) when sizing overnight worker fan-out.
