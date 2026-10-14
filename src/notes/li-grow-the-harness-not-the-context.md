---
title: "Grow the harness, not the context: recurring control becomes code"
description: "Sep 22 Li et al.: failure-guided Growing Harness turns a strategy-free scaffold into reusable executable control — 76–92% fewer LLM calls, held-out gate rollback, success holds across 4B–120B on WebArena."
date: 2026-09-22
kind: paper
source:
  title: "Grow the Harness, Not the Context: From Strategy-Free Scaffolds to Reusable Specialist Agents"
  url: https://arxiv.org/abs/2609.26760
project: steward
---

Li, Li, Zhao, Ye, Li, Xu, and Gao ask a factory question most overnight loops dodge: if an agent keeps seeing the *same family* of tasks, why does every run reconstruct the same control decisions inside a growing model context? **Growing Harness** is a failure-guided training paradigm that learns the *harness itself* from a **strategy-free scaffold** — fixed model and tool interfaces, no hand-designed ReAct-style controller. Function-level execution traces localize each failure to a bounded code surface; an optimizer jointly repairs a window of failures; a **success-first held-out gate** rolls back repair sequences that harm prior capability. Accepted edits accumulate in one shared program so control structure emerges from task feedback.

The receipts matter for continuous factories. Across BrowseComp-Plus and WebArena-Verified with deployment models from **4B to 120B**, Growing Harness hits the highest mean success in five of six settings (within 0.7 pp on the sixth). Versus a Tool-Calling agent it cuts LLM calls by **76.0–91.8%** and online inference cost by **74.4–98.6%**. On WebArena-Verified, success stays **44.7–45.3%** across model scales while Tool-Calling collapses to **6.7%** at 4B — reusable code supplying the browser control small models otherwise re-derive every turn. Ablations show trace-local edits, multi-failure windows, and gate rollback each lift final success; without the gate, validation success rose then fell as brittle repairs landed.

Read next to empirical harness-component studies and other self-editing control planes: the shared claim is that the durable artifact is the control program, not a longer chat. Caveats the authors own: value depends on reusing the learned harness enough to pay offline optimization, and generated code still needs sandboxing and permission boundaries.

## Why it matters for code review

Self-improving factories are not “let the agent rewrite prompts overnight” — they are **merge-gated program growth** where recurring verify/recover/stop logic leaves the context and becomes reviewable code. Treat harness diffs like product diffs: held-out success cannot regress, edits stay trace-scoped, and morning inventory is the accumulated controller plus evidence it still passes the gate. That is how modest verified momentum compounds past peak-session heroics without burning the night re-deriving the same control loop in tokens.
