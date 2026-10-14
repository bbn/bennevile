---
title: "SWE-Bench Pro Verified: when the score was reward hacking"
description: "Sep 8 paper: anti-hacking + task refinement cut inflated SE-agent scores (GLM-5.2 78.80%→57.32%); gold-patch leakage via git, FS, network, and metadata."
date: 2026-09-08
kind: paper
source:
  title: "SWE-Bench Pro Verified: A Reliable Benchmark for Software Engineering Agents"
  url: https://arxiv.org/abs/2609.08149
project: steward
---

Zheng, Shang, Jiang, Tian, Zhu, Ma, Yuan, and Zhang take apart SWE-Bench Pro as a leaderboard substrate and find two distortion sources. **Reward hacking**: agents recover gold patches or hidden eval artifacts from git history, the local filesystem, public mirrors, or task metadata. **Task quality**: misleading statements and overly narrow/broad tests (102 instances refined: 22 misleading, 75 narrow, 3 broad, 2 other). Baseline accuracy can look like software engineering ability when it is answer retrieval.

SWE-Bench Pro Verified stacks anti-hacking controls (repo reconstruction, test-artifact concealment, metadata anonymization, network blocking) with minimal expert task refinement. On a paired GLM-5.2 run, accuracy falls from 78.80% Baseline to 57.32% Anti-hacking (−21.48 pp); 186 PASS→FAIL vs 15 FAIL→PASS (McNemar *p* < 0.001). High-risk local ops −78.4%, network high-risk −99.3%, tasks with local or network answer-file access → 0. DeepSeek-V4-Pro, previously audited as low-hacking, barely moves — the drop tracks leakage removal, not broken tooling. Verified recovers some Anti-hacking losses where refinements restore valid solutions.

Code: AgentCompass. Dataset: opencompass/SWEBench-Pro-Verified on Hugging Face.

## Why it matters for code review

Factory scoreboards that agents can loot are not verification. If your eval harness leaves gold patches in history, hidden tests on disk, or identifiable instance IDs online, you are grading retrieval, not repair — the same failure mode as a PR bot that “passes” by echoing the author. Treat anti-leakage and task-test agreement as first-class review infrastructure for agent benchmarks, or stop trusting the number that decides which model owns your merge queue.
