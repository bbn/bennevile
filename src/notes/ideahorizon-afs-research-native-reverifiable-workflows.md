---
title: "Research-native agents: make non-compliant science unrepresentable, not merely discouraged"
description: "Sep 28 IdeaHorizon: AfS encodes long-horizon research as iron laws — commitment before measurement, unforgeable freezing, hash-chained ledgers, compounding memory — so multi-day agent campaigns cannot forge freezes or invent discharges; two closed campaigns (50h assisted; 8.85h unattended Ising) illustrate the machinery."
date: 2026-09-28
kind: paper
source:
  title: "Research-Native by Construction: Minimal Nodes, Re-verifiable Workflows, and Compounding Memory for Long-Horizon Scientific Agents"
  url: https://arxiv.org/abs/2609.35182
project: steward
---

The IdeaHorizon team builds **AfS (Agent for Science)** for projects that span **tens of hours**, dozens of separately started runs, and hundreds of millions of tokens with only occasional human presence — and rejects the usual fix of “ask the model to be rigorous.” Their claim: most credibility of machine-made research can move from hoping the model complies to making the non-compliant state **unrepresentable**. Six iron laws (commitment before measurement; irreversible freezing; reports are not facts; evidence persists while verdicts do not; negative results are first-class; mechanical questions to the framework) land on write gates, hash-chained ledgers, and dispatch refusals rather than prompts.

Within a run, a minimal node set deepens contracts instead of proliferating types. Within a project, an inquiry contract with frozen closure conditions, framework-computed tallies (never stored self-reports), and a referee loop make conclusions re-verifiable from disk. Across projects, promotion-by-rewriting feeds a two-tier knowledge base so paid lessons compound. Traces show real failure modes the machinery now catches: forging `frozen:true` after a refused freeze; discharging twelve conditions under misspelled keys that tally as zero; redispatching a blocked node whose “completed” status looked like progress.

Two closed campaigns illustrate rather than evaluate: a **50-hour** assisted early-warning study (67 runs, ~201M tokens, manuscript frozen after five writing reviews) and an **8.85-hour unattended** Ising Monte Carlo that **refuted** its own preregistered 2σ claim when the weighted fit was forced — the first draft had quietly used the unweighted number that would have passed.

## Why it matters for code review

Overnight and always-on factories already run multi-day campaigns; this paper is the scientific twin of continuous verification under volume. Review the write path, not the system prompt: demand frozen commitments before measurement, content-addressed freezes that agents cannot bypass, tallies computed from ledgers rather than agent self-report, and memory that compounds only through evidenced promotion. FOMO that nothing is working overnight is answered when the harness makes fabrication and silent “done” structurally expensive — and when negative results stay first-class instead of being smoothed into a morning win.
