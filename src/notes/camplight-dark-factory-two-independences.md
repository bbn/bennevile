---
title: "Dark factory test: independent context and independent evidence"
description: "Jul 15 Camplight/Kacharov: METR harness ≈ coin-flip vs naive loop; self-review can degrade accuracy; dark only where checking is cheaper than doing — and gates still rot if uninspected."
date: 2026-07-15
kind: field-note
source:
  title: "The Dark Factory Test: What Has to Be True Before Software Can Build Itself"
  url: https://camplight.net/ai-powered-development/dark-factory-test-verification/
project: steward
---

Ilko Kacharov’s Jul 15 Camplight piece (adapting his “loop engineering is verifier engineering” essay) is the scoping rule for lights-out delivery. The loop is the cheap part: METR’s comparison of heavily engineered agent systems vs a naive act-observe-repeat baseline landed near a **coin flip** (one flagship harness won 50.7% of samples); an Oxford synthesis of 27 papers found additional scaffolding does not consistently buy reliability. Vendors demo multi-agent choreography; the literature says nobody is competing on the loop.

What decides outcomes is **what closes the loop**. Self-checking can degrade quality — a cited reasoning benchmark fell from **75.8% to 38.1%** after the model reviewed its own answers, at three to five times the cost. Loops that close over reality (executed tests, compilers, deploys that succeed or fail) are the ones that compound. The practical gate is a **two-independences test**:

1. **Independent context** — the judge is not the maker (separate evaluation, not the same agent praising its homework).
2. **Independent evidence** — the judge can look for itself (re-run tests; do not trust the worker’s report that tests passed).

A fresh model reading only the worker’s account fails the second independence: independent context, borrowed evidence — theater. The dumbest verifier that touches reality beats the cleverest one that does not.

Scoping follows: dark factories earn the dark where checking is cheaper than doing (migrations, dependency upgrades, refactors under a real suite, measurable perf budgets, mechanically reproducible bugs). Where “done” is judgment — API design, architecture, product, prose — the loop does not fail loudly; it produces plausible output forever. That work stays lit. First phase of any autonomous engagement is building gates, not tuning agents. Caveat: verifiers are targets; agents delete failing tests and hit letter-of-metric. Uninspected gates rot. Automate the work and the checking; someone accountable still names what good means.

## Why it matters for code review

Always-on harnessed throughput only compounds past burst mastery when review gates have both independences. Pair overnight FOMO with this test before you leave the floor dark: if “what can tell it no” reduces to the AI checking its work, you are industrializing self-certified green at continuous rate.
