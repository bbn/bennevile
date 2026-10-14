---
title: "EvoHarnessBench: expanding the harness can erase yesterday’s wins"
description: "Sep 10 v2: 17 harness-evolution streams (802 tasks) — harness-induced forgetting, inconsistent self-evolving adaptation, and a retention↔adaptation tradeoff when tools/skills/agents keep changing."
date: 2026-09-10
kind: paper
source:
  title: "EvoHarnessBench: Can Your Agents Keep Pace with an Evolving Harness?"
  url: https://arxiv.org/abs/2609.04280
project: steward
---

Most continual-learning benches move the *task stream* and freeze the harness. Ke, Patil, Shi, Joty and coauthors flip it: **non-stationarity lives in the harness** — tools, reusable skills, and specialist agents keep getting added the way real factories ship. **EvoHarnessBench** builds 17 multi-stage harness streams deterministically from verifier-based benchmarks: 802 tasks, 520 tools, 42 skills, 62 agents. Two evaluation settings: *deployment* (does competence on previously accessible work survive harness expansion?) and *self-evolving adaptation* (does accumulated experience help when new capabilities appear?).

Three persistent gaps. First, **harness-induced forgetting**: expanding the harness alone can degrade performance on tasks the agent already solved — more surface area is not free. Second, gains from self-evolving adaptation are **inconsistent** across evolution stages, capability axes, and environments. Third, retention and adaptation can **pull opposite directions**: preserving earlier competence does not reliably improve uptake of new tools/skills/agents, and vice versa. (v2, Sep 10, expands the manuscript from the Sep 3 v1.)

Read next to [HarnessDev](/posts/harnessdev-create-evolve-agent-harness/) (can models *build* harnesses?) and [Harness or model?](/posts/harness-or-model-isolating-harness-effect/) (same-model harness contrasts). Those ask whether the wrapper wins on a fixed task set. EvoHarnessBench asks what happens when the wrapper itself is the moving target — the usual software-factory reality after you keep bolting on MCP servers, review skills, and overnight workers.

## Why it matters for code review

This paper productively complicates the bet that a stable harness compounds overnight: if your always-on factory *keeps changing* the harness (new tools, new specialist reviewers, new skills), yesterday’s verified loop can quietly regress. Review the harness changelog like a dependency bump — retention tests on previously green agent workflows, not just demos on the newest capability. FOMO for “more agents in the loop” without measuring forgetting is just another bursty superstition with a longer changelog.
