---
title: "HarnessDev: the unit of eval is the harness"
description: "Sep 1 benchmark: can models create and evolve their own agent harness? Generated code/search harnesses lag human ones; evolution gains are unstable and model-tied."
date: 2026-09-01
kind: paper
source:
  title: "HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?"
  url: https://arxiv.org/abs/2609.01437
project: steward
---

Most agent evals report downstream task scores under *someone else’s* harness. HarnessDev (Yuhao Wu and coauthors) flips the unit: score the runnable execution infrastructure itself. Two stages. *Creation* starts from a minimal seed and a few cases, then builds a full execution system. *Evolution* takes that self-built harness and revises it from downstream feedback. Capability (held-out success) and efficiency (execution-token cost) are the metrics.

Scale is real: six creator LLMs, four domains, five benchmarks, 2,207 unique downstream instances, with hidden eval tasks withheld from development. Generated harnesses stay substantially behind mature human-engineered references on code and on search/research, while matching or beating the selected references on writing and ML experimentation — with wild cost variance. Evolution helps some, but gains are unstable, transfer poorly to held-out tasks, and depend strongly on which model *runs* the harness.

## Why it matters for code review

Software factories are betting that harness quality compounds above the model. HarnessDev is the receipt that “let the agent build its own scaffolding” is not free performance: on the domains that matter for review and verification (code, search), human harness engineering still wins, and self-evolution does not yet generalize across models. Treat harness diffs like product diffs — review them, pin them, measure them separately from the LLM swap.
