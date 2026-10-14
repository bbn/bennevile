---
title: "HELIX: risk-tiered verification rungs, not more generation"
description: "Sep 2 Maya Shenoi methodology note: HELIX rebuilds the SDLC around verification contracts — R0–R3 autonomy, machine gate then adversarial AI then human intent review, and no merge without a verification record."
date: 2026-09-02
kind: field-note
source:
  title: "HELIX, In Full: The AI-First SDLC for Engineering Teams"
  url: https://mayashenoi.com/2026/09/02/helix-in-full-the-ai-first-sdlc-for-engineering-teams/
project: steward
---

Maya Shenoi’s HELIX write-up is a full AI-first SDLC built for the moment writing code stopped being the scarce step. The picture is a double helix: a human strand (intent, judgment, accountability), a machine strand (generation and toil under scoped permissions), and verification *rungs* sized to risk. Unreviewed throughput is treated as inventory — unverified risk waiting to be unloaded — not velocity. Cited pressure: AI-assisted PRs carrying roughly 68% more review findings (10.8 vs 6.5), and the familiar failure mode where “usually right” models teach teams to soft-pedal review.

The load-bearing phase is Verify, layered cheapest-first: L1 machine gate on everything (tests against acceptance criteria, SCA/secrets/lint, provenance label); L2 adversarial AI review on R1+ by a *different* model prompted to refute; L3 human intent review by tier (architecture and risk, not style the gate already enforced). Two absolutes: the author never verifies their own change — person or agent — and no verification record means no merge. Autonomy is classified up front as R0–R3 (disposable sandbox through crypto/irreversible paths), and the verifier can re-tier on sight with audited re-tiers so deadline pressure cannot silently downgrade consequence. Roles split Intent Owner / Navigator / Verifier / Steward; author∩verifier of the same change is forbidden. The dashboard that keeps it honest includes first-pass acceptance, verification latency, escape rate by tier, provenance coverage, and cost per *verified* change — with the explicit rule that rising verification latency gets more verification capacity, never more generation.

## Why it matters for code review

This is the software-factory control plane written as methodology: generation is cheap; trust is per-change and recorded; review depth tracks consequence, not ticket optimism. If your agent pipeline still lets the author model (or the same engineer) grade its own diff, merges without a verification record, or responds to a review queue by opening the generation faucet wider, HELIX’s rung is the counter-design — independent verification as capacity you staff, not a courtesy after the “real” work.
