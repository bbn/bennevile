---
title: "SWE-bench Verified: human-filtered tasks for cleaner agent eval"
description: OpenAI × Princeton subset of 500 solvable SWE-bench tasks—still the common public yardstick, with known contamination caveats later.
kind: field-note
date: 2024-08-13
source:
  title: Introducing SWE-bench Verified
  url: https://openai.com/index/introducing-swe-bench-verified/
project: steward
---
SWE-bench Verified is the human-filtered 500-task subset meant to remove underspecified or unsolvable items from the original bench. It became the default public number vendors quote for agentic coding.

Later OpenAI analyses argue frontier scores on Verified are increasingly contaminated—but the post still matters historically: it is why “Verified” entered every review of coding agents, and why process-aware critiques (AgentLens, signal-vs-noise audits) had something concrete to attack.

## Why it matters for code review

Know what your vendor’s SWE-bench number means. Verified improved task quality over raw SWE-bench; it did not measure review quality, and it may no longer discriminate frontier generators. Keep it labeled as a generation/repair eval, not a review eval.
