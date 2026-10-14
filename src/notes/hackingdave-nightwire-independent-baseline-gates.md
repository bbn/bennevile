---
title: "Nightwire: independent verify, then baseline-relative gates"
description: "Feb 2026 HackingDave/Nightwire: Signal-orchestrated workers; fresh-context verifier on the diff; test snapshots that fail only on NEW regressions; ≤2 auto-fix attempts — same brain never grades its own patch."
date: 2026-02-23
kind: field-note
source:
  title: "Nightwire — Signal-orchestrated autonomous development with independent verification"
  url: https://github.com/HackingDave/nightwire
project: steward
---

[Nightwire](https://github.com/HackingDave/nightwire) (HackingDave, Feb 2026, still shipping) turns Signal into the control plane for unattended coding: `/complex` builds a PRD, breaks it into atomic tasks, and dispatches up to ten parallel workers through Claude, Cursor Agent, Codex, or OpenCode. The interesting part is not the messenger — it is what happens *after* each worker writes.

Before any change, Nightwire takes a **git checkpoint**. After the runner returns a diff, a **separate Claude context** — no shared conversation, no memory of the implementer’s reasoning — reviews that diff for security and logic failures under a fail-closed rule. Pass, and a **quality gate** re-runs the project’s tests and compares them to a **pre-change baseline snapshot**: only *new* failures count as regressions, so pre-existing red does not block valid work. Fail either gate and the checkpoint rolls back. A bounded auto-fix loop (default two attempts) can target verifier findings with a fresh agent; exhaustion leaves the task rejected rather than greenwashed. Rate-limit cooldowns pause the whole pool instead of thrashing spend. Stale tasks recover on restart from the last checkpoint.

The Signal transport and multi-device `/target` routing are convenience layers. The load-bearing contract is the same one every overnight factory eventually rediscovers: the identity that wrote the patch does not get to declare it done, and “tests pass” means “no new red versus the snapshot we took before we touched the tree.”

## Why it matters for code review

Continuous harnessed throughput compounds only when verification is outside the writer’s head. Nightwire’s independent verifier plus baseline-relative gates is that separation as runnable machinery — modest parallel steps that refuse self-graded green beat a peak Claude session that rubber-stamps its own diff. The FOMO worth acting on is not idle agents on your phone; it is waking to commits whose only evidence is the same context that produced them.
