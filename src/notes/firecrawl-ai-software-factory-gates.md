---
title: "Software factories are five gates — the agent is the cheap part"
description: "Sep 11 Firecrawl field guide collates Stripe/Spotify/Shopify/Ramp/Faire: intake, isolation, tools, verification, merge policy — plus Microsoft’s merge-rate gap and Faire’s failed confidence-score filter."
date: 2026-09-11
kind: field-note
source:
  title: "How to Build an AI Software Factory: Agents That Open, Review, and Merge PRs"
  url: https://www.firecrawl.dev/blog/ai-software-factory
project: steward
---

Hiba Fathima’s Sep 11 guide is a useful collation of published factory shapes. The claim up front: an AI software factory is the system *around* the coding agent — queue-driven intake, disposable isolation, shared tools, verification before human eyes, and an explicit merge gate. Miss verification-before-review and you built a machine that manufactures review debt. Spotify’s Fleetshift shipped in 2023, two years before it had an agent to put in it; gates before fleet.

Verification is where the receipts get sharp. Spotify’s nested loops: deterministic inner checks, then an LLM judge that vetoes ~25% of agent sessions (about half recoverable by course-correct), then outer CI — and they rank “passes CI but is wrong” as the trust-killer. Faire’s negative result: filtering review comments by the model’s own confidence score threw away 65% of comments and moved acceptance by ~3%; context, targeting, and a second-model “worth a human’s time?” gate lifted acceptance to 73%. Uber’s uReview (90%+ of ~65k weekly diffs) pushes the same precision-over-volume lesson: 65% of its comments addressed in-changeset vs 51% for humans.

Merge policy is staged by blast radius. Faire’s concrete rules: two human reviews on Copilot-authored PRs; don’t pull code owners until one review already exists; mark ready only when the agent asks. Microsoft’s ten-month `dotnet/runtime` dataset: agent PRs merged 67.9% vs 87.1% for Microsoft engineers; fully autonomous 55.1% vs 86.2% when a human also committed. METR: maintainers would reject ~half of AI PRs that already passed SWE-bench’s grader. The piece is clear that proven factory workloads skew mechanical (migrations, fleet upgrades), and that review capacity — not GPU — is the ceiling.

## Why it matters for code review

Factory design is review-system design. Intake filters, judge layers, and merge ladders are how you keep agent volume from saturating the two humans who still carry most of the feedback. Confidence scores are not a quality gate; independent judgment and blast-radius policy are.
