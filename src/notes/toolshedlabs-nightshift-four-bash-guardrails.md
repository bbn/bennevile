---
title: "The expensive overnight run is the one that never crashes"
description: "Jul 29 Toolshed Labs Nightshift: four bash habits — rewrite handoff, fail-closed verify-gate, runaway caps, morning brief — so unattended agents stop producing confident unverified inventory."
date: 2026-07-29
kind: field-note
source:
  title: "Nightshift: four small bash guardrails for leaving a coding agent running overnight"
  url: https://github.com/openai/codex/discussions/35996
project: steward
---

Toolshed Labs’ Jul 29 Codex discussion (MIT repo [`toolshedlabs-hash/nightshift`](https://github.com/toolshedlabs-hash/nightshift)) flips the overnight fear model. A crash is the **cheap** failure — lose a few hours, restart after coffee. The expensive night is the one that **never crashes**: the agent stays confident for eight hours, no test ever ran, and morning brings unverified output plus a bill. Their answer is not another prompt pack. It is ~300 lines of bash wrapping whatever agent you already launch — no framework loop, no Codex lock-in.

Four habits, four scripts. **Handoff file** rewritten (not appended) after every unit of work: goal, status, single next action, traps already hit, what was *verified* vs claimed — so a rate-limit or crash resumes from disk, not a dead context window. **`verify-gate`** fails closed on build/test/smoke (any shell command) because “I wrote it” and “it works” feel identical inside the model; they also note pre-action checks for irreversible merges. **`runaway-guard`** ends the night on any of three stops: iteration cap, wall-clock deadline, or a `.nightshift/STOP` file a human or failed gate can drop. **`morning-brief`** puts the verdict on line one so review is one page, not ten thousand log lines. A `./examples/demo.sh` simulates a bad night catching itself; a $5 pack adds a cost ceiling if you want it — the free four are the honest core.

## Why it matters for code review

Always-on harnessed momentum is worthless if the night manufactures **confident inventory**. Treat the handoff’s verified section and the verify-gate exit code as the review artifacts; treat runaway caps as the FOMO brake that keeps overnight capacity from becoming an unbounded invoice. Peak Claude Code sessions can afford soft “looks good”; continuous factories need the boring outer scripts that refuse to call unfinished work done.
