---
title: "The harness sets the price of the answer"
description: "Sep 17 Tunguz on HarnessTax: same model 71% cheaper on Pi than Claude Code with no significant quality gap; harness compression as margin, moat, and the difference between rationing overnight work and saying yes."
date: 2026-09-17
kind: field-note
source:
  title: "The Harness Margin Opportunity"
  url: https://tomtunguz.com/the-harness-margin-opportunity/
project: steward
---

Tomasz Tunguz’s Sep 17 note takes [HarnessTax](https://harnesstax.github.io/) out of the benchmark table and into the org ledger. The sticky number he carries: GPT-5.6 Sol costs **71% less** on Pi than on Claude Code for the same measured result, and across the study’s 42 within-model harness comparisons none survives as a statistically significant quality win after correction. The wrapper is not décor — **it sets the price of an answer**.

His thought experiment is the operator version of overnight FOMO. Two startups bid the same $250k AI-associate contract. Inferno calls a frontier model on every step (~$131k inference). Inferefficient coalesces work into deterministic code and skills, reserving the expensive model for the few steps that need it (~$37k). Same hosting, evals, and human check cost → **38% vs 75%** gross margin; payback on a $150k sale cost stretches to nineteen months vs ten. Past a few thousand evaluations the expensive path starts losing money per additional run and has to **ration** — worse product exactly when the customer wants more. The cheap path can say yes. The moat is not a secret model: it is the eval corpus and hill-climbing factory that make routing safe.

## Why it matters for code review

Always-on verified momentum is a capacity strategy *and* a margin strategy. Teams that treat continuous agents as “more Claude Code overnight” buy FOMO with inference; teams that treat the harness as the product — deterministic gates, skills, evals that justify cheap routes — keep modest throughput compounding without rationing morning review. Steady factories beat bursty mastery when cost-per-verified-change stays inside the budget that lets you leave the loop running.
