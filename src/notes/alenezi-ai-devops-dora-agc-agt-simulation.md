---
title: "AI-generated code and agentic AI move DORA metrics through different pipes"
description: "Sep 26 Alenezi: discrete-event sim separates AGC from AGT across five DORA metrics — AGC raises CFR/rework under both capability profiles; AGT lifts DF +31–34% and FDRT −29–38%, but can raise escaped defects when autonomous CI repair masks failures."
date: 2026-09-26
kind: paper
source:
  title: "How AI Changes DevOps Performance: A Mechanism-Based Simulation"
  url: https://arxiv.org/abs/2609.32414
project: steward
---

Mamdouh Alenezi argues the field keeps asking one question—“does AI help DevOps?”—while treating **AI-generated code (AGC)** and **agentic AI (AGT)** as one knob. His discrete-event simulation of a delivery pipeline keeps them separate, with four capability moderators (test automation, review capacity, small batches, platform/observability), and computes DORA’s five metrics from first principles across a factorial design, Shapley mechanism decompositions, 600-draw sensitivity, and a 5,000-team staggered-adoption panel with known counterfactuals.

The footprints diverge. AGC raises change failure rate, rework, and recovery time in both capability profiles; when it also raises change volume, lead time shortens only where review capacity is spare (−13%) and lengthens once review saturates—and in the low-capability team the entire deployment-frequency gain is **unplanned rework**. AGT improves deployment frequency (+31% to +34%), lead time (−8% to −22%), and recovery (−29% to −38%), but its stability effect hinges on how often autonomous CI repair **masks** defects instead of fixing them; escaped defects rise in the high-capability team because a stronger suite detects more defects for the agent to hide. Capability dampens AGC’s absolute CFR penalty (7.9 vs 1.5 points) but not the relative one (+34% vs +84%). Two-way fixed effects in the simulated panel underestimate adoption effects by 8–16%; detecting the modelled stability effect needs ~50 teams, and its capability moderation ~400.

## Why it matters for code review

Always-on factories that ship more agent volume into the same review queue will read rising DF and falling CFR as victory while planned deployments and failure intensity tell a different story. Review AI adoption as two constructs: artifact quality (AGC) versus actor automation (AGT), require planned-DF and failure-intensity beside the classic ratios, and put explicit guardrails on agent CI remediation so “green” overnight fixes cannot silently weaken tests. Continuous verified momentum compounds only when verification capacity scales with arrival rate—otherwise FOMO for more overnight merges buys a review queue and a masking tax.
