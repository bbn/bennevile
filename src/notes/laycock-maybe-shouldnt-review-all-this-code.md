---
title: "Laycock: stop waiting until the PR for the important talk"
description: "Thoughtworks CTO Rachel Laycock answers Houck — same Meta/DX crush numbers, different fix: shift judgment left via pairing and design, review by exception, don’t preserve PR ceremony with an AI pretend-reviewer."
date: 2026-09-02
kind: field-note
source:
  title: "Maybe We Shouldn't Be Reviewing All This Code"
  url: https://martinfowler.com/rachels-ramblings/code-review.html
project: steward
---
Rachel Laycock (CTO, Thoughtworks) writes the other half of the Houck argument. Same panel disagreement, same crush numbers (Meta SLOCs/diff +106%, DX median PR size +64%). She shares the fear of losing mentoring, ownership, and architectural spread — and rejects the premise that the pull request is where those jobs should live.

Her reframe: if feedback is valuable, move it closer to the decision. Explore alternatives before one gets implemented. Prefer pairing and collective design for knowledge transfer and junior learning. Encode architectural constraints as fitness functions. Automate formatting, lint, known security patterns, and anything deterministically testable. Agents can sit in those earlier loops too; the scarce resource is still experienced human judgment, and waiting until a finished agent PR to spend it is the anti-pattern.

“Review by exception” is the gate design. Still review fundamental architecture changes, sensitive security boundaries, huge blast radius, unfamiliar critical surfaces, or anything the team admits they are not confident about. That is different from requiring a human to inspect every change because that was historically how confidence was manufactured. An agent that produces 10× the code while every line still queues for a senior is not a 10× org — it is a backlog with a nicer generator. Automating an AI pretend-human onto that same ceremony preserves the bottleneck shape.

She agrees cognitive and intent debt are real. She does not think mandatory PRs are a strong defense. The ask is deliberate practices for human understanding — collaborative design, pairing, boundaries, executable architecture, shared ops — so engineers understand systems, not diffs. AI is exposing how many responsibilities we piled onto one late ceremony while humans were the throughput limit.

## Why it matters for code review

Read this next to Houck, not instead of him. Both refuse “automate review away and call it done.” Houck protects the invisible org-building inside review with risk-stratified automation; Laycock asks whether most of that org-building should happen *before* the PR exists. For software factories, the practical synthesis is upstream judgment loops plus exception-based human acceptance — not faster rubber stamps on a bigger queue.
