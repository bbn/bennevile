---
title: "AIFactory: verify against the live endpoint, not the diff"
description: "May 20 AIFactory PARR loop: plan→act→deploy→reflect→review — worktree isolation, live HTTPS verify, bounded auto-feedback, human-stop defaults; auto-merge only after reviewer gate."
date: 2026-05-20
kind: field-note
source:
  title: "AIFactory — the PARR pipeline and its guards (plan → build → deploy → verify → merge)"
  url: https://github.com/olafkfreund/AIFactory/blob/master/guides/parr-pipeline-and-guards.md
project: steward
---

[olafkfreund/AIFactory](https://github.com/olafkfreund/AIFactory/blob/master/guides/parr-pipeline-and-guards.md) (May 20 2026; platform + [PARR guards guide](https://github.com/olafkfreund/AIFactory/blob/master/guides/parr-pipeline-and-guards.md)) frames autonomous shipping as a guarded closed loop — **Plan → Act → Reflect → Review** — where most stages past build are opt-in and every uncertain step **degrades to a human stop** rather than guessing. Spec-first planning (with optional HMAC-trusted upstream plans) precedes code. Act runs in an isolated worktree; parallel waves merge sequentially with a parent-owned plan and a repeated-failure detector that escalates instead of burning tokens. A mutation ledger checkpoints claimed-vs-actual edits for rollback.

The distinctive verification tax sits in **Reflect**: tests run against the **deployed HTTPS URL**, not a local process, so "it builds" is not mistaken for "it runs." Deploy (opt-in) is deterministic Terraform to App Runner with teardown always paired, cost tags, and a sweeper — infrastructure the factory generated, not an LLM improvisation. Review adds a configurable pre-merge reviewer gate, **bounded** auto-feedback (≤2 fix/re-review cycles, then human), and a merge-conflict stop. Adoption is staged: auto-PR first, then automated reviewer, then auto-merge, then auto-deploy — so continuous factories earn the right to close the loop rather than skipping straight to lights-out merge.

## Why it matters for code review

Harnessed overnight momentum usually verifies in the worktree; AIFactory productively complicates that by moving the hard gate to the **live endpoint** and keeping merge behind a bounded, human-default review endgame. Continuous throughput still compounds only when each stage can refuse — promote green live verify plus reviewer approval, reopen exhausted auto-fix loops, and refuse to treat a local green as production-ready. Peak Claude sessions still win when you are steering the change; the overnight board is for specs whose acceptance criteria survive deploy.
