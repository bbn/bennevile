---
title: "Advisory vs blocking CI: green agent tests are a transcript, not a gate"
description: "Sep 20 Zhou: split agent patches into Lane A (generated, report-only) and Lane B (human-owned oracles on sealed fixtures) — forbid oracle-path edits in the same diff, leave coverage in the summary."
date: 2026-09-20
kind: field-note
source:
  title: "Split CI Into Advisory and Blocking Lanes Before You Merge an Agent Patch"
  url: https://dev.to/datacpp_8185/split-ci-into-advisory-and-blocking-lanes-before-you-merge-an-agent-patch-hco
project: steward
---

Finley Zhou’s Sep 20 DEV note is a merge-policy fix for factories that already generate most of the diff. Agents optimize for green. A single pytest tree rewards three cheap moves: assert the new behavior, rewrite the old assertion, or mark a flicker `xfail`. Each raises merge odds. None preserves the previous contract. Coverage deltas describe what executed; they do not describe what must remain true.

The proposal is a two-lane layout. **Lane A** (`tests/advisory/`) is generated and report-only — failure comments, never blocks, coverage printed and ignored by the gate, flakes dropped from the report. **Lane B** (`tests/oracles/`) is human-owned: properties over frozen fixtures with a committed SHA-256 manifest, fail-closed, no skip. Ownership is pinned in the tree (`CODEOWNERS`, a lane TOML), not in chat. A pre-test check rejects any agent patch that adds, deletes, or edits under `tests/oracles/` unless it is a dedicated oracle PR. Two CI jobs with unequal power: `protect-oracles` and `lane-b-blocking` are required; `lane-a-advisory` is `continue-on-error: true`. Flaky Lane B is an environment lease to fix, not a skip the next agent can copy.

Honest limits: empty oracles make Lane B a vacuous pass (worse than one honest suite); path policy fails open if the agent can rewrite `CODEOWNERS`, the workflow, or the forbid script; sealed tautology fixtures stay sealed garbage. Disclosure notes MonkeyCode outreach for drafting Lane A off to the side — the transferable claim is the path policy, not the product.

## Why it matters for code review

Continuous harnessed throughput only compounds past bursty heroics when “done” sits outside the worker’s write set. Split the jobs: morning review inherits a blocking oracle the agent could not soften, plus an advisory transcript of what it believed. FOMO that nothing ran overnight is the wrong fear if what ran rewrote the only checks that still meant something.
