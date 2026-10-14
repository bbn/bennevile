---
title: "A software factory still needs a review gate it can trust"
description: "Sep 10 CodeRabbit field note: green harness checks prove covered behavior; merge still asks whether the change should become part of the system — with review depth following cost of error and blast radius."
date: 2026-09-10
kind: field-note
source:
  title: "A software factory needs a review gate it can trust"
  url: https://www.coderabbit.ai/blog/software-factory-review-gate
project: steward
---

Hendrik Krack’s receipt for the factory shape teams are shipping: agents can pick up queued work, write and test, respond to findings, and prepare a release. Sandboxes, evaluators, and retries will get a lot of that loop green. The harder decision sits after the checks. The code may work as specified and still introduce a poor boundary, an unexpected dependency, or more risk than the change is worth. The review gate is where the team decides not only *if it works*, but *whether it should become part of the system*.

The piece leans on the weak-link pattern from “Writing Code vs. Shipping Code” (large gains in coding activity, smaller gains in completed releases) and on Dex Horthy’s point that tests and agent loops reward immediate correctness more readily than long-horizon maintainability. A harness measures what you already know how to check — types, tests, linters, scanners, sandboxes, CI policy. Questions that span auth, inventory, chat, and an untouched API client are still review work. The operating rule is blunt: **review depth should follow the cost of error**. Narrow dependency updates with deterministic coverage can ride automation; authentication, billing, retention, and public interfaces still deserve a visible gate. Humans move *on* the loop — supervising, sampling, owning expensive mistakes — while independent review supplies a second reading with system view and code view linked so every claim is inspectable (Change Stack / Blast Radius on a ~2k-LOC demo PR).

## Why it matters for code review

Factories that treat “tests passed” as merge authority will ship green and accumulate boundary debt. Keep the harness as evidence, route human attention by blast radius, and require a path from system claim back to exact lines — or the review queue becomes reconstruction theater instead of a gate.
