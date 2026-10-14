---
title: "Verification debt: when generation outruns trust"
description: "Aug 20 field note: verification debt as the queue behind cheap AI implementation; independent layers beat same-model self-checks; measure verified delivery throughput."
date: 2026-08-20
kind: field-note
source:
  title: "The AI Verification Bottleneck: Why writing Code Is No Longer the Hard Part"
  url: https://pragmaticbydefault.com/posts/ai-verification-bottleneck/
project: steward
---

Lukasz Kamieniecki-Mruk’s Aug 20 note refuses the “AI made us 3× faster” scoreboard. Copilot-style gains on bounded coding tasks are real; DORA’s 2025 association of higher AI adoption with slightly lower throughput and worse stability is the system reading. Implementation capacity raced ahead of the rest of the delivery pipe — review, security, integration, business validation, deploy controls — so the constraint relocated downstream. He names the residue **verification debt**: producing more change than the organization can establish as correct, secure, and appropriate for production. Lines generated and PR count measure how fast the queue fills, not how much verified production change you can safely release.

The sharpest cut is independence. An agent that interprets the requirement, writes the code, writes the tests, and reviews the diff can encode the same misunderstanding three times and still look comprehensive. Green is not proof. Layers have to challenge different assumptions: static vs security vs integration vs property/adversarial vs observability vs human judgment on business and architecture. NIST and OWASP both land here — AI-generated content still needs validation processes that do not collapse into the generator. The prescription is risk-tiered pipeline depth (cheap automatic checks first; expensive human judgment reserved), not another human in front of every AI PR.

## Why it matters for code review

If your factory’s AI metric is implementation speed, you are optimizing the stage that already stopped being the bottleneck. Ask which verification layer saturates first when generation triples — then fix that constraint. Review that cannot produce independent evidence is just the same model nodding at itself with a merge button attached.
