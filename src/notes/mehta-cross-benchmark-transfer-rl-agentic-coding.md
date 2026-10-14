---
title: "RL that gates regressions teaches agents to finish work—and it transfers"
description: "Oct 2 Mehta/Ritchie/Chen (Surge): one epoch of GSPO on 1,700 expert coding tasks with partial-credit reward zeroed on any pass-to-pass failure lifts Kimi K2.7 Code on all six external benches (+4.7–20.0 pp), shorter trajectories, four last-mile habits."
date: 2026-10-02
kind: paper
source:
  title: "Cross-Benchmark Transfer from RL on Agentic Coding Tasks"
  url: https://arxiv.org/abs/2610.00890
project: steward
---

Sushant Mehta, Logan Ritchie, and Edwin Chen (Surge AI) ask whether reinforcement learning on expert-built coding tasks teaches something that survives a change of benchmark, harness, and horizon—or just the conventions of the training format. They post-train **Kimi K2.7 Code** (1T MoE, 32B active) with **RL alone**: one epoch of GSPO on a rank-32 LoRA, no SFT warm-up, no KL penalty, over **1,700** tasks (**1,000** repository + **700** terminal). The reward is the fraction of target checks passed, and it **drops to zero if any pass-to-pass test fails**. Specs enumerate gradable requirements; graders stay hidden; repository tasks protect existing behavior; no oracle is supplied.

Pass@1 rises on every external bench they evaluated: SWE-Bench Pro **60.1→64.8**, DeepSWE **31.0→43.4**, Terminal-Bench 2.1 **67.4→82.0**, TB3 **1.4→12.1**, TB4 **0.0→7.6**, SWE-Marathon **5.0→25.0**—gains of **4.7–20.0** pp, including under Terminus 2 and Claude Code (neither used in training) and on multi-hour Marathon builds with no training counterpart. Pooled over five independent task sets the lift is significant (**p<0.001**); it stays significant on the three sets released after the training data (**p=0.004**). Median agent steps fall **24–35%** on DeepSWE and TB3. Failed base DeepSWE runs are mostly near-misses (median still passes **86%** of target tests; **84%** keep every pass-to-pass). On newly solved pairs, the base fails in four last-mile modes—lost requirements, narrow testing, silent regressions, weak ground truth—and the trained model avoids each by carrying the full spec, testing the requirement not the implementation, protecting what must stay, and reconstructing ground truth when none is given.

## Why it matters for code review

Continuous overnight lanes die in the last mile: most of the feature, one dropped constraint, tests that mirror the agent’s own incomplete path, or a quiet regression that still “passes” a binary reward. A harness that scores partial credit **and** fails closed on protected behavior is the training-time twin of a merge gate that refuses unverified completion. Always-on factories that FOMO for more agent steps without that gate buy longer trajectories of near-misses; verified momentum compounds when finishing habits transfer across harnesses rather than when peak-session mastery memorizes one bench’s shape. Pair with [Zhang’s AutoCompact](/posts/zhang-autocompact-long-horizon-coding-context-compaction/) when long runs also need to compact without losing the contract, and with [Qualiteg’s done-means-it-runs](/posts/qualiteg-completion-gate-done-means-it-runs/) when review asks whether “done” survived an independent check.
