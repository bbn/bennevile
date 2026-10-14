---
title: "HarnessEvolve: diagnose against reference trajectories, then dual-gate the harness edit"
description: "Sep 1 Jiang/Chu/Tian et al. (Huawei): reference-guided root-cause vs failed runs; quality gate (leak/bloat) + performance gate (batch↑, recent↘ε); CloudCoreNetwork-QA 43.4%→86.9% (+21.6pp over GEPA)."
date: 2026-09-01
kind: paper
source:
  title: "HarnessEvolve: Learning from Reference Trajectories for Reliable Agent Self-Evolution"
  url: https://arxiv.org/abs/2609.00829
project: steward
---

Wen Jiang, Mingmin Chu, Yimeng Tian, Qianxin Zhang, Haofei Yang, and collaborators (Huawei ICT AI) treat self-evolving agents as a **harness** problem—prompts, skills, tools, and execution logic—blocked by three failure modes: credit assignment under sparse terminal rewards, shortcut learning (data leakage / prompt bloat), and catastrophic forgetting across updates. **HarnessEvolve** decouples the frozen-LLM **execution** agent from independent **evaluation**, **optimization**, and **gating** modules so the policy under test cannot grade its own patches.

Credit assignment uses **reference trajectories**: run the executor with the ground-truth answer, verify the path is genuine (not answer regurgitation), then align each failed run to the first action divergence. Error signals cluster by root cause (preserving singleton long-tail clusters). Candidate harness edits must clear a **quality gate** (LLM-judge leak score ≤η; injected in-context examples ≤η) and a **performance gate** (improve the current mini-batch without degrading a replay buffer of recent batches beyond ε), with epoch-end selection of the best snapshot on a held-out validation set.

Against GEPA, ACE, and SkillOpt on CloudCoreNetwork-QA, Wireless-QA, SearchQA, OfficeQA, and SpreadsheetBench (Qwen3.6-27B / DeepSeek-V4-Flash under LAMAgent or OpenClaw), HarnessEvolve leads every setting. Headline: CloudCoreNetwork-QA with Qwen moves **43.4%→86.9%**, **+21.6pp** over strongest baseline GEPA (**65.3%**). Ablations: drop reference comparison → **57.8%**; drop clustering → **68.6%**; drop quality gate → **80.1%**. Skills evolved on OpenClaw transfer to Hermes, OpenCode, LAMAgent, and DeepSeek Harness without re-optimization.

## Why it matters for code review

Always-on factories that rewrite overnight harness files from “the run failed” alone will mis-blame cascading symptoms and bake answers into `skill.md`. HarnessEvolve’s receipt for continuous harness improvement under load: compare against a verified successful path, refuse leaky/bloated edits, and accept only patches that lift the current batch without regressing recent ones. Score self-improving factories by gated snapshot quality on held-out work—not by how many harness diffs landed before morning. FOMO for unchecked harness RSI just compounds shortcuts that look green on the training split.
