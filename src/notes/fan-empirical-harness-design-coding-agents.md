---
title: "Harness components, not monoliths: what actually moves long-horizon agents"
description: "Sep 17 Fan et al.: 176 matched settings on SWE-Bench Verified and Terminal-Bench — context management mostly prevents overflow; planning saves cost for strong models; bash-capable models often win cheaper without predefined tools."
date: 2026-09-17
kind: paper
source:
  title: "An Empirical Study of Harness Design for Coding Agents"
  url: https://arxiv.org/abs/2609.20804
project: steward
---

Most harness evals score a whole stack and call it a day. Fan, Zhang, Ma, Hu, Wang, Song, Liu, Zamani, and Wang fix the loop and ablate three components — planning, action space, and context management — across four models on SWE-Bench Verified and Terminal-Bench 2.1. The design is the receipt: **176 matched settings**, five context-management strategies, four context-window budgets, and targeted ablations so you can say *which* harness knob moved accuracy or cost.

Four findings matter for factories that run past a single heroic session. **Context management** gets more valuable as the window tightens, and most of the gain is preventing context-overflow failures rather than rewriting agent behavior. Staging **rule-based elision before LLM summarization** is the strongest efficiency pattern; making elided content recoverable adds machinery models rarely use and buys no accuracy. **Planning** flips role by model strength: an accuracy scaffold for weaker models, a cost saver for stronger ones, with little accuracy change at the top. **Action space** splits the same way — predefined tools help models with weak bash; bash-capable models can run a bash-only interface cheaper, especially on command-line-centric tasks. Trajectory analysis closes the loop: context management extends runs, planning changes where they stop, and the tool surface changes how finely code gets written.

Read next to [Harness or model?](/posts/harness-or-model-isolating-harness-effect/) (same-model harness contrasts) and [EvoHarnessBench](/posts/evoharnessbench-harness-induced-forgetting/) (what happens when the harness itself keeps evolving). Those ask whether the wrapper wins on average or survives expansion. This paper asks which *parts* of a fixed wrapper are load-bearing under budget pressure — the question continuous factories actually face when they tune overnight loops instead of swapping models.

## Why it matters for code review

Always-on throughput only compounds if the harness stays cheap relative to generation as context grows. Peak-session mastery hides overflow deaths, recoverability theater, and tool sprawl that burn the overnight budget without moving Pass@1. Treat planning, action surface, and context policy as reviewable systems — pin them, ablate them, and measure cost per verified change — or FOMO for “more harness” just lengthens trajectories that still dump unverified diffs into the morning queue.
