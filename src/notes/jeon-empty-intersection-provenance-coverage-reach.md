---
title: "Empty intersection: 98% provenance coverage, and neither verification decision moved"
description: "Sep 28 Jeon companion: grade filter → undetermined; vocabulary 36%→98.4%; ingress refuses 3,070 writes — none of the three give the 32 decision rows admissible input; coverage ≠ reach."
date: 2026-09-28
kind: paper
source:
  title: "Empty Intersection: Provenance Coverage Rose to 98% and Neither Verification Decision Moved"
  url: https://arxiv.org/abs/2609.30308
project: steward
---

Dong Hyeon Jeon’s Sep 28 companion to the silent-success receipt book measures the two structural prescriptions that paper left behind — **a provenance grade on every row**, and **a single write ingress that enforces it** — against a frozen **194,620**-row snapshot of the same deployment and the two verification decisions that snapshot supports. The defect is present: one decision rests on **24/24** system-written values; its relational twin reads **0 of 45** rows the writer just produced and still reports success.

Three interventions, none new as prescriptions, all measured for *reach*. Filtering verification queries to observation-graded rows turns both decisions from pass to **undetermined** — by emptying the admissible set (0 observation rows in the population), not by improving input. Widening the grade vocabulary lifts classified coverage from **36.1% to 98.4%**. A single ingress requiring a grade refuses **3,070** writes. **Neither of the last two moves either decision.** The **32** rows the decisions actually read contain none of the newly named draw rows and none of the refused unattributables — an empty intersection drawn over the population. The two decisions are blocked differently: one needs an admissible grade in-window; the other also cannot reach its target rows behind **69,781** later-stamped ranks. Caveats owned hard: one deployment, two decisions; the author measuring their own prescriptions; a null about reach is not a null about value to other queries.

## Why it matters for code review

Continuous factories love dashboard greens that climb — classified coverage, gated write share, “provenance everywhere.” Jeon’s measurement is the reviewer’s counter: ask which rows the *merge decision* reads, and whether last night’s harness repair intersected that window. Steady harnessed throughput compounds only when interventions change the state a gate consults; population theater at 98% is still FOMO for idle agents if the decision’s 32 rows never moved.
