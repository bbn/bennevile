---
title: "Model–harness fit: rankings reverse when the scaffold changes"
description: "Oct 1 Li et al.: 66 configurations × three terminal benchmarks; Claude leads GPT by 7.9 pts in OpenHands on TB4 but trails by 30.2 in PI; best harness flips for 4/5 models—evaluate the pairing, not the model alone."
date: 2026-10-01
kind: paper
source:
  title: "Finding the Right Fit: Model-Harness Interactions across Agent Tasks"
  url: https://arxiv.org/abs/2610.00917
project: steward
---

Yixuan Li, Yiyun Zhou, Yao Long Teng, and coauthors (NTU) treat **model + harness + task** as the evaluation unit, not a model leaderboard with a fixed scaffold. They cross four configurable harnesses (OpenHands, DeepSeek Harness, PI, openJiuwen) with five models on TUA-Bench, ALE-CLI, and a 63-task Terminal-Bench 4 subset, plus native Codex–GPT and Claude Code–Claude pairings—**66** configurations and **6,204** scored trajectories released.

The interaction is large enough to reverse rankings. On Terminal-Bench 4, Claude beats GPT by **7.94** points under OpenHands but loses by **30.16** under PI; the Claude−GPT gap swings **38** points between those two scaffolds. For four of five models the best harness **changes across benchmarks**; Kimi is the persistent pairing (openJiuwen leads on all three, +5.6 to +11.1 points). Vendor-native harnesses are mixed: Claude Code wins for Claude on TUA/ALE but trails OpenHands on TB4; Codex never gives GPT its highest score. Cost moves with the harness as much as score—GPT under PI scores **60.3%** at **$4.66**/task vs **52.4%** under DSH at **$19.94**. Matched trajectories point at feedback mechanics: models initiate almost all repairs; what differs is whether the harness returns failures as usable signals (timeouts, argument errors, continuation) rather than silence or stuck-detector kills.

## Why it matters for code review

Continuous factories that standardize on “the strongest model in our favorite CLI” still optimize the wrong object when overnight merge rate depends on how failures are handed back. Productive complication for always-on lanes: peak-session mastery on one scaffold does not transfer, and FOMO for a model upgrade can burn budget if the harness turns hangs into dead air. Review deployment choices as **pairings**—which timeout/continuation rails match which model’s tool-call habits—and grade harness PRs on recovery signals, not only Pass@1. Steady harnessed throughput compounds when fit is re-measured per task class; a single hero configuration does not. Pair with [isolating the harness effect from the model](/posts/harness-or-model-isolating-harness-effect/) and [Shopify’s harness-outlasts-model factory](/posts/shopify-agentic-harness-outlasts-model/) when a factory locks a default stack.
