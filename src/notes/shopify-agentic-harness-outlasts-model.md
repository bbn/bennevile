---
title: "Shopify: the harness outlasts the model"
description: "AppSec’s Dispatch pipeline — partitioned hunters, cross-model verifiers with real integration-test oracles, then fix PRs — so better models don’t just dump confident noise on developers."
kind: field-note
date: 2026-07-29
source:
  title: "Building an agentic harness that outlasts the model (2026)"
  url: https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model
project: steward
---
Shopify AppSec’s Dispatch harness is the receipt for “models get better, review still breaks.” Security-tuned frontier models found more candidate vulns on their Rails surfaces — and also produced more confident-sounding noise. In one audit, 30+ candidates collapsed to low/medium, false positives, or defense-in-depth after validation. Noise to a developer costs trust; the durable piece is the harness, not the hunter weights.

The pipeline is staged and deliberately boring where it can be: partition the monolith so hunters stay inside ~20–30% of context, run category-specific hunters in parallel, then run *different-model* verifiers sequentially that must author and execute real integration tests (two-tenant fixtures, public stack exercised, no Model-layer stubs as proof). Deterministic Ruby post-processing owns dedupe, severity, credentials, Git, and storage. Diff-based rescans drop cost from full-app $50–$300 runs to roughly $5–$50. Across ~80 apps and thousands of scans they report 300+ findings and ~$400k equivalent bounty value — including two Criticals — with draft PRs handed to humans only after the oracle.

## Why it matters for code review

Same non-stationary-intelligence lesson as OpenAI’s harness write-ups, aimed at review trust: swap models freely, keep the test oracle, cross-model verification, and deterministic control plane. A better hunter without a harness just accelerates false confidence into the PR queue.
