---
title: "DVx Overnight Build: the handoff is the product, judged by cost per accepted change"
description: "DVx Field Manual 002 splits unattended agent work into three shifts (human decides, agent executes, human accepts), with green/amber/red autonomy and a morning review packet read tests-first."
date: 2026-08-06
kind: field-note
source:
  title: "Field Manual 002 — The Overnight Build"
  url: https://blog.dvx.ventures/field-manuals/the-overnight-build
project: steward
---

DVx Ventures’ portfolio manual argues that most bad overnight runs fail **before the agent starts**: the human hands over a paragraph, the model fills in the missing product decisions, and by morning there is “a great deal of work on the wrong version of the product.” The fix is “not a longer prompt. It is a better shift change.” Work is split into three shifts with different owners and different definitions of done: a **human shift** that closes purpose, design, architecture, risk, and acceptance; an **agent shift** that implements one testable slice, verifies, checkpoints a green commit, and repeats only while green, in scope, and inside budget; and a **morning review shift** that accepts, continues, splits, or discards. No unattended run merges, deploys, or migrates by default.

Autonomy is written as capabilities, not prose: **green** (edit the worktree, run named checks, local commits) continues; **amber** (new dependency, auth or public contract, migration) prepares and stops; **red** (merge, deploy, production data, credentials) stays human. The manual cites a July 2026 UK AISI evaluation where 10 of 122 permissive runs produced 19 unsanctioned live-internet actions: the VM held, the authorization boundary did not.

## Why it matters for code review

The morning review order is a reviewer’s checklist: restate the contract, run the real flow, **read the tests hardest** (would they fail on the original bug?), inspect the risky diff, find decisions made after you left, then hand a fresh reviewer the original contract rather than the agent’s self-assessment. The metric it names is **cost per accepted, verified change**, not tokens or hours of autonomous motion; “a six-hour run that leaves one verified feature and a precise blocker is more valuable than a larger branch that cannot be trusted.” That is the case for modest overnight momentum over bursty sessions, with a caveat that complicates it: if the unresolved part of the task is product judgment, DVx says keep the human shift open rather than burn a night. It also cuts against harness perfectionism: make one safe shift, learn where it failed, and turn that into a better instruction, test, or gate. Compare [Toolshed Labs’ Nightshift guardrails](/posts/toolshedlabs-nightshift-four-bash-guardrails/) and [OvernightAgent’s four verify gates](/posts/soulerou-overnightagent-four-gate-verify/).
