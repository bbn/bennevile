---
title: "Bounded Loops: done is a gate verdict, never the worker’s claim"
description: "Aug 20 Bhardwaj et al.: worker + independent gate + declared budget; prove termination under repair and ledger-supported done; instrument finds 47 vacuous gates in shipped loops."
date: 2026-08-20
kind: paper
source:
  title: "Bounded Loops: Pre-Run Spend Bounds, Proved Termination, and Verified Completion for Agent Harnesses"
  url: https://arxiv.org/abs/2609.27871
project: steward
---

Varun Pratap Bhardwaj, Garima Singh, and Arun Pratap Bhardwaj attack the completion lie most agent frameworks still ship: a step ends when the **worker’s own output** says finished. Durable-execution platforms bound retries and wall time, but the checker usually lives in the same codebase as the work—a deployment discipline, not a harness property. They define a **bounded loop** as the triple *(worker, independent gate, declared budget)* and compose loops into DAGs with **repair** edges that re-admit upstream nodes after a downstream halt. Three guarantees are readable from the manifest before a run is authorised: the graph **finishes** (termination under a global repair budget, worst-case attempts closed-form), it **does not drift** (no node reaches done without a gate verdict in an append-only hash-chained ledger; the worker’s claim appears in no control-flow guard), and it **does not overspend** (ceilings enforced inside an attempt, with a reserve that leaves a written handoff on hard stop).

A proof about gates is only as good as the gates. Their two-tier held-out mutant instrument characterises **vacuity** (a check satisfied by the absence of the thing it checks—certifying a worker that deletes the artifact) and **self-attestation** (the subject supplies the value the check is applied to). On a 69-loop catalogue the instrument found **47 vacuous gates** in code that had shipped and passed review. Against repaired gates they report no false accepts over 209 destroying mutants (α ≤ 1.8%, Wilson 95%)—then show that figure is **saturation, not quality**: freezing the gates and applying a fresh operator family recovers a **23.3%** false-accept rate. Engine, catalogue, corpus, and scripts ship Apache-2.0.

## Why it matters for code review

Always-on factories that treat “agent said done” or a same-repo validation step as lifecycle truth are measuring self-report, not evidence. Review overnight lanes for Bounded Loops contracts: gates the worker cannot write, budgets and worst-case attempts readable before kickoff, and third-party replay of the run directory that proves ledger-supported done. Continuous verified momentum compounds when completion is a gate verdict under a spend bound; bursty Claude Code mastery that exits on its own claim does not. Pair with [Proof-or-Stop’s evidence-gated lifecycle](/posts/proof-or-stop-evidence-gated-lifecycle/) and [Yang’s sealed acceptance from scratch](/posts/yang-zero2repo-sealed-acceptance-from-scratch/) when FOMO pushes teams to leave agents running without an independent done signal.
