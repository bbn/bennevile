---
title: "A second model re-reading the diff is not a second reviewer"
description: "Sep 21 Lundberg: correlated model blind spots ≠ two humans; trust from facts outside the diff (paths, history, tests moved, CI) — 58-PR queue ranked billing+migration risk over tidy size."
date: 2026-09-21
kind: field-note
source:
  title: "Where Trust in Automated Review Actually Comes From"
  url: https://jakelundberg.dev/blog/where-trust-in-automated-review-actually-comes-from
project: steward
---

[Jake Lundberg](https://jakelundberg.dev/blog/where-trust-in-automated-review-actually-comes-from) (Sep 21) pushes back on the tempting fix when teams stop trusting AI review: **add a second model to check the first**. Two humans who agree built instincts in different bugs and codebases; two models trained on roughly the same corpus share blind spots — agreement mostly confirms they went to the same school. Worse, most of what makes a change dangerous is not in the diff: whether the touched tests guard anything, whether the author has worked this area, whether the path has a break history, whether it lands in billing. An [MSR ’26](https://jakelundberg.dev/blog/where-trust-in-automated-review-actually-comes-from) study of 3,858 PRs found reviewers warmer to agent-written code than human code — plausible surface is what models produce by default, so judging by the surface got less safe.

What he’d add instead is **facts you can look up**: paths touched, migrations, lockfile churn, whether tests moved with the code, CI green, author familiarity, area history. On a June validation queue of 58 open PRs (Merge Lantern), the top-ranked change mixed live billing, a DB migration, a lockfile bump, and failing CI across 1,584 lines / 52 files; #2 was a tidy 265-line Stripe subscription schema change that looked skim-safe by size and wasn’t. Multi-agent review can help only when providers, evidence sources, and timing actually differ — and agreement stays one data point, not proof. Three lookups before trusting any review: what paths, what’s their history, did tests move.

## Why it matters for code review

Continuous factories flood the morning queue with plausible diffs; stacking correlated model opinions does not buy trustworthy merge rate under volume. Always-on throughput compounds when senior attention is allocated by evidence outside the patch — not by a second Claude re-reading the same text the first Claude wrote. Peak-session heroics still catch logic bugs in small green PRs; overnight harnesses need risk signals the worker cannot narrate away.
