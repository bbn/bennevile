---
title: "SemaPLC: agent cannot say done until the runtime agrees"
description: "Aug 19 arXiv 2608.18565: verification-gated PLC harness — spec check, real toolchain compile, live execution. Project-context tasks: 89.4% compile vs 52.2 dynamic behaviour — the gap is the argument."
date: 2026-08-19
kind: paper
source:
  title: "SemaPLC: A Project-Grounded, Verification-Gated Agent Harness for PLC Code Generation"
  url: https://arxiv.org/abs/2608.18565
project: steward
---

[SemaPLC](https://arxiv.org/abs/2608.18565) (midea-ai; Aug 19, 2026; open [midea-ai/SemaPLC](https://github.com/midea-ai/SemaPLC)) is a project-grounded agent harness for industrial controller code with one structural refusal: the model may write freely, but **it cannot mark the task complete**. Completion waits on three external checks the agent cannot influence — does the code satisfy the stated specification, does it compile in the **real vendor toolchain**, and does it behave correctly when **actually executed**. The model’s self-assessment is not an input.

The number that carries the paper is a gap on the same project-context tasks: **integrated compilation 89.4%** versus **dynamic behaviour 52.2** (65 project-context tasks; 72.6% mean strict verified pass across 117 independent program-unit tasks). Compile success is legal syntax and types; it says almost nothing about whether the valve opens on time. That spread is the reusable argument for any coding factory that treats “it builds” or “the model is confident” as cheap proxies. Caveats stay honest: ~quarter fail rate is research, not a safety-critical deployment story, and a verification gate is only as good as the specification — wrong requirements pass every conformance check cleanly.

## Why it matters for code review

Continuous verified throughput compounds past peak-session heroics only when the judge is the runtime (or an equivalent held-out oracle), not the narrator. SemaPLC’s review lesson travels: demand evidence the implementer cannot author, measure the compile-vs-behaviour gap on your own stack, and treat “green build” as necessary-but-not-sufficient before the morning merge queue.
