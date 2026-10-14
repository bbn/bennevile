---
title: "Box²-Bench: good harness workflows help—misleading ones still bind"
description: "Sep 30 Wang et al.: hold model+task fixed, vary workflow reliability; frontiers use good guidance yet drop under bad/mixed; SFT on bad workflows hardens override, RL restores selective use of held-out good ones."
date: 2026-09-30
kind: paper
source:
  title: "Thinking Outside the Box: Can Language Models Rely on External Guidance Selectively?"
  url: https://arxiv.org/abs/2609.39578
project: steward
---

Minghan Wang, Boyuan Wang, Jinhang Zuo, Yuxin Tao, and Fang Kong name a capability continuous factories assume away: **thinking outside the box**—follow harness workflows when they help, override them when they mislead. **Box²-Bench** holds model, task, environment, and evaluator fixed while supplying No / Good / Bad / Partial / Mixed workflows, isolating reliance from raw task skill. Across frontier models on math, DeepSWE coding, BrowseComp, and AutomationBench, good workflows lift eight of twelve model–task pairs (AutomationBench gains up to **+16.8** pp) while bad workflows hurt **all twelve** (drops **2.3–43.3** pp). Mixed underperforms matched Partial in ten of twelve—useful prefixes create **reliance inertia** that persists after guidance turns bad. Scaling open-weight models does not erase the gap.

Training on **only bad** workflows (good reserved for eval) shows the skill is learnable but brittle: counterfactual SFT shrinks AIME’s bad-workflow penalty from **−20.0** to **−6.7** pp yet can induce blanket resistance (utilization flips negative); outcome RL then restores held-out good-workflow use (**Δ_use −3.3→+6.7**) while keeping some robustness. The same checkpoints transfer, without further training, to peer correction in multi-agent AIME and to verifying corrupted memory briefs—selective reliance is not workflow-specific.

## Why it matters for code review

Overnight factories that pin ever-richer procedural harnesses around stronger models are measuring compliance, not selective judgment. Review harness rules and skills for Box²-shaped failure modes: can the agent still ship when a stale runbook or injected workflow is wrong, and does “follow the playbook” survive a reliability switch mid-task? Continuous verified momentum needs harnesses that remain **defeasible**—gates and oracles that outrank the workflow text—rather than FOMO for more guidance layers that bind capable agents to yesterday’s procedure. Pair with [Brilliantov’s minimal-harness MLE result](/posts/brilliantov-how-much-harness-strong-mle-agent/) and [Wang’s harness-evolution eval critique](/posts/wang-rethinking-harness-evolution-evaluation/) when a burst without the prescribed workflow still beats the harnessed lane.
