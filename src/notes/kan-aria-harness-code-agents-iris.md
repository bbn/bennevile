---
title: "Aria: 4,257 Iris lemmas proved by harness + code agent, zero expert intervention"
description: "Jul 7 Kan/Kan/Ertel: Claude Code + declarative HHL harness (kernel verify, no-Admitted, timeout, coverage) — full Iris core, 217 RustBelt, 318 reglang, 72 iris-lean; ~380 model-hours unattended."
date: 2026-07-07
kind: paper
source:
  title: "Harnessing Code Agents for Automatic Software Verification"
  url: https://arxiv.org/abs/2607.06341
project: steward
---

[Shuangxiang Kan, Shuanglong Kan, Sebastian Ertel](https://arxiv.org/abs/2607.06341) (SMU / Barkhausen Institut, Jul 7) flip the usual automated-proving recipe. Prior LLM provers hard-wire tactic search or divide-and-conquer and still clear only a fraction of easy sequential benchmarks. Aria hands a **whole lemma** to a general code agent (Claude Code on Opus 4.7, via `claude -p`) and wraps it in a **verification harness** — Coq/Lean kernel acceptance, divergent-tactic timeout, ban on `Admitted`/dropped lemmas, Iris lint, shell safety — expressed once in a declarative **Harness Hook Language (HHL)** rather than ad-hoc glue. No premise selector, no fixed proof strategy: the agent chooses; the harness is the only trust anchor. A candidate is proved only when the kernel closes it; rejections return failing step, error, and pending goal into a same-session retry loop (cap 30).

Receipts are full-coverage, not sample wins. On Iris’s four core modules Aria proves **all 4,257** lemmas across 113 files with **zero failures** and no Coq expert in the loop (~**380** model-hours / ~16 days of campaign); **79.2%** first-attempt, mean **0.51** retries. Same harness on RustBelt concurrency/interior-mutability libraries: **217/217**. On reglang — the CoqStoq project where prior LLM provers clear ~1 in 8 — **318/318**. On iris-lean (Lean kernel, lemmas with **no prior Lean proof**): **72/72**. Completeness is enforced as policy: the agent may rewrite freely, so the harness also checks the target lemma is still present, unweakened, and actually proved — type-check alone is not enough when an agent can silently drop obligations. Open-weight models can clear short lemmas; long proofs still favor the frontier backend under the same harness.

## Why it matters for code review

This is the continuous-factory shape applied to the hardest proofs: modest verified momentum over days beats a heroic interactive session, because every attempt pays a deterministic verification tax before the next unit starts. Review Aria the way you review an overnight merge queue — HHL hooks and kernel receipts are the merge criteria; the agent is the worker behind them. FOMO when nothing ran overnight is the wrong fear; the right one is a campaign that “finished” without evidence the obligations actually closed.
