---
title: "Ralph Loop: overnight agents need stop hooks and machine-checkable done"
description: "Feb 8 Blake Crosley: fresh-context iterations + filesystem memory + stop-hook criteria shipped 3,455 LOC / 141 tests overnight — spawn budgets, non-trivial criteria, and cleanup beat one long Claude session."
date: 2026-02-08
kind: field-note
source:
  title: "The Ralph Loop: How I Run Autonomous AI Agents Overnight"
  url: https://blakecrosley.com/blog/ralph-agent-architecture
project: steward
---

Blake Crosley’s Feb 8 write-up is an overnight coding factory measured in commits, not vibes. The **Ralph Loop** pattern runs autonomous Claude Code sessions by solving three failure modes at once: context exhaustion (fresh window each iteration instead of one degrading marathon), state persistence (filesystem as memory across sessions), and premature “done” (stop hooks that refuse exit until machine-verifiable criteria pass). His receipt: a 9-PRD deliberation system — **3,455 lines of Python**, **141 tests**, four commits — shipped across multiple unattended overnight sessions.

The harness details are the transferable part. Each iteration reads current state from disk, works with a full context budget, writes updated state, and only exits when criteria hold: tests green, linters clean, typecheck clean, spawn budgets respected. A recursion-guard stop hook intercepts exit attempts and checks those criteria; spawn budgets use **budget inheritance** (cap total agents, e.g. 12) rather than naive depth limits so parallel work cannot explode cost the way his early unbudgeted run did (10× token burn before a manual kill). Failure modes he documents are review-relevant: criteria that pass trivially (`assert True`), filesystem pollution from abandoned approaches, and bash `((VAR++))` silent deaths under `set -e`. Fit is greenfield work with automated verification; weak fit is subjective UI polish or exploratory refactors without a checkable “done.”

## Why it matters for code review

Overnight harnessed momentum beats peak-session heroics only when “done” is enforced outside the model’s narration. Crosley’s stop-hook + machine-checkable criteria relocate review pressure into the loop — each iteration must leave a greppable, testable state — so morning judgment starts from evidence, not a chat transcript. Pair with dual-LLM or independent-evaluator overnight patterns: continuous throughput without spawn budgets and non-trivial completion gates is just FOMO that burns tokens and dumps unverifiable diffs into the merge queue.
