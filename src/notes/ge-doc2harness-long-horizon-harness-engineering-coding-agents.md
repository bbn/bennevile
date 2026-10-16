---
title: "Doc2Harness: even the best model fails nearly half of long-horizon harness engineering"
description: "Oct 14 preprint: a two-stage benchmark where models build a coding-agent harness from an interface contract and a consolidated development doc. GPT-6 Astra tops out at 53% pass rate; the weakest frontier model hits 27%."
date: 2026-10-14
kind: paper
source:
  title: "Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents"
  url: https://arxiv.org/abs/2610.20344
project: steward
---

**Yuyao Ge, Shenghua Liu, Peizhong Gao, Chendi Ge, Chenxu Liu, Yiwei Wang, Lingrui Mei, Baolong Bi, Jiayu Yao, Jiafeng Guo and Xueqi Cheng** reverse the usual agent evaluation. Downstream success under a *fixed* harness is already crowded with benchmarks. What almost nobody measures is the long-horizon job of *building* the harness itself — the loop, tools, budgets, and glue that decide whether a coding agent can run for hours without wedging.

**Doc2Harness** is a two-stage, deterministic benchmark for that job. In Stage 1, a build model inside a fixed builder harness receives an interface-only contract skeleton plus a development document that consolidates behavior across twelve frontier harnesses, and constructs a complete candidate harness in an isolated container. In Stage 2, that frozen candidate runs in fresh containers, driven end to end by a scripted mock model — so the score measures the harness, not a lucky chat. Each test case is graded on four observable channels: requests sent to the model, files on disk, process exit code, and command output, with positive controls against vacuous passes.

Across **nineteen** frontier models, three independent builds each, and **328** test cases, the best result is **GPT-6 Astra at 53.05%** pass rate. The weakest reaches **27.44%** — a gap of roughly twenty-six points — and even the strongest model fails nearly half the suite. Failures cluster around how cross-cutting functionality is split across modules: the hard part is not a single clever prompt, it is keeping a coherent system under a long construction horizon.

## Why it matters for code review

If overnight and always-on factories win by compounding modest verified momentum, the scarce skill is harness engineering, not one more peak coding session. Doc2Harness makes that claim measurable: the same models that look strong *inside* a carefully tended loop still struggle to *build* a loop that holds. Read it beside [Liu and Han on what a harness mostly buys (tokens)](/posts/liu-han-what-does-a-harness-buy-tokens-mostly/) and [Warp’s self-improving factory notes](/posts/holmes-warp-road-to-self-improving-software-proactive-agents/) — the continuous asset is the harness you can rebuild, score, and repair, not the model you summoned for an afternoon.
