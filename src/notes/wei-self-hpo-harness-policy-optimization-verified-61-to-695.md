---
title: "Self-HPO: the policy rewrites its own harness, then trains inside it — SWE-Bench Verified 61.0% to 69.5%"
description: "Oct 16 Wei, Yao, Peng, Wang, Wu, Cheng, Meng and Gao (Microsoft Research / UVA / CMU): Self-HPO alternates harness edits by the current policy with RL under that harness. Average resolve rate 57.8%→64.8%; most of what the agent wrote into the harness fires when it says it is done."
date: 2026-10-16
kind: paper
source:
  title: "Self-Evolving Coding Agents via Harness-Policy Optimization (arXiv 2610.22791)"
  url: https://arxiv.org/abs/2610.22791
project: steward
---

[Zhepei Wei, Wenlin Yao, Baolin Peng, Danqing Wang, Qianhui Wu, Hao Cheng, Yu Meng and Jianfeng Gao](https://arxiv.org/abs/2610.22791) (Microsoft Research / University of Virginia / Carnegie Mellon) start from the usual coding-agent split: a **policy** (the model) plus a **harness** (what it sees, how commands run, what feedback returns, when the run stops). Optimizing only one side is suboptimal — a harness tuned for yesterday's checkpoint misses today's failure modes, and RL under a fixed harness only sees the trajectories that harness elicits. Prior joint work still relied on an **external** model to write the harness. **Self-HPO** closes the loop: the evolving policy proposes its own harness, trains inside it, and the hard tasks it never solved become the next search set.

They start from **Qwen3.5-35B-A3B** and the **mini-SWE-agent** seed harness. Each round:

1. **H-step** — the frozen policy reads its failed runs and edits harness candidates (prompts *and* runtime logic); keep the one that scores best on the current search set.
2. **P-step** — RL trains the policy under that harness (GRPO + Balanced Adaptive Rollout); tasks never resolved in any rollout become the next search set.

Two rounds. On SWE-Bench Verified, Self-HPO lifts resolve rate from **61.0% → 69.5%** (avg@3). Gains transfer off the Python-only training mix: Multilingual **54.2 → 59.7**, Pro **58.3 → 65.2**, average across three benches **57.8 → 64.8**. Against single-component self-improving baselines, it beats policy-only RLVR by **2.0** points and harness-only Self-Harness by **4.3** on Verified. Swapping in Opus 4.8 as the harness writer (**HPO**) adds only **2.1** more on Verified — most of the lift does not need a stronger proposer. Cross-pairing every harness with every policy from one run: final harness alone helps the base policy (**61.0 → 64.5**), final policy alone helps under the seed harness (**61.0 → 64.4**), and together they reach **69.5** — **1.6** points above the sum of the individual gains.

The case study is the review-shaped part. Almost everything the policy wrote into its harness fires **when it says it is done**. The seed harness ends the run and sends whatever was submitted. The rewritten harness first checks the patch — coverage of files touched, forgotten decorator imports, whether key issue terms appear — holds once with that feedback, then accepts. On `sphinx-doc__sphinx-9658`, the trained policy had fixed the source but finished by printing a summary; an empty submission would have failed under the seed harness, while the evolved one handed control back and got a valid patch. pass@8 also rises (**80.0 → 84.8**), and zero-success RL groups fall versus RLVR — fewer batches with nothing to learn from.

Code and models: [MSR-Orchard/Self-HPO](https://github.com/MSR-Orchard/Self-HPO), [Hugging Face](https://huggingface.co/self-hpo). Companion write-up: [Self-HPO blog](https://www.cs.virginia.edu/~tqf5qb/blog/self-hpo/).

## Why it matters for code review

Always-on factories compound when the control plane around the model keeps improving — and when "done" is not the agent's word. Self-HPO's receipt is that the scarce overnight edit is often a **submit-time gate** the worker cannot talk past: empty patch, missing files, forgotten imports, intent check — then one more try. Pair with [Self-Harness's held-out regression gate](/posts/zhang-self-harness-held-out-regression-gate/), [Harness²'s evidence-backed lesson library](/posts/xu-harness2-recursive-propose-probe-compose-open-world/), and [Orbi's Ralph loop that passed 28 tests before a fresh review found a spec violation](/posts/orbi-ralph-loop-28-tests-passed-review-found-spec-violation/): continuous verified momentum is a harness that intervenes at termination, not another peak coding session that grades its own homework.
