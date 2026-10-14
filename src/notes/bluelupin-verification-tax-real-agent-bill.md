---
title: "The verification tax is the real agent bill — prove once, stop green-on-green"
description: "Sep 15 BlueLupin census: code was ~8% of model output; review/verify ~40%; 15/39 Playwright runs were already-green reruns — cut avoidable proof without deleting the toll booth."
date: 2026-09-15
kind: field-note
source:
  title: "The verification tax is the real agent bill"
  url: https://blog.bluelupin.com/2026/09/15/verification-tax-real-agent-bill/
project: steward
---

Manish Gupta’s Sep 15 BlueLupin field report measures what Anthropic’s CI strain implies on a single programme: **generation got cheap; the stamp did not**. On one busy session, browser acceptance alone burned ~two hours across **39** Playwright runs; **15** of those (~38% of runs, ~45% of browser wall time) re-tested scenarios that were already green because merging `main` voided every branch record. Sign-in ate ~**42%** of each run. Review and verify stages consumed ~**40%** of workflow model output; writing code was ~**8%**. Hundreds of main-thread commands were just polling a gate and re-reading a fat context.

That stack is the **verification tax**: CI/acceptance that re-runs untouched work, human/agent review that re-reads the same world five times, and session economics that look like “AI cost” but are waiting cost. Gupta cites Malhotra’s Anthropic 25× CI post as industry context, then ranks levers by measured saving before buying boxes. Lane A (wall time): void a browser record only when *this branch* changed a user-facing file (intersection of `diff(testedSHA, HEAD)` with the branch’s own merge-base diff — stop green-on-green); fail-fast missing acceptance before the long static gate; sign in once per persona per run; parallel reads with exclusive writes and `waited=` instrumentation; move saturating CI off the laptop only after the census shows load kills, not before. Lane B (tokens): one shared change-manifest brief for every review lens; drop lenses the gate already ratchets; tier models (top-tier for build/security/correctness; mid/fast for assembly and verify); per-stage effort instead of inherited maximum; **one monitor, one verdict line** — zero main-thread polling.

What they refuse to cut is the point: security and correctness stay on a serious model; browser acceptance stays with a register that tells the truth; a final human on the merge (the person who opened the agent session does not approve their own PR). The tax they cut is **repeating proof**; the tax they keep is **first proof that matters**.

## Why it matters for code review

Continuous factories under sustained PR volume win or lose on whether verification is a product — impact-aware, instrumented, hostile to avoidable reruns — or an infinite fixed cost of every generated line. Overnight candidates only shrink morning review debt when the stamp process stops paying the toll twice for the same road.
