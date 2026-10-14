---
title: "Loop specifications: the check is the skill, not the prompt"
description: "Jun 28 Macedo: defines the external loop spec (trigger, goal, verify, stop, memory); codes 50 Loop Library entries—70% autonomous verify, but triggers and durable memory still mostly manual."
date: 2026-06-28
kind: paper
source:
  title: "Stop Hand-Holding Your Coding Agent: Engineering the Loops that Replace Step-by-Step Prompting"
  url: https://arxiv.org/abs/2607.00038
project: steward
---

Sandeco Macedo (IFG) takes the mid-2026 slogan seriously—stop prompting the agent every step; design the **loop that prompts it**—and gives the practice a reviewable object. The **loop specification** is an external, bounded, reusable artifact (trigger + goal + verification + stopping rule + on-disk memory) handed to a harness such as Claude Code or Codex. It is neither a programming `while` nor the harness’s internal perceive–act–observe cycle: the harness is the engine; loop engineering writes the pilot. The paper places loop engineering as a fourth layer over prompt → context → harness, and refuses the stronger headline that loops retire prompting.

The useful engineering surface is a **five-level verification ladder** (deterministic → rule/schema → delayed field truth → model-as-judge → human checkpoint). Levels 1–2 are the autonomous zone; pretending level 4 is level 1 is named as an anti-pattern beside self-approving makers, specification gaming, and unattended runaways. A hand coding of the public **Loop Library** (fifty loops) shows practice matured where the discipline says value lives: **70%** verify in the autonomous zone, **74%** name terminal states, **66%** set a verifiable goal—while only **22%** use automated triggers, **20%** call named reusable skills, and **32%** develop persistent memory. Accompanying deliverable: `sandeco-loop`, an open skill that authors hardened loop specs (triage → interview → anti-pattern hardening → single `.md` actuation) rather than running them.

## Why it matters for code review

Always-on factories that can already prove “done” still stall on the half that removes the human from *starting* and *remembering*: schedules, skills, and curated disk state. Review overnight lanes against Macedo’s maturity mismatch—strong gate, weak trigger/memory—before FOMO for idle agents buys another solo retry loop with a self-score. Steady harnessed throughput compounds when the check is external and terminal states are named; peak-session mastery that exits on the implementer’s optimism does not. Pair with [Lulla’s 217-loop adoption mine](/posts/lulla-loop-engineering-building-blocks-adoption/) and [LoopsBench’s harness-to-loop eval](/posts/li-loopsbench-harness-to-loop-engineering-eval/) when promoting unattended cadence past a green CI badge.
