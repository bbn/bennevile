---
title: "ContextRender: keep the tool results your long run actually reuses"
description: "Sep 30 Kashmira/Dantanarayana/Tang/Mars: persistent execution-dependency graph + observed reuse; at 6K history budget, matches/beats full history on AppWorld & 8-obj QA while cutting inference cost 10–32%."
date: 2026-09-30
kind: paper
source:
  title: "ContextRender: From Execution Dependencies to Agent Context"
  url: https://arxiv.org/abs/2609.37743
project: steward
---

Savini Kashmira, Jayanaka L. Dantanarayana, Lingjia Tang, and Jason Mars (University of Michigan) treat long-horizon agent context as a **selection** problem, not a window-size problem. Passing the full tool-result history to every model call is expensive even when it fits; pruning by recency or semantic relevance can drop identifiers a later step still needs. **ContextRender** keeps complete tool results in a persistent graph, runs **Tool-Flow Analysis** to record *observed reuse* (later model/tool steps that echo values first introduced by an earlier result), and renders a fixed history budget by combining reuse, recency, and embedding relevance—omitted results stay available for later turns.

On AppWorld and 8-objective QA with GPT-4.1, Muse Glimmer 30B, and DeepSeek V4 Pro at a **6K** history budget (well below max context), ContextRender beats prune/compact/recency-summary/semantic-retrieval/ACON on task performance in all nine model–benchmark settings, and sits close to or above **full history** while cutting mean inference cost by **10.2–32.2%**. Ablation: adding observed reuse to recency+relevance lifts AppWorld TGC and QA F1 (~4pp relative) and roughly **triples** recall of results reused more than 25 turns later. Runtime adapters plug into OpenCode, AppWorld ReAct, ACON, OpenClaw, and Meta ARE without rewriting the agent’s tools or grader.

## Why it matters for code review

Always-on factories die on context tax as overnight trajectories lengthen: either you pay full-history inference every step, or you drop the contact list / file id / error blob the morning merge still needs. ContextRender’s receipt for continuous harnessed throughput is the same discipline as a merge gate—bind what you show the model to **evidence of use**, keep the bytes, and re-score before the next call. Score long-running agent loops by later-used result recall under a hard budget, not by how aggressively you compacted the scrollback—see also [EA-Graph’s artifact-anchored verification memory](/posts/hsu-eagraph-artifact-anchored-verification-memory/) and [LatentSift’s verification-token cut](/posts/han-latentsift-token-efficient-verification-swe-agents/). FOMO for agents that “keep everything in context” without a reuse graph just burns tokens on history the next step never needed.
