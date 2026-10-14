---
title: "Relic: collaboration lessons that outlive the agents who learned them"
description: "Sep 26 Du et al.: Relic turns recurring multi-agent friction into organization-owned executable protocols — complete-contract delivery 14.06%→19.76% over matched structured teams; fresh-member transfer 41.2% with bindings vs 34.6% text vs 25.4% none."
date: 2026-09-26
kind: paper
source:
  title: "Relic: From Multi-Agent Collaboration to Persistent Organizational Capability"
  url: https://arxiv.org/abs/2609.32965
project: steward
---

Hongyi Du, Tianyi Zhang, Weijia Zhang, Yi Yang, Haofei Yu, Kunlun Zhu, Tianxiang Dai, Shang Jiang, Zhelun Gao, Jiaxin Pei, Shang Zhu, and Jiaxuan You start from a familiar factory failure: one coding agent changes an interface while another keeps building on the old version until tests go stale. A conversation can fix the episode; when the participants rotate, nothing remains that still **governs** the team. **Relic** turns recurring collaboration failures into organization-owned, executable protocols—members reflect on visible work, propose rules, and govern adoption. Adopted protocols bind triggers, responsibilities, required evidence, and runtime consequences, and stay open to revision and retirement.

In a traced case, repeated integration friction becomes an interface-review rule that later governs pull requests and is revised as work continues. Across 360 controlled runs over ten software workloads and three models, Relic lifts complete-contract delivery from **14.06% to 19.76%** (+5.71 pp) over a matched structured team without the protocol lifecycle, improving all four verified production endpoints in every model stratum. Under fresh-member transfer, behavioral correctness is **25.4%** with no inherited protocol, **34.6%** when the same rules are readable text, and **41.2%** with executable bindings—a **+6.5-point** advantage of bindings over text. On CooperBench (excluding broken pairs) Relic hits **367/477 (76.9%)**, best among peer-structured systems; on the fixed 48-pair same-model subset it beats Solo (29/48 vs 26/48), reversing the official peer baseline’s coordination loss.

## Why it matters for code review

Overnight and always-on multi-agent factories accumulate coordination debt faster than chat memory can hold it. Treat learned integration rules as reviewable harness software: require protocol triggers and evidence gates in the runtime, not just AGENTS.md prose, and score whether a new agent cohort still obeys last week’s lessons. Continuous verified momentum compounds when the organization—not the session—owns the fix; FOMO for more concurrent agents without executable handoff protocols just recreates the same interface-stale failures every morning.
