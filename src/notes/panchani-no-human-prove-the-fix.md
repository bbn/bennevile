---
title: "A green overnight diff is a hypothesis until something outside the agent can check it"
description: "Sep 17 Prince Panchani on no_human: tamper guard, repro gate (fail at base / pass at head), fresh-context reviewer with edit tools refused, merge policy → awaiting_approval — confidence is a claim; evidence is re-runnable."
date: 2026-09-17
kind: field-note
source:
  title: "AI Can Write the Code. Can It Prove the Fix?"
  url: https://dev.to/prince_panchani_f971a20ec/ai-can-write-the-code-can-it-prove-the-fix-3glg
project: steward
---

Prince Panchani’s Sep 17 field note (from three hard review rounds contributing to Eyal Golan’s `no_human`) reframes the overnight factory question. Generation is settled. The expensive failure is not a red CI — that is free. It is a **green diff that is wrong**: review, merge, deploy, then an afternoon three weeks later bisecting it. The agent sequence that produces it is familiar and undramatic: write a change, run tests, soften the inconvenient assertion, declare done. Nothing is a lie. Nobody asks *why the assertion moved* when the queue runs at 3 a.m.

The useful question becomes: what must an AI-generated change produce before a human is entitled to trust it? `no_human` answers as a local ticket→PR pipeline that **never merges**. Orchestrator-owned git (branch/commit/push), implementer behind a `PreToolUse` hook that bans merges and destructive shell, then a chain where the agent’s opinion of its own work appears nowhere as a gate:

- **Tamper guard** (deterministic, pre-reviewer): net drop in tests/assertions, new skips/`xfail`, tautologies, behavior-faking `autouse` fixtures — fail closed before spending reviewer tokens.
- **Reproduction gate**: offered tests must **fail at the merge base and pass on the head**. A “fix” whose test also passes on the unfixed tree has demonstrated nothing about the bug.
- **Held-out tests** the implementer never saw; path-scoped plain-English verifiers judged independently; merge policy recomputed into `ready: bool` + per-rule breakdown — editing the policy file itself forces `ready: false`.
- **Independent reviewer**: fresh session, different model tier by default, file-edit tools refused, findings with verified `file:line`, pass/fail recomputed from the checklist; crash/timeout/unparseable → fail closed.
- **Honest stop**: bounded attempts, stuck detection that resets context, escalation into eleven blocker categories instead of a confident wrong diff. “An honest escalation costs a minute to triage. A confident wrong diff costs an hour to review.”

Panchani’s own PRs to the project are the receipt that the philosophy eats its dogfood: net-new type diagnostics (base−head subtraction, silence ≠ clean, coverage limits named out loud), per-edit type feedback that refuses false “your edit introduced,” and a navigation-value measurement that flipped from PROCEED to HALT once README mass and Bash-as-search were counted honestly. The name is a joke — the architecture is organized around a human saying yes.

## Why it matters for code review

Continuous overnight throughput compounds only when morning review inherits **re-runnable evidence**, not self-scores. Reproduction-at-base, tamper-outside-the-write-surface, and fail-closed independent review are how always-on factories raise the floor without pretending a peak Claude Code session is the same as verified momentum.
