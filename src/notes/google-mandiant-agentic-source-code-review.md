---
title: "Mandiant’s AVDH: skeptical validation for agentic code review"
description: Google Mandiant details an agentic vulnerability discovery harness—threat model, entry points, hypothesis generation, multi-temperature validation, then human PoC.
kind: field-note
date: 2026-08-18
source:
  title: Staying Ahead of Adversarial AI Through Agentic Source Code Review
  url: https://cloud.google.com/blog/topics/threat-intelligence/staying-ahead-of-adversarial-ai-through-agentic-source-code-review
project: steward
---
When source leaks, attackers get machine-speed analysis. Mandiant’s response is the Agentic Vulnerability Discovery Harness (AVDH): a sequential, consultant-shaped pipeline on Google ADK that explores, threat-models, finds entry points, enriches context, hypothesizes access-control and data-flow bugs, then validates with high-temperature validators plus a synthesis agent.

The posture is deliberately skeptical. Humans verify threat models before deep analysis continues. Confirmed findings still need dynamic PoC and expert review. Distilled Mandiant knowledge injects as modular language/framework/vulnerability rules to cut false negatives. They grade on proprietary synthetic benchmarks to avoid public-dataset contamination.

Results they cite: 100+ true-positive criticals in two days on stolen repos; scale across tens of millions of LOC; assignable CVEs from open-source and extensions.

## Why it matters for code review

Security review of agent-scale diffs needs the same ingredients as good PR review: structured stages, independent validation, provenance of claims, and a human gate on exploitability—not a single model saying “looks secure.”
