---
title: "StateHarness: a light project-state record beat a heavy multi-role harness, and regressions still went up"
description: "Oct 13 Zou, Zhou, Luo and Zhang give Claude Code a running record of focus, findings, affected callers and unfinished work. Bug fixes rose from 35.1% to 39.5% on a chain of issues, but pass-to-pass regressions rose from 16 to 23, and the heavier multi-role harness did worse than no harness at all."
date: 2026-10-13
kind: paper
source:
  title: "StateHarness: Maintaining Evolving Project State for Long-Horizon Coding Agents"
  url: https://arxiv.org/abs/2610.17616
project: steward
---

[Chuan Zou, Yujun Zhou, Xiaonan Luo and Xiangliang Zhang](https://arxiv.org/abs/2610.17616) start from a familiar failure in long coding runs: what the agent learned an hour ago is buried in its history, so later edits lose track of earlier ones. **StateHarness** wraps Claude Code with a running record instead of a smarter model. The agent writes down its current problem and hypothesis, key findings and decisions, repository relationships it discovered (callers, tests, docs a change touches), and unfinished work. The runtime nudges it to keep those records current, hands back a short working brief before each decision, and, when warning signs pile up, starts a separate diagnostic session that rereads the history for evidence the agent skipped. No weights change.

The results, against plain Claude Code:

- **RefactorBench:** full-chain completion **29.4% → 35.3%**, cleanup-check accuracy **87.0% → 95.4%** (imports 82.7 → 94.4, docs 90.9 → 100).
- **Five long-horizon terminal tasks:** mean reward **0.427 → 0.576**.
- **ChainSWE (a sequence of issues in one repo):** bug-fix rate **35.1% → 39.5%**, leftover consistency problems **60 → 43**, but **pass-to-pass regressions 16 → 23**.

Keeping state isn't free: on RefactorBench recorded tokens went from 25.6K to 33.1K, tool calls from 81 to 110, and wall-clock time from 383 to 529 seconds.

The comparison that matters most is with a heavier harness. **LongHorizon-Harness**, a multi-role setup with independently audited task state, used **208K recorded tokens, 272 tool calls and 2,214 seconds** on ChainSWE. It fixed **fewer** bugs than bare Claude Code (32.5%) and caused **47** pass-to-pass regressions, about three times the baseline. StateHarness got the better result for about a sixth of the tokens. The authors also flag a limit in their own case studies: "remembering an unresolved problem enables later checking but does not guarantee the agent resolves it before stopping."

## Why it matters for code review

A harness that keeps work moving across many sessions is supposed to compound. This paper shows the cheap part that does compound: a written record of what changed and what still depends on it, which is also what a reviewer wants to see next to the diff. It also shows the two ways it goes wrong. More machinery made things worse, not better. And even the good harness traded more fixed issues for more broken old tests, which is exactly the kind of damage a morning reviewer misses unless the gate runs the old suite on every change in the chain. Pair with [Addy Osmani on state, sessions and handoffs for long-running agents](/posts/addy-osmani-long-running-agents-state-sessions-handoffs/), [Drydock keeping only tests that fail on main](/posts/mujahid-drydock-model-thinks-script-acts-overnight/), and [Humanize, where a reviewer from another vendor decides when work is done](/posts/humanize-judgement-engineering-reviewer-decides-done/).
