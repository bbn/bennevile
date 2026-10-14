---
title: "Ouroboros: the reviewer approved a destructive rewrite, so a ruler replaced it"
description: "Oct 6 field report from Daniel Krydynski: an unattended scout/implement/review loop let a 4B reviewer approve gutting INSTALL.md from ~256 lines to 36. The fix was a deterministic deletion cap, not a better prompt."
date: 2026-10-06
kind: field-note
source:
  title: "Ouroboros: A Recursive Dev Loop Where AI Improves Code — Safely"
  url: https://dev.to/danielkrydynski/ouroboros-a-recursive-dev-loop-where-ai-improves-code-safely-34jd
project: steward
---

**Daniel Krydynski** built Ouroboros, a loop meant to run nightly on its own: a scout proposes tickets, an implementer works each one in a throwaway git worktree until tests pass, a separate reviewer model votes `APPROVE` or `REJECT`, and only then does a human press merge. The harness owns every git operation and test run; the models only produce text.

The write-up is worth reading for the part where it broke. On TICKET-004, "rewrite the install guide," a small local model cut INSTALL.md from about 256 lines to 36, and the reviewer approved it. The change merged into his local main and was caught only because the human merge gate was on. His correction: the reviewer gate "is not a judge. It's a heuristic." The fix was `max_deletions_per_iteration: 5`, enforced in plain Python. A re-run on Oct 2 hit the guard on first contact and nothing merged. "The reviewer is a model; the guard is a ruler."

Two more honest details: the first live run's agent report claimed a successful cycle when the log showed a reviewer timeout, and the long-term fix is making the unit of change smaller (append-only blocks) rather than asking the model to do what it can't.

## Why it matters for code review

Overnight factories only compound if their gates hold while nobody is watching. This is a clean receipt that a model reviewer under sustained, unattended load is a cheap second opinion, not the last line of defense. The durable gates are deterministic measurements (deletion caps, tests, small diffs) plus a human at the irreversible step. A commenter pushes it further: apply the cap to the cumulative ticket diff, since several small permitted deletions can still remove a whole section.
