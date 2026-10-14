---
title: "Zeroshot: the writer never grades the work — the graph does"
description: "Dec 25 Open Engine Zeroshot: authored executor–verifier graphs, independent reviewers with no shared session, SQLite ledger, bounded repair; delivery only after checks pass."
date: 2025-12-25
kind: field-note
source:
  title: "Zeroshot — Independent executor–verifier orchestration for software changes"
  url: https://github.com/the-open-engine/zeroshot
project: steward
---

[The Open Engine](https://github.com/the-open-engine/zeroshot)’s Zeroshot (repo Dec 25 2025; native `zeroshot` binary through the v10 line as of late Sep) starts from one sentence: **the agent that writes the code should not be the one that decides it works.** A conductor sizes the goal; a worker implements in an isolated workspace; separate validators judge the observable result without the executor’s session or reasoning context. They may receive handoff artifacts and must reproduce reported failures. The loop continues until verification passes or returns a concrete reason it did not.

Control flow is authored data, not a prompt that invents the next step. The built-in `software-change` graph implements, runs acceptance and code review in parallel, routes rejected evidence into bounded repair, and — with delivery enabled — pushes through Git, CI, and merge only after those reviews clear. Conflicts route back through repair and review. Every transition is bounded; every event lands in a durable SQLite ledger. Sibling Opcore adds a deterministic, read-only constraints gate so existing repo debt does not block an otherwise clean introduced change. Local, self-hosted Docker, and cloud targets share the same graph; `auto-research` keeps a ten-iteration explorer/synthesizer/challenger loop with fail-closed finalization.

## Why it matters for code review

Always-on harnessed momentum compounds when overnight candidates meet an independent verifier that never shared the writer’s context — the graph is the merge criteria, not the worker’s diary. Peak-session Claude mastery still wins on a single well-scoped change where orchestration tax exceeds the work; continuous factories lose the night when the maker self-grades. FOMO that agents aren’t working overnight is the wrong fear — the right one is waking to “verified” branches nobody outside the writer session actually checked.
