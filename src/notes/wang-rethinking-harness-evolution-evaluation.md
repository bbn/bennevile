---
title: "Harness evolution gains might just be repeated sampling"
description: "Jul 14 Wang et al.: under matched budgets on Terminal-Bench 2.1, automatic harness evolution fails to beat parallel sampling / sequential refinement; held-out transfer only +0.6 pass@1."
date: 2026-07-14
kind: paper
source:
  title: "Rethinking the Evaluation of Harness Evolution for Agents"
  url: https://arxiv.org/abs/2607.12227
project: steward
---

Wang, Zhu, Hu, Yuan, Chen, Senthil, Hajishirzi, Tsvetkov, Dasigi, and Xiao ask the evaluation question self-improving factories keep skipping: when harness search and final scoring share the same public benchmark, are you measuring **better harness design** or **more attempts**? They compare four ways to spend a matched budget *K*=5 on Terminal-Bench 2.1 (Claude Opus 4.6, GPT-5.4, GPT-5.4 mini): parallel sampling, sequential refinement, dataset-guided harness evolution (AHE with explore disabled), and instance-guided “harness scaling.”

The receipts cut against overnight harness-diff FOMO. Without unit-test feedback, parallel sampling lifts average pass@1 from **68.2 → 72.3**; harness evolution lands at **67.4** and *drops* GPT-5.4 from 75.3 to 69.7. With unit tests as oracle, parallel sampling still wins pass@1 (**86.0** avg) and sequential refinement wins pass@5 (**91.8**); harness evolution’s pass@1 is only **75.8**. On a train/val/test split, the evolved harness transfers at **+0.6** average pass@1 on held-out tasks. Their read: many edits memorize fixes a competent agent rediscovers in one rollout, while the hard core stays model-bound — and Terminal-Bench may be weakly harness-sensitive once a shell tool exists.

Companion write-up: [yikee.github.io/harnessevolution](https://yikee.github.io/harnessevolution/). Code: [rethinking-harness-evolution](https://github.com/rethinking-harness-evolution/code). Caveat they own: results are Terminal-Bench–centric; harder, harness-dependent suites may still reward evolution.

## Why it matters for code review

Continuous factories that proudly merge overnight harness PRs need a **budget twin** for every claim: did the same verifier dollars spent on parallel attempts or sequential refinement beat the harness diff? Review the control-plane change against held-out tasks, not the search set that trained it. Bursts still win when extra samples are the real lever; steady harnessed throughput compounds only when the artifact generalizes past the night’s eval loop.
