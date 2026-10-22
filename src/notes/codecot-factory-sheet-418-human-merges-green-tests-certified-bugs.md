---
title: "440 factory PRs, 418 merged by a human click, and two bugs the green suite certified"
description: "Oct 6 Codecot factory sheet: a spec-driven agent loop with a rival-vendor reviewer opened 440 PRs over five months and ran a product for 19 days unattended. Its own defect list shows why a passing suite is not the same as a checked claim."
date: 2026-10-06
kind: field-note
source:
  title: "The Factory, On One Page"
  url: https://ai.codecot.com/factory-sheet.html
project: steward
---

Volodymyr Pasichnyk publishes the full ledger of a spec-driven agent factory: a human writes a spec and clicks merge, agents plan, implement and run the tests, and a reviewer model from a **different vendor** reads the diff and posts findings before fix rounds land. Between 22 April and 2 October 2026 it turned **794 specs** into **440 pull requests**, of which **420 merged**, **418 by a person clicking the button**. It ran **1,686 agent rounds** at roughly **$2.49** a round, and **80%** of 237 branches were green on their first CI run.

One worked pass shows the shape of steady throughput: spec merged at 12:43, PR open at 12:53, 13 review findings at 12:56, all answered by 13:06, a second review with 12 more findings and a "ready" verdict at 13:13, human merge at 16:41. Spec to PR took ten minutes; the person spent minutes of the four hours. Across the whole run, though, the **median from merged spec to merged implementation was 60 hours**: the human click, not the agents, sets the pace. Reviews were busy, with **3,037 findings in 705 reviews**, 410 fix rounds, and 35 rounds refused by a guard for claiming "already satisfied" without changing anything. The same loop published a daily product for **19 days with nobody pressing anything**.

The page is most useful for what it admits. Of 127 failed developer rounds, 51% were infrastructure (wrong commit, branch races, dirty checkouts) and none failed on an ambiguous spec. Two defects reached production *because tests certified them*: a zero-length digest window reported a quiet sky for 35 mornings, and a failed voice gate was treated as consent, so an eclipse that did not happen was published in four languages and found six days later by a viewer.

## Why it matters for code review

This is what an always-on factory looks like when someone counts honestly: modest per-round cost, high first-pass CI, a cross-vendor reviewer doing most of the reading, and a human merge that becomes the queue. It also shows where continuous verification breaks. A green suite looks the same whether it tests the behavior or its own mistake, the same failure as [the overnight PR whose eleven green tests never ran](/posts/holt-overnight-agent-pr-eleven-green-tests-never-ran/) and [37 agents passing a suite that missed two bugs](/posts/duin-37-agents-green-suite-missed-two-bugs/). The fix here is to make gates recompute figures from source and to treat a failed step as a stop, not as silence.
