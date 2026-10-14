---
title: "Evals judge; guardrails constrain; the harness runs the night"
description: "Aug 13 Winston/Voss (Arize): long-running agents fail where chatbots never go — separate eval vs guardrail vs harness, give judges the trajectory, and feed failure explanations back as the next engineering brief."
date: 2026-08-13
kind: field-note
source:
  title: "AI agent guardrails vs. evals: How to build more reliable agent systems"
  url: https://arize.com/blog/ai-agent-guardrails-vs-evals/
project: steward
---

Aaron Winston’s Aug 13 Arize note opens on a live demo Laurie Voss watched fail for a boring reason: the voice agent knew the answer, then said three things at once. “There was nothing wrong with the model,” Voss said. “There was definitely something wrong with the harness.” As autonomy windows stretch from minutes to multi-hour PRD-to-implementation runs, the failure surface expands — wrong tool args, runaway retries, conflicting branches, stale context, unsafe intermediate steps that still produce a fluent final answer. Winston’s useful separation is three layers teams keep conflating: an **eval** judges whether the agent performed well; a **guardrail** constrains what it is permitted to do in code; the **harness** coordinates tools, state, limits, retries, permissions, and feedback for the whole run. “Stay focused” is a prompt wish; “permit one active response at a time” is an enforceable policy.

Two operational punches matter for always-on factories. First, your AI judge may be grading yesterday’s world — a financial-report agent citing today’s events scored wrong by a stale evaluator that never saw the retrieved sources or the product’s success definition; judges need date, trajectory, tools, and policy evidence before their score can gate a release. Second, the most useful eval output is often an **explanation**, not a pass/fail: Voss pipes failure narratives back into the IDE as “fix yourself” tasks for a coding agent, turning bad runs into the next bounded engineering brief rather than orphaned traces. Five questions before raising autonomy: what can it do without approval; which boundaries are code-enforced; what context does the evaluator need; can you reconstruct the trajectory; and how does failure information reach the next version.

## Why it matters for code review

Continuous harnessed momentum beats bursty mastery only when overnight authority is bounded and morning review sees path evidence, not narrator confidence. Winston/Voss’s FOMO antidote is mechanical: guardrails for irreversible acts, trajectory-aware evals for quality, and failure explanations that become the next review case — not a green score that cannot explain itself.
