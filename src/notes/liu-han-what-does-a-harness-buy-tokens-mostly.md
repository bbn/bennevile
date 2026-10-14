---
title: "What a coding harness buys: mostly a different bill, not a higher pass rate"
description: "Liu and Han (Shandong University, arXiv 2610.04433) hold five models fixed and swap the harness across Claude Code, mini-SWE-agent and OpenCode on SWE-bench Verified. Swapping harnesses flips 13% of hard tasks, the same as rerunning one harness. Cost per task moves up to 3x, set mostly by the preamble each harness resends on every step."
date: 2026-10-03
kind: paper
source:
  title: "What Does a Harness Buy? Tokens, Mostly (arXiv 2610.04433)"
  url: https://arxiv.org/abs/2610.04433
project: steward
---

[Yangze Liu and Zhongyi Han](https://arxiv.org/abs/2610.04433) ask a question most harness launches skip: when the model is held fixed, how much does the harness itself move the score? They ran five models through three production harnesses (Claude Code, mini-SWE-agent and OpenCode) on SWE-bench Verified, and reran identical configurations to measure how much a score moves when nothing changes but the run.

## Pass rate sits inside the noise

On 447 tasks, Claude Code and mini-SWE-agent, the heaviest and lightest harnesses in the study, land within five points of each other. On a 45-task hard subset across five models, swapping the harness flips 13% of task outcomes, and rerunning the same harness also flips 13%. The tasks a harness "wins" in one run are not the ones it wins in the next. The only harness effect that clears the noise is a loss: OpenCode trails by up to nine points on the large pool, and for one model half of that gap sits in runs its output cap cut short.

The rerun data also set a resolution floor. At the observed discordance, 45 tasks detect a 13-point gap only half the time, and 447 tasks resolve about five points, which the authors note is still coarser than the gains many harness changes claim.

## Where the harness does show up: cost

With the same model, the same tasks and one price list, cost per task varies by up to 3x across harnesses. The gap is set at the first call by the system prompt and tool schemas each harness resends with every step (a [PREreview of the paper](https://prereview.org/en-us/reviews/23183692) quotes about 16.6k preamble tokens for Claude Code against about 830 for mini-SWE-agent), then multiplied by the number of steps.

## How it fits

This productively complicates the case for steady harnessed throughput. If the harness mostly sets the token bill rather than per-task success, then its value in an always-on factory has to come from somewhere other than a one-shot benchmark score: what it costs to keep running all night, how it bounds and verifies work, and what it refuses to merge. It is also a warning about evidence. A harness gain reported from a single run is, at this sample size, indistinguishable from a reroll, so ask for the second run of the same configuration before believing the delta. Pair it with [personal agent use that swung with enthusiasm until a harness held it steady](/posts/moravik-harnext-enthusiasm-fades-harness-sticks/) and [a software factory small enough to understand, with gates that can refuse](/posts/launchdarkly-small-factory-gates-that-can-refuse/).
