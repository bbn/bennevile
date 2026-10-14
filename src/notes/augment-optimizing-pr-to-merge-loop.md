---
title: "PR-to-merge is the factory bottleneck — specialize the loop"
description: "Aug 13 Augment: generation is cheap; review/verify/repair/decision are the drag. Cosmos Experts (Risk, Deep, Pair, Verifier, Fixer) keep working until a human can merge with evidence — loop engineering, not a better comment bot."
date: 2026-08-13
kind: field-note
source:
  title: "The software factory needs a faster review loop: further optimizing the path from PR to merge"
  url: https://www.augmentcode.com/blog/optimizing-pr-to-merge-loop
project: steward
---

Akshay Utture’s Aug 13 Augment post starts where the tortoise thesis’s merge-side half lives: once agents write code, **review, verification, repair, and human decision-making** become the binding constraint. A standalone AI review bot that posts comments is useful and still a one-step tool. The drag is the chain of human handoffs after the diff exists — reconstruct intent, triage low-risk changes, apply feedback, fix CI and conflicts, exercise behavior end to end, gather evidence, re-review after each push. Their earlier Cosmos review system already claimed ~3× code output with shorter median merge time; this piece expands the same idea into a full **PR-to-merge loop**.

The architecture is specialization, not a smarter generalist. Risk Analyzer classifies and applies auto-approval policy. Deep Reviewer does exhaustive objective-correctness analysis against repo guidance (`AGENTS.md` / `CLAUDE.md`). Pair Reviewer reconstructs intent and flags judgment calls with a human. New pieces: **Verifier** exercises the change in a running environment and returns screenshots, logs, traces; **PR Fixer** owns mechanical follow-up (findings, CI, conflicts) from any PR, human- or agent-authored; a Review Dashboard makes fleet state legible; `cosmos approve` evaluates a configurable policy (ownership, current-head review clear, no contradictory runtime evidence) while **a human still clicks Merge**. None of the Experts merge. Tokens that cut human time in the bottleneck are treated as cost-per-successful-outcome spend, not waste to minimize.

## Why it matters for code review

Burst Claude mastery still dumps unfinished work into the same PR form. Steady harnessed throughput only compounds if the *merge path* keeps working overnight and across volume — repair loops, runtime evidence, and policy checks that do not wait for a hero session. FOMO when agents aren’t working on your behalf is real; the counterfeit version is FOMO for more generation while the review loop stays serial and human-only. Measure whether your factory owns the path to a verified, understood, merge-ready change — not time-to-first-comment on an unread flood.
