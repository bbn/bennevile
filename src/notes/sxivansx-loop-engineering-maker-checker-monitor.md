---
title: "Loop engineering: the checker is never the maker, and the stop is a command"
description: "Jun 30 sxivansx skill: scaffold LOOP.md + maker/checker/monitor agents + stop-check.sh — one on-disk cycle every trigger; human gate on merge; unattended means isolated."
date: 2026-06-30
kind: field-note
source:
  title: "Loop Engineering — autonomous maker/checker loops for Claude Code"
  url: https://github.com/sxivansx/loop-engineering
project: steward
---

[sxivansx](https://github.com/sxivansx/loop-engineering)’s Loop Engineering skill (repo Jun 30) is the continuous-factory shape written as six primitives instead of a product pitch. Run `/loop-engineering` in a repo; Claude pins a goal and a **verifiable stop condition**, drops `LOOP.md` (goal, bounds, Open/Done/Blocked, cycle log, `Status: active|paused|halted`), scaffolds `loop-maker` / `loop-checker` / `loop-monitor` agents, and wires every trigger — `/goal`, `/loop`, schedule, or GitHub Action — through the **same** on-disk `/loop-cycle` definition. No trigger may invent a cycle that skips the checker.

The hard rules are the review surface. **Checker ≠ maker.** The stop condition is a command (`stop-check.sh` exit 0), not a vibe — the runner executes it so the model never declares itself done. State is rewritten every cycle; the file remembers what the session forgets. A monitor watches for drift, spinning, and crossed bounds and flips `Status` to halt. Three failed attempts on one item go to Blocked instead of infinite ping-pong. A “fix” that edits the test the checker is about to run is auto-rejected. Human gate stays on merge, deploy, delete, and spend. Templates include `loop.sh` and a GitHub Action for unattended runs; isolation and scoped tokens are required, not optional.

## Why it matters for code review

Always-on throughput compounds only when every cycle pays an independent verification tax and ends on a checkable predicate. Peak-session Claude mastery still wins on a single well-scoped change where loop overhead exceeds the work; continuous factories lose the night when the same agent grades its own diff or “looks done” becomes the stop. Review the cycle definition the way you review a merge queue — maker, checker, monitor, and `stop-check.sh` are the merge criteria; the chat is just the worker behind them.
