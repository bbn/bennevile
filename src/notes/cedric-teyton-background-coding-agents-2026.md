---
title: "Background coding agents: verification is the product companies keep shipping"
description: "Sep 10 Cedric Teyton survey of Stripe/DoorDash/Ramp/Monzo/Checkout/etc.: durable runs + ephemeral workers, determinism inside the loop, fresh-context review gates — attention scarcity, not typing speed."
date: 2026-09-10
kind: field-note
source:
  title: "How companies run background coding agents in 2026"
  url: https://medium.com/@cedric.teyton_8435/how-companies-run-background-coding-agents-in-2026-d2a362f44f17
project: steward
---

Cedric Teyton’s Sep 10 Medium note is a cross-company field report on **background coding agents** — Stripe Minions, DoorDash Flux, Ramp Inspect, Monzo Chip, Checkout HAL, Block BuilderBot, monday Morphex, and others — and the pattern that survives the demos. The motivations rhyme: developer attention is scarce (unattended agents parallelize watching), the laptop is the wrong place (auditability, credentials, compute), owned harnesses beat local “shadow context,” and background work finally eats the broccoli of eng (debt, bumps, migrations).

The recurring architecture is the thesis in ops language. **Multi-surface, single object** — Slack, tickets, GitHub, cron, CLI all point at one run record. **Durable runs, ephemeral workers** — follow-ups rebuild context from ticket/PR/CI, not a zombie process. **Determinism inside the agent loop** — filter-by-status does not need an LLM. One MCP gateway with scoped tools and logs. And the line that matters for review: **verification is the actual product** — a separate reviewer with fresh context and a gate that must pass before a PR can even open. Auto-merge policies differ (almost everything / nothing / except critical paths); what they share is an explicit policy. Teyton’s cautions land too: PR-opened metrics without defect/revert rates lie; messy codebases get amplified; hallucination and review burden scale with scope; small diffs get reviewed, large ones get skimmed.

## Why it matters for code review

FOMO that agents aren’t working overnight is only useful if the morning queue is gated. This survey’s consensus is that continuous factories win when the harness owns durability, permissions, and independent verification — not when someone masters a longer interactive Claude session. The review bottleneck does not vanish under volume; it relocates into whatever gates you actually enforce before merge. Build those gates first, or background agents just industrialize skimmed diffs.
