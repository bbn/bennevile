---
title: "Blind repair loops damage clean code"
description: "Sep 9 arXiv note: iterative LLM bug-fixers invent bugs in correct programs faster than they heal real ones, then oscillate forever — a stopping-condition problem for review-time APR."
date: 2026-09-09
kind: paper
source:
  title: "If It's Not Buggy, Don't Fix It: On the Dynamics of Iterative Bug-Fixing with LLMs"
  url: https://arxiv.org/abs/2609.10123
project: steward
---

Automated program repair is sneaking into review workflows as “the bot will just fix it.” This short report (Wang-Lin, Isopoussu, and Mahon) stress-tests that habit under *blind iterative* use: feed an LLM a program, let it keep “fixing,” and watch what happens across models and repair environments.

The punchline is asymmetric and ugly. Models consistently claim bugs in *entirely bug-free* programs, and the rate at which they damage correct code exceeds the rate at which they repair buggy code. Run long enough and you often land in a *pseudo-bug-fixing cycle* — the same edit added, then removed, forever — because the goal (“make it not buggy”) stays ambiguous while the model keeps finding something to touch. Mechanistic probing points at a steering vector for edit propensity: an internal “this looks buggy” direction that fires even when nothing is wrong.

## Why it matters for code review

Review-time repair without an oracle is a liability amplifier. If the fixer can invent defects and thrash, “AI addressed the comments” is not evidence — you need an external stop condition (tests, invariants, human accept/reject) that the repair loop cannot redefine. Maker-checker splits only help if the checker’s job includes *declining to edit*.
