---
title: "SoL-Pi: around-the-clock agents need a cheaper harness, not a longer burst"
description: "Sep 17 NVLabs SoL-Pi: auto-research at the harness layer cuts token traffic ~45–49% and API cost ~⅓ vs native Codex/Claude Code while matching Pi on EdgeBench — four surviving mechanisms for unattended runs."
date: 2026-09-17
kind: paper
source:
  title: "SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness"
  url: https://arxiv.org/abs/2609.20519
project: steward
---

Liu, Ye, Gao, Cao, Li, Zhuge, Wang, Zhang, Luo, Bian, Zhu, Zhu, Xie, and Han start from the factory premise: coding agents are moving from supervised completion to **unattended, around-the-clock exploration**, so token efficiency is no longer a demoware footnote. Their bet is recursive self-improvement *at the harness layer* — scale auto-research loops across many environments until reusable harness improvements transfer past the training setting. Four mechanisms survive selection and ship as **SoL-Pi**: action execution, context compaction, observation handling, and delegated reading ([code](https://github.com/NVlabs/SoL-Pi), [project page](https://nvlabs.github.io/SoL-Pi/)).

On a 51-task EdgeBench eval, SoL-Pi matches Pi performance across GPT-5.6 Sol and Opus 5 while cutting recorded token traffic by **44.7–49.0%** and API cost by about **one third**. Translated into operator language: roughly **$8.75–$13.50 per hour** saved versus native Codex and Claude Code harnesses, and **$4.36–$5.71** versus Pi. That is the continuous-factory form of the overnight cost lesson already visible in field receipts like [158M overnight tokens](/posts/openai-community-overnight-158m-tokens-harness-tax/) — delivery can work while the harness bill still fails.

The paper’s useful frame is not “discover a smarter prompt.” It is that always-on exploration only scales if the wrapper learns to spend less on the same verified work: compact context, handle observations without re-reading the world, delegate reading, and keep action execution from turning every hour into another full-context burn.

## Why it matters for code review

Steady harnessed momentum beats bursty Claude Code mastery only if the overnight loop remains economically runnable. A factory that matches peak-session quality at half the token traffic can keep verification gates hot 24/7; a factory that burns a hero session’s budget every idle hour will turn FOMO into a CI bill. Review the harness’s cost-per-verified-hour the way you review merge rate — if unattended exploration cannot get cheaper without losing the gate, continuous throughput is just a more expensive morning queue.
