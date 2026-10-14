---
title: "Datadog: harness-first, then telemetry closes the loop"
description: "Mar 9: redis-rust and Helix — DST/TLA+/Kani pyramid replaces line-by-line review as primary correctness; production telemetry refines the harness when invariants were wrong."
date: 2026-03-09
kind: field-note
source:
  title: "Closing the verification loop: Observability-driven harnesses for building with agents"
  url: https://www.datadoghq.com/blog/ai/harness-first-agents/
project: steward
---

Alp Keles, Jai Menon, Sesh Nalla, and Vyom Shah’s Mar 9 Datadog post is the industrial version of continuous verified momentum: **agents write faster than humans can read, so trust has to live in the harness**, not in heroic diff review. The compiler analogy is the load-bearing one — automation won when verification was precise enough that humans stopped inspecting every instruction. Agents ingest unconstrained natural language; the only scalable answer is checks that say, in seconds, whether the change is acceptable.

They call the posture **harness-first engineering**. The agent generates; the harness verifies; production telemetry validates; failures update the harness and the agent retries. BitsEvolve already showed the pattern at function scale (10× ingestion speedups, 1.53× DeBERTa encoder, 1.57× Toto forecasting — all verified against live traffic). Late-2025 model jumps pushed the same idea to full systems.

**redis-rust** was the learning run: one Claude Code/Opus agent, early “compiles and tests pass” green that still drifted Redis error semantics and over-engineered abstractions. Verification grew layer by layer — shadow-state oracle → deterministic simulation testing (DST) with fault injection → TLA+ for replication/gossip → Kani for CRDT merge properties → Maelstrom/Knossos linearizability → official Redis Tcl suite → shadow traffic against Ephemera. Staging latency looked comparable to Redis 8.4; memory was 8× worse until metrics feedback drove three agent optimizations for an **87% memory cut**.

**Helix** (Kafka-compatible streaming on object storage) is the refined recipe: multi-agent (Claude Code + Codex), contracts before code, a verification pyramid where DST (~5s) is the workhorse under TLA+/Stateright/Kani/telemetry. Target **500 DST seeds per component**, then **10 million** system-wide with Kafka-semantic invariants (every ack consumable; monotonic offsets; leadership changes must not lose writes). DST caught a WAL bug — in-memory truncate before on-disk sync — that unit tests and lucky review miss. Performance became hill-climbing with a safety net: propose → full DST → keep or revert. Human role narrowed to system idea, invariants, harness strength, measurable targets, and architectural approvals. Staging claim: Helix serving ~10k msgs/s APM profiling with p50 produce **22.2 ms vs 116 ms** on baseline Kafka.

The economic inversion is the continuous-factory punchline. Before agents, code review was the scalable verifier and formal methods were expensive specialty tools. With agents generating TLA+, DST harnesses, and proofs inside the iteration loop, **review becomes a bloom filter** — a fast gate over harness output (which invariants, which seeds, what telemetry) rather than the source of correctness. Incomplete invariants still produce automated false confidence; **observability closes the loop** by feeding production mismatches back into the checks. Without that feedback, the overnight factory is still an open circuit.

## Why it matters for code review

Always-on and overnight throughput compounds past peak-session mastery only when verification is fast, automatic, and refined by reality — not when humans try to read every agent iteration. Pair continuous factories with an explicit verification frontier: wherever a property is machine-checkable, delegate; wherever it is not, keep the human — and treat production telemetry as harness input, not a dashboard you glance at after the merge.
