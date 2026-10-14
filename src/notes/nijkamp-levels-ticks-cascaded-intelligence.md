---
title: "Long-horizon agents need a harness that outlives every context"
description: "Sep 17 Nijkamp et al.: levels + clocked ticks + cascaded intelligence — a ten-day campaign with once-a-day human attention kept thread across every reset; continual learning belongs in harness checks."
date: 2026-09-17
kind: paper
source:
  title: "An Architecture for Long-Horizon Agents: Levels, Ticks and Cascaded Intelligence"
  url: https://arxiv.org/abs/2609.19519
project: steward
---

Nijkamp, Koul, Pakhomov, and Pang start from the factory premise factories keep rediscovering: a multi-day task **outlives any context window, any process, and any interval a human can attend**. Before an agent can learn continually, it must **run continually without forgetting** — and that ability lives in the harness around the model, not in weights. They derive seven bottlenecks from the long-horizon setting and answer with three architectural parts: **(i) levels indexed by time scale**, each keeping a bounded file that summarises the level below; **(ii) a clocked tick** as the unit of autonomous action; **(iii) cascaded intelligence**, escalating to a more capable model only after failing review.

The empirical receipt is a **ten-day campaign** that reproduced a published reinforcement-learning result with a human attending **once a day**. Across every context reset and session boundary the agent kept the thread; operating knowledge written early changed later behaviour with **no weight updates**; and the authors locate where learned components would enter such a system — inside the checks the harness already runs. Continual learning, on this view, needs a substrate that outlives every context and process; the review gates are the learner’s home, not an afterthought prompt.

Read next to [Anthropic’s effective harnesses for long-running agents](/posts/anthropic-effective-harnesses-long-running/) (initializer + incremental clean commits) and [Fan et al. on which harness components move](/posts/fan-empirical-harness-design-coding-agents/). Those tune a session-spanning wrapper; this paper asks what architecture keeps a week-long factory coherent when the human is mostly gone.

## Why it matters for code review

Steady overnight momentum is the short form of the same claim: if state and review live only inside a chat context, continuous factories forget between resets and FOMO for “more model” cannot recover the thread. Treat levels, ticks, and cascaded review as reviewable systems — bounded summaries, clocked autonomous units, escalate-only-after-fail — so multi-day verified throughput compounds past peak-session heroics instead of restarting from vibes every morning.
