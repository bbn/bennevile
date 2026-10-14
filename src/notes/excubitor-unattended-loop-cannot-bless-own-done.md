---
title: "Unattended loop cannot bless its own done — fences outside the model"
description: "Excubitor (Shepherd): mechanical PreToolUse guards + falsifiable intent records so a headless coding loop cannot merge, push, or delete on evidence it authored itself; frozen-oracle verification; candidate branch only."
date: 2026-07-11
kind: field-note
source:
  title: "excubitor — Safety fences for autonomous coding agents"
  url: https://github.com/ErickShepherd/excubitor
project: steward
---

Erick Shepherd’s [excubitor](https://github.com/ErickShepherd/excubitor) (Latin: night watch) is built for the failure continuous factories keep rediscovering: an unattended loop that **decides it is finished and then acts irreversibly on that judgment**. The design splits the question into two axes enforced *outside* the model. **Axis A — done-signal trust:** is “done” a frozen, loop-immutable oracle (test exit code the loop cannot edit) or LLM self-judgment (forgeable)? **Axis B — blast radius:** is the act reversible and internal (commit; `--no-ff` into a non-default branch) or irreversible/external (push, hard-reset, branch delete, default-branch merge)? An unattended agent may act on its own “done” only when the signal is unforgeable *and* the act is reversible. Everything else is stop-and-surface.

Four layers carry the policy: falsifiable intent claims (`telos`) with decidable contracts and optional executable witnesses; a read-only auditor that demotes DISCHARGED-without-witness to SUSPECT; PreToolUse guards that block default-branch edits, irreversible VC under `CLAUDE_LOOP_GUARD`, one-unit-per-session thrashing, and self-disarm of the guards’ own kill-switches; and Ralph/telos loop recipes that bind witness verdicts to baseline-authored trusted state before a candidate branch is even offered. Completion does not merge, push, publish, or delete either checkout. A 60-second crash-test demo shows the shipped guard denying unattended `git clean`, then the same act deleting work with the guard off.

## Why it matters for code review

Steady overnight throughput is only an asset if the morning artifact cannot invent its own permission to land. Excubitor’s FOMO antidote is mechanical: review the denial log and the frozen-oracle receipts, not a chat that claimed victory at 2am — and keep irreversible forge actions behind an out-of-loop human or independent gate.
