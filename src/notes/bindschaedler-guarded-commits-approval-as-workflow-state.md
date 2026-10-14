---
title: "Guarded commits: put the human approval inside the workflow transaction"
description: "Oct 2 Bindschaedler et al. (MPI-SWS / MIT / Purdue): approval as ledger state + credential-confined commit adapter; four-condition predicate; 271k traces replay; docs-only bypass rule doubles W-Tran disagreement—ledger attributes it."
date: 2026-10-02
kind: paper
source:
  title: "Guarded Commits: Transactional Human Approvals for LLM Workflows"
  url: https://arxiv.org/abs/2610.00037
project: steward
---

Laurent Bindschaedler, Ferdi Kossmann, Chunwei Liu, and Jason Mohoney (MPI-SWS / MIT CSAIL / Purdue) start from the agent-authored merge: a human reviews a diff elsewhere while the agent process still holds the merge credential—so “Alice approved” in a log is not a commit predicate. Their **guarded-commit** design makes approval *workflow state*: before an irreversible ACT, a resolver appends a resolution record (and referenced evidence) to an append-only ledger; a **credential-confined commit adapter** alone holds the external credential and checks that record against artifact, policy version, and executed path. The contract is a four-condition predicate—(1) barrier coverage with an executed-path witness matching a declared path obligation, (2) policy and ledger-prefix pinning, (3) artifact identity (EDIT binds *H_pre* / *Δ* / *H_post*), (4) safe reuse/automation with a *fresh* derived record that transitively roots in HUMAN or declared automation. Reuse is exact-key conservative (repo + policy + verifier digest + normalized diff for PRs), not semantic nearest-neighbor.

Evidence is trace reconstruction, not a live A/B against GitHub branch protection: a validator on **999** synthetic acyclic plans accepts unfaulted DAGs and rejects missing / wrong-kind / partial-coverage barriers (**1.000** accuracy under the injected fault model). Across three public workloads totaling **271,035** traces (AIDev agent PRs, Wikimedia translation, CoAuthor suggestions), Playback replay matches recorded artifact hashes when present. Cache-only avoidance spans **0.9%–72.0%** by workload; adding rules lifts W-PR avoidance to **8.5%** at ~0.1% disagreement, but on W-Tran doubles overall disagreement to **10.6%**—and the ledger attributes the spike to one over-broad bypass rule (~63% conditional disagreement in the bypassed cohort). Public traces lack native credential proofs; capability checks are synthetic predicate sanity.

## Why it matters for code review

Overnight factories FOMO when agents go quiet; the worse failure is a merge that never had a commit-time check binding evidence, policy, and path. Review always-on merge adapters for Guarded-Commit-shaped contracts: approval inside the transaction, credentials only in the adapter, path witnesses the LLM cannot invent, and every reused or automated decision appending a fresh ledger record. Continuous verified momentum compounds when morning audit can replay *what was reviewed under which policy*; peak-session heroics that click Approve in a UI the orchestrator cannot see do not. Pair with [Dwijen Patel’s blind-gate demotion](/posts/dwijenpatel-outrigger-evidence-lab-blind-gate-demotion/) and [Salas’s authority-at-commit reject/rerun](/posts/salas-authority-commit-time-reject-rerun/) when the factory’s merge token must not outrun its approval record.
