---
title: "Maat: deterministic handoff contracts stop multi-agent cascades without an LLM judge"
description: "Sep 27 Elina: Maat validates agent-to-agent handoffs against a versioned contract with no model in the gate; on 522 trials, attributable halts lift rubric scores +7.7–29.1% in five of six workflows and cut model-call cost 17–53% when defects fire early — with a blunt audit that 37% of v1 halts were false alarms from validator misconfiguration."
date: 2026-09-27
kind: paper
source:
  title: "Maat: Independent Deterministic Contract-Based Governance for Multi-Agent LLM Workflows"
  url: https://arxiv.org/abs/2609.34017
project: steward
---

Uliana Elina argues that multi-agent reliability is an **interface** problem: one agent's bad value becomes the next agent's authoritative context, and learned or LLM judges share the failure modes they are meant to catch. **Maat** inserts a deterministic governance layer on handoffs — seven gates plus requirement primitives over a versioned *anchor* (limits, entities, jurisdiction, payout rules) — with **no language model** in the validation or scoring path. The public claim is reproducibility for a fixed engine, anchor, and handoff, not open-domain hallucination detection.

Across six controlled workflows (6–15 agents, **522** trials) with injected defects, a post-publication audit forced a narrower win: when the governed run completed or halted on a finding attributable to a verified defect, rubric scores rose **+7.7% to +29.1%** in five domains and were flat in software development (**+0.8%**); model-call cost fell **17–53%** where early attributable halts skipped downstream agents. A hand review of all **94** governed-arm halts found **35 false alarms (37%)** from validator defects (circuit-breaker depth, empty answers treated as hollow, wrong expected amounts) — and when those halts count as failed work, the governed arm *loses* in four of six workflows. Determinism without correct contracts is just reproducible wrongness.

## Why it matters for code review

Always-on factories multiply handoffs; merge-rate under sustained load dies when a silent identity or price drift cascades overnight. Treat handoff contracts as reviewable harness software: require versioned anchors, LLM-free gates at agent boundaries, and halt-attribution audits that distinguish protective early stops from false-alarm cost savings. FOMO that agents sit idle is the wrong fear if the fleet is busy laundering bad state — Maat's lesson is that continuous verified momentum needs deterministic seams, and that those seams must themselves be tested.
