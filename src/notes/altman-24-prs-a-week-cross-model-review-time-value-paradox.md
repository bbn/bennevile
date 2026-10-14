---
title: "Wedgworth: 24 merged PRs a week, a second model as the reviewer, and an hour of building that made everything else feel expensive"
description: "Oct 10 from Patrick Altman: agents write almost all the code, merges went from 8 to 24 PRs a week, and a cross-model review loop catches regressions tests and human review missed. The cost was the slow thinking that writing used to force."
date: 2026-10-10
kind: field-note
source:
  title: "We Stopped Writing Code by Hand"
  url: https://wedgworth.dev/we-stopped-writing-code-by-hand/
project: steward
---

**Patrick Altman** says that since January his team's agents have written almost all of the code, and somewhere in the spring the humans stopped needing to correct the pull requests. The receipt: the team now averages **24 merged PRs a week, against 8 last year**.

The humans stopped correcting the PRs, but review didn't stop. It moved to a second model:

- Claude Code prepares the PR and publishes an **artifact**, often with visualizations, for any feature or large bug fix. It does two jobs: it explains the change to the rest of the team, and it gives the reviewing agent context to judge the code against.
- A different vendor's model, run in a separate tool, does a deep review aimed at security, maintainability, real-world test coverage, and hidden bugs. Its findings are pasted back into the running Claude Code session, which confirms and fixes them, and then the reviewer looks again.
- On a large Apollo client upgrade, all tests passed and smoke testing looked fine. The second model flagged **three functional regressions** Altman's own manual review had missed.
- Some changes go through three or four rounds "until nothing else is found." The team now uses this loop for all but the smallest changes.

The part that's harder to measure is what he calls a time value paradox. Once an hour of building produced this much, every hour spent on something else started to feel too expensive: writing, research, brainstorming, meetings to talk things through. "The dopamine of shipping won." He is now taking the writing back, on purpose, because he misses the slow thinking it forced.

## Why it matters for code review

This is what steady, verified throughput looks like when it works: about three times the merged PRs, with the checking done by a second model reviewing in a loop, not by a human reading harder. The cost shows up in the person. When building is the cheapest hour of the day, the thinking that decides *what* to build and *whether it is right* starts to look like waste. That's the same pull as the guilt over idle agents described in [Sieg on idle sessions weakening review](/posts/sieg-agentic-coding-fomo-idle-sessions-weaker-review/) and [Piirainen's FOMAT/FOMUT](/posts/piirainen-fomat-fomut-overnight-capacity-planning-bottleneck/). On the review loop itself, compare [Song on when a second model actually complements the first](/posts/song-cross-model-review-second-model-complementarity/) and [why adversarial reviewers can still converge on false consensus](/posts/adversarial-review-false-consensus/).
