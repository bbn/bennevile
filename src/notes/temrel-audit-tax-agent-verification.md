---
title: "The Audit Tax: generation is cheap; verification is the bill"
description: "Jun 30 Temrel: agent PRs arrive in ~90s, then burn ~90 minutes of trust-building — LinearB’s 4.6× review lag, graded verification (deterministic → review subagent → human), and evals that make the tax intentional."
date: 2026-06-30
kind: field-note
source:
  title: "The Audit Tax: Why Your Agent Made You Slower"
  url: https://dev.to/temrel/the-audit-tax-why-your-agent-made-you-slower-45bj
project: steward
---

Ben Stanley’s Jun 30 Temrel note (syndicated on DEV) names the bill that shows up after the demo: an agent drafts a PR in about **90 seconds**, then a human spends on the order of **90 minutes** deciding whether to trust it. Velocity was borrowed from generation and re-invoiced at review — the **Audit Tax**. LinearB’s 2026 Software Engineering Benchmarks Report is the receipt he cites: AI PRs take **4.6× longer** to get reviewed. Generation stopped being the scarce step; deciding whether the change is safe became it.

Why agent review is harder than peer review is the operational half. Clean formatting and confident prose no longer signal quality — agents look polished whether they are right or wrong. Small-diff norms collapse under volume: enforce tiny PRs and the 4.6× lag becomes a stretch goal as the queue explodes. Individual reliability heuristics die too — there is no “John always ships clean” when the author is a session. Stanley’s answer is not to read faster; it is to **stop paying the tax by hand**. Stack graded verification the way Anthropic frames graders: cheap deterministic gates first (typecheck, tests, lint, build), then a review subagent that checks the diff against stated intent, then human eyes only on what survives. Capture ~20 real agent misses into evals so the same failure class stops being a vibes exercise. Measure the tax as time-to-generate versus time-to-merge, add one mandatory CI gate the agent cannot skip, and re-measure.

## Why it matters for code review

Continuous factories only compound when verification scales with generation. Overnight and always-on agents that mint unverified diffs just relocate the Audit Tax onto whoever opens the morning queue. Stanley’s stack is the practical antidote to FOMO about idle compute: keep the agents running, but make the tax intentional — deterministic gates, intent-checking reviewers, and humans at the merge boundary — so sustained throughput does not silently become sustained review debt.
