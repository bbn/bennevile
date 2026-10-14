---
title: "HarnessBank: gene-bank search plus gated screening for trustworthy harness self-evolution"
description: "Jul 15 Luo et al.: semantic Harness Gene Bank + validity/activation/significance/gain gates — +5.1% to +15.4% Pass@1 across seven benchmarks; beats GEPA/DGM under the same paired-2σ ruler."
date: 2026-07-15
kind: paper
source:
  title: "HarnessBank: Semantic Gene-Bank Search with Gated Verification for Agent-Harness Self-Evolution"
  url: https://arxiv.org/abs/2607.13683
project: steward
---

Luo, Xue, Wang, Hu, and Deng treat harness self-evolution as a *trust* problem, not just a search-budget problem. Greedy “keep what looked better once” loops collapse into prompt-safe edits, retain inert patches, and credit noise. **HarnessBank** pairs a frozen task agent with a separate evolver and keeps a **Harness Gene Bank** indexed by semantic coordinates — *where* an edit acts (prompt / knowledge / runtime / config) and *why* (targeted failure pathology) — so complementary mechanisms stay available for reinvention and recombination instead of being discarded by a single lineage.

Offspring do not get a free full-set eval. **Gated Harness Screening** runs a cheap subset through four sequential gates: validity (protocol-complete ledger, not sandbox-crash as “fail”), activation (the patch must actually fire — beacon required), paired significance (task-level Δ clears *z* ≥ 1.96), and gain over parent. Only survivors pay for full training-set evaluation and compete for cell admission. On seven domains with frozen Qwen3.6-27B, train-selected harnesses lift sealed test Pass@1 by **+5.1% to +15.4%**; recurring wins are runtime recovery for thinking-runaway empty turns stacked with verify-finalize self-checks. Under the same protocol and paired-2σ ruler, HarnessBank credits four of five sealed comparisons versus one for DGM and none for prompt-only GEPA. Cross-model runs show the transferable asset is the diagnosis–search–verify process: a patch matched to one model’s pathology is near-zero or harmful on another.

## Why it matters for code review

Continuous factories that evolve harnesses overnight need merge criteria stricter than “mean went up.” Review harness PRs the way HarnessBank screens candidates: require an activation proof, a paired significance receipt, and a semantic reason the edit belongs in the bank — not a one-shot spike on a tiny subset. Steady harnessed throughput compounds when FOMO for more evolution rounds is spent on gated, recombinable mechanisms rather than bursty prompt thrash that never fires in production.
