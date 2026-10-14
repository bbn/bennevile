---
title: "LLM-as-Code: put the overnight loop in the program, not the model"
description: "Jun 14 Qi et al.: Agentic Programming — code owns looping/branching/stop; LLM only at judgment leaves; OSWorld 86.8% in 15 steps vs 80.4% prior in 100; DAG context O(depth) not O(steps)."
date: 2026-06-14
kind: paper
source:
  title: "LLM-as-Code: Agentic Programming for Agent Harness"
  url: https://arxiv.org/abs/2606.15874
project: steward
---

Qi, Fu, Gao, Zhang, Yan, Wu, and Zhao argue that token explosion, control-flow hallucination, and unreliable completion are not prompting bugs — they are what you get when a probabilistic model owns looping, branching, and stop. **Agentic Programming** flips the default: the program governs all control flow; the LLM is an adaptive component (**LLM-as-Code**) invoked only where the task needs reasoning or generation. Inside each call the model stays flexible; it cannot rewrite the execution path. Context follows the call DAG — each call sees its ancestor chain, returned children collapse to summaries — so live context is **O(depth)**, not **O(steps)**.

They build two agents under the paradigm (GUI automation and an autonomous overnight research pipeline), each with a ~150-line top-level loop. On OSWorld, LLM-as-Code with Claude Sonnet 4.6 reaches **86.8%** overall in **15** steps versus **80.4%** for the strongest prior system allotted **100** steps — and leads the three domains they target. Failures localize to a named call’s return value rather than a turn in a fifty-step transcript. The claim is scoped: when a workflow has known structure, write that structure as a program; fully open-ended exploration may still want model orchestration.

## Why it matters for code review

Overnight factories that beg the model to “keep going until done” are sampling the merge gate. Review continuous runs the way Qi et al. split deterministic from probabilistic work: put verify/retry/stop in code, keep the LLM at judgment leaves, and demand a call-graph ledger rather than a flat chat that truncates the night’s root-cause. Steady verified momentum compounds when the harness guarantees the loop; FOMO for idle agents is wasted if a stronger model still skips the verifier because sampling said the issue was closed.
