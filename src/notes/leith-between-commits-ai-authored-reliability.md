---
title: "Between the commits: 14% of AI code-gen events err before commit; 1 in 4–5 responses are inaccurate"
description: "Sep 24 Leith: 21k-LOC wholly Claude-authored tool — 14.3% of generation events introduce errors AI tests catch pre-commit; checkable facts 94.3% accurate; design-fix proposals 79.4%; ~1 in 4–5 responses err."
date: 2026-09-24
kind: paper
source:
  title: "Between the Commits: Process, Error, and Claim Reliability in a Wholly AI-Authored Codebase"
  url: https://arxiv.org/abs/2609.29744
project: steward
---

D. J. Leith’s Sep 24 field study opens a ledger continuous factories cannot see from git alone: the full development history of **Extractor**, a **21,000**-line Python tool (plus a matching test suite) built entirely by Claude AI across **210** commits, **25** sessions, and **678** user instructions — no human-authored code or tests. Session transcripts and AI process artefacts accompany every commit.

Two rates matter for overnight review. Mining pytest FAIL→edit→PASS episodes in the transcripts (mutation testing excluded) finds **14.3%** of code-generation events introduced a real error that the **AI-authored** suite caught before any commit — invisible to commit-based defect studies. Fact-checking **~3,900** response components shows checkable facts at **94.3%** accuracy, mechanism explanations **91.1%**, root-cause diagnoses **89.3%**, and design-fix proposals **79.4%**; overall, roughly **1 in 4–5** interactive responses contain at least one inaccuracy. Development is mostly proactive (**86–90%** of commits), and CLI instruction mix skews toward comprehension, planning, and consultation relative to IDE-chat taxonomies.

## Why it matters for code review

Always-on agents that look green in the morning because the commit history is clean may still have paid a verification tax the night already collected — and still be narrating inaccurate claims to whoever opens the transcript. Review continuous factories the way Leith scores Extractor: demand the session ledger of pre-commit self-corrections, treat chat explanations as a separate reliability surface from green CI, and keep an independent test/acceptance layer that catches the **14%** class before merge. Steady harnessed momentum compounds when the factory’s own suite and morning audit refuse to confuse “committed” with “correct” or “said” with “verified.”
