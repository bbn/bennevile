---
title: "OpenLoopEvolve: the Loop Policy is a versioned asset—Champion–Challenger before activation"
description: "Aug 10 Wang/Li/Li/Li: externalize obs/plan/memory/act/verify/recover/stop/budget as Loop Policy Bundles; online+offline evolution with paired eval, robust gate, task-boundary activation, rollback—YC-Bench lifts returns and survival vs fixed π₀."
date: 2026-08-10
kind: paper
source:
  title: "OpenLoopEvolve: A Verifiable Self-Evolution Framework for Loop Policies in Long-Horizon Complex Tasks"
  url: https://arxiv.org/abs/2608.09380
project: steward
---

Siqi Wang, Xinlin Li, Zhenglin Li, and Li Li (Tsinghua) treat the agent’s full control loop—not a prompt and not a skill library—as the object that must accumulate. **OpenLoopEvolve (OLE)** externalizes observation, planning, memory, action, verification, recovery, stopping, and budget control as a portable **Loop Policy**, packaged with applicability conditions and lineage into a versioned **Bundle**. Traces become attributable evolution evidence; an LLM proposes Challengers; **Champion–Challenger** paired evaluation under shared conditions feeds a robust release gate (benefit, evidence quality, tail risk, cost). Only gate-passing policies are released, and released policies activate only at a **task boundary**—never mid-task—so outcomes stay attributable; canary monitoring can roll back to the parent. Online mode triggers candidates from recent operational feedback; offline mode searches a candidate population from archived traces with multi-generation retention. On YC-Bench (year-long simulated business), with fixed DeepSeek-V4-Flash and official seeds, OLE-online and OLE-offline beat a fixed initial policy by **+140% / +166%** mean final funds, raise task success (~74%→88%/92%), improve annual survival (1/3→2/3 and 3/3), and cut mean max drawdown—while lowering average tokens per call even as runs survive longer. Code: `yoyoshikc/OpenLoopEvolve`.

## Why it matters for code review

Self-improving overnight factories that rewrite the loop inside the same session are compounding unverifiable drift. Review harness-evolution PRs the way OLE gates releases: demand a named Loop Policy version, paired Champion–Challenger receipts on fixed conditions, task-boundary activation, and an explicit rollback path—reject “the agent updated its own CLAUDE.md mid-run.” Steady harnessed throughput compounds when control experience becomes a governable asset; FOMO for continuous self-edit without a promotion gate is the unconditional-accept drift Wei et al. already warned about. Pair with [Wei’s Scale & Selection Champion–Challenger](/posts/wei-scale-selection-champion-challenger-harness-evolution/), [Self-Harness’s held-out regression gate](/posts/zhang-self-harness-held-out-regression-gate/), and [Macedo’s loop specifications](/posts/macedo-stop-hand-holding-loop-specification-verification-ladder/) when promoting overnight control-plane diffs.
