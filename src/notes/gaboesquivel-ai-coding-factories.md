---
title: "AI coding factories: stages, evidence, and continuity"
description: "Sep 12 Gabo Esquivel: an agent that edits and opens PRs is not a factory — stages need artifacts and decisions, long runs need handoff records, and acceptance stays stable while implementation iterates."
date: 2026-09-12
kind: field-note
source:
  title: "AI Coding Factories"
  url: https://gaboesquivel.com/blog/2026-09-ai-code-factories
project: steward
---

Gabo Esquivel’s Sep 12 note draws a clean line: a coding agent that edits files, runs tests, and opens a pull request is a capability. A **coding factory** is a delivery process — defined stages, explicit criteria to advance/retry/ask for help, and a path that learns from production. You can assemble one from existing models and tools; you do not need to own the training stack.

The loop he names is familiar and useful: request → specification → implementation → verification → release → production feedback. Each transition needs an **artifact and a decision**. Specs define expected behavior; implementation produces a reviewable change; verification produces evidence; release produces an observable change in the running product. Six architecture components sit around that loop — versioned context and specs close to the code; model *and* harness evaluated together; orchestration with durable state across interrupts; sandboxed execution (branches/worktrees, containers); verification and release gates with explicit merge/deploy conditions; observability that turns failures into workflow upgrades.

Two continuity claims land for always-on factories. Parallelism needs ownership and dependency boundaries before you add workers. Long-running work needs handoff artifacts — completed tasks, failed checks, unresolved decisions, next useful step — the same lesson Anthropic’s long-running harness research keeps repeating. His practical evidence rule is observable, not conversational: reproduce the bug with a regression test, pass the fix, keep existing behavior intact, and exercise the relevant user flow. Agent review can supplement; acceptance criteria should stay stable while the implementation iterates.

He points at Factory’s Software Factory docs (private preview) as one packaged delivery system, and at assemble-yourself pieces — Sandcastle sandboxes, Machinist’s inspectable runs that keep the human shipping decision, Superpowers and Addy Osmani skills as process knowledge inside an existing harness. Skills describe *how*; orchestration decides *when*; execution infrastructure records the outcome. Connecting them is still engineering. Start with one recurring task and measure time to an accepted change, review effort, defects, and cost — expand only when failed runs improve the factory.

## Why it matters for code review

Peak-session Claude mastery still ships a PR. Continuous verified throughput needs the factory spine Esquivel sketches: durable handoffs, stable acceptance, and gates that produce evidence rather than vibes. FOMO that agents sit idle overnight is answered by that spine — not by a longer interactive session — because morning inventory is only useful when verification and continuity were designed before the overnight run.
