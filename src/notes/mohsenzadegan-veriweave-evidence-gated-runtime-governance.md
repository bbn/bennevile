---
title: "VeriWeave: authorize agent side effects with typed evidence, not the planner’s word"
description: "Sep 30 Mohsenzadegan/Tavakkoli/Kyamakya: deterministic deny>review>allow governance; GovernBench 60k cases → 0.9888 accuracy, zero aggregate false allows / GASR; remove evidence gate → FAR 0.2873, GASR 0.5715."
date: 2026-09-30
kind: paper
source:
  title: "VeriWeave Govern: Evidence-Gated Deterministic Runtime Governance for Enterprise AI Agents"
  url: https://arxiv.org/abs/2609.37457
project: steward
---

Kabeh Mohsenzadegan, Vahid Tavakkoli, and Kyandoghere Kyamakya put a hard boundary between **action generation** and **action authorization**. VeriWeave Govern is a deterministic runtime that scores structured agent requests against versioned policies, validates **typed** evidence (authority, freshness, signatures, contradictions), applies fixed **deny > review > allow** precedence, routes consequential work to accountable humans, and writes tamper-evident, replayable audit state. The planner may invent the action; it does not get to certify it. On GovernBench—**30** seeds × **2,000** cases (**60,000** total) across five enterprise domains plus adversarial evidence, OOD actions, and temporal policy evolution—VeriWeave hits **0.9888** mean accuracy and **0.9836** macro-F1 with **zero** observed aggregate false allows and **zero** Governance Attack Success Rate. Ablations show where safety lives: strip the evidence gate and accuracy falls to **0.7127**, false-allow rate rises to **0.2873**, and GASR to **0.5715**; drop deny precedence and FAR hits **0.2115**. The deployed API passes **12/12** end-to-end scenarios and a **40,040**-request concurrency matrix with zero failures.

A separate **150**-case EU/Austria regulation-grounded bank (two blinded annotators, perfect agreement) exposes the safety–utility trade-off: VeriWeave, OPA, and Cedar keep **zero** false allows but over-escalate **30** consensus-allow cases to review (**0.8000** accuracy), while a Gemma 4 31B comparator aligns closer to humans (**0.9733**) without deterministic enforcement or replayable authorization proof. The paper’s point is architectural, not a leaderboard win: authorization should make the safety–utility frontier **inspectable** through evidence-aware, replayable policy—not bury it inside the same stochastic component that proposed the side effect.

## Why it matters for code review

Always-on factories that let overnight agents call tools, open PRs, or touch production need an external admission control plane, not another self-attesting “done.” Treat merge and deploy the way VeriWeave treats allow: typed evidence gates, deny dominance over permissive rules, OOD → review instead of implicit allow, and audit that can replay the policy hash that governed the decision. Continuous verified momentum compounds when maker≠checker is enforced at the side-effect boundary; FOMO for more autonomous tool calls without evidence-gated authorization just scales unauthorized change.
