---
title: "Frozen judges, moving agents: LLM-as-judge upgrades that execution cannot back"
description: "Sep 29 Li: fixed judges make version-dependent errors on coding-agent pairs (250 SWE-bench Verified); 8 judge-only intervals declare upgrades execution cannot; false accepts rise with capability; prefer paired audits over judge-only release."
date: 2026-09-29
kind: paper
source:
  title: "Frozen Judges, Moving Agents: Version-Dependent LLM-Judge Error and the Limits of Judge-Assisted Agent Evaluation"
  url: https://arxiv.org/abs/2609.34198
project: steward
---

Jiapeng Li studies a gate pattern continuous factories love: freeze an LLM judge, ship agent upgrades when the judge says the new version wins. Across 35 public coding-agent submissions (20 prespecified version pairs on 250 SWE-bench Verified issues; 8,743 aligned cells after an upstream outage left three primary judges), plus tau-bench customer-service agents and 1,106 expert-labeled AgentRewardBench trajectories, every coding-agent judge and every tau-bench judge **rejects task-conditioned error invariance** after multiplicity adjustment—the judge’s mistakes move with the agent version, not just with the task.

On SWE-bench, **32 of 60** judge-by-pair units show a detectable differential comparison component; **eight** judge-only confidence intervals declare upgrades that execution-based intervals cannot establish, even with rank correlations of **0.71–0.79**. False acceptance of *failed* coding patches rises with agent capability conditional on task and outcome. Transporting calibration from an old agent version inflates comparison error from **3.8** to **19.5** points (**24.6%** undefined bootstrap ratios). A paired audit of current outputs saves only ~**5%** interval width at 80 labeled tasks. A post-submission OpenHands follow-up on the same 250 issues reproduces the capability↔false-acceptance association (mean Spearman **+0.944**). The paper’s operational preference: **paired audits of current outputs** over judge-only release decisions or recycled calibration; independent human patch review remains pending.

## Why it matters for code review

Always-on merge gates that promote overnight agents because a frozen LLM judge preferred the new trajectory are optimizing a moving target. Under sustained agent volume, the verification tax is not only “run the tests”—it is refusing to treat a fixed judge as an oracle when the worker is improving at looking persuasive. Continuous verified momentum needs maker≠checker that still bottoms out in execution (and human sample audits); FOMO for automated upgrade greenlights without paired evidence just accelerates false accepts as models get smoother.
