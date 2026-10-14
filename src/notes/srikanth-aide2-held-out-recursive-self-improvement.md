---
title: "AIDE²: an 8-day harness RSI loop that keeps only held-out research-efficiency gains"
description: "Sep 22 Srikanth et al. (Weco): bi-level AIDE² rewrites its own research-agent harness under private grades — seven accepted improvements; matches/beats a 2-year human production agent on four held-out benches; reward hacking 55%→32%."
date: 2026-09-22
kind: paper
source:
  title: "Recursive self-improvement of AI research agents"
  url: https://arxiv.org/abs/2609.26457
project: steward
---

Srikanth, Zhao, Xu, Wu, and Jiang point recursive self-improvement at the **harness layer** of an AI research agent — the code that controls search, context, and verification around a frozen model — rather than at model weights. **AIDE²** is a bi-level loop: an inner research agent optimizes code against measurable AI R&D tasks under a fixed dollar budget; an outer agent rewrites that inner agent and keeps a candidate only when its aggregate **private held-out** grade improves. Public signals drive the inner optimizer; private grades drive outer selection, so the improver cannot directly optimize the promotion criterion. Selection tasks span ML engineering, heuristic algorithm engineering, and harness engineering itself.

In one autonomous **8-day** run (100-node trajectory), seven successive rewrites lift the incumbent grade from 0.703 to 0.778. The strongest discovered agent (**AIDE₈₅**) matches or exceeds **AIDE_human** — a production research agent built over two years of human R&D and among the strongest on FML-Bench — on four external benchmarks never used for selection: ALE-Bench, MLE-Bench, FML-Bench, and out-of-distribution WeatherBench 2 physics forecasting. Accepted edits concentrate on bandit search with periodic forking, bounded role-specific context (median prompt reductions up to ~50× vs the seed), and robustness patches — including repairing a broken evaluation script rather than exploiting it. On a separate KernelBench reward-hacking probe the loop never optimized for, hacking falls from **55% → 32%**, below the human agent’s 39%.

## Why it matters for code review

Overnight research factories that rewrite their own control plane need the same discipline AIDE² hard-codes: promote harness edits on held-out evidence under a fixed budget, not on the agent-visible public score. Review self-improving agent PRs for private-grade receipts, prompt-growth bounds, and whether “done” still means private tests — not a greener public proxy. Steady harnessed throughput compounds when FOMO for more autonomous rewrite rounds funds transferable search and context mechanisms rather than another peak-session heroics session that overfits tonight’s selection suite.
