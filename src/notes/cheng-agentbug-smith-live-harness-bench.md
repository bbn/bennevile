---
title: "AgentBug-Smith: turn harness bugs in the wild into a live repair factory"
description: "Sep 30 Cheng et al.: automate reproducing real harness bugs from open-source agents into Live-Harness-Bench (200 executable bugs); +10.67–27.56 pp reproduction vs SWE-Factory/SWE-bench-Live; distilled repair skills lift harness-bug fix rate +6.32%."
date: 2026-09-30
kind: paper
source:
  title: "AgentBug-Smith: Automatically Reproducing Real-World Harness Bugs in Agentic Systems"
  url: https://arxiv.org/abs/2609.37864
project: steward
---

Yiming Cheng, Alfin Wijaya Rahardja, Mengshi Zhang, Zihao Chen, Zhenpeng Chen, and Yiling Lou start from a hard fact about always-on agent stacks: improving the **harness** can raise agent success with the model held fixed—yet harness bugs are uniquely hard for coding agents to repair (e.g. **4.67%** vs **40.67%** on general bugs in prior work), and the only executable harness-bug suite (AgentIssue-Bench) had **43** fixed cases built with ~150 human hours. General issue→repro factories (SWE-Factory, SWE-bench-Live) miss agent-specific failure modes: external providers, tools, nondeterministic environments, and failures that appear only under particular interaction states.

**AgentBug-Smith** automates a continuous pipeline: (1) dual-stream discovery of agent repos plus LLM judges that keep harness-component issues (orchestration, memory, tools, providers), (2) rule-initialized then agent-refined Docker environments that mock model/network boundaries, and (3) failure-reproducing tests that must fail on the buggy commit with the reported failure and pass on the patch—including issues without in-patch tests via joint test+environment optimization. Across GPT-4.1-mini, Kimi-k2.5, and DeepSeek-v3.2 it reproduces **20–28%** of 225 harness issues vs **≤13.78%** for baselines (**+10.67–27.56 pp**), uniquely covering many IPT-absent bugs. Continuously applied in the wild it yields **Live-Harness-Bench** (200 executable harness bugs; median patch ~102.5 lines). On that bench, mini-SWE-agent / OpenHands / AutoCodeRover correctly resolve at most **9%**; skills distilled from a train split raise mini-SWE-agent correct resolution by **6.32%** on a held-out set.

## Why it matters for code review

Overnight factories that only evolve prompts and eval scores while the harness itself is unmeasured will keep re-hitting the same orchestration and tool-boundary failures after every merge. Treat harness bugs as first-class, continuously reproduced evidence—live benches, fail-to-pass gates, and repair skills distilled from real fixes—and score continuous improvement by harness-bug resolve rate under sustained load, not by another Claude Code burst on application tickets. FOMO for more concurrent agents without a live harness-repair loop just multiplies infrastructure bugs that agents still cannot fix.
