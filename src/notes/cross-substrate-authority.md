---
title: "Authority that lives outside the workspace still has to gate the mutate"
description: "Sep 8: cross-substrate authority gap — identical files can be safe or unsafe; planner observation fails, a deterministic execution guard at the mutation boundary catches unsafe publish intents."
date: 2026-09-08
kind: paper
source:
  title: "Beyond Agent Harnesses: Cross-Substrate Authority for Multi-Agent Systems"
  url: https://arxiv.org/abs/2609.08472
project: steward
---

[CapScope](https://arxiv.org/abs/2609.08371) ([our note](/posts/capscope-capability-scoped-harness/)) asked whether authority belongs in the prompt. Li, Volkov, Liu, and coauthors name the next failure mode: the *cross-substrate authority gap*. The planner sees memory and the workspace; a runtime, registry, or approval service may hold the authorization fact somewhere else. Same final files, opposite safe actions — because the decision-relevant “may I publish / merge / apply this?” bit never entered the model’s view.

Three controlled experiments (real Git lineage, recorded execution attempts, deterministic oracles, two model routes):

1. **Evidence ablation (128 cells).** Authority-blind candidate evidence: 0/32 final semantic success. Raw receipts *or* a typed relation: 32/32. The missing authority *fact* accounts for the gain; typed packaging adds no planning-accuracy lift over equal raw information.
2. **Planning with the fact in view (96 calls).** Workspace-visible evidence alone yields 12/16 unsafe publication decisions. Even with the typed relation, first actions stay unreliable (15/32 correct; 11/32 invalid or absent).
3. **Execution guard, zero extra model calls.** Replay the same 32 fixed first-action intents: a deterministic guard at the mutation boundary blocks all six unsafe intents and permits all twelve valid authorized publishes.

## Why it matters for code review

Review that only reads the diff is substrate-blind the same way. Merge and publish are mutations; if authorization lives in a ticket, steward, or harness registry the model never saw, “looks good in the working tree” is not a decision. Put the gate on the mutation — and treat missing authority receipts as a review failure, not a prompting miss.
