---
title: "Harness = loop + tools + memory + gates — or don’t run unattended"
description: "Sep 19 Chalupa: four-piece harness checklist; ACP mediation probe that caught an engine writing outside the project without asking; eval gates before any overnight autonomy."
date: 2026-09-19
kind: field-note
source:
  title: "Building an agent harness: loop, memory, gates"
  url: https://echalupa.com/blog/building-an-agent-harness
project: steward
---

Edward Chalupa’s Sep 19 field guide refuses the demo that stops at “call a model, run a tool, print an answer.” An agent is the model; a **harness** is four pieces that decide whether month-two is useful: the **loop**, the **tools** (schema, timeout, error contract), the **memory** that compounds across sessions, and the **gates** that say what may run unsupervised. No gate, no unattended run — the sentence continuous factories keep rediscovering the hard way.

Path A is deliberately thin: a workspace folder, an `operation.md`, a loop script that appends every outcome to `log.md`, and a checkable DONE before you start. Path B is his NxtOS bundle (validate / render / reconcile / drift) talking to coding agents over ACP — with a trap he measured. ACP lets each engine decide which tool calls ask first; a mediation probe found **one engine writes files outside the project folder without asking**, another asks before every write. You cannot tell from docs. Re-probe on every engine bump before you leave the lid closed. Memory (his NLM daemon) is the compounding asset: recall at session start, store decisions not transcripts, and reconcile memory against the declared operation on a schedule so confident-stale facts lose to config.

The hardening order before any overnight autonomy: completion conditions → mediation probe → **eval gates that block promotion** → secrets as references → CI green → append-only logs → one human-readable artifact of the operation. His checkout’s **3,763 tests** catching a packaging bug mid-audit is the quiet receipt that the suite is part of the harness, not décor.

## Why it matters for code review

Steady harnessed throughput compounds past peak-session heroics only when “done” is checkable and autonomy is gated per function — not when the narrator feels finished. Chalupa’s FOMO fix is boring on purpose: measure what your engine does unsupervised, then refuse overnight capacity until the gate and the log exist. Review starts from those receipts, not from a chat scroll that claimed victory at 2am.
