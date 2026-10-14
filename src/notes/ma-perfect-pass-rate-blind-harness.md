---
title: "A 100% pass rate is often a blind harness"
description: "Sep 20 Ma: ceiling effects hide regressions once easy golden cases saturate; stratify easy/medium/stretch, detect when stretch is too green, and treat a yardstick that can still fail as the asset."
date: 2026-09-20
kind: field-note
source:
  title: "A Perfect Pass Rate Is a Blind Harness"
  url: https://dev.to/byteio_3726/a-perfect-pass-rate-is-a-blind-harness-4ki
project: steward
---

Dakota Ma’s Sep 20 note is the productive complication for teams celebrating green overnight evals: a **100% pass rate is often a measurement failure**, not a quality win. Once every golden case sits in the easy band, the harness stops ranking prompts and only rubber-stamps them — the same way a bathroom scale that tops out at two hundred pounds hides further weight gain. A regression on a rare tool path can hide inside a still-green total because the easy majority outweighs it. Quality scores need a denominator that still contains failure, or they stop being scores at all.

The worked response is stratification, not another average. Tag fixtures **easy / medium / stretch** and treat those strata as separate instruments: easy guards catastrophic breakage (empty replies, truncated JSON, ignored system instructions); medium encodes the product contract; stretch cases are *supposed* to be slightly too hard — a high pass rate there means the yardstick slipped. A ceiling detector should exit nonzero when stretch is too green, not hand out a trophy. Offline JSONL grading keeps the method reproducible; live fills stay optional so network weather never masquerades as a prompt regression. Hard limits stay honest: string constraints are not safety certification, and an LLM judge replacing the code grader recreates saturation one layer up.

## Why it matters for code review

Continuous verification under agent volume only compounds if the gate can still fail. Ma’s FOMO antidote for “our overnight harness is always green” is to mint harder stretch cases and refuse to average catastrophe into a crowd of free points — review the stratum rates and ceiling alerts, not a single screenshot-ready ratio.
