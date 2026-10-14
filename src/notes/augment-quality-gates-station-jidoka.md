---
title: "Put the gate at the station that produces the defect"
description: "Aug 21 Augment field note: agent PR volume turns merge-only review into terminal inspection — station-level quality gates (intake→spec→build→verify→ship) with named owners stop defects where generation is still cheap."
date: 2026-08-21
kind: field-note
source:
  title: "Quality Gates in Software Development: Manufacturing QA for an Agent-Run SDLC"
  url: https://www.augmentcode.com/guides/quality-gates-software-development
project: steward
---

Molisha Shah’s Augment guide starts from a scene every review lead already knows: an agent fleet opens thirty PRs overnight against a rotation sized for six a day. Everything compiles and lints. By Thursday the queue is two days deep, reviewers approve on skim, and the one gate the org trusts is both bottleneck and rubber stamp. Merge-point review is terminal inspection. Once agents author the change, every defect that reaches it has already burned planning and generation compute — and every artifact competes for the same fixed pool of human attention.

The prescription is jidoka for an agent-run line: station-level admission, not more merge-style checkpoints. Five stations — intake, spec, build, verify, ship — each with predefined criteria, an owning role, and authority to stop *that* station’s work. A hallucinated dependency belongs at a build-station stop (Spracklen et al.: hundreds of thousands of hallucinated package names across models). An untestable acceptance criterion belongs at spec. Neither belongs at merge, which is where both currently land. Gate policy is distinct from instruments: CI checks and linters supply evidence; a named owner issues the admit-or-block decision and prices cycle-time cost against prevented escapes. Deming’s warning still applies: a gate expressed only as a pass rate invites gaming — almost-right agent work clears numeric bars comfortably while escape rates climb.

## Why it matters for code review

If your only hard stop is the PR, you already lost the cheap catch. Place gates where defect classes are produced, name who can halt, and read queue time *and* escape rate together — a longer verify wait that does not cut escapes is delay you bought for nothing. Merge stays a gate; it stops being the line’s sole rejection point.
