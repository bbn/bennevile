---
title: "Methodological harnesses exist in the wild — mostly as one artifact, not a system"
description: "Sep 25 Díaz, Pérez & Gil-Borrás: 5,435 agentic repos; reweighted any-mechanism prevalence 21.7% (65.3% in >100★); mean breadth 1.15/5 even in popular stratum; rule files dominate, persistent knowledge ~1.9%."
date: 2026-09-25
kind: paper
source:
  title: "Methodological Harness in Agentic Software Engineering: An Empirical Study on Mining Software Repositories"
  url: https://arxiv.org/abs/2609.32014
project: steward
---

Díaz, Pérez, and Gil-Borrás ask the precondition question most “software factory” pitches skip: **do the team-level harness mechanisms people write about actually show up in repositories with agentic PRs?** Using AIDev (116,211 repos), they clone and mine **5,435** stratified by visibility, operationalize seven of eight mechanisms from their prior methodological-harness framework (N-version/parallel agents leave no durable Git trace), and qualitatively code 285 rule files from 150 repos.

The receipts are sobering for continuous factories. Reweighted population prevalence of **any** mechanism is **21.7%**; the popular (>100★) census hits **65.3%**. Mean breadth among five common mechanisms is only **1.15** even in that popular stratum — **2.6%** combine four or five; outside it, almost none do. What spreads is an **artifact** (rule/context files: H1) plus pre-agent governance (PR templates, CODEOWNERS), not the integrated method: persistent shared knowledge is ~**1.9%** at the top and near-absent elsewhere; executable specs stay rare. Among repos that already have a rule file, guiding the agent and stating norms are near-universal; persistent knowledge, executable specs, prescribed consultation, and graduated autonomy appear only in a minority. Temporal coverage bites: **17.7%** of popular-tier agentic PRs look harnessed at clone time but were not when opened — evaluating HEAD after the fact invents overnight governance that wasn’t there for the merge.

They deliberately measure presence, not efficacy (Faros/DORA/METR tensions stay as motivation). Structured consultation is real in comments but their lexical detector’s recall (~0.49) forced exclusion from the quantitative table — instrument failure, not mechanism absence.

## Why it matters for code review

FOMO for always-on agents is cheap; an integrated methodological harness is not. Review the **system**, not the CLAUDE.md selfie: if overnight merge trains lack persistent decisions, executable acceptance evidence, and autonomy boundaries, you have a rule file riding CI — not a factory. Pin breadth and co-occurrence the way this paper does before declaring the team “harnessed.”
