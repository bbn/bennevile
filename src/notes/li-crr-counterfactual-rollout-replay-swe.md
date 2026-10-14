---
title: "CRR: fork the sandbox, score the decision — process signal without a process labeler"
description: "Sep 27 Li et al. (NeurIPS 2026): Counterfactual Rollout Replay lifts SWE-bench Verified 41.7% vs 36.4% GRPO (+5.3 pp); equal-wall-clock still +5.0 pp; Search-Select control shows credit assignment beats branch picking."
date: 2026-09-27
kind: paper
source:
  title: "Counterfactual Rollout Replay: Forkable Environments as Free Process Rewards for Software Engineering Agents"
  url: https://arxiv.org/abs/2609.33875
project: steward
---

Li, Wang, Chen, Cao, and Tang attack the sparse-reward hole in training software-engineering agents: a trajectory-level pass bit does not say which mid-run edit helped. **Counterfactual Rollout Replay (CRR)** keeps the realized on-policy trajectory, forks a few high-entropy / state-changing steps in a restorable sandbox, samples an alternative action and continuation, and replaces those steps’ advantages with the **difference in terminal verifier return**. “Free” means no human process labels and no learned process reward model — replay still costs compute.

With a shared Qwen3-14B backbone, CRR reaches **41.7 / 35.9 / 32.6%** pass@1 on SWE-bench Verified, Live, and held-out SWE-rebench — about **+5.3 / +4.8 / +4.7** pp over vanilla GRPO, and ahead of a rubric PRM baseline. An equal-wall-clock comparison on the same 8×H100 node (fork overhead charged) still shows **41.7% vs 36.7%** for extended GRPO. A matched Search-Select control that uses the same forks to *replace* the training sequence when a branch scores higher underperforms CRR — the win is **credit assignment on realized actions**, not expert-iteration branch picking. Stacking with trajectory search and PRMs pushes Verified further (up to **45.6%** in the full stack). Operating range is honest: multiply restore/replay cost enough and the equal-budget edge disappears; gains assume affordable, reliable forks and a trustworthy verifier.

## Why it matters for code review

Continuous SWE factories that only RL on merge/pass bits teach agents to finish loudly, not to localize well. Forkable verify environments turn intermediate decisions into auditable return contrasts — the same infrastructure overnight loops already need for worktrees and sandboxes. Review training harnesses for whether they charge replay honestly and keep the realized patch under examination, not only the lucky branch that looked best at submit time.
