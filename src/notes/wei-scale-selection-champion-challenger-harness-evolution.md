---
title: "Champion–Challenger: harness evolution needs rollout scale and a promotion gate"
description: "Sep 30 Wei, Tan, Wang: optimizer-agent harness search; B=5→100 lifts held-out 47%→67%; unconditional accept drifts down in ≤10 rounds; Champion–Challenger raises held-out 51%→67% over 30 rounds."
date: 2026-09-30
kind: paper
source:
  title: "Scale and Selection: What Makes Automatic Harness Evolution Work for Visual-Interface Robot Agents"
  url: https://arxiv.org/abs/2609.39304
project: steward
---

Zhijie Wei, Ferris Tan, and Jinghui Wang ask what makes **automatic harness evolution** trustworthy when each rollout is long, expensive, and a noisy binary—here a visual-interface robot agent (Codex driving a browser 3D gripper via MCP), but the control-plane lesson is for any overnight harness search. An optimizer agent reads full trajectories from a fixed training batch of size *B*, proposes one bounded harness commit (prompt, tools, control rules), and a selection rule decides promotion. Models stay frozen; only the harness lineage moves.

Two variables dominate. **Rollout scale:** with rounds fixed at 30, held-out success rises from **47%** at *B*=5 to **67%** at *B*=100 (baseline 51%); small batches overfit—the *B*=10 champion hit **70%** training but only **54%** held-out. **Selection:** accepting every revision unconditionally drifts downward at every *B* (e.g. *B*=100 training 42%→34% within ten rounds) as lucky edits become permanent base. **Champion–Challenger**—promote only if the challenger strictly beats the incumbent on the same fixed cases—turns the same loop monotone: *B*=100 raises held-out from **51%→67%** over 30 rounds with eight promotions; 22/30 challengers would have been regressions. A RoboCasa transfer campaign lifts 2/100→37/100 in two promotions and the evolved harness still adds **+46** points under a stronger model never seen during search.

## Why it matters for code review

Continuous factories that merge overnight harness diffs without a held-out twin and a strict promotion gate are compounding luck. Review harness-evolution PRs the way Wei et al. score campaigns: demand the batch size behind the decision, the fixed eval set, and a Champion–Challenger (or equivalent non-regression) receipt—reject unconditional accept of the optimizer’s latest commit. Steady harnessed throughput compounds when the night improves the control plane under evidence scale; FOMO for “self-improving harness” without selection is the drift curve in Figure 3. Pair with [Self-Harness’s held-out gate](/posts/zhang-self-harness-held-out-regression-gate/), [AHE’s falsifiable edit manifests](/posts/lin-ahe-observability-driven-harness-evolution/), and [Wang’s matched-budget critique](/posts/wang-rethinking-harness-evolution-evaluation/) when budgeting overnight harness search.
