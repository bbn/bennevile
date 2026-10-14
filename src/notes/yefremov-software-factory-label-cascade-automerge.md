---
title: "Label-cascade software factory: plan → CI → review → squash without a happy-path human"
description: "Yefremov’s fork-and-own software-factory: four Claude roles on a GitHub label state machine, bounded retries, CI gate, auto-merger with guardrails — continuous verified throughput as a template."
date: 2026-05-30
kind: field-note
source:
  title: "software-factory — Spec-first, agent-built, autonomously-merging template"
  url: https://github.com/dmitriy-yefremov/software-factory
project: steward
---

[dmitriy-yefremov/software-factory](https://github.com/dmitriy-yefremov/software-factory) is a **fork-and-own template** for a continuous factory: human writes `specs/NNNN-name.md`, opens a PR, labels `state:queued`, and a scheduler drives planner → plan-reviewer → implementer → CI gate → code-reviewer → auto-merger. Every stage is a **label swap**; `REQUEST_CHANGES` and CI-red get bounded retries (up to two per stage); anything that cannot proceed parks at `state:needs-attention`. The happy path squash-merges with no human in the loop — orchestration lives in nine GitHub Actions workflows plus Claude role briefs, not in a single overnight chat session.

The load-bearing idea is separating **product code** from **factory machinery**. You stamp placeholders, wire two GitHub Apps and secrets, rewrite `CLAUDE.md` / principles as the constitution, then file specs; the skeleton stays CI-green on clone so the toolchain is proven before agents touch it. Auto-merge is gated by guardrails after rebase, not by the implementer’s self-report. That is harnessed throughput: modest increments, independent review roles, and a merge queue that only advances when labels and checks agree.

## Why it matters for code review

Continuous factories compound when the merge train is a **state machine with evidence**, not a model that stayed awake. Peak Claude mastery still wins for novel intent and constitution design; overnight and always-on win when each verified stage hardens the next. FOMO that your backlog sat idle while someone else’s label cascade drained specs is the psychological half — answer it with parked `needs-attention` and CI-gated squash, not with an unattended burst onto `main`.
