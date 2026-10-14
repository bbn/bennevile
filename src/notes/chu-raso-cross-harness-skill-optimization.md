---
title: "RASO: borrow skills from other harnesses—adapt them, then validation-gate the update"
description: "Sep 29 Chu/Lee/Park et al.: retrieve GitSkills sections, Cross-Harness Adaptation into target tools; RASI init without rollouts + RASU feedback updates; beats SkillOpt/WikiSkill/GEPA on OfficeQA/Spreadsheet/ALFWorld/WebShop."
date: 2026-09-29
kind: paper
source:
  title: "Retrieval-Augmented Skill Optimization via Cross-Harness Adaptation"
  url: https://arxiv.org/abs/2609.38024
project: steward
---

Jaewon Chu, Ji Soo Lee, Jihwan Park, and collaborators (Korea University / KAIST / Meta AI) note that millions of public agent skills encode procedural knowledge across tasks and harnesses—yet skill optimizers mostly ignore that corpus and burn rollouts refining text from scratch. **RASO** (Retrieval-Augmented Skill Optimization) treats an external skill library (GitSkills) as prior knowledge. **RASI** builds an initial skill from task + harness descriptions alone: generate requirement queries, BM25-retrieve top-*K* skill *sections*, then **Cross-Harness Adaptation** rewrites them into lessons that use only the target harness’s objects, commands, and units. **RASU** continues after failures: textual gradients plus failure-driven retrieval, same adaptation, then a skill updater—candidate kept **only if** validation improves.

On OfficeQA, SpreadsheetBench, ALFWorld, and WebShop with GPT-5.6-Luna and Qwen-3.5-9B, RASI beats retrieval-free init and naive SkillRouter reuse (on SpreadsheetBench **92.9%** of retrieved skills come from a different harness). Full RASO tops TextGrad, GEPA, SkillOpt, and WikiSkill—e.g. GPT-5.6-Luna Spreadsheet **63.33** vs SkillOpt **57.02**, OfficeQA **49.03** vs **45.54**. Ablations: adaptation itself is load-bearing (RASI without it drops Spreadsheet **49.17→41.43**); init and update each help, and together help most. At matched rollout budgets RASO is often cheapest among the optimizers (OfficeQA **$0.84** vs TextGrad **$1.45**).

## Why it matters for code review

Self-improving factories that rewrite overnight skills from their own traces alone are leaving the public skill corpus on the table—and pasting foreign skills without adaptation can *hurt*. RASO’s receipt matches continuous harness evolution under load: retrieve procedural priors, strip the wrong tools, and **refuse** skill edits that fail validation. Score skill libraries by cross-harness transfer after adaptation, not by how many `skill.md` files you ingested. FOMO for unchecked skill evolution from rollouts alone just overfits your training split while ignoring lessons already written for someone else’s harness.
