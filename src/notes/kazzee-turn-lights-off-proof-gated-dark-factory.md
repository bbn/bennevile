---
title: "Dark factories: turn lights off only as far as proof reaches"
description: "Aug 10 Jeff Kazzee: stage-by-stage SDLC switches; verification buys autonomy; deterministic checks + independent judgment + real surface; a pilot of seven image calls with preservation and browser gates."
date: 2026-08-10
kind: field-note
source:
  title: "Turn the Lights Off in the Right Order"
  url: https://jeffkazzee.substack.com/p/turn-the-lights-off-in-the-right
project: steward
---

[Jeff Kazzee](https://jeffkazzee.substack.com/p/turn-the-lights-off-in-the-right) (Aug 10) argues dark factories work — and that the interesting question is which lights you turn off, in what order. Autonomy is not one dial. Treat the SDLC as stages with separate switches: keep intent/planning and taste/scope/release lit; run research, spec-from-decisions, slicing, implementation, checks, and independent review dark **exactly as far as proof reaches**. Trust is a feeling; proof is a check that fails loudly.

His Zo Deep Dives pilot is the receipt: three guide images needed seven generation calls (four rejected, including one from the judge model), then preservation vs a pre-edit baseline, typecheck, production build, and real desktop/phone browser passes that caught a duplicate image invisible in source. Generator never grades its own output; if more than one third of a batch fails independent review, the judging agent takes generation — and still does not approve itself. He leans on Disler’s Super Simple Software Factory (workflow under code, not one mega-prompt) and Matt Pocock’s Wayfinder → to-spec → to-tickets sequence so jobs enter the queue as bounded nodes with done-checks. Climb the autonomy ladder (tool → agent → orchestrator → meta harness) only when model capability, evidence, and risk appetite all agree.

## Why it matters for code review

Overnight harnessed momentum compounds when darkness is purchased with verification, not with hope. Kazzee’s order of operations is the FOMO antidote that still keeps humans on irreversible taste and merge decisions — continuous factories beat burst heroics only when every unattended stage has a check the model cannot lie to.
