---
title: "Vestrum: evidence-grounded verification at commitment beats rebuild-the-answer critics"
description: "Sep 27 Parashar et al.: scoped harness edits from failure classes raise Terminal-Bench checks 63.7%→70.3% and UltraHorizon 47.6→59.8; intermediate evidence checks repair, answer-rebuild critics break more than they fix."
date: 2026-09-27
kind: paper
source:
  title: "Vestrum: Improving Agent Harnesses by Adapting Their Verification, Structure and Memory"
  url: https://arxiv.org/abs/2609.33822
project: steward
---

Parashar, Douglass, Bastian, and Bhandarkar treat harness improvement as **scoped surgery from recurring failure classes**, not a fresh Claude Code session on every broken episode. **Vestrum** reads development traces, names failure classes inside task kinds, proposes changes across four dimensions — verification, retrieval, decomposition, knowledge synthesis — screens them for generality (including a lexical leakage lint), and admits a bundle only when development (and optional validation) clears criteria. A persistent lessons file carries refused and successful proposals into later epochs. The task model stays frozen; only the harness edits.

Held-out gains stick. Over GAM, UltraHorizon rises **47.6 → 59.8**, LoCoMo and AMA-Bench also improve, and Vestrum beats the evaluated GEPA configurations in every paired memory comparison at fewer or comparable task-agent evaluations. Starting from Claude Code on Terminal-Bench 4 Hard, checks passed move **63.7% → 70.3%** on eight held-out tasks at **1.03×** baseline spend; PathBench cell-type agreement climbs **67.5% → 77.8%** on held-out slide sections. Ablations matter: dropping the lessons file or ceiling probe shrinks validation gains; removing failure classes, generalization screening, and task-kind scope leaves **no** validation gain.

The verification finding is the field note for always-on factories. Checks help when grounded in evidence at **points of commitment** — memory write, evidence merge, rule commit, first edit of shipped code. Intermediate evidence checks repaired **17 of 18** AMA-Bench notes they touched; a selective final-answer check was net positive. Critics asked to **rebuild finished answers** broke more than they repaired (9 vs 5; 6 vs 2). Placement alone is not enough: an UltraHorizon “evidence sufficiency” gate at the same stage blocked every development episode and lost points.

## Why it matters for code review

Overnight merge trains that keep bolting “LLM re-review the whole PR” onto green CI are buying the rebuild-the-answer pattern Vestrum’s development record punishes. Review harness PRs for edit gates that require an invariant and a probe **before** the first shipped-file change, for scoped mechanisms that cannot leak task-specific constants into production prompts, and for admission criteria that refuse unscoped “helpful notes” when another task kind regresses. Continuous verified momentum compounds when FOMO for more unattended hours funds evidence-grounded checks at commitment points — not another bursty session that rewrites answers the factory already got right.
