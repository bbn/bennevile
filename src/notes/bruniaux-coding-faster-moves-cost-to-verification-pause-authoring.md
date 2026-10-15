---
title: "Bruniaux: measure where a change waits before you add another authoring agent"
description: "Florian Bruniaux argues that faster generation only shows up as a verification queue unless review and CI can absorb it. His stop rule: pause new authoring when the shared verification queue exceeds its agreed capacity, because a budget on each agent run does not bound the total queue."
date: 2026-10-14
kind: field-note
source:
  title: "Coding faster moves the cost to verification"
  url: https://www.florian.bruniaux.com/blog/articles/bottleneck-was-never-code/
project: steward
---

**Florian Bruniaux**, an AI founding engineer at Méthode Aristote, opens a long October 14 essay with a narrow recommendation: measure where a change waits and comes back for correction before adding another authoring agent. Faster generation is a local speedup. If generated code reaches specification, review, CI, and release faster than they can process it, the saved time "reappears as a queue."

He is careful about what is evidence and what is not, tagging each claim as documented, scoped evidence, author's statement, constructed example, or not measured. The scoped evidence includes a **DORA** analysis of **1,110** open-ended responses from Google engineers, who often described time saved in creation being spent again on verification and prompting, and a longitudinal study of one enterprise AI mandate in which merged-PR throughput per developer reached **2.09 times** its earlier level across **802 developers and 196,212 PRs** while load per reviewer roughly doubled. His own queue scenario is labeled a constructed example with no observed result.

The operational rule comes from Toyota. **Just-in-time** means making only what the next stage can take, and **jidoka** means stopping the line on an abnormality and changing the process. Applied to agents: "pause new authoring when the shared verification queue exceeds its agreed capacity, keep existing reviews and corrections moving, and resume under a stated condition." He adds a sharp point: **"A budget on each agent run does not bound the total queue."** His proposed dashboard splits review wait from review cycles and CI queue time from execution time, and reports medians alongside a tail percentile.

## Why it matters for code review

This is the strongest recent case that keeping agents busy around the clock is not the goal in itself. The goal is steady output that verification can actually clear. An overnight loop with no stop rule pushes the bottleneck into the morning review queue. The fix he proposes is a shared intake limit plus turning recurring review findings into tested controls, not more reviewers or another review layer. Read beside [He on the enterprise mandate that doubled per-reviewer load](/posts/he-enterprise-2x-mandate-review-shifted-to-automation/) and [Augment on following the queue as output rose](/posts/augment-factory-follow-the-queue-merge-time-fell-as-output-rose/).
