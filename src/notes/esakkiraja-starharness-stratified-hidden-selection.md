---
title: "StarHarness: stratified search, proposer-hidden selection, then held-out enterprise transfer"
description: "Aug 25 Esakkiraja et al. (ServiceNow/Mila): evolve prompts/tools/skills/MCP/subagents with failure-mode strata + hidden selection; +20–35 pp on ITBench / EnterpriseOps-Gym / AutomationBench, frozen transfer across GPT and Qwen."
date: 2026-08-25
kind: paper
source:
  title: "StarHarness: Evolving Harnesses with Stratified Search for Enterprise Environments"
  url: https://arxiv.org/abs/2608.24804
project: steward
---

Esakkiraja, Akhiyarov, Yadav, Rajeswar, Bechard, Nemala, and Davasam ask whether a **frozen** model can climb stateful enterprise tools by editing only the harness — and whether those edits generalize past the search set. **StarHarness** keeps weights fixed and searches an editable Stirrup surface (prompts, tool schemas, skills, MCP providers, subagents, finish logic) via a Pi-based coding proposer. Before search it stratifies tasks by baseline failure mode, score, and verifier pass rate; splits the evolve pool into **proposer-visible search** vs **proposer-hidden selection**; and reserves a true holdout. Candidates are scoped git diffs with leakage guards (no task-ID branches, no verifier text in prompts), a smoke flip, then promotion only when hidden selection mean improves. Hill-climb and tree-search modes share the same acceptance rule; a ledger carries accepted hypotheses and discarded attempts across iterations.

Across ITBench SRE, EnterpriseOps-Gym ITSM, and AutomationBench Finance, 4–12 accepted patches per environment lift full-benchmark scores by roughly **+20–35 pp** over the default harness, with held-out gains in the same band (e.g. ITBench evolution **+45** / held-out **+31.7**). The same GPT-5.4-evolved artifacts transfer without re-evolution to GPT-5.4-mini, GPT-5.5, and Qwen3.5/3.6 — including ITBench Qwen **25.6% → 70.0%**. Trace analysis attributes wins to interface repairs, explicit environment conventions, and search-compression tools; EnterpriseOps-Gym cuts turns ~**18 → 10** and estimated cost ~**53%**. Prompt-only GEPA on Pi trails the evolved Stirrup harness by double-digit points on every bench.

## Why it matters for code review

Overnight harness factories under sustained load fail when promotion optimizes the tasks the proposer already saw. Review harness-evolution PRs the way StarHarness accepts: stratified coverage, a selection set the proposer never reads, holdout receipts, and diffs that repair interfaces rather than hard-code answers. Steady harnessed throughput compounds when FOMO for idle enterprise agents funds transferable environment contracts — not another peak-session prompt burst that only greens the search slice.
