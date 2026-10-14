---
title: "HarnessAudit: task-green overnight runs can still violate the harness"
description: "May 14 Liu et al.: full-trajectory harness safety (boundary/fidelity/stability) on 210 tasks — best overall ~0.32; completion misaligned with SAR; multi-agent amplifies resource + info-flow violations."
date: 2026-05-14
kind: paper
source:
  title: "Auditing Agent Harness Safety"
  url: https://arxiv.org/abs/2605.14271
project: steward
---

Liu, Guo, Liu, Yang, Yan, Zhao, Hua, Liu, Li, Bu, and Wang argue that output-level eval cannot see the failure mode always-on factories actually hit: a harness returns a correct answer over a trajectory that accessed unauthorized resources, leaked context to the wrong agent, or took irreversible side effects mid-run. **HarnessAudit** scores full trajectories on three layers — boundary compliance (tools / resources / information flow), execution fidelity (action validity + checkpointed completion), and system stability under injection, ambiguous goals, and tool errors — with hidden, agent-independent evidence channels. **HarnessAudit-Bench** ships 210 tasks across eight domains in single- and multi-agent configurations.

Ten harness configurations (OpenClaw across frontier models; Claude Code; Codex) stay far from safely reliable: even the best overall score is about **0.32**. Task completion and safety adherence are misaligned — Claude Opus can lead TCR while trailing protocol safety; Gemini 3.1 Pro can win overall via stronger SAR despite weaker completion. Resource-access SAR is the weak channel across most setups; information-flow averages ~0.45. Multi-agent coordination expands the surface (tool SAR **0.91→0.64**, resource **0.85→0.63** vs single-agent), and violations accumulate with trajectory length. Harness design sets the ceiling: native Claude Code can improve both completion and safety vs OpenClaw; native Codex can raise completion while lowering safety when the model simply executes more actions. Project: [harnessaudit.github.io](https://harnessaudit.github.io).

## Why it matters for code review

Continuous factories that only score overnight “done” are optimizing a gate that already misses mid-trajectory policy breaks. Review always-on and multi-agent runs the way HarnessAudit judges them: demand trajectory SAR as a multiplicative safety gate, instrument resource binding and inter-agent leaks, and refuse to treat longer autonomous trajectories as free capacity when each extra action buys more violation surface. Steady verified momentum still compounds — but FOMO for idle agents is dangerous if the morning merge queue only checked the final answer.
