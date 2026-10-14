---
title: "Real-SWE: best agent still fails >60% on private codebases"
description: "Sep 14 Specific Labs bench: Fable 5.1/Claude Code tops at 38.8% on proprietary multi-file tasks; six tasks <15% success; missed requirements and integration errors dominate."
date: 2026-09-14
kind: paper
source:
  title: "AI's best coding agent fails 60% of the time — and the data backs it up"
  url: https://thenewstack.io/real-swe-coding-benchmark/
project: steward
---

Amanda Caswell's Sep 14 write-up of Specific Labs' Real-SWE is a cold shower for peak-session heroics. The bench drops agents into *private* production codebases (consumer product >200k users; fintech that processed >100k bank statements) with problems that look like everyday eng work — not scraped public GitHub issues. Median solution touches **11 files** (nearly double FrontierCode/DeepSWE's six). Top score: **Claude Fable 5.1 via Claude Code at 38.8%**. GPT-6 Astra on Codex CLI 33.8%; Gemini 3.8 Flash on Gemini CLI 31.2%. Eight tries per task; scores are full setup (model + harness), not bare models.

The failure surface is factory-shaped, not leaderboard-shaped. Six of ten tasks sat under 15% success (billing migration 14.1%, API token metering 12.5%, S3 storage tracking 10.9%, linearizable scan 4.7%, tax jurisdiction 3.1%). Analytics stream reducer: **0/64** across every model. Same agents that went 8/8 on a multi-region sweep failed every attempt on the linearizable scan — no consistent reliability across the set. Dominant failure modes: Fable missed requirements (36.7%) or hit integration errors (34.7%); Astra split integration vs unverified assumptions (~34% each); Gemini integration-heavy; GPT-5.6 Sol unverified assumptions in 43.3% of failures.

Caveats land honestly: 10 tasks is a small sample; Real-SWE does not *prove* public benches are contaminated. The usable signal is the private-code floor: the winning agent still failed more than six times out of ten on unfamiliar proprietary territory where ~99% of enterprise tokens never entered frontier training.

## Why it matters for code review

A good afternoon with Claude Code is the hare. Real-SWE says unfamiliar brownfield under volume still needs an independent verification path — requirement checks, integration evidence, assumptions made explicit — because the model's "done" claim is not a merge gate. Tortoise factories that keep modest verified momentum win precisely because they budget for the 60%+ miss rate on private code instead of extrapolating SWE-bench demos into overnight autonomy.
