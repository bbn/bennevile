---
title: "PRAssistant’s 10–20% is a floor on queue speed, not a quality claim"
description: "Sep 10 field note: Microsoft’s attributed PRAssistant result (5k repos, 90%+ coverage, 600K+ PRs/month, 10–20% median PR completion time) measures when review starts — not whether what merged got better."
date: 2026-09-10
kind: field-note
source:
  title: "Microsoft's PRAssistant number is real, and it's a floor, not a promise"
  url: https://dev.to/cole_halton_42f71d71b809b/microsofts-prassistant-number-is-real-and-its-a-floor-not-a-promise-24pj
project: steward
---

Cole Halton slows down the rare first-party throughput number in AI code review. Microsoft’s internal PRAssistant — later shipped externally as GitHub Copilot code review — ran across 5,000 repos, covered 90%+ of PRs and 600K+ pull requests a month, and reported a 10–20% median improvement in PR completion time. The useful part of the sentence is *median PR completion time*. That is a queue metric: reviewers pick up work, read it, and merge it. Automation that screens the obvious and unblocks trivial merges moves a strict majority of the queue faster. That is exactly what a median improvement shows.

It is not a measure that the code got better. A reviewer who trusts the bot and merges faster, on a change nobody actually reasoned about, still posts a faster merge. The number cannot tell the difference. Halton’s other keep: 90%+ coverage at that volume means they ran the bot where it could keep up. Availability at Microsoft’s scale is a floor for what a smaller team should expect, not a ceiling to quote as proof the tool catches more bugs.

## Why it matters for code review

Separate review *throughput* from review *signal*. Track median time-to-merge if you adopt a bot — and also how many merged PRs come back with a regression or follow-up fix weeks later. One number is speed; the other is whether the speed was real. Selling only the first is how factories confuse green queues with production-qualified change.
