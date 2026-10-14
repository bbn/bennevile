---
title: "FrontierCode: grade like a tech lead — would the maintainer merge?"
description: "Jun 8 Cognition: first mergeability benchmark — 20+ OSS maintainers, 40h/task, blockers + quality rubrics; Opus 4.8 ~13% Diamond / 34% Main; 81% fewer misclassifications vs SWE-Bench Pro."
date: 2026-06-08
kind: field-note
source:
  title: "Introducing FrontierCode"
  url: https://cognition.com/blog/frontier-code
project: steward
---

Cognition’s Jun 8 launch of **FrontierCode** reframes the coding-agent scoreboard from “tests green” to **would a maintainer merge this PR?** Tasks come from **20+** flagship open-source maintainers (Celery, Budibase, uppy, Mattermost, …) who spent **>40 hours per task** encoding merge criteria — correctness, regression safety, mechanical cleanliness, **test correctness** (agent tests must fail on the broken base — reverse-classical), **scope**, and soft quality — then Cognition researchers manually review every task. Nested sets: Diamond 50 / Main 100 / Extended 150.

The receipts are the unsaturated ceiling and the QC claim. On Diamond, Claude Opus 4.8 scores **13.4%**; GPT-5.5 **6.3%**; Gemini 3.1 Pro **4.7%**; best open-weight (Kimi K2.6) **3.8%**. Main: Opus **34.3%**, Extended **51.8%**. Versus SWE-Bench Pro they report **81% lower false-positive rate** from adversarial hack reports, multi-solution calibration, and pod + researcher review. Novel graders matter for review culture: **adaptive classical** (LLM-patched tests for open-ended solutions), **scope** (files / size / semantic locality), and **prompt** rubrics for idiomatic design — with blockers as hard stops (score zero if any fail) and non-blockers as quality weight. Concise humanlike prompts (~⅓ SWE-Bench Pro length) plus AGENTS.md-style guidelines force intent inference rather than over-specified repair scripts. Follow-up [1.1](https://cognition.com/blog/frontier-code-1.1) (Jul 7) adds fair-internet prompts + classical unfair-use zeroing, demotes 75 over-strict blockers, and drops noisy Diamond reporting.

Caveat they own: tasks stay private to limit contamination; scores are invitation-eval for model creators.

## Why it matters for code review

Continuous factories that optimize for unit-test pass rates are grading the wrong artifact. FrontierCode’s useful bar for always-on merge trains is **maintainer mergeability** — scope discipline, meaningful agent-written tests, and design taste that CI cannot see. Review overnight inventory against that standard: blockers first, quality signals second, and treat “SWE-Bench green” as necessary but not sufficient. Bursts still win when the rubric is ambiguous; sustained throughput compounds when the factory’s gate matches what a tech lead would actually land.
