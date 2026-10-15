---
title: "Agentic reviewers in the terminal: better localization, and re-checking that predicts failure"
description: "Melbourne, Monash and Atlassian researchers ran Claude Code, Gemini CLI, Rovo Dev and CodeRabbit on 362 human-verified review tasks. Repo-grounded agents roughly doubled precise, human-aligned comments over static LLMs, but exploration and validation dominated cost, and failed reviews carried more validation, not less."
date: 2026-07-18
kind: paper
source:
  title: "Agentic Code Review in the Terminal: A Trajectory-Level Analysis of Behavior, Cost, and Human-Alignment"
  url: https://arxiv.org/abs/2607.16740
project: steward
---

**Wachiraphan Charoenwet, Kla Tantithamthavorn, Patanamon Thongtanunam, Hong Yi Lin, Minwoo Jeong and Ming Wu** (Melbourne, Monash, Atlassian) ask how terminal-based review agents actually spend their effort. They rebuild **AgenticCR-Verified**, **362** repo-level review tasks with human comments as ground truth, run every agent in the same Harbor sandbox, and annotate trajectories into exploration, planning, generation and validation.

**Outcome:** a comment counts only if it lands within ±5 lines of a human comment *and* raises the same issue. Rovo Dev (**5.81%**) and Claude Code (**5.60%**) lead, versus **1.7–2.6%** for static GPT-5.x, Gemini 2.5 Pro and Sonnet reviewers, and **1.37%** for CodeRabbit. The gain is localization (**>20%** vs 7–9%), achieved with far fewer comments.

**Behavior:** Claude Code is exploration-heavy (58% of steps, 73% of tool calls); Rovo Dev is validation-heavy (41% of steps, 46% of cost, more than 10 validation tool calls a task, about $0.75 of validation per review); Gemini CLI is short and cheap. Planning is under **10%** everywhere. Yet comparing accomplished with unaccomplished reviews, **more planning goes with success** (significant for Rovo Dev and Gemini CLI), while **failed reviews show heavier validation** — re-opening diffs and files without recovering. Comparable results came at very different costs.

## Why it matters for code review

For a factory reviewing every PR around the clock, per-review cost compounds, and this paper says a lot of that spend is re-checking that does not help. Validation volume is a symptom of weak grounding, not a proxy for rigor; budget for planning and navigation, and track cost per human-aligned finding rather than tokens per review. Read beside [Osmani on agentic code review](/posts/addy-osmani-agentic-code-review/) and [Wieruch's self-improving review loop](/posts/wieruch-self-improving-agentic-code-review-loop/).
