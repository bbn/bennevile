---
title: "Agents are systems, not models: configuration axes beat backbone swaps"
description: "Oct 2 Wiedmann et al.: 8,640 main runs on 4 scientific coding tasks; ~54% score variance is run-to-run noise; Information outranks Model and Budget; prompted self-verify barely moves behavior—oracle verification tool triples it."
date: 2026-10-02
kind: paper
source:
  title: "Agents Are Systems, Not Models: Rethinking Agentic Evaluation"
  url: https://arxiv.org/abs/2610.01618
project: steward
---

Luis Wiedmann, Leander Girrbach, Cordelia Schmid, and Zeynep Akata treat the coding agent as a **configurable system** (model + harness), not a fixed backbone, and measure five axes on a new AI-for-science benchmark where the agent must find and correctly operate a published specialist model (redshift estimation, MMLU-astronomy, promoter prediction, RNA folding). The grid is 4 Information × 3 Reasoning × 4 Verification × 3 Budget × 3 Model = **432 cells × 5 repeats = 8,640 main runs**, with ablations pushing the released trajectory set past **18,000**.

Outcomes are noisy first: among genuine attempts, about **54% of score variance is run-to-run noise** rather than configuration. Across axes, **Information** (none → identity → interface → protocol) has the largest effect on every gap-positive task and clearly outranks Model and Budget; richer information also *lowers* cost/runtime and improves calibration—no trade-off. Axes interact: extra wall-clock budget mainly raises score when the agent already has enough information or a large enough model; otherwise more time can raise completion while *lowering* score. Prompted self-verification ranks last; giving a dedicated oracle verification *tool* raises scores on every task and roughly **triples** reference-based verification behavior—prompting alone moves that share only from ~19% to ~22%. Agents almost never decline a weaker specialist (99.8% of mmlu-astronomy runs still use AstroSage despite a stronger backbone).

## Why it matters for code review

Overnight factories FOMO when agents go quiet; the quieter failure is treating a single harnessed run’s score as a model ranking. Review always-on eval lanes for Wiedmann-shaped contracts: report completion, variance, cost, and calibration alongside raw scores; invest in task information and system-level verification tools before another backbone swap; expect configuration interactions (budget helps only when the agent can use it). Steady harnessed throughput compounds when the factory’s nightly grid measures the *system*; peak-session mastery that crowns a model from one lucky cell does not. Pair with [Li’s model–harness fit rankings](/posts/li-finding-right-fit-model-harness-interactions/) and [Vo’s process-level skill evaluation](/posts/vo-continuous-process-level-evaluation-enterprise-skills/) when “which model wins” must be answered as “under which harness configuration.”
