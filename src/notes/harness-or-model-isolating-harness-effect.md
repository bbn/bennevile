---
title: "Harness or model? Same-model contrasts don’t crown a winner"
description: "Sep 8 Arjmandi: paired same-model harness contrasts on a private 256-task suite — averages near zero (−1.25 / +1.25 pp); Opus strata reverse by task type; 22/81 wall-clock cancels already had a passing patch."
date: 2026-09-08
kind: paper
source:
  title: "Harness or Model? Isolating the Harness Effect in Agentic Coding with a Contamination-Controlled Private Suite"
  url: https://arxiv.org/abs/2609.11987
project: steward
---

Practitioners often treat the vendor-native pairing (Claude inside Claude’s harness, Codex inside OpenAI’s) as the obvious max. Mohsen Arjmandi’s Sep 8 paper measures that assumption with paired *same-model* contrasts on a private, contamination-controlled suite of 256 repository and post-cutoff contest tasks. Same 80 tasks under `claude-agent-sdk` vs DeepAgents on Opus 4.8, and under the OpenAI Codex SDK vs DeepAgents on GPT-5.5; Gemini 3.5 Flash and DeepSeek-V3.2 as side cells. An isolated oracle graded 792 of 800 planned runs.

Average harness advantage is noise: −1.25 pp for Opus (48.8% vs 50.0%, bootstrap CI [−10.0, +7.5]) and +1.25 pp for GPT-5.5 (55.6% vs 54.4%, CI [−4.4, +6.9]). The Opus average hides opposite strata: native harness trails by 9.0 pp on 61 repository tasks and leads by 23.7 pp on 19 contest tasks (label-permutation *p* = 0.003) — partition chosen after seeing the data, so it needs a designed replication. Correctness and completion also separate: 22 of 81 runs cancelled at the wall-clock ceiling had already produced a passing patch. Cost: the neutral harness looked 1.3–1.6× (Opus) / 1.2× (GPT-5.5) per solved task on observed usage, but 58 Anthropic runs left no usage record — allocate that spend either way and the Opus ratio swings between 0.7 and 2.3. They release orchestrator, grading oracle, and aggregates; tasks stay private. This revision also fixes an August manuscript whose cost figures rested on a telemetry semantics bug.

## Why it matters for code review

This productively complicates the tortoise thesis. A good harness still matters — but *which* harness is not a blanket “always prefer vendor-native” or “always prefer the continuous factory wrapper.” Task shape can reverse the ranking, and a wall-clock-killed overnight run may already have a mergeable patch the harness failed to notice. Steady verified momentum beats peak-session heroics only if you measure harness effect by stratum and treat completion ≠ correctness. FOMO for “the right” always-on stack without those contrasts is just another form of bursty superstition.
