---
title: "Opair: the harness that refuses autonomy on purpose"
description: "Phil Booth’s Opair makes shared ownership the product goal — no shell, scoped tools, driver/navigator role swap — so the human stays in the loop before the 5k-line agent PR arrives for review."
date: 2026-09-09
kind: field-note
source:
  title: "Opair: The coding harness that eschews autonomy"
  url: https://www.opairdev.org/
project: steward
---
Most coding harnesses compete on how far the agent can run alone. Opair (Phil Booth; Show HN ~Sept 9) inverts the scoreboard: minimize agent autonomy, minimize tool scope, minimize the human’s feedback-loop duration. If you want a harness that just gets on with it, the landing page says stop reading.

The philosophy doc is the field note. Shared ownership is the explicit goal — humans who can still ship if the model is down, and who can drop to a cheaper model because critical thought never left the loop. From that axiom: a 5,000-line agent PR fails the same standard you’d apply to a coworker; technical debt still accrues interest when write cost collapses and read cost does not; and the first-idea fallacy gets worse when implementation is free but creates inertia. Pair programming’s bet — you understand what you helped write — is treated as the design constraint, not a soft culture aspiration.

Mechanically it refuses the usual affordances. No shell tool. Every tool is narrowly scoped with fine-grained permissions. Driver mode can write (execution still gated; project writes may auto-approve for the session; ignored paths, dotfiles, and external writes cannot). Navigator mode has no writable tools — the model watches project files and acts as a thinking partner. Shift+Tab swaps who drives. Autonomy is not a missing feature; it is the rejected objective.

## Why it matters for code review

Review bottlenecks are often midstream consequences of upstream harness choices. If the default loop produces unowned diffs, no amount of risk-tiered PR routing recovers shared understanding — you only triage the flood. Opair is a concrete alternative control point: keep judgment interleaved with generation so less of the review job is “reconstruct intent after the agent finished.” Read it next to Laycock’s shift-left pairing argument and [CapScope](https://arxiv.org/abs/2609.08371)’s capability ceilings ([our note](/posts/capscope-capability-scoped-harness/)) — same allergy to ambient authority, applied at the human–agent interface instead of the tool gate.
