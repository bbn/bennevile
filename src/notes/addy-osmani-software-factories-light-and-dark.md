---
title: "Light and dark factories: verification is the neck"
description: "Jul 22 Addy Osmani: loop → harness → factory; dark ships unread diffs; lit keeps judgment on the outer loop — autonomy only as wide as cheap, hard-to-fake checks."
date: 2026-07-22
kind: field-note
source:
  title: "Software Factories, Light and Dark"
  url: https://addyo.substack.com/p/software-factories-light-and-dark
project: steward
---

Addy Osmani’s Jul 22 essay (building on Dex Horthy’s “Harness Engineering is not Enough”) gives the week’s continuous-factory map its vocabulary: **loop → harness → factory**, then **light vs dark** for where human reading still happens.

A loop is one agent on repeat until a stop condition. A harness is the walls — sandbox, tools, memory, and the gate that defines done. A software factory is many harnessed loops on a queue, drained through a review gate into production, with humans owning the whole from above. It is not a bigger agent; it is an org chart made of loops. Generation, tests, and scanning scale cheaply. The stubborn expensive box is the **review gate** — judgment.

**Dark** borrows the lights-out manufacturing image: code ships that no human has read, verified only by other machines. Easy at first — remove the step that blocks throughput and vertical speed feels broken open. Hard to survive: **comprehension debt** widens (how much code exists vs how much any human still understands) while tests stay green. Horthy’s reported failure mode after ~four months of fully automated, unread code is not a dramatic blow-up; it is quiet and late. Token utilization looks like progress while human understanding is the metric being minimized.

**Lit** is the same pipeline with lights left on where wrong calls are expensive. Judgment moves upstream — product, design, architecture — so review is often a short plan rather than two thousand lines of generated diff. Ordinary architecture (types, seams, short call stacks, clear boundaries, DI) becomes the hard-to-fake safety net outside the model. Some loops earn the dark: cheap, high-frequency, non-fakable oracles (types, property tests, rubric-coupled review agents) on short horizons. Dex’s rule of thumb — agents hold for roughly three to ten steps and wander past twenty — is another way to say long loops rarely earn lights-out status. Auth, billing, and public API contracts keep the lights on.

Back pressure is the binding rule: hand a loop only as much autonomy as you can **cheaply and reliably verify**. Speeding generation without widening verification just deepens the pile at the neck. Engineers own the **outer loop** — problem choice, soundness of diagnosis and implementation, approval, and the consequences of being wrong — while agents execute the inner loop. The boundary is evidence: diffs, tests, logs, and a brief explanation that connects them.

## Why it matters for code review

Always-on harnessed momentum beats peak-session heroics only when the factory stays lit where verification is weak. Dark throughput without a trustworthy gate manufactures unread defects at continuous rate; lit factories relocate human attention to the outer loop and earn dark only for short, oracle-backed slices. FOMO about agents not working overnight is the wrong fear if the review neck is already clogged — widen verification and place the light switches deliberately, don’t max token burn with the floor dark.
