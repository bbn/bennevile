---
title: "Nightshift: the builder proposes; the harness owns the commit"
description: "Mar 28 Nightshift/AgentForge: Ralph loop with separate evaluator, mutation-guarded feature queue, and metrics dashboard as receipt — 29/30 features, 41 attempts, ~$0.95 in 76 minutes."
date: 2026-03-28
kind: field-note
source:
  title: "Nightshift — controlled agent harness for lights-out software work"
  url: https://github.com/benikigai/nightshift
project: steward
---

[benikigai/nightshift](https://github.com/benikigai/nightshift) (Mar 28; product page at [nightshift.kogenlabs.dev](https://nightshift.kogenlabs.dev)) is a lights-out Ralph-loop specimen: scoped specs in, build/gate/evaluate/retry/commit/audit out. The coding agent writes code; **the harness owns authority**.

Loop contract: pick one pending feature from a structured queue → run the builder on exactly that feature → run build/test gates → send the diff to a **separate evaluator** → retry with file-specific feedback or commit and continue → skip/escalate when attempts exhaust instead of pretending pass. `json_guard.py` blocks the builder from marking its own feature complete. Vague evaluator feedback is rejected by design. The public repo is the original AgentForge proof run whose **dashboard is the receipt**: the Next.js app visualizes the autonomous loop that built it. Published numbers: **29/30** features passed (1 skipped), **41** evaluated attempts, average passing score **9.69/10**, ~109k tokens, about **$0.95**, **76 minutes**. Broader Nightshift adds queue supervision, GitHub comment triggers, check-run updates, Handoff review (approve / request changes / requeue / escalate), and Guard budgets/rate limits/circuit breakers.

## Why it matters for code review

Overnight FOMO is not “is Claude idle?” — it is “did anything that claimed done actually survive an independent score?” Nightshift’s useful complication for continuous factories is explicit: self-review is the weak point, so commit rights sit outside the builder. Modest verified cycles with an evaluator gate and a metrics trail compound past a peak interactive session that grades its own diff. Review the morning attempt log the way you review a merge train — promote what cleared gates, and keep live Claude for the work that still needs a human on the stick.
