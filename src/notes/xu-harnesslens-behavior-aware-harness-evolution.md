---
title: "HarnessLens: verify the behavior you changed, not a random task batch"
description: "Aug 27 Xu et al.: budget-aware harness evolution with behavior-aware verification + attributable-evidence gate — 7.6–13.6% held-out gains at ≤200 interaction units vs thousands of fixed-set rollouts."
date: 2026-08-27
kind: paper
source:
  title: "Verify Smarter, Evolve Further: Efficient Harness Evolution through Behavior-Aware Verification"
  url: https://arxiv.org/abs/2608.27311
project: steward
---

Xu, Zhang, Chen, Li, Liang, and Yang treat harness self-improvement as a **verification allocation** problem, not a “propose more candidates” problem. **HarnessLens** evolves user-configurable components (instructions, skills, tool descriptions, roles, compaction) under a fixed interaction budget by diagnosing trajectories, proposing modifications, and — crucially — selecting verification tasks *matched to the intended behavioral effect*, then accepting only when improvement is **attributable** and regressions are not.

The receipts cut against the fixed-batch habit. Across OpenCode, Codex CLI, and Pi on τ² Retail, τ³ Banking Knowledge, Terminal-Bench 2.0, and BIRD Mini-Dev (Challenging), HarnessLens improves average held-out pass@1 by **7.6–13.6%** while capping total units at **200** (initial rollouts + LLM sessions). Self-Harness / Meta-Harness / HarnessFix are configured up to **4,800 / 660 / 300** TRAIN rollouts and still lose to or tie worse: Self-Harness and Meta-Harness fall below the initial harness in half of their pairs. Ablations make the mechanism load-bearing: fixed, random, and RHO batches plus a metric-only gate all collapse toward “no edit” or unsupported gains; behavior-aware selection plus attributable gating is what keeps outcomes in two clean modes — **unchanged harness** or **effective edit**. Task diversity matters: related BIRD SQL patterns yield attributable recoveries; Terminal-Bench’s heterogeneous goals make broad rules regress and get rejected.

Code: [jhxu5214/HarnessLens](https://github.com/jhxu5214/HarnessLens). Caveats the authors own: one model family, three harnesses, four public benchmarks; budget counts sessions/trials, not dollars.

## Why it matters for code review

Self-improving factories do not get free overnight harness diffs — they need **merge gates for the control plane**. Review harness PRs the way HarnessLens reviews candidates: which behavior was targeted, which tasks prove it, what nearly-related tasks checked for regression, and whether the accept rule was attributable evidence rather than a noisy aggregate pass rate. Continuous verified momentum compounds when harness evolution spends scarce rollouts on the change that was claimed, not on a random coreset that buries the signal — and FOMO for more overnight tokens is wasted if every harness edit is graded on unrelated work.
