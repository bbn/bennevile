---
title: "158M overnight tokens: delivery worked; the harness bill did not"
description: "Sep 16 field receipt: 13h unattended fix of 12 design findings — 100/100 tests + byte-identical release via independent verifier; 95% of tokens were re-reads; idle-parent polling burned 6.5% on “not yet.”"
date: 2026-09-16
kind: field-note
source:
  title: "Two agents, one night, 158 million tokens: what it cost and what we are fixing"
  url: https://community.openai.com/t/two-agents-one-night-158-million-tokens-what-it-cost-and-what-we-are-fixing/1398068/1
project: steward
---

Aashish Bhandari’s Sep 16 OpenAI Community write-up is an overnight factory receipt with the cost ledger still open. One evening: fix twelve design-review findings on a web service (transaction guard, retries, credential rotation, fragile handoff, thin diagnostics). Wall clock **13h 4min**; ~5.5h active model time; **118 files / 16,369 lines** changed; nobody typed code overnight. Morning verification was the point: a *second* agent from a different vendor rebuilt from scratch and reproduced **100/100 tests**, **73/73 browser checks**, and a **byte-identical** release package with no serious finding. Continuous unattended work can ship — if an independent judge exists.

The bill is the other half of the story. Models processed **158,137,319** tokens; **95.4%** were re-reads of already-cached context, and only **0.42%** was new text. Hold the image: roughly two hundred *War and Peace* copies read to write less than one. What already worked (and what failed under load) is harness engineering, not model heroics:

- **Zero-token telemetry** via Stop/SessionEnd hooks counted 55 components, 1,505 activations, and 1,299 tool calls for $0 model tokens — so the autopsy itself is not another full-context activation.
- **Routing by work shape** (companion note): parent on the strongest model; mechanical/verifiable work to cheapest; judgement to mid/top. List-price equivalent **$99.80 vs $218.81** (54% cut) — and the independent verifier still passed.
- **Idle-parent trap**: a “no polling” rule held while the parent had its own work, then failed when idle — **89 waits** (88 at 60s), **66 timeouts**, **10.3M tokens / 6.5% of the run / 12.7% of list-price cost** spent learning “not yet.” Claude Code’s harness can wake a parent on worker completion; Codex today cannot, so a declarative rule alone is not enough.
- Partial failure on **worker reuse**: four long-lived workers ate **49%** of the run because follow-ups re-sent accumulated history every step.

Queued fixes are boring and correct: longer waits with a progress line, a zero-token watchdog script that wakes the parent only on completion/budget/stuck, one-worker-one-stage with fresh minimal context, and telemetry that counts waits instead of reconstructing them.

## Why it matters for code review

Overnight harnessed momentum is real here — twelve findings closed, independent verification green — but peak-session mastery would have hidden the real tax: orchestration that re-sends the whole conversation to ask if a worker is done. Sustained factories compound only when continuity *and* verification are cheap relative to generation. FOMO that agents aren’t working while you sleep is answered by unattended runs *plus* independent rebuild gates and zero-token observability; without those, always-on agents just mint larger morning queues and burn tokens on “not yet.”
