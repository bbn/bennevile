---
title: "GitClear: +25% output, +81% duplication — the maintainability tax"
description: "Sep 14 on Maintainability Gap (623M changes, 2023–2026): heavy AI users +25% vs own baseline; block duplication 40.3→73.0/MLOC; moved/refactor code 21%→3.8%."
date: 2026-09-14
kind: field-note
source:
  title: "Your AI coding spend bought 25% more output. Duplication rose 81%."
  url: https://thenewstack.io/ai-coding-duplication-rose/
project: steward
---

Steve Fenton's Sep 14 New Stack piece digests GitClear's Maintainability Gap report (623 million analyzed changes, 2023–2026) into the invoice continuous generation forgets to print. Heavy AI users gained **~25%** on their own prior velocity — real, and nowhere near 10× marketing. Those same teams already outpaced peers *before* AI; the tool amplified an existing distribution. Meanwhile block duplication rose **81%** (40.3 → 73.0 per million changed lines), and moved code — the refactoring signature — collapsed from **21%** of changed lines in 2022 to **3.8%** in 2026. Pre-AI, developers chose refactoring over copy-paste ~2:1; now they are ~5× likelier to paste.

The tortoise framing is economic, not aesthetic. Early in the cost curve you get away with it; later rework steals feature time and "minor" bugs become economically unviable to fix. Fenton's point for budget season: if you measure LOC, PR count, or feature tickets, you miss the maintenance bill that compounds under always-on generation. Teams that already treated test automation and refactoring as *the work* (not a side quest under delivery pressure) are the ones still converting AI spend into durable throughput.

## Why it matters for code review

Unverified overnight volume without a maintainability harness is the hare with a deferred tax. Review under sustained agent load has to catch duplication and missing refactors the same way it catches wrong behavior — or the factory's merge rate looks healthy while the codebase quietly becomes unreviewable. Pair continuous generation with continuous maintainability gates (dup/hotspot signals, small batches, refactor budget) or Cherny's verification stack will be grading an ever-worse substrate.
