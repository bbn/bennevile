---
title: "WitnessGym: a bug report is not done until an executable witness fails"
description: "Sep 30 Qi/Xu/Huang/Shang/Wang: inject into test-reached paths → 1,300 Java cases; best agent (Codex+GPT-5.4) averages 68.9% witness success; long contexts 80%→52%, depth-10 transforms 80%→59%."
date: 2026-09-30
kind: paper
source:
  title: "WitnessGym: Benchmarking Coding Agents on the Construction of Bug Witnesses"
  url: https://arxiv.org/abs/2609.36635
project: steward
---

Haomin Qi, Xiangzhe Xu, Yiming Huang, Jingbo Shang, and Chengpeng Wang argue that useful audit findings need more than a suspicious location: an **executable witness**—concrete input plus testing harness that exposes faulty behavior under a real build. Historical CVE/CTF reuse limits fresh cases and invites prior exposure; WitnessGym instead **injects** API-contract, value-flow, and logic bugs into test-reached production paths of real Maven Java projects, rebuilds, and keeps only cases whose construction-time witness still fires after call-/data-/control-flow–preserving transforms. The construction witness is stripped before evaluation, so agents must recover reachability and the failure oracle themselves. The pipeline yields **1,300** cases (~$16.5k construct); injected patches are hard to tell from historical bugs in blinded pairwise judgments (~52% accuracy, equivalence band).

Six framework/model pairings on a **900**-case sample leave large headroom: Codex + GPT-5.4 averages **68.9%** validation success (**70.7%** with execution context), Claude Code + Sonnet 4.5 **59.4%**, and the weakest open pairing **18.2%**—a ~50-point spread. Supplying the execution context helps only **2.2–4.7** points. Holding bug type fixed, long contexts drop Codex WithEC from **80%** (short) to **52%** (long); depth-10 transforms drop it from **80%** to **59%**. Value-flow and logic bugs are generally harder than API-contract ones. Knowing the pattern and the file is not the same as proving the bug runs.

## Why it matters for code review

Always-on review and audit agents that emit “found bug at L142” without a failing witness are shipping claims, not evidence. Gate overnight findings the way WitnessGym scores agents: require a materialized, replayable test that fails on the reported path before the finding counts as done, and treat longer call chains / deeper structural embedding as a verification tax that human review queues will feel under volume. Continuous verified momentum needs maker≠checker on the witness path; FOMO for more static findings without executable failure just floods the board with plausible alarms.
